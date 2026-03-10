import Badge from "@/components/Badge";

const prompts = [
  "Ask about my projects",
  "Ask about my background",
  "Ask what I’m reading",
  "Ask about my research interests"
];

export default function AssistantPanel() {
  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <Badge tone="accent">Assistant</Badge>
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted">AI Panel</span>
      </div>
      <div className="rounded-2xl border border-border bg-white/70 p-4">
        <p className="text-sm text-text">How can I help?</p>
        <p className="mt-2 text-xs text-muted">
          Placeholder: connect this panel to a real assistant in a future phase.
        </p>
      </div>
      <div className="grid gap-3">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="w-full rounded-xl border border-border px-3 py-2 text-left text-xs text-muted transition hover:border-accent/40 hover:text-text"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
