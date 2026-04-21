import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const stages = [
  { name: "PLAN", caps: ["Read tickets (MCP)", "Write specs"] },
  { name: "CODE", caps: ["Generate + refactor", "Follow skills"] },
  { name: "TEST", caps: ["Run tests via hooks", "Fix failures"] },
  { name: "REVIEW", caps: ["Read PR comments", "Implement feedback"] },
  { name: "DEPLOY", caps: ["Run pipeline commands", "Check status"] },
  { name: "MONITOR", caps: ["Query logs (MCP)", "Alert on errors"] },
];

export function Slide11SDLC() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-black text-4xl md:text-5xl"
        >
          Embedding Agents Into <span className="text-gradient">Your Entire SDLC</span>
        </motion.h2>

        <div className="relative">
          {/* Pipeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {stages.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="glass-strong rounded-xl p-4 text-center"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(168,85,247,0.0)",
                      "0 0 30px rgba(168,85,247,0.6)",
                      "0 0 0px rgba(168,85,247,0.0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <div className="font-display font-black text-sm md:text-base text-gradient">
                    {s.name}
                  </div>
                </motion.div>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="mt-3 space-y-1"
                >
                  {s.caps.map((c) => (
                    <li key={c} className="text-[11px] text-muted-foreground text-center">
                      • {c}
                    </li>
                  ))}
                </motion.ul>

                {/* Connector */}
                {i < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-2 w-4">
                    <motion.div
                      className="h-px bg-gradient-to-r from-[#a855f7] to-[#22d3ee]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6 + i * 0.2 }}
                      style={{ transformOrigin: "left" }}
                    />
                    <motion.span
                      className="absolute -top-1 h-2 w-2 rounded-full bg-[#22d3ee] shadow-[0_0_8px_#22d3ee]"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 + i * 0.2 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="text-center font-display text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto"
        >
          "The agent isn't a tool you use. It's a{" "}
          <span className="text-gradient font-bold">team member</span> in your workflow."
        </motion.p>
      </div>
    </SlideShell>
  );
}
