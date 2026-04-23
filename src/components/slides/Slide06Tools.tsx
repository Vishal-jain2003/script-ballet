import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const categories = [
  {
    emoji: "📁",
    name: "File System",
    tools: ["read_file", "write_file", "list_dir", "apply_patch"],
    border: "border-l-cyan-400",
    pillColor: "bg-cyan-950/60 text-cyan-300 border border-cyan-700/40",
  },
  {
    emoji: "💻",
    name: "Terminal",
    tools: ["run_command", "run_in_terminal", "get_errors"],
    border: "border-l-purple-400",
    pillColor: "bg-purple-950/60 text-purple-300 border border-purple-700/40",
  },
  {
    emoji: "🌐",
    name: "Browser / Web",
    tools: ["web_search", "navigate_url", "take_screenshot"],
    border: "border-l-pink-400",
    pillColor: "bg-pink-950/60 text-pink-300 border border-pink-700/40",
  },
  {
    emoji: "🧠",
    name: "Context",
    tools: ["get_diagnostics", "search_symbol", "list_imports"],
    border: "border-l-amber-400",
    pillColor: "bg-amber-950/60 text-amber-300 border border-amber-700/40",
  },
];

const pipelineSteps = [
  {
    icon: "🔍",
    call: 'list_dir("src/auth")',
    result: "→ finds 3 files",
  },
  {
    icon: "📖",
    call: 'read_file("auth/login.test.ts")',
    result: "→ reads 89 lines",
  },
  {
    icon: "🔍",
    call: 'search_symbol("loginHandler")',
    result: "→ found in service.ts:42",
  },
  {
    icon: "✏️",
    call: 'write_file("auth/service.ts")',
    result: "→ patch applied",
  },
  {
    icon: "▶️",
    call: 'run_command("bun test auth")',
    result: "→ ✅ 12/12 passed",
    glow: true,
  },
];

const agentBadges = [
  { label: "Claude Code", sub: "All tools", color: "text-cyan-300 border-cyan-700/50 bg-cyan-950/40" },
  { label: "GitHub Copilot", sub: "Subset", color: "text-purple-300 border-purple-700/50 bg-purple-950/40" },
  { label: "Cursor", sub: "File + Terminal", color: "text-pink-300 border-pink-700/50 bg-pink-950/40" },
  { label: "Windsurf", sub: "File + Terminal", color: "text-amber-300 border-amber-700/50 bg-amber-950/40" },
];

export function Slide06Tools() {
  return (
    <SlideShell>
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-0 top-8 h-44 w-44 rounded-full bg-[#22d3ee]/12 blur-3xl"
          animate={{ x: [0, 26, 0], y: [0, -16, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-4 top-14 h-52 w-52 rounded-full bg-[#a855f7]/14 blur-3xl"
          animate={{ x: [0, -24, 0], y: [0, 20, 0], opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Header */}
        <div className="text-center">
          <motion.h1
            className="font-display text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Tools —{" "}
            <span className="text-gradient">Hands &amp; Eyes</span>
          </motion.h1>
          <motion.p
            className="mt-2 text-muted-foreground text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Every agent action is a tool call under the hood.
          </motion.p>
        </div>

        {/* Two-column body */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT — Tool Categories */}
          <div className="flex flex-col gap-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                className={`glass rounded-xl p-4 border-l-4 ${cat.border}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.4 + i * 0.15, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{cat.emoji}</span>
                  <span className="font-semibold text-sm">{cat.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`font-mono text-xs px-2 py-0.5 rounded-md ${cat.pillColor}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Pipeline */}
          <div className="flex flex-col gap-3">
            <motion.div
              className="glass-strong rounded-xl p-3 text-center"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5 }}
            >
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Goal</span>
              <p className="font-semibold text-sm mt-0.5">
                &ldquo;Fix the broken login test&rdquo;
              </p>
            </motion.div>

            <div className="relative flex flex-col gap-0">
              {/* Vertical connector line */}
              <motion.div
                className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-green-500/40"
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
              />

              {pipelineSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 mb-1.5 ${
                    step.glow
                      ? "glass-strong glow-cyan border border-green-500/30 bg-green-950/20"
                      : "glass"
                  }`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.25, ease: "easeOut" }}
                >
                  <span className="text-base shrink-0 w-7 text-center z-10">{step.icon}</span>
                  <span className="font-mono text-xs text-cyan-300 flex-1 truncate">{step.call}</span>
                  <span
                    className={`font-mono text-xs shrink-0 ${
                      step.glow ? "text-green-400 font-semibold" : "text-green-500/80"
                    }`}
                  >
                    {step.result}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <motion.span
            className="text-xs text-muted-foreground mr-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Tool availability varies by agent:
          </motion.span>
          {agentBadges.map((badge, i) => (
            <motion.span
              key={badge.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${badge.color}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.8 + i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
            >
              <span>{badge.label}</span>
              <span className="opacity-60">·</span>
              <span className="opacity-80">{badge.sub}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
