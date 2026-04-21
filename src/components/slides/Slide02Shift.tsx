import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SlideShell, Eyebrow } from "../SlideShell";
import { AnimatedText } from "../AnimatedText";

const nodes = [
  { year: "2021", label: "Autocomplete" },
  { year: "2023", label: "Chat" },
  { year: "2025", label: "AGENTS", star: true },
];

export function Slide02Shift() {
  return (
    <SlideShell>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Eyebrow glow="purple">The Question That Started This</Eyebrow>
          <AnimatedText
            text="A year ago, we typed prompts and copy-pasted code. Today, we give a goal — the agent writes, tests, commits, and fixes on its own. What changed?"
            className="font-display text-2xl md:text-4xl font-bold leading-tight text-foreground"
            stagger={0.04}
            delay={0.2}
          />
        </div>

        <div className="relative">
          <div className="relative flex items-center justify-between">
            {/* connecting line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #6366f1, #a855f7, #ec4899, transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />

            {nodes.map((n, i) => (
              <motion.div
                key={n.year}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative z-10 flex flex-col items-center gap-3"
              >
                <div
                  className={`relative flex items-center justify-center rounded-full glass-strong ${
                    n.star
                      ? "h-32 w-32 glow-purple pulse-glow"
                      : "h-16 w-16"
                  }`}
                >
                  {n.star ? (
                    <Star className="h-10 w-10 text-purple-300 fill-purple-400/40" />
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-gradient-primary" />
                  )}
                </div>
                <div className="text-center">
                  <div
                    className={`font-mono text-xs tracking-widest ${
                      n.star ? "text-pink-300" : "text-muted-foreground"
                    }`}
                  >
                    {n.year}
                  </div>
                  <div
                    className={`font-display font-bold ${
                      n.star ? "text-2xl text-gradient" : "text-base text-foreground/80"
                    }`}
                  >
                    {n.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
