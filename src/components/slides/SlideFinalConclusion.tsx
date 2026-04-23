import { motion } from "framer-motion";
import { SlideShell, Eyebrow } from "../SlideShell";
import { Particles } from "../Background";
import { AnimatedLines } from "../AnimatedText";

const pillars = [
  {
    icon: "🤖",
    name: "GitHub Copilot",
    details: "VS Code + CLI · Coding Agent · MCP Tools · copilot-setup-steps.yml",
    border: "border-[#22d3ee]/40",
    glow: "hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.5)]",
    label: "text-[#22d3ee]",
  },
  {
    icon: "⚡",
    name: "Claude Code",
    details: "Terminal Native · CLAUDE.md · Hooks & Skills · Multi-Agent SDLC",
    border: "border-purple-400/40",
    glow: "hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.5)]",
    label: "text-purple-300",
  },
];

const chips = [
  "🧠 AI agents are configurable",
  "🔌 MCP connects everything",
  "⚡ One file → full system",
  "🚀 Ship autonomously",
];

export function SlideFinalConclusion() {
  return (
    <SlideShell intense>
      <Particles count={80} />
      <div className="flex flex-col items-center text-center gap-6 relative z-10">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow glow="cyan">The Agentic Era Is Now</Eyebrow>
        </motion.div>

        {/* Main headline */}
        <AnimatedLines
          lines={["Build less.", "Ship more.", "Think bigger."]}
          className="font-display font-black tracking-tight leading-[0.95]"
          lineClassName="text-4xl md:text-6xl lg:text-7xl text-gradient"
          stagger={0.4}
          delay={0.3}
        />

        {/* Two-pillar comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mt-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.2, type: "spring", stiffness: 80 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-strong rounded-2xl p-5 border ${p.border} ${p.glow} transition-shadow`}
            >
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className={`font-display font-bold text-lg ${p.label}`}>{p.name}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1 leading-relaxed">
                {p.details}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key takeaway chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 2 } },
          }}
        >
          {chips.map((chip) => (
            <motion.span
              key={chip}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 10 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
              }}
              className="glass rounded-full px-4 py-2 text-sm font-mono text-foreground/90 border border-white/10"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, type: "spring" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full bg-gradient-primary px-10 py-5 text-lg font-bold text-white pulse-glow mt-1"
        >
          Start Your Agentic Journey →
        </motion.button>

        {/* Speaker / session footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.7 }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <div className="font-display font-semibold text-sm text-foreground/80">
            AI-Powered Development: GitHub Copilot &amp; Claude Code
          </div>
          <div className="font-mono text-xs tracking-widest text-[#22d3ee]/70">
            #AIAgents · #GitHubCopilot · #ClaudeCode
          </div>
        </motion.div>

        {/* Thank you sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="font-display italic text-gradient text-2xl"
        >
          Thank you 🙏
        </motion.div>
      </div>
    </SlideShell>
  );
}
