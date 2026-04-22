import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Wrench, Eye, Goal, Sparkles, Terminal } from "lucide-react";
import { SlideShell } from "../SlideShell";

const wrappers = ["Copilot", "Claude Code", "Cursor", "Cline", "Aider", "Codex CLI"];

const nodes = [
  {
    icon: Brain,
    label: "THINK",
    color: "text-[#a855f7]",
    edge: "from-[#a855f7]/70 to-[#22d3ee]/60",
    line: "Reading goals, constraints, and project context",
  },
  {
    icon: Wrench,
    label: "ACT",
    color: "text-[#22d3ee]",
    edge: "from-[#22d3ee]/70 to-[#ec4899]/60",
    line: "Running tools, editing files, and validating outputs",
  },
  {
    icon: Eye,
    label: "OBSERVE",
    color: "text-[#ec4899]",
    edge: "from-[#ec4899]/70 to-[#a855f7]/60",
    line: "Checking results, errors, and user feedback",
  },
];

export function Slide04Core() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % nodes.length);
    }, 1700);
    return () => window.clearInterval(id);
  }, []);

  const traceLines = useMemo(() => {
    const base = [
      "Goal received: build a safer deploy flow",
      "Scan repository + existing scripts",
      "Draft implementation strategy",
      "Execute file updates",
      "Run checks and review output",
      "Summarize changes for developer",
    ];

    if (active === 0) return [base[0], base[1], base[2]];
    if (active === 1) return [base[2], base[3], "Calling tool: run tests + lint"]; 
    return [base[4], base[5], "Looping back with better context"]; 
  }, [active]);

  return (
    <SlideShell>
      <div className="flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-4xl md:text-5xl">
            Every Agent. <span className="text-gradient">Same Core Architecture.</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            This is how agents actually operate in real time: think, act, observe, then iterate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="glass-strong rounded-2xl px-8 py-5 glow-purple pulse-glow"
        >
          <div className="font-mono text-sm md:text-lg font-bold tracking-wide">
            <span className="text-[#22d3ee]">AGENT</span>
            <span className="text-muted-foreground"> = </span>
            <span className="text-gradient">LLM + TOOLS + MEMORY + LOOP</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-xs font-mono uppercase tracking-[0.28em] text-[#22d3ee] flex items-center gap-2"
        >
          <Goal className="h-4 w-4" /> Goal from developer enters the loop
        </motion.div>

        <div className="relative w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {nodes.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.25 }}
                className={`relative overflow-hidden rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-500 ${
                  active === i
                    ? "glass-strong scale-[1.03] shadow-[0_0_55px_-15px_rgba(168,85,247,0.75)]"
                    : "glass opacity-85"
                }`}
              >
                <motion.div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${n.edge}`}
                  animate={{ opacity: active === i ? [0.35, 1, 0.35] : 0.2 }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <n.icon className={`h-8 w-8 ${n.color}`} />
                <div className="font-display font-bold text-lg">{n.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{n.line}</div>

                {active === i && (
                  <motion.div
                    layoutId="active-node-indicator"
                    className="absolute -inset-[1px] rounded-2xl border border-white/25"
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
            className="mt-4 hidden md:flex justify-around text-[#a855f7] font-mono text-2xl"
          >
            <motion.span
              animate={{ x: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              →
            </motion.span>
            <motion.span
              animate={{ x: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
            >
              →
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 18, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
            >
              ↺
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.1 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="glass-strong rounded-2xl p-5 text-left">
              <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                <Terminal className="h-4 w-4 text-[#22d3ee]" /> Live Agent Trace
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.35 }}
                  className="space-y-2"
                >
                  {traceLines.map((line) => (
                    <div key={line} className="font-mono text-xs text-foreground/90 flex items-start gap-2">
                      <span className="text-[#22d3ee]">$</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="glass rounded-2xl p-5 text-left">
              <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                <Sparkles className="h-4 w-4 text-[#f472b6]" /> Current Loop Phase
              </div>
              <div className="relative h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#ec4899]"
                  animate={{ width: `${((active + 1) / nodes.length) * 100}%` }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
              <div className="font-display text-lg font-bold text-gradient">{nodes[active].label}</div>
              <p className="text-sm text-muted-foreground mt-1">{nodes[active].line}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="space-y-3"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {wrappers.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + i * 0.08 }}
                className="rounded-full glass px-4 py-1.5 text-sm font-medium text-foreground/80"
              >
                {w}
              </motion.span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">
            Same intelligence loop. Different wrappers.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
