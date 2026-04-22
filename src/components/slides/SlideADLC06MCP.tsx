import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const mcpServers = [
  {
    emoji: "🔵",
    name: "Jira MCP",
    subtitle: "Jira + Confluence",
    desc: "Read tickets, update status, create KB pages",
    color: "border-blue-400/30 text-blue-300",
    dotColor: "bg-blue-400",
  },
  {
    emoji: "🟠",
    name: "GitLab MCP",
    subtitle: "GitLab",
    desc: "Create branches, commit files, open MRs",
    color: "border-orange-400/30 text-orange-300",
    dotColor: "bg-orange-400",
  },
  {
    emoji: "🟢",
    name: "Jenkins MCP",
    subtitle: "Jenkins CI/CD",
    desc: "Trigger builds, read logs, get status",
    color: "border-emerald-400/30 text-emerald-300",
    dotColor: "bg-emerald-400",
  },
  {
    emoji: "🟣",
    name: "SonarQube MCP",
    subtitle: "SonarQube",
    desc: "Quality gate, issues by severity, metrics",
    color: "border-purple-400/30 text-purple-300",
    dotColor: "bg-purple-400",
  },
  {
    emoji: "🟡",
    name: "AWS MCP",
    subtitle: "EC2 · CloudMap · SSM · CloudWatch",
    desc: "Health, discovery, deployment",
    color: "border-yellow-400/30 text-yellow-300",
    dotColor: "bg-yellow-400",
  },
];

export function SlideADLC06MCP() {
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
            5 MCP Servers — The Integration Backbone
          </h2>
        </motion.div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Left: first 2 MCP servers */}
          <div className="flex flex-col gap-3">
            {mcpServers.slice(0, 2).map((mcp, i) => (
              <motion.div
                key={mcp.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className={`glass rounded-xl p-3 border ${mcp.color} relative overflow-hidden`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{mcp.emoji}</span>
                  <span className="font-bold text-sm">{mcp.name}</span>
                </div>
                <div className="text-[10px] font-semibold text-foreground/50 mb-0.5">{mcp.subtitle}</div>
                <div className="text-[11px] text-foreground/60">{mcp.desc}</div>
                {/* animated connector dot */}
                <motion.div
                  className={`absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${mcp.dotColor}`}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Center: AI Orchestrator Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="flex flex-col items-center gap-2"
          >
            {/* Connector lines */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center glow-purple">
                  <div className="text-center">
                    <div className="text-2xl">🤖</div>
                    <div className="text-[10px] font-black text-white leading-tight">AI<br />Orch.</div>
                  </div>
                </div>
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#a855f7]/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: last 3 MCP servers */}
          <div className="flex flex-col gap-3">
            {mcpServers.slice(2).map((mcp, i) => (
              <motion.div
                key={mcp.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className={`glass rounded-xl p-3 border ${mcp.color} relative overflow-hidden`}
              >
                {/* animated connector dot */}
                <motion.div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${mcp.dotColor}`}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 + 0.5 }}
                />
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{mcp.emoji}</span>
                  <span className="font-bold text-sm">{mcp.name}</span>
                </div>
                <div className="text-[10px] font-semibold text-foreground/50 mb-0.5">{mcp.subtitle}</div>
                <div className="text-[11px] text-foreground/60">{mcp.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center text-xs text-muted-foreground"
        >
          Auth handled internally — no credentials in agent context
        </motion.p>
      </div>
    </SlideShell>
  );
}
