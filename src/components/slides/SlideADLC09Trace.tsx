import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const phases = [
  {
    label: "Planning",
    color: "text-blue-300",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-400/30",
    dotColor: "bg-blue-400",
    nodes: [
      { icon: "🎫", name: "Jira Ticket", type: "Input" },
      { icon: "📋", name: "Spec File", type: "Artifact" },
    ],
  },
  {
    label: "Implementation",
    color: "text-purple-300",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-400/30",
    dotColor: "bg-purple-400",
    nodes: [
      { icon: "🌿", name: "Feature Branch", type: "Git" },
      { icon: "💻", name: "Implementation", type: "Code" },
      { icon: "🧪", name: "Unit Tests", type: "Tests" },
    ],
  },
  {
    label: "Quality",
    color: "text-orange-300",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-400/30",
    dotColor: "bg-orange-400",
    nodes: [
      { icon: "✅", name: "SonarQube", type: "Quality" },
      { icon: "🔀", name: "Merge Request", type: "Review" },
    ],
  },
  {
    label: "Deploy",
    color: "text-emerald-300",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-400/30",
    dotColor: "bg-emerald-400",
    nodes: [
      { icon: "⚙️", name: "Jenkins Pipeline", type: "CI/CD" },
      { icon: "☁️", name: "AWS Deploy", type: "Infra" },
    ],
  },
  {
    label: "Docs",
    color: "text-teal-300",
    bgColor: "bg-teal-500/20",
    borderColor: "border-teal-400/30",
    dotColor: "bg-teal-400",
    nodes: [
      { icon: "📚", name: "Confluence KB", type: "Docs" },
      { icon: "✅", name: "Jira Done", type: "Closed" },
    ],
  },
];

export function SlideADLC09Trace() {
  let globalIndex = 0;

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
            Complete Auditability — Every Action Traced
          </h2>
        </motion.div>

        {/* Chain */}
        <div className="flex items-start gap-2 flex-wrap justify-center">
          {phases.map((phase, pi) => {
            const phaseStart = globalIndex;
            globalIndex += phase.nodes.length;
            return (
              <div key={phase.label} className="flex items-start gap-2">
                <div className={`rounded-xl border ${phase.borderColor} ${phase.bgColor} p-3 flex flex-col gap-2`}>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${phase.color} text-center`}>
                    {phase.label}
                  </div>
                  <div className="flex items-center gap-2">
                    {phase.nodes.map((node, ni) => {
                      const nodeDelay = 0.3 + (phaseStart + ni) * 0.15;
                      return (
                        <div key={node.name} className="flex items-center gap-2">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: nodeDelay, type: "spring" }}
                            className="glass rounded-lg p-2 text-center min-w-[70px]"
                          >
                            <div className="text-lg">{node.icon}</div>
                            <div className="text-[10px] font-bold text-foreground/80 leading-tight mt-0.5">
                              {node.name}
                            </div>
                            <div className={`text-[9px] ${phase.color} mt-0.5`}>{node.type}</div>
                          </motion.div>
                          {ni < phase.nodes.length - 1 && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: nodeDelay + 0.15 }}
                              className="text-white/30 text-sm"
                            >
                              →
                            </motion.span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {pi < phases.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (phaseStart + phase.nodes.length - 1) * 0.15 + 0.2 }}
                    className="flex items-center self-center text-white/40 text-xl mt-6"
                  >
                    →
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {phases.map((phase) => (
            <div key={phase.label} className="flex items-center gap-1.5">
              <div className={`h-2.5 w-2.5 rounded-full ${phase.dotColor}`} />
              <span className={`text-xs font-semibold ${phase.color}`}>{phase.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="text-center text-xs text-muted-foreground"
        >
          Every artifact is linked, versioned, and traceable — zero gaps in the audit trail
        </motion.p>
      </div>
    </SlideShell>
  );
}
