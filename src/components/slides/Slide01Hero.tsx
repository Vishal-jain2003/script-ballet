import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SlideShell, Eyebrow } from "../SlideShell";
import { AnimatedLines } from "../AnimatedText";

export function Slide01Hero() {
  return (
    <SlideShell intense>
      <div className="flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow glow="cyan">
            <Sparkles className="h-3 w-3" />
            Developer Meetup 2025
          </Eyebrow>
        </motion.div>

        <div className="relative">
          <AnimatedLines
            lines={["From Chatbots", "to Autonomous", "Dev Agents"]}
            className="font-display font-black tracking-tight leading-[0.95]"
            lineClassName="text-5xl md:text-7xl lg:text-8xl text-gradient"
            stagger={0.18}
          />
          <motion.div
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-primary"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "60%", opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ boxShadow: "0 0 30px rgba(168,85,247,0.7)" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          How agentic AI is rewriting the developer workflow — and how to harness it today.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_-5px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_-5px_rgba(168,85,247,0.9)] transition-shadow"
        >
          Begin
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-4 float-y"
        >
          <div className="glass rounded-xl px-5 py-3 font-mono text-sm text-foreground/80">
            <span className="text-[#22d3ee]">agent</span>
            <span className="text-foreground/60">.</span>
            <span className="text-[#c084fc]">run</span>
            <span className="text-foreground/60">(</span>
            <span className="text-[#f472b6]">'Build the auth module'</span>
            <span className="text-foreground/60">)</span>
            <span className="caret ml-1">▌</span>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
