import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Particles } from "../Background";

const statCards = [
  { emoji: "🤖", value: "8 Stages", label: "Automated" },
  { emoji: "⚡", value: "7 Agents", label: "Specialized AI" },
  { emoji: "🎯", value: "3 Decisions", label: "Human Touch" },
];

const features = [
  "Auto quality gates",
  "Parallel test generation",
  "CI/CD self-healing",
  "MR review auto-resolution",
  "Cross-session recovery",
  "Full Confluence documentation",
];

export function SlideADLC10Summary() {
  return (
    <SlideShell intense>
      <Particles count={50} />
      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-gradient leading-tight">
            One Ticket. Full Delivery.
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-2xl mx-auto">
            Minimal Human Touch. Autonomous. Auditable. Fast.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
          {statCards.map((card, i) => (
            <motion.div
              key={card.value}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15, type: "spring" }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="glass-strong rounded-2xl p-5 flex flex-col items-center gap-2 hover:glow-purple transition-shadow"
            >
              <div className="text-3xl">{card.emoji}</div>
              <div className="font-display font-black text-xl text-gradient">{card.value}</div>
              <div className="text-xs text-muted-foreground">{card.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-2xl">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              className="glass rounded-xl px-3 py-2 flex items-center gap-2 text-left"
            >
              <span className="text-emerald-400 text-sm flex-shrink-0">✅</span>
              <span className="text-xs text-foreground/80">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, type: "spring" }}
          className="rounded-2xl bg-gradient-primary px-8 py-4 glow-purple"
        >
          <p className="font-display font-black text-white text-lg md:text-xl">
            From Jira Ticket → Production. Autonomous. Auditable. Fast.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
