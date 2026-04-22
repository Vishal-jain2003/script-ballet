import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const agents = [
  { icon: "🎯", name: "Orchestrator", model: "Sonnet 4.6", color: "#a855f7", bg: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.3)", role: "Coordinates entire pipeline, routing & planning" },
  { icon: "🏗️", name: "Solution Architect", model: "Opus 4.5", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.3)", role: "System design, trade-offs, risk analysis" },
  { icon: "💻", name: "Developer", model: "Sonnet 4.6", color: "#22d3ee", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)", role: "Full Java implementation — Model → Service → Controller" },
  { icon: "🧪", name: "Unit Tester", model: "Sonnet 4.5", color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", role: "Parallel test writing, enforces ≥80% coverage" },
  { icon: "🔍", name: "Code Reviewer", model: "Sonnet 4.6", color: "#f97316", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.3)", role: "Security + quality analysis, auto-fixes critical issues" },
  { icon: "🚀", name: "Pipeline Monitor", model: "Haiku 4.5", color: "#eab308", bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.3)", role: "CI/CD watchdog, classifies failures, 5 auto-retries" },
  { icon: "☁️", name: "Deploy Agent", model: "Haiku 4.5", color: "#14b8a6", bg: "rgba(20,184,166,0.1)", border: "rgba(20,184,166,0.3)", role: "EC2, CloudMap, health endpoint verification" },
];

const mcpServers = [
  { icon: "🔵", name: "Jira MCP", connects: "Jira + Confluence", color: "#3b82f6", actions: ["Read/update tickets", "Create Confluence KB", "Post comments"] },
  { icon: "🟠", name: "GitLab MCP", connects: "GitLab", color: "#f97316", actions: ["Create branches", "Commit & open MRs", "Add review comments"] },
  { icon: "🟢", name: "Jenkins MCP", connects: "Jenkins CI/CD", color: "#10b981", actions: ["Trigger builds", "Read console logs", "Get build status"] },
  { icon: "🟣", name: "SonarQube MCP", connects: "SonarQube", color: "#a855f7", actions: ["Quality gate status", "Issues by severity", "Code metrics"] },
  { icon: "🟡", name: "AWS MCP", connects: "EC2 · CloudMap · SSM · CW", color: "#eab308", actions: ["Instance health", "Service discovery", "Deployment verify"] },
];

export function SlideADLC_Architecture() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="text-center space-y-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-[#22d3ee] font-mono"
          >
            System Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl"
          >
            <span className="text-gradient">7 Agents</span> · <span className="text-gradient">5 MCP Servers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
          {/* Agents panel */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 text-center font-mono"
            >
              AI Agents
            </motion.div>
            <div className="space-y-1.5">
              {agents.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 180 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="flex items-center gap-2 rounded-xl p-2"
                  style={{ background: a.bg, border: `1px solid ${a.border}` }}
                >
                  <span className="text-lg leading-none flex-shrink-0">{a.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-xs" style={{ color: a.color }}>{a.name}</span>
                      <span className="font-mono text-[9px] rounded-full px-1.5 py-0.5 bg-white/5 text-muted-foreground">{a.model}</span>
                    </div>
                    <div className="text-[9px] text-muted-foreground truncate">{a.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center divider with animated connector */}
          <div className="flex flex-col items-center justify-center self-stretch gap-2 px-1">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-px bg-gradient-to-b from-transparent via-white/20 to-transparent flex-1"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.0, type: "spring" }}
              className="glass-strong rounded-xl p-2 text-center flex-shrink-0"
            >
              <div className="text-[8px] text-muted-foreground font-mono leading-tight">MCP</div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-[#22d3ee] text-[10px] font-bold"
              >
                ⇄
              </motion.div>
              <div className="text-[8px] text-muted-foreground font-mono leading-tight">Protocol</div>
            </motion.div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-px bg-gradient-to-b from-transparent via-white/20 to-transparent flex-1"
            />
          </div>

          {/* MCP Servers panel */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 text-center font-mono"
            >
              MCP Servers → External Systems
            </motion.div>
            <div className="space-y-2">
              {mcpServers.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 180 }}
                  whileHover={{ x: -4, scale: 1.02 }}
                  className="rounded-xl p-2 glass"
                  style={{ borderColor: m.color + "40", borderWidth: 1 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base leading-none">{m.icon}</span>
                    <div>
                      <span className="font-semibold text-xs" style={{ color: m.color }}>{m.name}</span>
                      <div className="text-[9px] text-muted-foreground font-mono">{m.connects}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {m.actions.map((act) => (
                      <span
                        key={act}
                        className="text-[8px] font-mono px-1.5 py-0.5 rounded-full text-muted-foreground"
                        style={{ background: m.color + "15" }}
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center text-[9px] font-mono text-muted-foreground/50"
        >
          Auth handled internally — no credentials in agent context · All agents coordinate through the Orchestrator
        </motion.div>
      </div>
    </SlideShell>
  );
}
