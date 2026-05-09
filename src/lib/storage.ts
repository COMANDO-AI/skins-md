import type { ChatMessage } from "./openrouter";
import { DEFAULT_MODEL } from "./openrouter";

const KEYS = {
  API_KEY: "skins_api_key",
  ACTIVE_SKIN: "skins_active_skin",
  ACTIVE_MODEL: "skins_active_model",
  CONVERSATION: "skins_conversation",
  CUSTOM_SKINS: "skins_custom_skins",
} as const;

function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage full or unavailable
  }
}

export function getApiKey(): string | null {
  return safeGet(KEYS.API_KEY);
}

export function setApiKey(key: string): void {
  safeSet(KEYS.API_KEY, key);
}

export function clearApiKey(): void {
  try {
    localStorage.removeItem(KEYS.API_KEY);
  } catch {
    // ignore
  }
}

export function getActiveSkin(): string {
  return safeGet(KEYS.ACTIVE_SKIN) ?? "minimal";
}

export function setActiveSkin(slug: string): void {
  safeSet(KEYS.ACTIVE_SKIN, slug);
}

export function getActiveModel(): string {
  return safeGet(KEYS.ACTIVE_MODEL) ?? DEFAULT_MODEL;
}

export function setActiveModel(model: string): void {
  safeSet(KEYS.ACTIVE_MODEL, model);
}

export function getConversation(): ChatMessage[] {
  try {
    const raw = safeGet(KEYS.CONVERSATION);
    if (!raw) return [];
    return JSON.parse(raw) as ChatMessage[];
  } catch {
    return [];
  }
}

export function setConversation(messages: ChatMessage[]): void {
  safeSet(KEYS.CONVERSATION, JSON.stringify(messages));
}

export function clearConversation(): void {
  try {
    localStorage.removeItem(KEYS.CONVERSATION);
  } catch {
    // ignore
  }
}

export function getCustomSkins(): Record<string, string> {
  try {
    const raw = safeGet(KEYS.CUSTOM_SKINS);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

export function saveCustomSkin(slug: string, raw: string): void {
  const skins = getCustomSkins();
  skins[slug] = raw;
  safeSet(KEYS.CUSTOM_SKINS, JSON.stringify(skins));
}

export function exportConversation(messages: ChatMessage[], model: string): void {
  const payload = {
    exported_at: new Date().toISOString(),
    model,
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
      timestamp: m.timestamp,
    })),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `skins-md-conversation-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
