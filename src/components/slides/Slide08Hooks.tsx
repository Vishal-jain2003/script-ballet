import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const flow = [
  { node: "PreToolUse", label: "RUNS BEFORE", sub: "(validate/block)" },
  { node: "TOOL EXECUTES", label: "", sub: "", center: true },
  { node: "PostToolUse", label: "RUNS AFTER", sub: "(format/test/notify)" },
  { node: "Stop", label: "TASK COMPLETE", sub: "(summarize/commit/alert)" },
];

const recipes = [
  {
    icon: "🎨",
    title: "Auto-Format",
    code: '"Write|Edit" → prettier --write',
    outcome: "Agent writes → Prettier fixes instantly",
  },
  {
    icon: "🧪",
    title: "Auto-Test",
    code: '"Write|Edit" → npm test --bail',
    outcome: "Instant feedback on every change",
  },
  {
    icon: "🛡️",
    title: "Block Danger",
    code: '"rm -rf|DROP" → exit 1',
    outcome: "Agent CANNOT run destructive commands",
  },
  {
    icon: "🔔",
    title: "Notify Done",
    code: "Stop → desktop notification",
    outcome: "You get pinged when long tasks finish",
  },
];

export function Slide08Hooks() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl md:text-5xl"
          >
            Hooks — Your Agent's <span className="text-gradient">Autopilot</span> Rules
          </motion.h2>
          <p className="mt-2 text-muted-foreground italic">Like Git hooks, but for AI actions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Flow diagram */}
          <div className="space-y-3">
            {flow.map((f, i) => (
              <div key={f.node} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.25 }}
                  className={`w-full max-w-md rounded-xl p-4 text-center ${
                    f.center
                      ? "glass-strong glow-purple pulse-glow"
                      : "glass"
                  }`}
                >
                  <div className={`font-mono font-bold ${f.center ? "text-gradient text-lg" : "text-base"}`}>
                    {f.node}
                  </div>
                  {f.label && (
                    <div className="text-xs text-[#22d3ee] mt-1 tracking-widest">{f.label}</div>
                  )}
                  {f.sub && (
                    <div className="text-xs text-muted-foreground mt-1">{f.sub}</div>
                  )}
                </motion.div>
                {i < flow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 16 }}
                    transition={{ delay: 0.55 + i * 0.25 }}
                    className="w-px bg-gradient-to-b from-[#a855f7] to-[#ec4899]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Recipes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
            {recipes.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-4 float-y"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{r.icon}</span>
                  <span className="font-display font-bold text-sm">{r.title}</span>
                </div>
                <code className="block font-mono text-xs bg-black/30 rounded px-2 py-1.5 text-[#c084fc] mb-2">
                  {r.code}
                </code>
                <div className="text-xs text-muted-foreground">{r.outcome}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center font-display italic text-xl md:text-2xl text-gradient font-bold"
        >
          "Set it once. Your agent enforces your standards forever."
        </motion.p>
      </div>
    </SlideShell>
  );
}
