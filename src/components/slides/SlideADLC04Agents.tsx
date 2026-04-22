import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const agents = [
  {
    emoji: "🎯",
    name: "Orchestrator",
    model: "Claude Sonnet 4.6",
    modelColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    role: "Coordinates the entire pipeline",
  },
  {
    emoji: "🏗️",
    name: "Solution Architect",
    model: "Claude Opus 4.5",
    modelColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    role: "System design, trade-offs, risks",
  },
  {
    emoji: "💻",
    name: "Developer",
    model: "Claude Sonnet 4.6",
    modelColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    role: "Full Java implementation",
  },
  {
    emoji: "🧪",
    name: "Unit Tester",
    model: "Claude Sonnet 4.5",
    modelColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    role: "Writes tests in parallel, ≥80% coverage",
  },
  {
    emoji: "🔍",
    name: "Code Reviewer",
    model: "Claude Sonnet 4.6",
    modelColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    role: "Security + quality, auto-fixes critical issues",
  },
  {
    emoji: "🚀",
    name: "Pipeline Monitor",
    model: "Claude Haiku 4.5",
    modelColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    role: "CI/CD watchdog, auto-fixes up to 5 retries",
  },
  {
    emoji: "☁️",
    name: "Deploy Agent",
    model: "Claude Haiku 4.5",
    modelColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    role: "EC2, CloudMap, health endpoint verification",
  },
];

export function SlideADLC04Agents() {
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
            7 Specialized AI Agents
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {agents.slice(0, 4).map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12, type: "spring" }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-strong rounded-2xl p-4 flex flex-col items-center gap-2 text-center cursor-default hover:glow-purple transition-shadow border border-white/5"
            >
              <div className="text-3xl">{agent.emoji}</div>
              <div className="font-display font-bold text-sm text-foreground">{agent.name}</div>
              <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 border ${agent.modelColor}`}>
                {agent.model}
              </span>
              <p className="text-[11px] text-muted-foreground leading-tight">{agent.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {agents.slice(4).map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.12, type: "spring" }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-strong rounded-2xl p-4 flex flex-col items-center gap-2 text-center cursor-default hover:glow-cyan transition-shadow border border-white/5"
            >
              <div className="text-3xl">{agent.emoji}</div>
              <div className="font-display font-bold text-sm text-foreground">{agent.name}</div>
              <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 border ${agent.modelColor}`}>
                {agent.model}
              </span>
              <p className="text-[11px] text-muted-foreground leading-tight">{agent.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
