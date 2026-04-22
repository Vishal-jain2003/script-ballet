import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { SlideShell, Eyebrow } from "../SlideShell";
import { AnimatedText } from "../AnimatedText";
import { InlineAutocompleteAnimation } from "../animations/InlineAutocompleteAnimation";
import { ChatBotAnimation } from "../animations/ChatBotAnimation";
import { AgentAnimation } from "../animations/AgentAnimation";

const nodes = [
  {
    year: "2021",
    label: "Autocomplete",
    type: "autocomplete" as const,
    filename: "editor.ts",
    code: `const total = values.redu`,
    suggestion: `ce((acc, n) => acc + n, 0)`,
  },
  {
    year: "2023",
    label: "Chat",
    type: "chat" as const,
    prompt: `Write a debounce utility in TypeScript`,
    response: `export function debounce<T extends (...args: unknown[]) => void>(fn: T, wait = 200) {
  let t: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), wait)
  }
}`,
  },
  {
    year: "2025",
    label: "AGENTS",
    type: "agent" as const,
    star: true,
  },
];

export function Slide02Shift() {
  const [activeYear, setActiveYear] = useState("2021");

  const activeNode = useMemo(
    () => nodes.find((node) => node.year === activeYear) ?? nodes[0],
    [activeYear],
  );

  return (
    <SlideShell>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Eyebrow glow="purple">The Question That Started This</Eyebrow>
          <AnimatedText
            text="A year ago, we typed prompts and copy-pasted code. Today, we give a goal — the agent writes, tests, commits, and fixes on its own. What changed?"
            className="font-display text-2xl md:text-4xl font-bold leading-tight text-foreground"
            stagger={0.04}
            delay={0.2}
          />
        </div>

        <div className="relative">
          <div className="mb-4 text-center lg:text-left">
            <div className="font-mono text-[11px] tracking-[0.25em] text-cyan-300/90 uppercase">
              Click any year to preview
            </div>
          </div>

          <div className="relative flex items-center justify-between gap-4">
            {/* connecting line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #6366f1, #a855f7, #ec4899, transparent)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
            />

            {nodes.map((n, i) => (
              <motion.button
                key={n.year}
                type="button"
                onClick={() => setActiveYear(n.year)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 flex flex-col items-center gap-3 cursor-pointer"
              >
                <div
                  className={`relative flex items-center justify-center rounded-full glass-strong ${
                    n.star
                      ? "h-32 w-32 glow-purple pulse-glow"
                      : "h-16 w-16"
                  } ${
                    activeYear === n.year
                      ? "ring-2 ring-cyan-300/70 shadow-[0_0_35px_rgba(34,211,238,0.4)]"
                      : "ring-1 ring-white/10"
                  }`}
                >
                  {n.star ? (
                    <Star className="h-10 w-10 text-purple-300 fill-purple-400/40" />
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-gradient-primary" />
                  )}
                </div>
                <div className="text-center">
                  <div
                    className={`font-mono text-xs tracking-widest ${
                      n.star ? "text-pink-300" : "text-muted-foreground"
                    }`}
                  >
                    {n.year}
                  </div>
                  <div
                    className={`font-display font-bold ${
                      n.star ? "text-2xl text-gradient" : "text-base text-foreground/80"
                    }`}
                  >
                    {n.label}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.year}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <div className="font-display text-lg md:text-xl font-semibold text-foreground">
                  {activeNode.year} - {activeNode.label}
                </div>
                <div className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-200 uppercase">
                  live simulation
                </div>
              </div>

              {activeNode.type === "autocomplete" && "code" in activeNode && "suggestion" in activeNode && (
                <InlineAutocompleteAnimation
                  key={activeNode.year}
                  code={activeNode.code}
                  suggestion={activeNode.suggestion}
                  filename={activeNode.filename}
                  speed={25}
                  startDelay={120}
                />
              )}

              {activeNode.type === "chat" && "prompt" in activeNode && "response" in activeNode && (
                <ChatBotAnimation
                  key={activeNode.year}
                  prompt={activeNode.prompt}
                  response={activeNode.response}
                  speed={25}
                  startDelay={120}
                />
              )}

              {activeNode.type === "agent" && (
                <AgentAnimation key={activeNode.year} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SlideShell>
  );
}