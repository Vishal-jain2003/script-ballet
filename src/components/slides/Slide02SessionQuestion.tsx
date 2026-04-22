import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { SlideShell, Eyebrow } from "../SlideShell";

const keyPoints = [
  "Tooling shift: from autocomplete to autonomous task execution",
  "Prompting shift: from requesting code to defining clear outcomes",
  "Process shift: planning, guardrails, review, and feedback loops",
  "Team shift: skills, permissions, and AI-aware SDLC practices",
];

export function Slide02SessionQuestion() {
  return (
    <SlideShell>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-5"
        >
          <Eyebrow glow="pink">Core Question</Eyebrow>
          <h2 className="font-display font-black leading-tight text-4xl md:text-5xl">
            If AI can execute, what is the developer&apos;s new superpower?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            This session answers that question by connecting agent capability,
            human judgment, and delivery discipline into one practical framework.
          </p>

          <div className="glass rounded-2xl p-4 border-pink-400/30">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-pink-300 mt-0.5" />
              <p className="text-sm md:text-base text-foreground/85">
                Core idea: developers are moving from code producers to system
                designers, reviewers, and orchestrators.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-8"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">
            Key Points (Sub-Topics)
          </h3>
          <ul className="space-y-4">
            {keyPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                <span className="text-sm md:text-lg text-foreground/85 leading-relaxed">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SlideShell>
  );
}
