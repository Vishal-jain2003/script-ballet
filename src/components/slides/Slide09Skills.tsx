import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { CountUp } from "../CountUp";

const bloated = [
  { l: "Component rules", t: 200 },
  { l: "API rules", t: 250 },
  { l: "Testing rules", t: 200 },
  { l: "DB rules", t: 150 },
  { l: "Deploy rules", t: 100 },
];

const tree = [
  { l: ".claude/", indent: 0 },
  { l: "├── CLAUDE.md (lean) — 150 tokens ✓", indent: 1 },
  { l: "└── skills/", indent: 1 },
  { l: "    ├── create-component.md", indent: 2 },
  { l: "    ├── api-endpoint.md", indent: 2 },
  { l: "    ├── database-migration.md", indent: 2 },
  { l: "    └── write-tests.md", indent: 2 },
];

export function Slide09Skills() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-black text-4xl md:text-5xl"
        >
          Skills — <span className="text-gradient">On-Demand</span> Intelligence
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-rose-400/30"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-rose-400" />
              <h3 className="font-display font-bold text-lg">The Bloated CLAUDE.md Problem</h3>
            </div>
            <div className="space-y-2 font-mono text-sm">
              {bloated.map((b, i) => (
                <motion.div
                  key={b.l}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex justify-between text-foreground/80"
                >
                  <span>{b.l}</span>
                  <span className="text-rose-300">{b.t} tokens</span>
                </motion.div>
              ))}
              <div className="border-t border-white/10 my-2" />
              <div className="flex justify-between font-bold">
                <span>TOTAL EVERY TIME</span>
                <span className="text-rose-400">
                  <CountUp to={900} delay={1.2} /> tokens ⚠️
                </span>
              </div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-4 h-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-700"
            />
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass rounded-2xl p-6 border border-emerald-400/30 glow-cyan"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <h3 className="font-display font-bold text-lg">Skills — Load Only What You Need</h3>
            </div>
            <div className="font-mono text-xs space-y-1 mb-4">
              {tree.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="text-foreground/80 whitespace-pre"
                >
                  {t.l}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="space-y-1 text-sm border-t border-white/10 pt-3"
            >
              <div className="text-foreground/80">DB work? <span className="text-[#22d3ee] font-mono">150 + 150 = 300 tokens</span></div>
              <div className="text-muted-foreground line-through text-xs">vs 900 tokens (everything loaded)</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: "spring" }}
              className="mt-3 text-center"
            >
              <CountUp to={67} suffix="%" delay={2} className="text-3xl font-black text-gradient" />
              <span className="text-foreground/80 ml-2">context savings</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-center"
        >
          <span className="inline-block rounded-full glass-strong px-5 py-2 font-mono text-sm text-[#22d3ee]">
            "Use the api-endpoint skill to create /users"
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
