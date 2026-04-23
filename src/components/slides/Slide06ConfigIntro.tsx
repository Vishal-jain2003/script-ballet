import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const subtopics = [
  {
    label: "Sub-Topic 1",
    title: "Instruction Files",
    desc: "Teaching the Agent Your Project",
  },
  {
    label: "Sub-Topic 2",
    title: "Tools",
    desc: "What the Agent Can Actually Do",
  },
  {
    label: "Sub-Topic 3",
    title: "MCP",
    desc: "Connecting Agents to Your World",
  },
  {
    label: "Sub-Topic 4",
    title: "Commands",
    desc: "Slash Commands for Instant Agent Actions",
  },
  {
    label: "Sub-Topic 5",
    title: "Hooks",
    desc: "Automating Around the Agent",
  },
  {
    label: "Sub-Topic 6",
    title: "Skills",
    desc: "Reusable Knowledge Packs",
  },
];

export function Slide06ConfigIntro() {
  return (
    <SlideShell>
      <div className="relative flex h-full flex-col gap-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute -left-4 top-8 h-44 w-44 rounded-full bg-[#22d3ee]/12 blur-3xl"
            animate={{ x: [0, 26, 0], y: [0, -16, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-4 top-14 h-52 w-52 rounded-full bg-[#ec4899]/12 blur-3xl"
            animate={{ x: [0, -24, 0], y: [0, 20, 0], opacity: [0.25, 0.75, 0.25] }}
            transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="font-mono text-sm tracking-[0.35em] text-cyan-300 uppercase">
            Core Module
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight md:text-6xl">
            <span className="text-gradient">Configuring AI</span> for Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-foreground/80 md:text-lg">
            Next up: how to shape agent behavior with configuration layers that scale from project rules to external integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {subtopics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm"
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#ec4899]"
                animate={{ opacity: [0.25, 0.85, 0.25] }}
                transition={{ duration: 1.3, repeat: Infinity }}
              />
              <p className="font-mono text-xs tracking-[0.2em] text-cyan-200 uppercase">{item.label}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}