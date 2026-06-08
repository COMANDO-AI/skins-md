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
  { id: 'demo', label: 'Try demo', kicker: 'No key', description: 'No-key demo replies so anyone can test the chat and feel the skins immediately.', available: true },
  { id: 'openrouter', label: 'OpenRouter', kicker: 'Live BYOK', description: 'Use one API key for many models. Stored only in this browser.', available: true },
  { id: 'openai', label: 'OpenAI API', kicker: 'API key', description: 'For developer API keys. Direct browser connection needs a tiny proxy before live use.', available: false },
  { id: 'anthropic', label: 'Anthropic API', kicker: 'API key', description: 'For Claude API keys. Direct browser connection needs a tiny proxy before live use.', available: false },
  { id: 'chatgpt', label: 'ChatGPT account', kicker: 'Copy workflow', description: 'Use SKINS.MD as a promptable workspace companion for ChatGPT subscriptions.', available: true },
  { id: 'claude', label: 'Claude account', kicker: 'Copy workflow', description: 'Use SKINS.MD as a skin/persona prompt companion for Claude subscriptions.', available: true },
];

const QUICK_PROMPTS = [
  'Give me a 20 minute study plan for a difficult topic.',
  'Turn my messy priorities into a trainer quest plan.',
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
      <h2>Choose your own skin for AI.</h2>
      <p>Start in AI Chat mode: aesthetic, persona, mood, and conversation style for any model you bring. Later, turn the same skin into an AI Agent posture.</p>
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
  const asked = prompt.trim();
  const gothic = /gothic|librarian|archive/i.test(name);
  if (/horoscope|zodiac|libra|aries|taurus|gemini|cancer|leo|virgo|scorpio|sagittarius|capricorn|aquarius|pisces/i.test(asked)) {
    return `## ${gothic ? 'Archive reading' : 'Demo reading'}\n\n**Question:** ${asked}\n\n- **Theme for the week:** choose balance over performance. One clear boundary will do more than three dramatic moves.\n- **Work:** finish the thing that has been quietly occupying mental space. Ship the small version.\n- **People:** answer the message you have been postponing, but do not negotiate against yourself.\n- **Ritual:** write the next decision on paper before opening another tab.\n\n_${name} is running in no-key demo mode: useful, skin-flavored, local, and not a live model yet._`;
  }
  if (/pokemon|pokémon|trainer|party|battle|quest plan|move/i.test(asked + name)) return `## Trainer battle plan\n\n**Wild prompt appeared:** ${asked}\n\n- **Choose a move:** name the next tiny action you can finish in one sitting.\n- **Build the party:** keep one research move, one drafting move, and one review move.\n- **Use a potion:** remove one distraction before the timer starts.\n\n**Victory condition:** one visible win, not the whole league today.\n\n\`Skin active: ${name}\``;
  if (/executive|brief|priorit/i.test(asked + name)) return `## Executive brief\n\n**Signal:** ${asked}\n\n- **Decision frame:** choose the move that reduces ambiguity fastest.\n- **Next action:** write the smallest testable version, then review the result.\n- **Risk:** polishing before the user can feel the product.\n\n\`Skin active: ${name}\``;
  if (/anime|tutor|explain/i.test(asked + name)) return `## Tutor arc unlocked ✦\n\nLet's make it simple:\n\n1. **Name the monster** — what is confusing?\n2. **Break the move down** — one concept at a time.\n3. **Win a tiny battle** — answer one practice question.\n\nYou asked: _${asked}_\n\nI would start with a colorful example, then check if it clicked.`;
  if (/fantasy|quest|task/i.test(asked + name)) return `## Quest log\n\n**Quest:** ${asked}\n\n- **Objective:** reach the next visible checkpoint.\n- **Inventory:** context, constraint, first draft.\n- **Mentor note:** do not fight the whole dragon today — mark the map and take the first gate.\n\n**Reward:** momentum + a clearer path.`;
  if (/study|cozy|plan/i.test(asked + name)) return `## Cozy study plan\n\nFor: **${asked}**\n\n- 5 min — open the notes and list what feels hard.\n- 10 min — explain one idea out loud in plain words.\n- 5 min — write a tiny recap and one follow-up question.\n\nI'll keep the room quiet while you work.`;
  if (gothic) return `## Marginal note from the archive\n\nYou asked: **${asked}**\n\n- **What the archive sees:** there is a real question here, not just a test of the UI.\n- **First useful answer:** start with the simplest interpretation, then add one constraint.\n- **Next inscription:** if you want a sharper answer, add the situation, desired outcome, and deadline.\n\n_This is still no-key demo mode: it should respond to your prompt, but it is not a live model until OpenRouter is connected._`;
  return `## No-key demo answer\n\nYou asked: **${asked}**\n\nHere is a useful first pass in the **${name}** skin:\n\n1. Clarify the goal in one sentence.\n2. Pick the smallest next action that would prove progress.\n3. If the answer needs real-time facts or deep reasoning, switch to OpenRouter once the API key is ready.\n\nFor now, this demo should feel like the interface works before any API key is required.`;
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

function ModeSwitch() {
  return <section className="mode-switch" aria-label="AI Chat and Agent modes">
    <div className="mode-card active">
      <span>Mode 01</span>
      <strong>AI Chat skin</strong>
      <p>Current experience: aesthetic, persona, mood, and conversation style for any BYOK model.</p>
    </div>
    <div className="mode-card next">
      <span>Mode 02</span>
      <strong>AI Agent skin</strong>
      <p>Next layer: the same skin guides planning style, permissions, risk posture, and tool use.</p>
    </div>
  </section>;
}

function Win95DesktopShell() {
  const desktopIcons = ['My Prompts', 'Skin Library', 'Provider Key', 'Network'];
  return <div className="win95-desktop-shell" aria-hidden="true">
    <div className="win95-desktop-icons">
      {desktopIcons.map((label, index) => <div className="win95-desktop-icon" key={label}>
        <span className={`win95-pixel-icon icon-${index}`} />
        <em>{label}</em>
      </div>)}
    </div>
    <div className="win95-start-menu">
      <div className="win95-start-brand">SKINS 95</div>
      <div className="win95-start-items">
        {['Programs', 'Prompts', 'Skins', 'Settings', 'Find...', 'Help Topics', 'Run...'].map((item) => <span key={item}>{item}{!item.includes('.') && <b>▸</b>}</span>)}
        <hr />
        <span>Shut Down Assistant...</span>
      </div>
    </div>
    <div className="win95-taskbar">
      <button className="win95-start-button"><i />Start</button>
      <button className="win95-task active"><span className="win95-mini-icon" />Assistant.exe</button>
      <button className="win95-task"><span className="win95-mini-icon doc" />Prompt Library</button>
      <div className="win95-tray"><span>NET</span><span>KEY</span><strong>4:05 PM</strong></div>
    </div>
  </div>;
}

function Win95Header({ skin, exportJson, clear }: { skin: Skin; exportJson: () => void; clear: () => void }) {
  return <header className="topbar win95-app-window">
    <div className="win95-titlebar"><span className="win95-mini-icon" /><strong>Windows 95 Assistant - [AI Chat]</strong><div className="win95-window-buttons"><button aria-label="Minimize">_</button><button aria-label="Maximize">□</button><button aria-label="Close">×</button></div></div>
    <nav className="win95-menubar" aria-label="Windows 95 menu"><span>File</span><span>Edit</span><span>View</span><span>Skin</span><span>Help</span></nav>
    <div className="win95-client-area">
      <div><span className="mode-kicker">C:\\SKINS\\AI_CHAT.EXE</span><h1>{skin.metadata.name}</h1><p>{skin.metadata.description}</p></div>
      <div className="top-actions"><button onClick={exportJson}>Export JSON</button><button onClick={clear}>{skin.voice.clear_label}</button></div>
    </div>
    <div className="win95-statusbar"><span>Ready</span><span>AI Chat skin active</span><span>For Help, press F1</span><i /></div>
  </header>;
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
    {provider === 'demo' && <div className="demo-note"><strong>Fastest path:</strong> type anything or tap a prompt chip. Demo mode answers locally and never calls a model.</div>}
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

  useEffect(() => { applySkin(activeSkin); }, [activeSkin]);
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
  const isWin95 = activeSkin.id === 'windows-95-assistant';

  return <div className={`app-shell ${isWin95 ? 'win95-shell' : ''}`}>
    <VisualStage skin={activeSkin} pulse={pulse} />
    {isWin95 && <Win95DesktopShell />}
    <aside className="sidebar">
      <div className="brand"><span className="avatar">{activeSkin.persona?.avatar || '◆'}</span><div><strong>{activeSkin.persona?.sidebar_name || 'SKINS.MD'}</strong><small>{activeSkin.persona?.status || 'Every model. Your skin.'}</small></div></div>
      <ConnectionChooser provider={provider} setProvider={setProvider} skin={activeSkin} apiKey={apiKey} keyDraft={keyDraft} setKeyDraft={setKeyDraft} commitKey={commitKey} />
      {provider === 'openrouter' && <section><label>Model</label><input value={model} onChange={(e) => setModel(e.target.value)} /></section>}
      <section><div className="section-title">Skins</div><div className="skin-grid">{skins.map((skin) => <button key={skin.id} className={`skin-card ${skin.id === activeSkin.id ? 'active' : ''}`} onClick={() => setActiveId(skin.id)}><span className="swatch" style={{ background: skin.palette.accent }} /><strong>{skin.metadata.name}</strong><small>{skin.metadata.tags}</small></button>)}</div></section>
      <div className="actions"><button onClick={() => fileRef.current?.click()}>Import SKIN.md</button><button onClick={downloadSkin}>Download active</button><input ref={fileRef} type="file" accept=".md,.SKIN.md,text/markdown" hidden onChange={(e) => e.target.files?.[0] && importSkin(e.target.files[0])} /></div>
    </aside>
    <main className="chat-panel">
      {isWin95 ? <Win95Header skin={activeSkin} exportJson={exportJson} clear={clear} /> : <header className="topbar"><div><span className="mode-kicker">AI Chat skin active · Agent mode next</span><h1>{activeSkin.metadata.name}</h1><p>{activeSkin.metadata.description}</p></div><div className="top-actions"><button onClick={exportJson}>Export JSON</button><button onClick={clear}>{activeSkin.voice.clear_label}</button></div></header>}
      <ModeSwitch />
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
