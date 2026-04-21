import { motion } from "framer-motion";
import { ArrowRight, FileCode, Plug, Zap } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Particles } from "../Background";
import { AnimatedLines } from "../AnimatedText";

const cards = [
  { icon: FileCode, label: "Write your CLAUDE.md today" },
  { icon: Plug, label: "Add one MCP server this week" },
  { icon: Zap, label: "Set up your first hook" },
];

export function Slide12Conclusion() {
  return (
    <SlideShell intense>
      <Particles count={50} />
      <div className="flex flex-col items-center text-center gap-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.4em] text-[#22d3ee]"
        >
          The shift is already here.
        </motion.span>

        <AnimatedLines
          lines={["Stop prompting.", "Start orchestrating."]}
          className="font-display font-black tracking-tight leading-[0.95]"
          lineClassName="text-5xl md:text-7xl lg:text-8xl text-gradient"
          stagger={0.5}
          delay={0.3}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          Configure your agents. Define your skills. Set your hooks.
          <br />
          Let the agent work — you focus on what matters.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full max-w-3xl">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.15, type: "spring" }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-strong rounded-2xl p-5 flex flex-col items-center gap-3 hover:glow-purple transition-shadow"
            >
              <c.icon className="h-7 w-7 text-[#22d3ee]" />
              <div className="font-display font-semibold text-sm md:text-base text-foreground/90">
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-primary px-10 py-5 text-lg font-bold text-white pulse-glow mt-2"
        >
          Start Building Agentic Workflows
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="mt-6 flex items-center gap-6 text-sm text-muted-foreground"
        >
          <div className="text-left">
            <div className="font-display font-bold text-foreground">Your Speaker</div>
            <div className="font-mono text-xs">@dev_meetup_2025</div>
          </div>
          <div className="h-16 w-16 rounded-lg glass grid place-items-center font-mono text-[8px] text-muted-foreground p-1">
            <div className="grid grid-cols-5 gap-px">
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 ${Math.random() > 0.5 ? "bg-foreground" : "bg-transparent"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="mt-2 font-display italic text-gradient text-lg"
        >
          Thank you
        </motion.div>
      </div>
    </SlideShell>
  );
}
