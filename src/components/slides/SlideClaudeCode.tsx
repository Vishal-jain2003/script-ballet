import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Particles } from "../Background";

const pills = ["CLAUDE.md", "MCP Servers", "Hooks & Skills", "Permissions", "Agentic SDLC", "Multi-Agent"];

const terminalLines = [
  { prompt: true,  text: '$ claude "implement user authentication with tests"' },
  { prompt: false, text: "◆ Reading CLAUDE.md & project context...", highlight: "context" },
  { prompt: false, text: "◆ Using MCP: git, playwright, jira",         highlight: "value" },
  { prompt: false, text: "◆ Invoking skill: api-endpoint + write-tests", highlight: "value" },
  { prompt: false, text: "◆ Pre-hook: lint check passed",               highlight: "context" },
  { prompt: false, text: "◆ 6 files modified · 18 tests passing",       highlight: "value" },
  { prompt: false, text: "◆ Post-hook: formatted · PR ready",           highlight: "value" },
];

function TerminalLine({ line, index }: { line: (typeof terminalLines)[number]; index: number }) {
  if (line.prompt) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 1.8 + index * 0.18 }}
        className="text-white font-semibold"
      >
        {line.text}
      </motion.div>
    );
  }

  const [diamond, ...rest] = line.text.split(" ");
  const body = rest.join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: 1.8 + index * 0.18 }}
      className="flex gap-1.5"
    >
      <span className="text-[#c084fc]">{diamond}</span>
      <span className={line.highlight === "value" ? "text-[#22d3ee]" : "text-white/70"}>{body}</span>
    </motion.div>
  );
}

export function SlideClaudeCode() {
  return (
    <SlideShell intense>
      <Particles count={60} />
      <div className="relative z-10 flex flex-col items-center text-center gap-6">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] glass border-purple-400/40 text-purple-300 shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)] pulse-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            Section 03 · Live Demo
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient block">Claude Code</span>
          <span className="text-gradient block">in Action</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl"
        >
          Terminal-native agentic AI — reads, edits, runs, ships
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {pills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 1.05 + i * 0.1 }}
              className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-4 py-1.5 text-sm font-bold text-[#a855f7] glow-purple"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        {/* Terminal demo block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="w-full max-w-2xl glass-strong rounded-2xl p-4 font-mono text-xs text-left space-y-1.5"
        >
          {terminalLines.map((line, i) => (
            <TerminalLine key={i} line={line} index={i} />
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="text-xl italic text-gradient font-semibold"
        >
          "One command. End-to-end execution."
        </motion.p>

      </div>
    </SlideShell>
  );
}
