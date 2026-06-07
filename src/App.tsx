import { useEffect, useMemo, useRef, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { bundledSkins } from './skins';
import { applySkin } from './skinEngine';
import { validateSkin } from './skinParser';
import type { ChatMessage, Skin } from './types';
import { VisualStage } from './VisualStage';

const DEFAULT_MODEL = 'anthropic/claude-sonnet-4-6';
const STORE = {
  key: 'skinsmd.openrouterKey',
  model: 'skinsmd.model',
  messages: 'skinsmd.messages',
  skin: 'skinsmd.activeSkin',
  library: 'skinsmd.importedSkins',
};

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
  const [model, setModel] = useState(localStorage.getItem(STORE.model) || DEFAULT_MODEL);
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadJson(STORE.messages, []));
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [pulse, setPulse] = useState(0);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { applySkin(renderedSkin); }, [renderedSkin]);
  useEffect(() => { saveJson(STORE.messages, messages); bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);
  useEffect(() => { localStorage.setItem(STORE.skin, activeSkin.id); }, [activeSkin.id]);
  useEffect(() => { localStorage.setItem(STORE.model, model); }, [model]);

  const commitKey = () => { localStorage.setItem(STORE.key, keyDraft.trim()); setApiKey(keyDraft.trim()); };

  const send = async () => {
    if (!input.trim() || busy) return;
    if (!apiKey) { setError('Add an OpenRouter API key first. It is stored only in localStorage.'); return; }
    setError('');
    const user: ChatMessage = { id: uid(), role: 'user', content: input.trim(), timestamp: new Date().toISOString(), model };
    const assistant: ChatMessage = { id: uid(), role: 'assistant', content: '', timestamp: new Date().toISOString(), model };
    const next = [...messages, user, assistant];
    setMessages(next);
    setInput('');
    setBusy(true);
    setPulse((p) => p + 1);
    try {
      let full = '';
      await streamOpenRouter(apiKey, model, [...messages, user], (delta) => {
        full += delta;
        setMessages((current) => current.map((m) => m.id === assistant.id ? { ...m, content: full } : m));
      });
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
      <section className="keybox">
        <label>OpenRouter key</label>
        <div className="keyrow"><input type="password" value={keyDraft} onChange={(e) => setKeyDraft(e.target.value)} placeholder="sk-or-v1-..." /><button onClick={commitKey}>{apiKey ? 'Update' : 'Save'}</button></div>
        <small>{apiKey ? 'Saved in localStorage. Never sent to a SKINS.MD server.' : 'First visit: add your key to chat.'}</small>
      </section>
      <section><label>Model</label><input value={model} onChange={(e) => setModel(e.target.value)} /></section>
      <section><div className="section-title">Skins</div><div className="skin-grid">{skins.map((skin) => <button key={skin.id} className={`skin-card ${skin.id === activeSkin.id ? 'active' : ''}`} onMouseEnter={() => setPreviewSkin(skin)} onMouseLeave={() => setPreviewSkin(null)} onClick={() => setActiveId(skin.id)}><span className="swatch" style={{ background: skin.palette.accent }} /><strong>{skin.metadata.name}</strong><small>{skin.metadata.tags}</small></button>)}</div></section>
      <div className="actions"><button onClick={() => fileRef.current?.click()}>Import SKIN.md</button><button onClick={downloadSkin}>Download active</button><input ref={fileRef} type="file" accept=".md,.SKIN.md,text/markdown" hidden onChange={(e) => e.target.files?.[0] && importSkin(e.target.files[0])} /></div>
    </aside>
    <main className="chat-panel">
      <header className="topbar"><div><h1>{activeSkin.metadata.name}</h1><p>{activeSkin.metadata.description}</p></div><div className="top-actions"><button onClick={exportJson}>Export JSON</button><button onClick={clear}>{activeSkin.voice.clear_label}</button></div></header>
      {error && <div className="error">{error}</div>}
      <div className="messages" aria-live="polite">
        {messages.length === 0 && <div className="empty"><span>{activeSkin.voice.empty_state}</span></div>}
        {messages.map((m) => <article key={m.id} className={`message ${m.role}`}><div className="role">{m.role}</div><div className="content" dangerouslySetInnerHTML={{ __html: marked.parse(m.content || (m.role === 'assistant' ? activeSkin.voice.thinking_label : '')) as string }} /></article>)}
        <div ref={bottomRef} />
      </div>
      <footer className="composer"><div className="thinkline">{thinking}</div><textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} placeholder={activeSkin.voice.placeholder} /><button onClick={send} disabled={busy || !input.trim()}>{activeSkin.voice.send_label}</button></footer>
    </main>
  </div>;
}
