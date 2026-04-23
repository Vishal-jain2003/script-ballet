import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Particles } from "../Background";

const pills = [
  "Copilot Chat",
  "Coding Agent",
  "MCP Tools",
  "copilot-setup-steps.yml",
  "Skills & Hooks",
  "CLI / VS Code",
];

const terminalLines = [
  { text: '$ gh copilot suggest "add JWT auth to Express API"', color: "text-[#22d3ee]" },
  { text: "✓ Reading codebase...", color: "text-[#a855f7]" },
  { text: "✓ Planning: 4 files to modify", color: "text-[#a855f7]" },
  { text: "✓ Executing with MCP tools...", color: "text-[#a855f7]" },
  { text: "✓ Tests passing (12/12)", color: "text-emerald-400" },
  { text: "✓ PR created: feat/jwt-auth", color: "text-emerald-400" },
];

export function SlideGitHubCopilot() {
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
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] glass border-[#22d3ee]/40 text-[#22d3ee] shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] pulse-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            Section 02 · Live Demo
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black tracking-tight leading-[0.95]"
        >
          <span className="block text-gradient text-5xl md:text-7xl lg:text-8xl">
            GitHub Copilot
          </span>
          <span className="block text-gradient text-5xl md:text-7xl lg:text-8xl">
            in Action
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl"
        >
          Your AI pair programmer — now an autonomous agent
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {pills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 + i * 0.12 }}
              className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-5 py-2 text-sm font-bold text-[#a855f7] glow-purple"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        {/* Terminal demo block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.85 }}
          className="glass-strong rounded-2xl p-4 font-mono text-xs text-left w-full max-w-xl"
        >
          <div className="flex items-center gap-1.5 mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ec4899]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#a855f7]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22d3ee]/70" />
          </div>
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 2.0 + i * 0.3 }}
              className={`leading-6 ${line.color}`}
            >
              {line.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.0 }}
          className="italic text-gradient text-xl font-semibold"
        >
          "Configure once. Ship autonomously."
        </motion.p>
      </div>
    </SlideShell>
  );
}
