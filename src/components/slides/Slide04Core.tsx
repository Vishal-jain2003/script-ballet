import { motion } from "framer-motion";
import { Brain, Wrench, Eye } from "lucide-react";
import { SlideShell } from "../SlideShell";

const wrappers = ["Copilot", "Claude Code", "Cursor", "Cline", "Aider", "Codex CLI"];

const nodes = [
  { icon: Brain, label: "THINK", color: "text-[#a855f7]" },
  { icon: Wrench, label: "ACT", color: "text-[#22d3ee]" },
  { icon: Eye, label: "OBSERVE", color: "text-[#ec4899]" },
];

export function Slide04Core() {
  return (
    <SlideShell>
      <div className="flex flex-col items-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-4xl md:text-5xl">
            Every Agent. <span className="text-gradient">Same Core Architecture.</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Whether it's Copilot, Claude Code, Cursor, or Aider — this loop is universal.
          </p>
        </motion.div>

        {/* Center hex card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="glass-strong rounded-2xl px-10 py-6 glow-purple pulse-glow"
        >
          <div className="font-mono text-base md:text-xl font-bold tracking-wide">
            <span className="text-[#22d3ee]">AGENT</span>
            <span className="text-muted-foreground"> = </span>
            <span className="text-gradient">LLM + TOOLS + MEMORY + LOOP</span>
          </div>
        </motion.div>

        {/* Goal floats in */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-[#22d3ee]"
        >
          ↓ Goal (from developer)
        </motion.div>

        {/* Loop */}
        <div className="relative w-full max-w-3xl">
          <div className="grid grid-cols-3 gap-6">
            {nodes.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.25 }}
                className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform"
              >
                <n.icon className={`h-8 w-8 ${n.color}`} />
                <div className="font-display font-bold text-lg">{n.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Animated arrow indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-4 flex justify-around text-[#a855f7] font-mono text-2xl"
          >
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            >
              →
            </motion.span>
            <motion.span
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
            >
              ↺
            </motion.span>
          </motion.div>
        </div>

        {/* Wrapper pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="space-y-3 mt-4"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {wrappers.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.3 + i * 0.08 }}
                className="rounded-full glass px-4 py-1.5 text-sm font-medium text-foreground/80"
              >
                {w}
              </motion.span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">
            Same loop. Different wrappers.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
