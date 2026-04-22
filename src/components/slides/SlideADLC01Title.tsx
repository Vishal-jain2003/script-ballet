import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Particles } from "../Background";

const logos = ["Jira", "GitLab", "Jenkins", "SonarQube", "AWS", "Confluence"];
const stats = ["8 Stages", "7 AI Agents", "3 Human Decisions"];

export function SlideADLC01Title() {
  return (
    <SlideShell intense>
      <Particles count={60} />
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] glass border-[#22d3ee]/40 text-[#22d3ee] shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] pulse-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            EdgeFabric Agentic Flow
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-black tracking-tight text-gradient text-5xl md:text-7xl lg:text-8xl leading-[0.95]"
        >
          Autonomous AI-Powered SDLC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl"
        >
          From Jira Ticket → Production in One Command
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + i * 0.15 }}
              className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-5 py-2 text-sm font-bold text-[#a855f7] glow-purple"
            >
              {stat}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex items-center gap-3 flex-wrap justify-center mt-2"
        >
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.7 + i * 0.1 }}
              className="glass rounded-full px-4 py-1.5 text-xs font-semibold text-foreground/70 border border-white/10"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </SlideShell>
  );
}
