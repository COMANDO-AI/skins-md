import { useEffect, useMemo, useRef, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { bundledSkins } from './skins';
import { applySkin } from './skinEngine';
import { validateSkin } from './skinParser';
import type { ChatMessage, Skin } from './types';
import { VisualStage } from './VisualStage';

const DEFAULT_MODEL = 'anthropic/claude-sonnet-4-6';
type ProviderMode = 'demo' | 'openrouter' | 'openai' | 'anthropic' | 'chatgpt' | 'claude';

const STORE = {
  key: 'skinsmd.openrouterKey',
  model: 'skinsmd.model',
  messages: 'skinsmd.messages',
  skin: 'skinsmd.activeSkin',
  library: 'skinsmd.importedSkins',
  provider: 'skinsmd.providerMode',
};

const PROVIDERS: { id: ProviderMode; label: string; kicker: string; description: string; available: boolean }[] = [
  { id: 'demo', label: 'Try demo', kicker: 'No key', description: 'Scripted streaming replies so anyone can feel the skins immediately.', available: true },
  { id: 'openrouter', label: 'OpenRouter', kicker: 'Live BYOK', description: 'Use one API key for many models. Stored only in this browser.', available: true },
  { id: 'openai', label: 'OpenAI API', kicker: 'API key', description: 'For developer API keys. Direct browser connection needs a tiny proxy before live use.', available: false },
  { id: 'anthropic', label: 'Anthropic API', kicker: 'API key', description: 'For Claude API keys. Direct browser connection needs a tiny proxy before live use.', available: false },
  { id: 'chatgpt', label: 'ChatGPT account', kicker: 'Copy workflow', description: 'Use SKINS.MD as a promptable workspace companion for ChatGPT subscriptions.', available: true },
  { id: 'claude', label: 'Claude account', kicker: 'Copy workflow', description: 'Use SKINS.MD as a skin/persona prompt companion for Claude subscriptions.', available: true },
];

const QUICK_PROMPTS = [
  'Give me a 20 minute study plan for a difficult topic.',
  'Turn my messy priorities into an executive briefing.',
  'Explain this like an encouraging anime tutor.',
  'Convert my next task into a fantasy quest log.',
];

marked.use({
  async: false,
  renderer: {
    code(token) {
      const lang = token.lang && hljs.getLanguage(token.lang) ? token.lang : 'plaintext';
      const highlighted = hljs.highlight(token.text, { language: lang }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    }
  }
});

function uid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }
function loadJson<T>(key: string, fallback: T): T { try { return JSON.parse(localStorage.getItem(key) || '') as T; } catch { return fallback; } }
function saveJson(key: string, value: unknown) { localStorage.setItem(key, JSON.stringify(value)); }

function OnboardingHero({ skin, skins, onChoose }: { skin: Skin; skins: Skin[]; onChoose: (id: string) => void }) {
  const featured = skins.slice(0, 8);
  return <section className="onboarding-hero" aria-label="Skin preview onboarding">
    <div className="hero-copy">
      <span className="eyebrow">Portable AI interface skins</span>
      <h2>Same assistant. Completely different room.</h2>
      <p>SKINS.MD turns a plain chat window into a shareable mood, tutor, operator console, or fantasy companion — before you ever connect a live model.</p>
    </div>
    <div className="before-after" aria-label="Before and after skin comparison">
      <div className="before-card">
        <span>Before</span>
        <strong>Generic chatbot</strong>
        <p>White box, fixed tone, no atmosphere.</p>
      </div>
      <div className="after-card">
        <span>After</span>
        <strong>{skin.metadata.name}</strong>
        <p>{skin.metadata.description}</p>
      </div>
    </div>
    <div className="consumer-gallery" aria-label="Mini skin gallery">
      {featured.map((item) => <button key={item.id} onClick={() => onChoose(item.id)} className={item.id === skin.id ? 'selected' : ''}>
        <i style={{ background: item.palette.accent }} />
        <span>{item.metadata.name}</span>
      </button>)}
    </div>
  </section>;
}

function skinDemoReply(skin: Skin, prompt: string) {
  const name = skin.metadata.name;
  if (/executive|brief|priorit/i.test(prompt + name)) return `## Executive brief\n\n**Signal:** ${prompt}\n\n- **Decision frame:** choose the move that reduces ambiguity fastest.\n- **Next action:** write the smallest testable version, then review the result.\n- **Risk:** polishing before the user can feel the product.\n\n\`Skin active: ${name}\``;
  if (/anime|tutor|explain/i.test(prompt + name)) return `## Tutor arc unlocked ✦\n\nLet's make it simple:\n\n1. **Name the monster** — what is confusing?\n2. **Break the move down** — one concept at a time.\n3. **Win a tiny battle** — answer one practice question.\n\nYou asked: _${prompt}_\n\nI would start with a colorful example, then check if it clicked.`;
  if (/fantasy|quest|task/i.test(prompt + name)) return `## Quest log\n\n**Quest:** ${prompt}\n\n- **Objective:** reach the next visible checkpoint.\n- **Inventory:** context, constraint, first draft.\n- **Mentor note:** do not fight the whole dragon today — mark the map and take the first gate.\n\n**Reward:** momentum + a clearer path.`;
  if (/study|cozy|plan/i.test(prompt + name)) return `## Cozy study plan\n\nFor: **${prompt}**\n\n- 5 min — open the notes and list what feels hard.\n- 10 min — explain one idea out loud in plain words.\n- 5 min — write a tiny recap and one follow-up question.\n\nI'll keep the room quiet while you work.`;
  return `# Demo response\n\nThis is a no-key streaming preview. The active skin is **${name}**, so the interface changes mood before you connect any live model.\n\nTry switching skins, then send one of the prompt chips below.\n\n\`No API key required.\``;
}

async function streamDemoReply(skin: Skin, prompt: string, onDelta: (delta: string) => void) {
  const text = skinDemoReply(skin, prompt);
  const chunks = text.match(/.{1,18}(\s|$)/g) ?? [text];
  for (const chunk of chunks) {
    await new Promise((resolve) => setTimeout(resolve, 18));
    onDelta(chunk);
  }
}

function accountBridgePrompt(skin: Skin, provider: 'chatgpt' | 'claude') {
  return `Use this as a SKINS.MD companion prompt in ${provider === 'chatgpt' ? 'ChatGPT' : 'Claude'}:\n\nYou are adopting the interface skin "${skin.metadata.name}".\nMood: ${skin.metadata.description}\nVoice: send label "${skin.voice.send_label}", thinking style "${skin.voice.thinking_label}".\nYour replies should match this skin's emotional register while staying useful, concise, and practical.\nWhen I paste a task, respond as if you are operating inside that skin.`;
}

function ConnectionChooser({ provider, setProvider, skin, apiKey, keyDraft, setKeyDraft, commitKey }: {
  provider: ProviderMode;
  setProvider: (provider: ProviderMode) => void;
  skin: Skin;
  apiKey: string;
  keyDraft: string;
  setKeyDraft: (value: string) => void;
  commitKey: () => void;
}) {
  const selected = PROVIDERS.find((item) => item.id === provider) ?? PROVIDERS[0];
  const bridgePrompt = provider === 'chatgpt' || provider === 'claude' ? accountBridgePrompt(skin, provider) : '';
  const copyBridge = async () => { if (bridgePrompt) await navigator.clipboard?.writeText(bridgePrompt); };
  return <section className="connection-box">
    <div className="section-title">Connect</div>
    <div className="provider-grid">
      {PROVIDERS.map((item) => <button key={item.id} className={`provider-card ${item.id === provider ? 'active' : ''}`} onClick={() => setProvider(item.id)}>
        <span>{item.kicker}</span>
        <strong>{item.label}</strong>
        {!item.available && <em>Needs proxy</em>}
      </button>)}
    </div>
    <p className="provider-description">{selected.description}</p>
    {provider === 'demo' && <div className="demo-note"><strong>Fastest path:</strong> type anything or tap a prompt chip. Demo mode streams locally and never calls a model.</div>}
    {provider === 'openrouter' && <div className="keybox inline-keybox">
      <label>OpenRouter key</label>
      <div className="keyrow"><input type="password" value={keyDraft} onChange={(e) => setKeyDraft(e.target.value)} placeholder="sk-or-v1-..." /><button onClick={commitKey}>{apiKey ? 'Update' : 'Save'}</button></div>
      <small>{apiKey ? 'Saved in localStorage. Never sent to a SKINS.MD server.' : 'Add a key only when you want live model calls.'}</small>
    </div>}
    {(provider === 'openai' || provider === 'anthropic') && <div className="demo-note"><strong>Next live path:</strong> developer API keys need a small server/proxy for CORS and key safety. For now, use demo mode or OpenRouter.</div>}
    {(provider === 'chatgpt' || provider === 'claude') && <div className="bridge-card">
      <strong>{selected.label} workflow</strong>
      <p>Normal ChatGPT/Claude subscriptions do not expose a direct app API. Copy this skin prompt into your account, or keep playing here in demo mode.</p>
      <textarea readOnly value={bridgePrompt} />
      <button onClick={copyBridge}>Copy companion prompt</button>
    </div>}
  </section>;
}

async function streamOpenRouter(apiKey: string, model: string, messages: ChatMessage[], onDelta: (delta: string) => void) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'SKINS.MD',
    },
    body: JSON.stringify({
      model,
      stream: true,
      messages: messages.map(({ role, content }) => ({ role, content })),
    }),
  });
  if (!res.ok || !res.body) throw new Error(`OpenRouter error ${res.status}: ${await res.text()}`);
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const data = trimmed.slice(5).trim();
      if (data === '[DONE]') return;
      try {
        const json = JSON.parse(data);
        const delta = json.choices?.[0]?.delta?.content ?? '';
        if (delta) onDelta(delta);
      } catch {}
    }
  }
}

export default function App() {
  const importedInitial = useMemo(() => loadJson<Skin[]>(STORE.library, []), []);
  const [imported, setImported] = useState<Skin[]>(importedInitial);
  const skins = useMemo(() => [...bundledSkins, ...imported], [imported]);
  const [activeId, setActiveId] = useState(localStorage.getItem(STORE.skin) || bundledSkins[0].id);
  const activeSkin = skins.find((s) => s.id === activeId) || skins[0];
  const [previewSkin, setPreviewSkin] = useState<Skin | null>(null);
  const renderedSkin = previewSkin || activeSkin;
  const [apiKey, setApiKey] = useState(localStorage.getItem(STORE.key) || '');
  const [keyDraft, setKeyDraft] = useState(apiKey);
  const [provider, setProviderState] = useState<ProviderMode>((localStorage.getItem(STORE.provider) as ProviderMode | null) || 'demo');
  const [model, setModel] = useState(localStorage.getItem(STORE.model) || DEFAULT_MODEL);
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadJson(STORE.messages, []));
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [pulse, setPulse] = useState(0);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { applySkin(renderedSkin); }, [renderedSkin]);
  useEffect(() => {
    saveJson(STORE.messages, messages);
    if (messages.length > 0) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  useEffect(() => { localStorage.setItem(STORE.skin, activeSkin.id); }, [activeSkin.id]);
  useEffect(() => { localStorage.setItem(STORE.model, model); }, [model]);

  const setProvider = (next: ProviderMode) => { setProviderState(next); localStorage.setItem(STORE.provider, next); };
  const commitKey = () => { localStorage.setItem(STORE.key, keyDraft.trim()); setApiKey(keyDraft.trim()); };

  const send = async (override?: string) => {
    const text = (override ?? input).trim();
    if (!text || busy) return;
    if (provider === 'openrouter' && !apiKey) { setError('Add an OpenRouter API key first, or switch to Try demo. It is stored only in localStorage.'); return; }
    if (provider === 'openai' || provider === 'anthropic') { setError('Direct OpenAI/Anthropic API mode needs a small proxy before live calls. Use Try demo or OpenRouter for now.'); return; }
    setError('');
    const user: ChatMessage = { id: uid(), role: 'user', content: text, timestamp: new Date().toISOString(), model: provider === 'demo' ? 'skins-md-demo' : model };
    const assistant: ChatMessage = { id: uid(), role: 'assistant', content: '', timestamp: new Date().toISOString(), model: provider === 'demo' ? 'skins-md-demo' : model };
    const next = [...messages, user, assistant];
    setMessages(next);
    setInput('');
    setBusy(true);
    setPulse((p) => p + 1);
    try {
      let full = '';
      const onDelta = (delta: string) => {
        full += delta;
        setMessages((current) => current.map((m) => m.id === assistant.id ? { ...m, content: full } : m));
      };
      if (provider === 'openrouter') await streamOpenRouter(apiKey, model, [...messages, user], onDelta);
      else await streamDemoReply(activeSkin, text, onDelta);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg);
      setMessages((current) => current.map((m) => m.id === assistant.id ? { ...m, content: `**Error:** ${msg}` } : m));
    } finally { setBusy(false); }
  };

  const clear = () => { setMessages([]); localStorage.removeItem(STORE.messages); };
  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ exported_at: new Date().toISOString(), model, skin: activeSkin.metadata.name, messages }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'skins-md-conversation.json'; a.click(); URL.revokeObjectURL(a.href);
  };
  const downloadSkin = () => {
    const blob = new Blob([activeSkin.raw], { type: 'text/markdown' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${activeSkin.id}.SKIN.md`; a.click(); URL.revokeObjectURL(a.href);
  };
  const importSkin = async (file: File) => {
    const raw = await file.text();
    const id = file.name.toLowerCase().replace(/\.skin\.md$|\.md$/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `skin-${uid()}`;
    const result = validateSkin(raw, id);
    if (!result.ok) { setError(`Invalid SKIN.md: ${result.errors.join('; ')}`); return; }
    const next = [...imported.filter((s) => s.id !== id), result.skin];
    setImported(next); saveJson(STORE.library, next); setActiveId(result.skin.id); setError('');
  };

  const thinking = busy ? <span className={`thinking ${activeSkin.atmosphere.thinking_style || 'dots'}`}>{activeSkin.voice.thinking_label}</span> : null;

  return <div className="app-shell">
    <VisualStage skin={renderedSkin} pulse={pulse} />
    <aside className="sidebar">
      <div className="brand"><span className="avatar">{activeSkin.persona?.avatar || '◆'}</span><div><strong>{activeSkin.persona?.sidebar_name || 'SKINS.MD'}</strong><small>{activeSkin.persona?.status || 'Every model. Your skin.'}</small></div></div>
      <ConnectionChooser provider={provider} setProvider={setProvider} skin={activeSkin} apiKey={apiKey} keyDraft={keyDraft} setKeyDraft={setKeyDraft} commitKey={commitKey} />
      {provider === 'openrouter' && <section><label>Model</label><input value={model} onChange={(e) => setModel(e.target.value)} /></section>}
      <section><div className="section-title">Skins</div><div className="skin-grid">{skins.map((skin) => <button key={skin.id} className={`skin-card ${skin.id === activeSkin.id ? 'active' : ''}`} onMouseEnter={() => setPreviewSkin(skin)} onMouseLeave={() => setPreviewSkin(null)} onClick={() => setActiveId(skin.id)}><span className="swatch" style={{ background: skin.palette.accent }} /><strong>{skin.metadata.name}</strong><small>{skin.metadata.tags}</small></button>)}</div></section>
      <div className="actions"><button onClick={() => fileRef.current?.click()}>Import SKIN.md</button><button onClick={downloadSkin}>Download active</button><input ref={fileRef} type="file" accept=".md,.SKIN.md,text/markdown" hidden onChange={(e) => e.target.files?.[0] && importSkin(e.target.files[0])} /></div>
    </aside>
    <main className="chat-panel">
      <header className="topbar"><div><h1>{activeSkin.metadata.name}</h1><p>{activeSkin.metadata.description}</p></div><div className="top-actions"><button onClick={exportJson}>Export JSON</button><button onClick={clear}>{activeSkin.voice.clear_label}</button></div></header>
      {error && <div className="error">{error}</div>}
      <div className="messages" aria-live="polite">
        {messages.length === 0 && <OnboardingHero skin={activeSkin} skins={skins} onChoose={setActiveId} />}
        {messages.length === 0 && <div className="empty"><span>{activeSkin.voice.empty_state}</span></div>}
        {messages.map((m) => <article key={m.id} className={`message ${m.role}`}><div className="role">{m.role}</div><div className="content" dangerouslySetInnerHTML={{ __html: marked.parse(m.content || (m.role === 'assistant' ? activeSkin.voice.thinking_label : '')) as string }} /></article>)}
        <div ref={bottomRef} />
      </div>
      <footer className="composer"><div className="thinkline">{thinking || <span>{provider === 'demo' ? 'Demo mode · no API key required' : provider === 'openrouter' ? 'Live OpenRouter mode' : 'Companion workflow mode'}</span>}</div><div className="prompt-chips">{QUICK_PROMPTS.map((prompt) => <button key={prompt} type="button" onClick={() => send(prompt)}>{prompt}</button>)}</div><textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} placeholder={provider === 'demo' ? `${activeSkin.voice.placeholder} — no key needed` : activeSkin.voice.placeholder} /><button onClick={() => send()} disabled={busy || !input.trim()}>{provider === 'demo' ? 'Try' : activeSkin.voice.send_label}</button></footer>
    </main>
  </div>;
}
