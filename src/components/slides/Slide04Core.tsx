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

const loopEdges = [
  {
    id: "goal-think",
    d: "M 180 120 L 180 214",
  },
  {
    id: "think-act",
    d: "M 240 250 L 390 250",
  },
  {
    id: "act-observe",
    d: "M 450 286 L 450 344 L 352 344",
  },
  {
    id: "observe-think",
    d: "M 248 344 L 180 286",
  },
];

const activeEdgeByPhase = ["goal-think", "think-act", "act-observe"];

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

  const activeEdgeId = activeEdgeByPhase[active];

  return (
    <SlideShell>
      <div className="flex flex-col items-center gap-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-3xl md:text-4xl">
            Every Agent. <span className="text-gradient">Same Core Architecture.</span>
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            This is how agents actually operate in real time: think, act, observe, then iterate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="relative w-full max-w-4xl"
        >
          <div className="glass-strong relative overflow-hidden rounded-3xl px-3 py-3 md:px-5 md:py-4">
            <div className="pointer-events-none absolute -left-20 top-12 h-44 w-44 rounded-full bg-[#22d3ee]/12 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-4 h-48 w-48 rounded-full bg-[#a855f7]/12 blur-3xl" />

            <div className="mb-3 text-center font-mono text-[11px] md:text-xs font-bold tracking-wide">
              <span className="text-[#22d3ee]">AGENT</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-gradient">LLM + TOOLS + MEMORY + LOOP</span>
            </div>

            <div className="relative mx-auto w-full max-w-2xl aspect-[3/2] md:aspect-[16/9]">
              <svg viewBox="0 0 640 420" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="edgeGlow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="55%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <marker
                    id="arrowHead"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L0,6 L6,3 z" fill="#b8c4ff" opacity="0.9" />
                  </marker>
                </defs>

                {loopEdges.map((edge) => (
                  <path
                    key={`base-${edge.id}`}
                    d={edge.d}
                    stroke="rgba(255,255,255,0.20)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    markerEnd="url(#arrowHead)"
                  />
                ))}

                {loopEdges.map((edge) => (
                  <motion.path
                    key={`active-${edge.id}`}
                    d={edge.d}
                    stroke="url(#edgeGlow)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    markerEnd="url(#arrowHead)"
                    initial={{ pathLength: 0, opacity: 0.15 }}
                    animate={{
                      pathLength: edge.id === activeEdgeId || (active === 2 && edge.id === "observe-think") ? [0, 1] : 1,
                      opacity: edge.id === activeEdgeId || (active === 2 && edge.id === "observe-think") ? [0.22, 1, 0.22] : 0.18,
                    }}
                    transition={{ duration: 1.25, repeat: Infinity, ease: "linear" }}
                  />
                ))}

                <motion.circle
                  r="7"
                  fill="#22d3ee"
                  filter="drop-shadow(0 0 8px rgba(34,211,238,0.9))"
                  initial={{ cx: 180, cy: 120 }}
                  animate={{
                    cx: [180, 180, 240, 390, 450, 450, 352, 248, 180],
                    cy: [120, 214, 250, 250, 286, 344, 344, 344, 286],
                  }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute left-[28.125%] top-[22%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-black/45 px-4 py-2 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#22d3ee] font-mono">
                  <Goal className="h-3.5 w-3.5" /> Goal
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">from developer</p>
              </motion.div>

              {nodes.map((node, i) => {
                const position =
                  i === 0
                    ? "left-[28.125%] top-[59.5%]"
                    : i === 1
                      ? "left-[65.625%] top-[59.5%]"
                      : "left-[46.875%] top-[81.9%]";

                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 1.25 + i * 0.14 }}
                    className={`absolute ${position} -translate-x-1/2 -translate-y-1/2 w-[132px] md:w-[156px] rounded-2xl p-2.5 md:p-3 text-center transition-all duration-500 ${
                      active === i
                        ? "glass-strong shadow-[0_0_40px_-16px_rgba(168,85,247,0.85)]"
                        : "glass"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <node.icon className={`h-4.5 w-4.5 ${node.color}`} />
                      <div className="font-display text-sm md:text-base font-bold">{node.label}</div>
                    </div>
                    <div className="mt-1 text-[10px] md:text-[11px] text-muted-foreground leading-relaxed">{node.line}</div>
                    {active === i && (
                      <motion.div
                        layoutId="active-node-indicator"
                        className="absolute -inset-[1px] rounded-2xl border border-white/25"
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.05 }}
              className="mt-1.5 text-center text-[11px] md:text-xs italic text-muted-foreground"
            >
              Repeat until done, then exit with validated output.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.1 }}
            className="mt-2.5 grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <div className="glass-strong rounded-2xl p-4 text-left">
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold mb-2">
                <Terminal className="h-4 w-4 text-[#22d3ee]" /> Live Agent Trace
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.35 }}
                  className="space-y-1.5"
                >
                  {traceLines.map((line) => (
                    <div key={line} className="font-mono text-[11px] text-foreground/90 flex items-start gap-2">
                      <span className="text-[#22d3ee]">$</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="glass rounded-2xl p-4 text-left">
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold mb-2">
                <Sparkles className="h-4 w-4 text-[#f472b6]" /> Current Loop Phase
              </div>
              <div className="relative h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#ec4899]"
                  animate={{ width: `${((active + 1) / nodes.length) * 100}%` }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
              <div className="font-display text-base md:text-lg font-bold text-gradient">{nodes[active].label}</div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{nodes[active].line}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="space-y-2"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {wrappers.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + i * 0.08 }}
                className="rounded-full glass px-3 py-1 text-xs md:text-sm font-medium text-foreground/80"
              >
                {w}
              </motion.span>
            ))}
          </div>
          <p className="text-xs md:text-sm text-muted-foreground italic">
            Same agentic workflow loop across all coding CLIs. Different wrappers.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
