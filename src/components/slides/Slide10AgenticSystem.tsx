import { motion } from "framer-motion";
import { Bot, FileText, Zap } from "lucide-react";
import { SlideShell } from "../SlideShell";

const agents = [
  { icon: "🧠", name: "Orchestrator", color: "text-purple-300" },
  { icon: "📋", name: "Planner",      color: "text-blue-300" },
  { icon: "🔨", name: "Builder",      color: "text-cyan-300" },
  { icon: "🧪", name: "Tester",       color: "text-emerald-300" },
  { icon: "🚀", name: "Deployer",     color: "text-pink-300" },
];

const mcpServers = [
  { icon: "🐙", name: "git" },
  { icon: "🎭", name: "playwright" },
  { icon: "▲",  name: "vercel" },
  { icon: "📌", name: "jira" },
];

const extras = [
  { icon: "⚡", label: "Skills",      items: "create-component · api-endpoint · write-tests" },
  { icon: "🪝", label: "Hooks",       items: "pre-tool · post-tool · stop" },
  { icon: "🌍", label: "Environment", items: "node · secrets · deps · extensions" },
];

const planLines = [
  "# Project Blueprint",
  "",
  "agents: [orchestrator, planner,",
  "         builder, tester, deployer]",
  "",
  "mcp: [git, playwright, vercel, jira]",
  "",
  "skills: [component, api, tests]",
  "hooks: [format, lint, notify]",
  "env: { node: 20, install: true }",
];

export function Slide10AgenticSystem() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-5 h-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-black text-3xl md:text-4xl lg:text-5xl"
        >
          Quick Approach →{" "}
          <span className="text-gradient">Full Agentic System</span>
        </motion.h2>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center flex-1 min-h-0">

          {/* LEFT — plan.md blueprint */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-strong rounded-2xl p-5 border border-purple-400/40 shadow-[0_0_40px_-8px_rgba(168,85,247,0.4)] h-full flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-purple-400" />
              <span className="font-display font-black text-lg text-purple-300 tracking-wide">
                plan.md
              </span>
              <span className="ml-auto text-xs text-muted-foreground font-mono">
                single input file
              </span>
            </div>

            <div className="flex-1 font-mono text-xs space-y-0.5 bg-black/30 rounded-xl p-3 overflow-hidden">
              {planLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className={
                    line.startsWith("#")
                      ? "text-[#c084fc] font-bold"
                      : line.includes(":")
                        ? "text-[#22d3ee]"
                        : "text-foreground/70"
                  }
                >
                  {line || <span>&nbsp;</span>}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-3 text-center text-xs text-muted-foreground italic"
            >
              You write this. AI does the rest.
            </motion.div>
          </motion.div>

          {/* CENTER — AI Agent transform arrow */}
          <div className="flex flex-col items-center gap-3 px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="relative flex flex-col items-center gap-2"
            >
              {/* Pulsing bot icon */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-500/20"
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full glass-strong border border-purple-400/60 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  <Bot className="h-7 w-7 text-purple-300" />
                </div>
              </div>

              <div className="text-center">
                <div className="font-display font-black text-xs text-gradient whitespace-nowrap">
                  AI Agent
                </div>
                <div className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">
                  Claude / Copilot
                </div>
              </div>

              {/* Animated lightning */}
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4], y: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <Zap className="h-5 w-5 text-amber-400" />
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 origin-left"
              />
              <div className="text-[#22d3ee] text-lg">→</div>
            </motion.div>
          </div>

          {/* RIGHT — generated system */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-3 h-full"
          >
            {/* Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="glass rounded-2xl p-4 border border-purple-400/30"
            >
              <div className="text-xs font-display font-bold text-purple-300 tracking-widest mb-2 uppercase">
                🤖 5 Agents — Auto-Configured
              </div>
              <div className="flex flex-wrap gap-2">
                {agents.map((a, i) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                    className="flex items-center gap-1.5 glass-strong rounded-full px-3 py-1 text-xs font-mono"
                  >
                    <span>{a.icon}</span>
                    <span className={a.color}>{a.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* MCP Servers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="glass rounded-2xl p-4 border border-cyan-400/30"
            >
              <div className="text-xs font-display font-bold text-cyan-300 tracking-widest mb-2 uppercase">
                🔌 MCP Servers — Auto-Connected
              </div>
              <div className="flex flex-wrap gap-2">
                {mcpServers.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                    className="flex items-center gap-1.5 glass-strong rounded-full px-3 py-1 text-xs font-mono text-foreground/90"
                  >
                    <span>{m.icon}</span>
                    <span>{m.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills · Hooks · Env */}
            <div className="grid grid-cols-1 gap-2 flex-1">
              {extras.map((e, i) => (
                <motion.div
                  key={e.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.15 }}
                  className="glass rounded-xl px-4 py-2.5 border border-white/10 flex items-start gap-3"
                >
                  <span className="text-lg mt-0.5">{e.icon}</span>
                  <div>
                    <div className="font-display font-bold text-xs text-foreground/90 tracking-wide">
                      {e.label}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      {e.items}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-center font-display italic text-lg md:text-xl text-gradient font-bold"
        >
          "One input file. Entire AI-powered system auto-generated."
        </motion.p>
      </div>
    </SlideShell>
  );
}
