import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { CodeBlock } from "../CodeBlock";

const concepts = [
  { icon: "🔧", name: "TOOLS", desc: "Actions the agent can perform" },
  { icon: "🔌", name: "MCP", desc: "Universal protocol for external integrations" },
  { icon: "⚡", name: "HOOKS", desc: "Event-driven scripts around agent actions" },
  { icon: "📚", name: "SKILLS", desc: "Reusable instruction packs for your patterns" },
  { icon: "⌨️", name: "COMMANDS", desc: "Slash commands for common operations" },
  { icon: "📋", name: "INSTRUCTIONS", desc: "Project-level config files" },
  { icon: "🛡️", name: "PERMISSIONS", desc: "Safety boundaries for autonomous work" },
];

const snippetByConcept: Record<string, { filename: string; snippet: string } | undefined> = {
  TOOLS: {
    filename: "agent.tools.ts",
    snippet: `// Goal from developer
const goal = "Refactor auth flow and keep all tests green"

// Agent uses tools against the repository
await tool.list_dir("src")
const authFile = await tool.read_file("src/auth/service.ts")

if (authFile.includes("legacySession")) {
  await tool.apply_patch("src/auth/service.ts", {
    from: "legacySession",
    to: "secureSession",
  })
}

await tool.run_in_terminal("bun test")
await tool.get_errors(["src/auth/service.ts"])
await tool.summarize_changes()`,
  },
  MCP: {
    filename: "agent.mcp.ts",
    snippet: `// MCP server connected to GitHub + Jira
const github = mcp.server("github")
const jira = mcp.server("jira")

// Agent calls MCP tools just like local tools
const issue = await jira.call("get_issue", { key: "PLAT-412" })

const pr = await github.call("create_pull_request", {
  repo: "team/app",
  title: ` + '"fix(auth): align with ${issue.key}"' + `,
  branch: "fix/auth-session",
})

await jira.call("add_comment", {
  key: issue.key,
  comment: ` + '"PR opened: ${pr.url}"' + `,
})`,
  },
};

export function Slide05Concepts() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const selectedSnippet = useMemo(
    () => (selectedConcept ? snippetByConcept[selectedConcept] : undefined),
    [selectedConcept],
  );

  return (
    <SlideShell>
      <div className="relative flex flex-col gap-7 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute left-0 top-8 h-40 w-40 rounded-full bg-[#22d3ee]/12 blur-3xl"
            animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.3, 0.85, 0.3] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-6 top-2 h-42 w-42 rounded-full bg-[#a855f7]/14 blur-3xl"
            animate={{ x: [0, -22, 0], y: [0, 26, 0], opacity: [0.3, 0.78, 0.3] }}
            transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="font-display font-black text-4xl md:text-5xl">
            <span className="text-gradient">7 Concepts.</span> Tap One. See It Live.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Click a concept card to preview it on the fly. Use <span className="text-foreground font-semibold">TOOLS</span> and <span className="text-foreground font-semibold">MCP</span> to see live code examples.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {concepts.map((c, i) => {
            const isActive = selectedConcept === c.name;
            return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onClick={() => setSelectedConcept(c.name)}
              className={`relative overflow-hidden rounded-2xl p-5 glass group cursor-pointer transition-all duration-300 ${
                isActive
                  ? "shadow-[0_0_60px_-14px_rgba(34,211,238,0.85)] border-white/30"
                  : "hover:shadow-[0_0_55px_-14px_rgba(168,85,247,0.7)]"
              }`}
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#ec4899]"
                animate={{ opacity: isActive ? [0.35, 1, 0.35] : [0.2, 0.5, 0.2] }}
                transition={{ duration: 1.15, repeat: Infinity }}
              />

              <motion.div
                className="text-4xl mb-3"
                animate={{ y: isActive ? [0, -4, 0] : [0, -1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.06 }}
              >
                {c.icon}
              </motion.div>

              <div className="font-display font-bold text-lg text-gradient mb-1">{c.name}</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
                {c.desc}
              </div>

              {isActive && (
                <motion.div
                  layoutId="concept-selected"
                  className="absolute inset-0 rounded-2xl border border-white/25"
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                />
              )}
            </motion.div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedSnippet ? (
            <motion.div
              key={selectedConcept}
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl"
            >
              <div className="mb-2 flex items-center justify-between gap-2 px-1">
                <div className="font-display text-base md:text-lg font-semibold text-foreground">
                  {selectedConcept} in action
                </div>
                <div className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-200 uppercase">
                  live snippet
                </div>
              </div>

              <CodeBlock
                key={selectedConcept}
                code={selectedSnippet.snippet}
                filename={selectedSnippet.filename}
                speed={11}
                startDelay={120}
              />
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl glass px-4 py-3 text-sm text-muted-foreground"
            >
              Click <span className="text-foreground font-semibold">TOOLS</span> or <span className="text-foreground font-semibold">MCP</span> to see a dynamic code snippet.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
}
