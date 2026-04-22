import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const paths = [
  {
    title: "Feature / Story",
    badge: "Full SDLC",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    borderColor: "border-purple-400/30",
    glowClass: "glow-purple",
    stat: "Saves ~3 weeks",
    statColor: "text-purple-300",
    steps: [
      { name: "Classify", gate: false },
      { name: "Plan", gate: true },
      { name: "Arch", gate: true },
      { name: "Code", gate: false },
      { name: "Test", gate: false },
      { name: "Quality", gate: false },
      { name: "DevOps", gate: true },
      { name: "Deploy", gate: false },
      { name: "Docs", gate: false },
    ],
  },
  {
    title: "Bug / Hotfix",
    badge: "Fast Track",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    borderColor: "border-orange-400/30",
    glowClass: "",
    stat: "Saves ~5 days",
    statColor: "text-orange-300",
    steps: [
      { name: "Classify", gate: false },
      { name: "Root Cause", gate: true },
      { name: "Fix", gate: false },
      { name: "Regression", gate: false },
      { name: "Review", gate: false },
      { name: "Deploy", gate: true },
      { name: "Post-Mortem", gate: false },
    ],
  },
  {
    title: "Spike / Research",
    badge: "Research Only",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    borderColor: "border-blue-400/30",
    glowClass: "",
    stat: "Saves ~2 days",
    statColor: "text-blue-300",
    steps: [
      { name: "Classify", gate: false },
      { name: "Plan", gate: false },
      { name: "Architecture", gate: false },
      { name: "Documentation", gate: false },
    ],
  },
];

export function SlideADLC05Paths() {
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
            Smart Routing — Right Path for Every Ticket
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {paths.map((path, pi) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + pi * 0.2 }}
              className={`glass rounded-2xl p-4 border ${path.borderColor} ${path.glowClass} flex flex-col gap-3`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm">{path.title}</span>
                <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 border ${path.badgeColor}`}>
                  {path.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {path.steps.map((step, si) => (
                  <motion.div
                    key={`${path.title}-${step.name}-${si}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + pi * 0.2 + si * 0.08 }}
                    className="flex flex-col items-start gap-0.5"
                  >
                    <div
                      className={`flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium w-full ${
                        step.gate
                          ? "bg-red-500/15 text-red-300 border border-red-400/20"
                          : "bg-white/5 text-foreground/70 border border-white/10"
                      }`}
                    >
                      {step.gate && (
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                      )}
                      {!step.gate && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white/30 flex-shrink-0" />
                      )}
                      {step.name}
                    </div>
                    {si < path.steps.length - 1 && (
                      <div className="ml-2.5 h-1.5 w-px bg-white/20" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className={`text-sm font-bold mt-auto ${path.statColor}`}>
                ⚡ {path.stat}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-xs text-muted-foreground"
        >
          🔴 = Human Gate required &nbsp;|&nbsp; White = Autonomous
        </motion.p>
      </div>
    </SlideShell>
  );
}
