import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { SlideShell } from "../SlideShell";

const cards = [
  {
    label: "ALLOW",
    icon: "✅",
    color: "emerald",
    items: ["file:read, file:write, file:edit", "bash:npm test", "bash:npm run lint", "bash:git status, git diff"],
  },
  {
    label: "DENY",
    icon: "❌",
    color: "rose",
    items: ["bash:rm -rf", "bash:git push --force", "bash:npm publish", "Access to .env / secrets"],
  },
  {
    label: "ASK",
    icon: "❓",
    color: "amber",
    items: ["Everything not explicitly", "allowed or denied", "→ Agent prompts you first"],
  },
];

const colorMap: Record<string, string> = {
  emerald: "border-emerald-400/40 shadow-[0_0_50px_-10px_rgba(34,197,94,0.5)] text-emerald-300",
  rose: "border-rose-400/40 shadow-[0_0_50px_-10px_rgba(244,63,94,0.5)] text-rose-300",
  amber: "border-amber-400/40 shadow-[0_0_50px_-10px_rgba(251,191,36,0.5)] text-amber-300",
};

export function Slide10Permissions() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-black text-4xl md:text-5xl"
        >
          Permissions — <span className="text-gradient">Autonomous</span> Without Reckless
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Center shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          >
            <div className="relative">
              <Shield className="h-32 w-32 text-purple-400/40" strokeWidth={1.2} />
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-purple-400/30"
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                />
              ))}
            </div>
          </motion.div>

          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className={`relative z-10 glass-strong rounded-2xl p-6 border ${colorMap[c.color]}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-display font-black text-2xl tracking-wider">{c.label}</h3>
              </div>
              <ul className="space-y-2 font-mono text-sm text-foreground/85">
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center font-display italic text-xl md:text-2xl text-gradient font-bold"
        >
          "Set once. Work autonomously. Sleep soundly."
        </motion.p>
      </div>
    </SlideShell>
  );
}
