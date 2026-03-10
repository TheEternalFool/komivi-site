"use client";

import { useState } from "react";
import Badge from "@/components/Badge";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const quickPrompts = [
  "Tell me about Komivi’s background",
  "Summarize Komivi’s education",
  "What is Komivi reading?",
  "What projects is Komivi working on?"
];

export default function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi, I can answer questions about Komivi’s background, education, projects, and reading list."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    setLoading(true);
    setInput("");

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });

      if (!res.ok) {
        throw new Error("Chat request failed.");
      }

      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError("Sorry, the assistant is unavailable right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <Badge tone="accent">Assistant</Badge>
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Live</span>
      </div>
      <div className="space-y-3 rounded-2xl border border-border bg-white/70 p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`text-sm ${message.role === "assistant" ? "text-text" : "text-muted"}`}
          >
            <span className="font-semibold">{message.role === "assistant" ? "Assistant" : "You"}:</span>{" "}
            {message.content}
          </div>
        ))}
        {loading && <p className="text-xs text-muted">Thinking...</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
      <form
        className="flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          handleSend(input);
        }}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about projects, education, or reading"
          className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm text-text outline-none focus:border-accent/60"
        />
        <button
          type="submit"
          className="rounded-xl bg-text px-4 py-2 text-sm font-semibold text-background transition hover:translate-y-[-1px]"
          disabled={loading}
        >
          Send
        </button>
      </form>
      <div className="grid gap-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="rounded-xl border border-border px-3 py-2 text-left text-xs text-muted transition hover:border-accent/40 hover:text-text"
            onClick={() => handleSend(prompt)}
            disabled={loading}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
