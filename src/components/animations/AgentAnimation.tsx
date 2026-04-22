import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Stage {
  label: string;
  icon: string;
  color: string;
  description: string;
}

const stages: Stage[] = [
  {
    label: "Planning",
    icon: "📋",
    color: "text-blue-300",
    description: "Breaking down the goal into tasks...",
  },
  {
    label: "Coding",
    icon: "💻",
    color: "text-cyan-300",
    description: "Writing code in src/auth/*...",
  },
  {
    label: "Testing",
    icon: "✅",
    color: "text-green-300",
    description: "Running tests with npm test...",
  },
  {
    label: "Fixing",
    icon: "🔧",
    color: "text-yellow-300",
    description: "Fixing test failures...",
  },
  {
    label: "CI/CD",
    icon: "🚀",
    color: "text-pink-300",
    description: "Triggering deployment pipeline...",
  },
  {
    label: "Complete",
    icon: "⭐",
    color: "text-purple-300",
    description: "Task successfully completed!",
  },
];

export function AgentAnimation() {
  const [activeStage, setActiveStage] = useState(-1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  useEffect(() => {
    setActiveStage(-1);
    setCompletedStages([]);

    let stageIndex = 0;
    const initialDelay = setTimeout(() => {
      const stageInterval = setInterval(() => {
        if (stageIndex < stages.length) {
          setActiveStage(stageIndex);

          const completionDelay = setTimeout(() => {
            setCompletedStages((prev) => [...prev, stageIndex]);
            if (stageIndex === stages.length - 1) {
              clearInterval(stageInterval);
            }
            stageIndex++;
          }, 1200);

          return () => clearTimeout(completionDelay);
        }
      }, 1800);

      return () => clearInterval(stageInterval);
    }, 600);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-2xl overflow-hidden glow-purple p-6"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="pb-4 border-b border-white/10">
          <div className="font-mono text-xs tracking-wider text-cyan-300/70 uppercase mb-2">
            Agent Execution
          </div>
          <div className="text-sm text-foreground/80">
            goal("Ship login with tests and docs")
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-3">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            const isCompleted = completedStages.includes(idx);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0.4 }}
                animate={{
                  opacity: isActive || isCompleted ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-3">
                  {/* Status Indicator */}
                  <div className="flex-shrink-0 pt-1">
                    <AnimatePresence mode="wait">
                      {isCompleted && !isActive ? (
                        <motion.div
                          key="completed"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="h-5 w-5 rounded-full bg-green-500/30 border border-green-400 flex items-center justify-center"
                        >
                          <span className="text-[10px]">✓</span>
                        </motion.div>
                      ) : isActive ? (
                        <motion.div
                          key="active"
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear",
                          }}
                          className="h-5 w-5 rounded-full bg-cyan-500/30 border border-cyan-400 flex items-center justify-center"
                        >
                          <span className="text-xs">{stage.icon}</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="pending"
                          className="h-5 w-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                        >
                          <span className="text-xs">{stage.icon}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Stage Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-sm font-semibold ${
                          isActive || isCompleted ? stage.color : "text-foreground/50"
                        }`}
                      >
                        {stage.label}
                      </span>
                      {isActive && (
                        <motion.span
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="text-xs text-cyan-400"
                        >
                          ●
                        </motion.span>
                      )}
                    </div>

                    {/* Description with typing animation */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-foreground/60 mt-1 font-mono"
                      >
                        {stage.description}
                      </motion.div>
                    )}

                    {isCompleted && !isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-green-400/70 mt-1 font-mono"
                      >
                        ✓ Completed
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Status */}
        <AnimatePresence mode="wait">
          {completedStages.includes(stages.length - 1) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(168, 85, 247, 0)",
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 0px rgba(168, 85, 247, 0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-center py-2 rounded-lg bg-purple-500/10 border border-purple-400/30"
              >
                <span className="text-sm font-mono text-purple-300">
                  🎉 All tasks completed successfully!
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
