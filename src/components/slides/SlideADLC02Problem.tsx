import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const steps = ["Plan", "Architect", "Code", "Review", "Test", "Fix", "Push", "CI", "Deploy", "Docs"];

export function SlideADLC02Problem() {
  return (
    <SlideShell>
      <div className="relative z-10 w-full flex flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-black text-3xl md:text-4xl text-gradient"
        >
          Traditional SDLC is Slow &amp; Manual
        </motion.h2>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
          {/* Left: Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass rounded-2xl p-5 border border-red-400/30"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-3">Traditional SDLC</p>
            <div className="space-y-2">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-sm text-foreground/80 flex-1">{step}</span>
                  <span className="text-[10px] font-bold bg-red-500/20 text-red-300 rounded px-1.5 py-0.5">Manual</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-2xl font-black text-red-400">⏱ 2–4 Weeks</div>
          </motion.div>

          {/* VS Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            className="flex items-center justify-center self-center"
          >
            <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center font-black text-white text-sm glow-purple">
              vs
            </div>
          </motion.div>

          {/* Right: Agentic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="glass rounded-2xl p-5 border border-emerald-400/30 glow-cyan"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">Agentic SDLC</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center my-3"
            >
              <div className="text-2xl font-black text-gradient">Hours, not weeks</div>
              <div className="h-1 w-3/4 mx-auto mt-2 rounded-full bg-gradient-primary" />
            </motion.div>
            <div className="space-y-2 mt-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 + i * 0.06 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <div className="flex-1 h-1.5 rounded-full bg-emerald-400/30">
                    <motion.div
                      className="h-full rounded-full bg-emerald-400"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.4, delay: 1.3 + i * 0.06 }}
                    />
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 rounded px-1.5 py-0.5">Auto</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-4 text-2xl font-black text-emerald-400"
            >
              ⚡ Same Day
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
