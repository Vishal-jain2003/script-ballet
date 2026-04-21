import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SlideShell } from "../SlideShell";

const willCover = [
  "How to customize agents for YOUR projects",
  "Concepts that work across ANY agentic CLI",
  "Practical techniques you can apply TODAY",
  "Agent-driven SDLC thinking",
];

const wontCover = [
  "Tool X vs Tool Y comparison",
  "Beginner basics of AI coding",
  "Hype — only practical value",
];

export function Slide03Agenda() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-black text-4xl md:text-5xl"
        >
          What This <span className="text-gradient">Session</span> Is
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8 border-emerald-400/30 shadow-[0_0_60px_-15px_rgba(34,197,94,0.5)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-xl">What We WILL Cover</h3>
            </div>
            <ul className="space-y-4">
              {willCover.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                  className="flex items-start gap-3 text-foreground/85"
                >
                  <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="glass-strong rounded-3xl p-8 border-rose-400/30 shadow-[0_0_60px_-15px_rgba(244,63,94,0.5)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                <X className="h-5 w-5 text-rose-400" />
              </div>
              <h3 className="font-display font-bold text-xl">What This Is NOT</h3>
            </div>
            <ul className="space-y-4">
              {wontCover.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                  className="flex items-start gap-3 text-foreground/85"
                >
                  <X className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          <p className="font-display italic text-2xl md:text-3xl text-gradient font-bold">
            Let's go deep.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
