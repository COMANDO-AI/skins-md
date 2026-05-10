"use client";

import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { ChatMessage } from "@/lib/openrouter";
import type { SkinPersona } from "@/lib/skin-parser";

interface Props {
  message: ChatMessage;
  skinPersona?: SkinPersona;
}

export default function Message({ message, skinPersona }: Props) {
  const isUser = message.role === "user";
  const assistantAvatar = !isUser && skinPersona?.assistant_avatar;
  const bubbleRef = useRef<HTMLDivElement>(null);

  // Trigger mount animation — add .msg-entering, remove after longest animation
  useEffect(() => {
    const el = bubbleRef.current;
    if (!el) return;
    el.classList.add("msg-entering");
    const t = setTimeout(() => el.classList.remove("msg-entering"), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4`} style={{ alignItems: "flex-start" }}>
      {assistantAvatar && (
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(0,40,80,0.8)",
            border: "1px solid rgba(0,212,255,0.30)",
            boxShadow: "0 0 10px rgba(0,212,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            flexShrink: 0,
            marginRight: "8px",
            marginTop: "2px",
          }}
        >
          {assistantAvatar}
        </div>
      )}
      <div
        ref={bubbleRef}
        className={`msg-bubble surface-card max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
          isUser ? "msg-bubble-user" : "msg-bubble-assistant prose-skin"
        }`}
        style={{
          borderRadius: "var(--radius-message)",
          background: isUser ? "var(--msg-user-bg)" : "var(--msg-assistant-bg)",
          color: isUser ? "var(--msg-user-fg)" : "var(--msg-assistant-fg)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--size-base)",
          lineHeight: "var(--line-height)",
          borderStyle: "var(--border-style)" as React.CSSProperties["borderStyle"],
        }}
      >
        {isUser ? (
          <span style={{ whiteSpace: "pre-wrap" }}>{message.content}</span>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className ?? "");
                const inline = !match;
                return inline ? (
                  <code
                    className={className}
                    style={{
                      background: "var(--bg)",
                      color: "var(--accent)",
                      padding: "0.1em 0.4em",
                      borderRadius: "var(--radius)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85em",
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                ) : (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      borderRadius: "var(--radius)",
                      fontSize: "0.8em",
                      margin: "0.75em 0",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              },
              p({ children }) {
                return <p style={{ marginBottom: "0.75em" }}>{children}</p>;
              },
              ul({ children }) {
                return <ul style={{ paddingLeft: "1.5em", marginBottom: "0.75em" }}>{children}</ul>;
              },
              ol({ children }) {
                return <ol style={{ paddingLeft: "1.5em", marginBottom: "0.75em" }}>{children}</ol>;
              },
              blockquote({ children }) {
                return (
                  <blockquote
                    style={{
                      borderLeft: "3px solid var(--accent)",
                      paddingLeft: "1em",
                      opacity: 0.8,
                      margin: "0.75em 0",
                    }}
                  >
                    {children}
                  </blockquote>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
