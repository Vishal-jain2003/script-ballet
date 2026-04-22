import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const manualSteps = [
  { step: "Plan & Grooming", time: "2–3 days" },
  { step: "Architecture Review", time: "1–2 days" },
  { step: "Development", time: "5–7 days" },
  { step: "Code Review (back & forth)", time: "2–3 days" },
  { step: "Testing & Bug Fixes", time: "3–4 days" },
  { step: "CI/CD Setup & Debug", time: "1–2 days" },
  { step: "Deploy & Verify", time: "1 day" },
  { step: "Docs & Jira Close", time: "1 day" },
];

const agentSteps = [
  { step: "Classify & Plan", agent: "Orchestrator", time: "~2 min" },
  { step: "Architecture", agent: "Solution Architect", time: "~5 min" },
  { step: "Implementation", agent: "Developer", time: "~10 min" },
  { step: "Tests (parallel)", agent: "Unit Tester", time: "~5 min" },
  { step: "Quality Gate", agent: "Code Reviewer", time: "~3 min" },
  { step: "CI/CD Auto-fix", agent: "Pipeline Monitor", time: "~5 min" },
  { step: "Deploy & Verify", agent: "Deploy Agent", time: "~3 min" },
  { step: "Docs & Close", agent: "Orchestrator", time: "~2 min" },
];

const tradeoffs = [
  { label: "Human Effort", manual: "Every step", agentic: "3 approvals only" },
  { label: "Parallel Work", manual: "Sequential", agentic: "Dev + Test in parallel" },
  { label: "Quality Gate", manual: "Manual review", agentic: "Auto SonarQube + AI review" },
  { label: "CI/CD Failures", manual: "Engineer debugs", agentic: "Self-heals (5 retries)" },
  { label: "Documentation", manual: "Often skipped", agentic: "Auto Confluence KB" },
];

export function SlideADLC_Tradeoff() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="text-center space-y-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#22d3ee] font-mono"
          >
            EdgeFabric Agentic Flow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl"
          >
            Traditional SDLC vs{" "}
            <span className="text-gradient">Agentic SDLC</span>
          </motion.h2>
        </div>

        {/* Main comparison */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left — Manual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-4 border border-red-400/20"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-red-400 font-semibold">Traditional SDLC</span>
              <span className="text-red-400 font-black text-xl">2–4 weeks</span>
            </div>
            <div className="space-y-1.5">
              {manualSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="flex items-center justify-between text-xs py-1 px-2 rounded bg-red-400/5 border border-red-400/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                    <span className="text-foreground/70">{s.step}</span>
                  </div>
                  <span className="text-red-400/70 font-mono text-[10px] flex-shrink-0">{s.time}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-3 text-center text-xs text-red-400/60 font-mono"
            >
              👤 Manual at every step — high context-switching cost
            </motion.div>
          </motion.div>

          {/* Right — Agentic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-2xl p-4 border border-emerald-400/25 glow-cyan"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-[#10b981] font-semibold">Agentic SDLC</span>
              <span className="text-[#10b981] font-black text-xl">~35 min</span>
            </div>
            <div className="space-y-1.5">
              {agentSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.07 }}
                  className="flex items-center justify-between text-xs py-1 px-2 rounded bg-emerald-400/5 border border-emerald-400/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]/70 flex-shrink-0" />
                    <span className="text-foreground/80">{s.step}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[#22d3ee]/60 text-[9px] hidden md:block">{s.agent}</span>
                    <span className="text-[#10b981]/80 font-mono text-[10px]">{s.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-3 text-center text-xs text-[#10b981]/60 font-mono"
            >
              🤖 Only 3 human approvals — everything else autonomous
            </motion.div>
          </motion.div>
        </div>

        {/* Trade-off table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="glass rounded-xl p-3"
        >
          <div className="grid grid-cols-[1.2fr_1fr_1fr] text-[10px] font-mono gap-x-4 gap-y-1.5">
            <div className="text-muted-foreground uppercase tracking-widest pb-1 border-b border-white/10">Dimension</div>
            <div className="text-red-400/70 uppercase tracking-widest pb-1 border-b border-white/10">Traditional</div>
            <div className="text-[#10b981]/70 uppercase tracking-widest pb-1 border-b border-white/10">Agentic</div>
            {tradeoffs.map((t, i) => (
              <>
                <motion.div
                  key={`label-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 + i * 0.1 }}
                  className="text-foreground/70 py-0.5"
                >
                  {t.label}
                </motion.div>
                <motion.div
                  key={`manual-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.85 + i * 0.1 }}
                  className="text-red-400/60 py-0.5"
                >
                  {t.manual}
                </motion.div>
                <motion.div
                  key={`agentic-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 + i * 0.1 }}
                  className="text-[#10b981]/80 py-0.5"
                >
                  {t.agentic}
                </motion.div>
              </>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
