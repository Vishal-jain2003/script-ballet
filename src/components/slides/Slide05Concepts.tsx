import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const concepts = [
  { icon: "🔧", name: "TOOLS", desc: "Actions the agent can perform" },
  { icon: "🔌", name: "MCP", desc: "Universal protocol for external integrations" },
  { icon: "⚡", name: "HOOKS", desc: "Event-driven scripts around agent actions" },
  { icon: "📚", name: "SKILLS", desc: "Reusable instruction packs for your patterns" },
  { icon: "⌨️", name: "COMMANDS", desc: "Slash commands for common operations" },
  { icon: "📋", name: "INSTRUCTIONS", desc: "Project-level config files" },
  { icon: "🛡️", name: "PERMISSIONS", desc: "Safety boundaries for autonomous work" },
];

export function Slide05Concepts() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl">
            <span className="text-gradient">7 Concepts.</span> Learn Once. Apply Anywhere.
          </h2>
          <p className="mt-3 text-muted-foreground">
            These aren't product features — these are <span className="text-foreground font-semibold">PATTERNS.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {concepts.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass rounded-2xl p-5 group cursor-pointer hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.6)] transition-shadow"
              style={{ animation: `float-y ${5 + (i % 3)}s ease-in-out infinite ${i * 0.3}s` }}
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <div className="font-display font-bold text-lg text-gradient mb-1">{c.name}</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors">
                {c.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
