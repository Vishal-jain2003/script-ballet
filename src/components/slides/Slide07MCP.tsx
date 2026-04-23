import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Play, RotateCcw } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { AnimatedText } from "../AnimatedText";
import { CountUp } from "../CountUp";

const servers = [
  "notion", "github", "postgres", "slack", "jira", "linear",
  "confluence", "filesystem", "puppeteer", "+100 more",
];

const archFlow = [
  { emoji: "🤖", label: "Copilot CLI", extra: "" },
  { emoji: "🔌", label: "MCP Client", extra: "" },
  { emoji: "⚙️", label: "MCP Server", extra: "", strong: true },
  { emoji: "📋", label: "Notion API", extra: "pages · blocks · databases" },
];

type Line = { delay: number; color: string; text: string; sub?: string };

const SESSION_LINES: Line[] = [
  {
    delay: 0.15,
    color: "text-white/40",
    text: '$ gh copilot "Save today\'s key decisions to a Notion page"',
  },
  {
    delay: 0.8,
    color: "text-cyan-300",
    text: "🤖  Copilot  I'll create a Notion page with today's key decisions.",
  },
  {
    delay: 1.25,
    color: "text-cyan-300",
    text: "             Connecting to Notion MCP server...",
  },
  {
    delay: 1.75,
    color: "text-green-400",
    text: "[MCP]  ✓  notion-mcp-server · connected",
  },
  {
    delay: 2.2,
    color: "text-purple-300",
    text: '➤   notion.search({ query: "Team Engineering Wiki" })',
  },
  {
    delay: 2.65,
    color: "text-white/40",
    text: '←   { id: "ws_abc123", name: "Team Engineering Wiki" }',
  },
  {
    delay: 3.1,
    color: "text-purple-300",
    text: "➤   notion.create_page({",
    sub: '         parent: "ws_abc123",  title: "Key Decisions — Apr 23, 2026",  icon: "📋"',
  },
  {
    delay: 3.7,
    color: "text-white/40",
    text: '←   { page_id: "pg_xyz789", url: "notion.so/pg_xyz789", status: "created" }',
  },
  {
    delay: 4.15,
    color: "text-purple-300",
    text: "➤   notion.append_blocks({ page_id: \"pg_xyz789\", blocks: [",
  },
  {
    delay: 4.45,
    color: "text-white/35",
    text: '         { heading_2: "✅ Decisions Made" },',
  },
  {
    delay: 4.65,
    color: "text-white/35",
    text: '         { bullet: "MCP replaces all custom integrations" },',
  },
  {
    delay: 4.82,
    color: "text-white/35",
    text: '         { bullet: "Notion MCP for team docs workflow" },',
  },
  {
    delay: 4.98,
    color: "text-white/35",
    text: '         { heading_2: "📌 Action Items" },',
  },
  {
    delay: 5.14,
    color: "text-white/35",
    text: '         { bullet: "Configure .mcp.json across all repos" },',
  },
  {
    delay: 5.3,
    color: "text-white/35",
    text: '         { bullet: "Team MCP onboarding — next sprint" }',
  },
  { delay: 5.5, color: "text-purple-300", text: "    ]})" },
  {
    delay: 5.85,
    color: "text-green-300",
    text: "←   { blocks_added: 6, success: true }",
  },
  {
    delay: 6.25,
    color: "text-green-400",
    text: "✅  Notion page created and published!",
  },
  {
    delay: 6.55,
    color: "text-cyan-200",
    text: "    🔗  notion.so/key-decisions-apr-23-2026",
  },
  {
    delay: 7.0,
    color: "text-cyan-300",
    text: "🤖  Copilot  Done! Your page is live — 6 decisions captured.",
  },
  {
    delay: 7.35,
    color: "text-cyan-300",
    text: "             Open → notion.so/key-decisions-apr-23-2026",
  },
];

// ── Demo terminal (remounts on each animKey to replay) ────────────────────────
function NotionDemo({ animKey }: { animKey: number }) {
  return (
    <div key={animKey} className="space-y-1.5">
      {SESSION_LINES.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: line.delay, duration: 0.28 }}
          className="leading-relaxed"
        >
          <span className={`font-mono text-xs ${line.color}`}>{line.text}</span>
          {line.sub && (
            <div className="font-mono text-[11px] text-white/30 pl-4 mt-0.5">{line.sub}</div>
          )}
        </motion.div>
      ))}

      {/* Final badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 7.8, type: "spring", stiffness: 260, damping: 20 }}
        className="pt-3 flex justify-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-5 py-2 font-mono text-xs text-cyan-200">
          🎯&nbsp; 1 CLI prompt → Notion MCP → 6 blocks published to Team Wiki
        </span>
      </motion.div>
    </div>
  );
}

// ── Slide ─────────────────────────────────────────────────────────────────────
export function Slide07MCP() {
  const [started, setStarted] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleStart = () => {
    setStarted(true);
    setAnimKey((k) => k + 1);
  };

  return (
    <SlideShell>
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-4 top-8 h-44 w-44 rounded-full bg-[#22d3ee]/12 blur-3xl"
          animate={{ x: [0, 26, 0], y: [0, -16, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-4 top-14 h-52 w-52 rounded-full bg-[#a855f7]/14 blur-3xl"
          animate={{ x: [0, -24, 0], y: [0, 20, 0], opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="flex flex-col gap-5">
        {/* Title */}
        <div className="space-y-1 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl md:text-4xl"
          >
            MCP — The <span className="text-gradient">USB-C of AI</span> Integrations
          </motion.h2>
          <AnimatedText
            text="One protocol. Any agent. Any service. Zero custom glue."
            className="font-mono text-base text-muted-foreground"
            delay={0.4}
          />
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* What is MCP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass flex flex-col gap-3 rounded-2xl p-5"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Model Context Protocol
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">
              An open standard that lets AI agents discover and call tools on any external server
              — via a single, consistent JSON-RPC interface.
            </p>
            <ul className="space-y-1.5">
              {[
                "Open standard (Anthropic + community)",
                "Language-agnostic servers",
                "Works with any AI agent",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-foreground/70">
                  <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Before / After */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl border border-rose-400/25 p-4">
              <div className="font-mono text-xs uppercase tracking-widest text-rose-400">
                Before MCP
              </div>
              <div className="flex items-baseline gap-2">
                <CountUp to={100} className="text-4xl font-black text-rose-400 line-through" />
                <span className="text-sm text-foreground/70">custom integrations 😩</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground">N tools × N services</div>
            </div>
            <div className="glass glow-cyan flex flex-col gap-1 rounded-2xl border border-emerald-400/30 p-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#22d3ee]">
                After MCP
              </div>
              <div className="flex items-baseline gap-2">
                <CountUp to={1} delay={1} className="text-4xl font-black text-gradient" />
                <span className="text-sm text-foreground/70">protocol ✅</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground">N tools × 1 standard</div>
            </div>
          </motion.div>

          {/* Architecture flow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass flex flex-col rounded-2xl p-5"
          >
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-purple-300">
              How it works
            </div>
            {archFlow.map((node, i) => (
              <div key={node.label} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.18, type: "spring" }}
                  className={`w-full rounded-xl px-4 py-2 text-center font-mono text-xs ${
                    node.strong
                      ? "glass-strong glow-purple border border-purple-400/30"
                      : "glass border border-white/10"
                  }`}
                >
                  <span className={node.strong ? "text-gradient font-bold" : "text-foreground/80"}>
                    {node.emoji} {node.label}
                  </span>
                  {node.extra && (
                    <div className="mt-0.5 text-[10px] text-muted-foreground">{node.extra}</div>
                  )}
                </motion.div>
                {i < archFlow.length - 1 && (
                  <div className="relative my-0.5 flex w-full justify-center" style={{ height: 20 }}>
                    <motion.div
                      className="w-px bg-gradient-to-b from-[#a855f7] to-[#22d3ee]"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      style={{ originY: 0, height: "100%" }}
                      transition={{ delay: 1.1 + i * 0.18, duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute h-1.5 w-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_6px_#22d3ee]"
                      style={{ left: "calc(50% - 3px)" }}
                      animate={{ top: ["-5%", "105%"] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: 1.3 + i * 0.2, ease: "linear" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Click-to-run Notion MCP demo ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.55 }}
          className="overflow-hidden rounded-2xl border border-white/10"
        >
          {/* Terminal chrome */}
          <div className="glass-strong flex items-center justify-between rounded-t-2xl px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-foreground/55">
                gh copilot · notion-mcp · live demo
              </span>
            </div>

            <div className="flex items-center gap-2">
              {started ? (
                <>
                  <motion.div
                    className="h-2 w-2 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-green-400">connected</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStart}
                    className="ml-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-foreground/60 hover:text-foreground/90 transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                    replay
                  </motion.button>
                </>
              ) : (
                <motion.button
                  onClick={handleStart}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(34,211,238,0)",
                      "0 0 16px rgba(34,211,238,0.5)",
                      "0 0 0px rgba(34,211,238,0)",
                    ],
                  }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-4 py-1.5 font-mono text-xs text-cyan-200 hover:bg-cyan-500/25 transition-colors"
                >
                  <Play className="h-3 w-3 fill-cyan-300 text-cyan-300" />
                  Click to run demo
                </motion.button>
              )}
            </div>
          </div>

          {/* Terminal body */}
          <div className="min-h-[120px] bg-black/45 rounded-b-2xl p-5">
            <AnimatePresence mode="wait">
              {!started ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-6 gap-3 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.12, 1], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl"
                  >
                    📋
                  </motion.div>
                  <p className="font-mono text-sm text-muted-foreground max-w-md">
                    Watch Copilot CLI use Notion MCP to capture key decisions from your session
                    and publish them as a Notion page — in real time.
                  </p>
                  <p className="font-mono text-xs text-cyan-400/70">
                    ↑ Click <span className="text-cyan-300">"Click to run demo"</span> to start
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`session-${animKey}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <NotionDemo animKey={animKey} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Server pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {servers.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.07 }}
              className="rounded-full glass px-3 py-1 font-mono text-xs text-foreground/65"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </SlideShell>
  );
}
