import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const loops = [
  {
    title: "Pre-Push Quality Gate",
    color: "border-cyan-400/30",
    titleColor: "text-[#22d3ee]",
    steps: ["Compile", "Test", "Coverage ≥80%", "SonarQube Scan"],
    note: "Auto-fix → Retry (max 3×)",
    noteColor: "text-cyan-400",
    footer: "Only pushes when ALL checks pass",
  },
  {
    title: "CI/CD Auto-Fix",
    color: "border-orange-400/30",
    titleColor: "text-orange-300",
    steps: ["Pipeline runs", "Read logs", "Classify error", "Auto-fix → Re-push"],
    note: "5 failures → escalate to human",
    noteColor: "text-orange-400",
    footer: "Self-healing pipeline",
  },
  {
    title: "MR Review Auto-Resolution",
    color: "border-emerald-400/30",
    titleColor: "text-emerald-300",
    steps: ["Human reviews", "Classify comments", "BLOCKING?", "Fix & reply"],
    note: "Non-blocking → acknowledged",
    noteColor: "text-emerald-400",
    footer: "Auto-addresses blocking comments",
  },
];

export function SlideADLC07Quality() {
  return (
    <SlideShell>
      <div className="relative z-10 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display font-black text-3xl md:text-4xl text-gradient">
            Built-in Quality Loops — Zero Compromise
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {loops.map((loop, li) => (
            <motion.div
              key={loop.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + li * 0.2 }}
              className={`glass rounded-2xl p-4 border ${loop.color} flex flex-col gap-3`}
            >
              <div className={`font-display font-bold text-sm ${loop.titleColor}`}>
                {loop.title}
              </div>

              {/* Step chain */}
              <div className="flex flex-col gap-1">
                {loop.steps.map((step, si) => (
                  <div key={step} className="flex flex-col items-start">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + li * 0.2 + si * 0.1 }}
                      className="glass rounded-lg px-2 py-1 text-xs text-foreground/80 w-full"
                    >
                      {step}
                    </motion.div>
                    {si < loop.steps.length - 1 && (
                      <div className="ml-3 flex flex-col items-center">
                        <motion.div
                          className="w-px bg-white/20"
                          initial={{ height: 0 }}
                          animate={{ height: 8 }}
                          transition={{ duration: 0.3, delay: 0.6 + li * 0.2 + si * 0.1 }}
                        />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + li * 0.2 + si * 0.1 }}
                          className="text-[10px] text-white/30"
                        >
                          ↓
                        </motion.span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={`text-xs font-semibold ${loop.noteColor} bg-current/10 rounded-lg px-2 py-1`}
                style={{ background: "rgba(255,255,255,0.05)" }}>
                ↩ {loop.note}
              </div>

              <div className="text-[11px] text-muted-foreground mt-auto border-t border-white/10 pt-2">
                {loop.footer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
