"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type { ChatMessage } from "@/lib/openrouter";

interface Props {
  message: ChatMessage;
}

export default function Message({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className="max-w-[80%] px-4 py-3 rounded-[var(--radius)] text-sm leading-relaxed"
        style={{
          background: isUser ? "var(--msg-user-bg)" : "var(--msg-assistant-bg)",
          color: isUser ? "var(--msg-user-fg)" : "var(--msg-assistant-fg)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--size-base)",
          lineHeight: "var(--line-height)",
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
