import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const stages = [
  { num: 0, name: "Classify Ticket Type", gate: false },
  { num: 1, name: "Planning & Specification", gate: true },
  { num: 2, name: "Architecture Design", gate: true },
  { num: 3, name: "Implementation", gate: false },
  { num: 4, name: "Testing (Parallel)", gate: false },
  { num: 5, name: "Quality Gate", gate: false },
  { num: 6, name: "DevOps & CI/CD", gate: true },
  { num: 7, name: "AWS Deployment", gate: false },
  { num: 8, name: "Docs & Reporting", gate: false },
];

export function SlideADLC03Pipeline() {
  return (
    <SlideShell>
      <div className="relative z-10 w-full flex flex-col gap-3">
        {/* Header flow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="glass rounded-full px-4 py-1.5 text-xs font-bold border border-[#22d3ee]/40 text-[#22d3ee]">
            Jira Ticket
          </span>
          <span className="text-[#22d3ee] text-lg">→</span>
          <span className="glass rounded-full px-4 py-1.5 text-xs font-bold border border-[#a855f7]/40 text-[#a855f7]">
            Orchestrator: Claude Sonnet 4.6
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center font-display font-black text-2xl md:text-3xl text-gradient"
        >
          One Input. Full Delivery.
        </motion.h2>

        {/* Stages grid — 2 columns to save vertical space */}
        <div className="grid grid-cols-2 gap-2">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
              className={`flex items-center gap-3 glass rounded-xl px-3 py-2 border ${
                stage.gate ? "border-red-400/30" : "border-emerald-400/20"
              }`}
            >
              <div
                className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${
                  stage.gate ? "bg-red-500/20 text-red-300" : "bg-emerald-500/20 text-emerald-300"
                }`}
              >
                {stage.num}
              </div>
              <span className="text-sm text-foreground/80 flex-1 leading-tight">{stage.name}</span>
              {stage.gate ? (
                <span className="text-[10px] font-bold bg-red-500/20 text-red-300 rounded-full px-2 py-0.5 animate-pulse flex-shrink-0">
                  🔴 Gate
                </span>
              ) : (
                <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 rounded-full px-2 py-0.5 flex-shrink-0">
                  Auto
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex items-center justify-center gap-2 flex-wrap"
        >
          <span className="glass rounded-full px-4 py-1.5 text-xs font-bold border border-emerald-400/40 text-emerald-300">
            Production + Confluence KB + Jira Done ✅
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
