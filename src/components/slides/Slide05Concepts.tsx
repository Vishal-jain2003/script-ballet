import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileCode,
  Network,
  Shield,
  Terminal,
  Wrench,
  XCircle,
  Zap,
} from "lucide-react";
import { SlideShell } from "../SlideShell";

const concepts = [
  { icon: Wrench, name: "TOOLS", desc: "Actions the agent can perform" },
  { icon: Network, name: "MCP", desc: "Universal protocol for external integrations" },
  { icon: Zap, name: "HOOKS", desc: "Event-driven scripts around agent actions" },
  { icon: BookOpen, name: "SKILLS", desc: "Reusable instruction packs for your patterns" },
  { icon: Terminal, name: "COMMANDS", desc: "Slash commands for common operations" },
  { icon: FileCode, name: "INSTRUCTIONS", desc: "Project-level config files" },
  { icon: Shield, name: "PERMISSIONS", desc: "Safety boundaries for autonomous work" },
];

// ── TOOLS ────────────────────────────────────────────────────────────────────
const TOOL_STEPS = [
  { call: 'list_dir("src/")', result: "12 files found", delay: 0.1 },
  { call: 'read_file("auth/service.ts")', result: "340 lines read", delay: 0.55 },
  { call: 'apply_patch("legacySession → secureSession")', result: "Patch applied", delay: 1.05 },
  { call: 'run_terminal("bun test")', result: "47 tests ✓", delay: 1.6 },
];

function ToolsAnimation() {
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 flex items-center gap-2"
      >
        <span className="text-xl">🤖</span>
        <span className="text-sm font-semibold text-cyan-200">
          Goal:{" "}
          <span className="font-normal text-foreground/75">
            "Refactor auth flow, keep all tests green"
          </span>
        </span>
      </motion.div>
      {TOOL_STEPS.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: step.delay, duration: 0.35 }}
          className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-2.5"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: step.delay + 0.28, type: "spring", stiffness: 500 }}
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
          </motion.div>
          <code className="flex-1 truncate font-mono text-xs text-cyan-300">{step.call}</code>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: step.delay + 0.38 }}
            className="shrink-0 text-xs font-medium text-green-300"
          >
            {step.result}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

// ── MCP ──────────────────────────────────────────────────────────────────────
const MCP_SERVICES = [
  { name: "GitHub", emoji: "⚙️", color: "#22d3ee", op: "create_pull_request" },
  { name: "Jira", emoji: "📋", color: "#a855f7", op: "get_issue / add_comment" },
  { name: "Slack", emoji: "💬", color: "#ec4899", op: "send_message" },
];

function MCPAnimation() {
  return (
    <div className="flex items-center justify-between gap-2 px-1 py-2">
      {/* External services */}
      <div className="flex w-44 flex-col gap-2.5">
        {MCP_SERVICES.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.18 }}
            className="flex items-center gap-2 rounded-xl border bg-white/5 px-3 py-2"
            style={{ borderColor: s.color + "40" }}
          >
            <span className="text-base">{s.emoji}</span>
            <div>
              <div className="text-xs font-bold" style={{ color: s.color }}>
                {s.name}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground">{s.op}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connector lines → hub */}
      <div className="flex flex-col gap-[22px]">
        {MCP_SERVICES.map((s, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.35 + i * 0.18, duration: 0.35 }}
            className="h-px w-8"
            style={{
              background: `linear-gradient(to right, transparent, ${s.color}80)`,
              transformOrigin: "left",
            }}
          />
        ))}
      </div>

      {/* MCP Hub */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 280 }}
        className="flex flex-col items-center"
      >
        <motion.div
          className="rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/15 to-purple-600/15 px-4 py-3 text-center"
          animate={{
            boxShadow: [
              "0 0 8px rgba(34,211,238,0.12)",
              "0 0 24px rgba(34,211,238,0.45)",
              "0 0 8px rgba(34,211,238,0.12)",
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.7 }}
        >
          <Network className="mx-auto mb-1 h-5 w-5 text-cyan-300" />
          <div className="text-xs font-bold tracking-wider text-cyan-300">MCP</div>
          <div className="text-[9px] text-muted-foreground">Protocol Hub</div>
        </motion.div>
      </motion.div>

      {/* Hub → Agent arrow */}
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.78 }}
        className="flex items-center gap-0.5"
      >
        <div className="h-px w-8 bg-gradient-to-r from-cyan-400/60 to-purple-400/80" />
        <ArrowRight className="h-3 w-3 shrink-0 text-purple-300" />
      </motion.div>

      {/* Agent + results */}
      <div className="flex flex-col items-center gap-1.5">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.68, type: "spring", stiffness: 280 }}
          className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-purple-500/30"
        >
          <span className="text-2xl">🤖</span>
        </motion.div>
        <span className="text-xs font-semibold text-cyan-200">Agent</span>
        <div className="mt-0.5 space-y-0.5">
          {["PR #42 opened", "Issue PLAT-412 ✓", "Team notified"].map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 + i * 0.22 }}
              className="flex items-center gap-1 text-[10px] text-green-300"
            >
              <CheckCircle2 className="h-2.5 w-2.5" />
              {msg}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── HOOKS ────────────────────────────────────────────────────────────────────
const HOOK_STAGES = [
  { label: "git commit", emoji: "📝", color: "#22d3ee" },
  { label: "Hook fires", emoji: "⚡", color: "#f59e0b" },
  { label: "Lint + Format", emoji: "🔧", color: "#a855f7" },
  { label: "Tests run", emoji: "🧪", color: "#ec4899" },
  { label: "Clean push", emoji: "✅", color: "#4ade80" },
];

function HooksAnimation() {
  return (
    <div className="flex items-center justify-center gap-1 py-3">
      {HOOK_STAGES.flatMap((stage, i) => {
        const node = (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, scale: 0.6, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.38, type: "spring", stiffness: 300, damping: 18 }}
            className="flex flex-col items-center gap-1.5"
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-xl border bg-white/5 text-xl"
              style={{ borderColor: stage.color + "40" }}
              animate={{
                boxShadow: [
                  `0 0 0px ${stage.color}00`,
                  `0 0 18px ${stage.color}70`,
                  `0 0 0px ${stage.color}00`,
                ],
              }}
              transition={{ delay: i * 0.38 + 0.15, duration: 0.7 }}
            >
              {stage.emoji}
            </motion.div>
            <span
              className="text-center text-[10px] font-medium leading-tight"
              style={{ color: stage.color }}
            >
              {stage.label}
            </span>
          </motion.div>
        );

        if (i < HOOK_STAGES.length - 1) {
          const arrow = (
            <motion.div
              key={`arrow-${i}`}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: i * 0.38 + 0.3, transformOrigin: "left" }}
              className="mb-5 flex items-center"
            >
              <div className="h-px w-5 bg-white/20" />
              <ArrowRight className="-ml-0.5 h-3 w-3 shrink-0 text-white/30" />
            </motion.div>
          );
          return [node, arrow];
        }
        return [node];
      })}
    </div>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────────────────
const SKILL_ITEMS = [
  { name: "PR Review", emoji: "👁️", color: "#22d3ee" },
  { name: "Testing", emoji: "🧪", color: "#a855f7" },
  { name: "Code Style", emoji: "🎨", color: "#ec4899" },
  { name: "Security", emoji: "🔒", color: "#f59e0b" },
];

function SkillsAnimation() {
  return (
    <div className="flex flex-col items-center gap-3 py-1">
      <div className="flex justify-center gap-3">
        {SKILL_ITEMS.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: -28, scale: 0.75 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15 + 0.1, type: "spring", stiffness: 280, damping: 18 }}
            className="flex min-w-[76px] flex-col items-center gap-1.5 rounded-xl border bg-white/5 px-4 py-3"
            style={{ borderColor: skill.color + "40" }}
          >
            <span className="text-xl">{skill.emoji}</span>
            <span className="text-center text-[11px] font-semibold" style={{ color: skill.color }}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.75, transformOrigin: "top", duration: 0.3 }}
        className="text-xl text-white/30"
      >
        ↓
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
        className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 px-5 py-3"
      >
        <span className="text-3xl">🤖</span>
        <div className="min-w-[140px]">
          <div className="text-sm font-bold text-cyan-200">Copilot Agent</div>
          <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.05, duration: 0.85, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.95 }}
            className="mt-1 text-[10px] text-green-300"
          >
            ✓ 4 skills loaded
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// ── COMMANDS ─────────────────────────────────────────────────────────────────
const CMD_TEXT = "/fix-tests --scope auth";
const CMD_OUTPUT = [
  { text: "Scanning test failures...", delay: 0.9, color: "text-muted-foreground" },
  { text: "3 issues found in auth/service.ts", delay: 1.35, color: "text-yellow-300" },
  { text: "Applying automated fixes...", delay: 1.8, color: "text-cyan-300" },
  { text: "✓ All 47 tests passing", delay: 2.3, color: "text-green-400" },
];

function CommandsAnimation() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/35 font-mono">
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/5 px-4 py-2">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-muted-foreground">copilot terminal</span>
      </div>
      <div className="space-y-1.5 p-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-purple-400">›</span>
          <span className="text-cyan-200">
            {CMD_TEXT.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.04 + i * 0.055 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="inline-block h-4 w-1.5 align-middle bg-cyan-300/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: 0.04 + CMD_TEXT.length * 0.055,
              duration: 0.55,
              repeat: 3,
            }}
          />
        </div>
        {CMD_OUTPUT.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.3 }}
            className={`text-xs ${line.color}`}
          >
            {line.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── INSTRUCTIONS ─────────────────────────────────────────────────────────────
const INSTR_LINES = [
  { label: "model:", value: "claude-sonnet-4.5", color: "#22d3ee" },
  { label: "tools:", value: "[filesystem, terminal, browser]", color: "#a855f7" },
  { label: "style:", value: "concise, TypeScript strict mode", color: "#ec4899" },
  { label: "scope:", value: "src/ — no direct test edits", color: "#f59e0b" },
  { label: "format:", value: "prettier on every file save", color: "#4ade80" },
];

function InstructionsAnimation() {
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-2 flex items-center gap-2"
      >
        <span className="text-base">📄</span>
        <span className="font-mono text-xs text-muted-foreground">
          .github/copilot-instructions.md
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="ml-auto rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-300"
        >
          read by agent
        </motion.span>
      </motion.div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
        {INSTR_LINES.map((line, i) => (
          <motion.div
            key={line.label}
            initial={{ opacity: 0, backgroundColor: "rgba(34,211,238,0)" }}
            animate={{
              opacity: 1,
              backgroundColor: [
                "rgba(34,211,238,0)",
                "rgba(34,211,238,0.08)",
                "rgba(34,211,238,0)",
              ],
            }}
            transition={{ delay: i * 0.22 + 0.2, duration: 0.55 }}
            className="flex items-center gap-3 border-b border-white/5 px-4 py-2 font-mono text-xs last:border-0"
          >
            <span className="w-16 shrink-0 text-muted-foreground">{line.label}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.22 + 0.32 }}
              style={{ color: line.color }}
            >
              {line.value}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── PERMISSIONS ──────────────────────────────────────────────────────────────
const PERM_REQUESTS = [
  { action: 'write_file("src/app.ts")', allowed: true, reason: "In allowed scope" },
  { action: 'delete_repository("team/prod")', allowed: false, reason: "Destructive — blocked" },
  { action: 'run_terminal("bun test")', allowed: true, reason: "Test command allowed" },
  { action: 'network_request("evil.com")', allowed: false, reason: "Unknown domain" },
];

function PermissionsAnimation() {
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-2 flex items-center gap-2"
      >
        <Shield className="h-4 w-4 text-yellow-400" />
        <span className="text-xs font-semibold text-yellow-300">
          Permission Gate — evaluating agent requests
        </span>
      </motion.div>
      {PERM_REQUESTS.map((req, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.33 + 0.15 }}
          className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-2"
        >
          <code className="flex-1 truncate font-mono text-xs text-foreground/70">{req.action}</code>
          <span className="hidden shrink-0 text-[10px] text-muted-foreground md:block">
            {req.reason}
          </span>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.33 + 0.42, type: "spring", stiffness: 500 }}
            className={`flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${
              req.allowed
                ? "border-green-500/40 bg-green-500/15 text-green-300"
                : "border-red-500/40 bg-red-500/15 text-red-300"
            }`}
          >
            {req.allowed ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            {req.allowed ? "ALLOWED" : "BLOCKED"}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Animation map ─────────────────────────────────────────────────────────────
function renderConceptAnimation(concept: string) {
  switch (concept) {
    case "TOOLS":
      return <ToolsAnimation />;
    case "MCP":
      return <MCPAnimation />;
    case "HOOKS":
      return <HooksAnimation />;
    case "SKILLS":
      return <SkillsAnimation />;
    case "COMMANDS":
      return <CommandsAnimation />;
    case "INSTRUCTIONS":
      return <InstructionsAnimation />;
    case "PERMISSIONS":
      return <PermissionsAnimation />;
    default:
      return null;
  }
}

// ── Slide ─────────────────────────────────────────────────────────────────────
export function Slide05Concepts() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const handleConceptClick = (name: string) => {
    setSelectedConcept(name);
    setAnimKey((k) => k + 1);
  };

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
            <span className="text-gradient">Universal Concepts</span> Across All Agentic Tools
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            Learn once, apply anywhere.{" "}
            <span className="font-semibold text-foreground">Click any card</span> to see an
            interactive demo — click again to replay.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {concepts.map((c, i) => {
            const isActive = selectedConcept === c.name;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.2 + i * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleConceptClick(c.name)}
                className={`glass group relative cursor-pointer overflow-hidden rounded-2xl p-5 transition-all duration-300 ${
                  isActive
                    ? "border-white/30 shadow-[0_0_60px_-14px_rgba(34,211,238,0.85)]"
                    : "hover:shadow-[0_0_55px_-14px_rgba(168,85,247,0.7)]"
                }`}
              >
                <motion.div
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#ec4899]"
                  animate={{ opacity: isActive ? [0.35, 1, 0.35] : [0.2, 0.5, 0.2] }}
                  transition={{ duration: 1.15, repeat: Infinity }}
                />
                <motion.div
                  className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5"
                  animate={{ y: isActive ? [0, -4, 0] : [0, -1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.06 }}
                >
                  <c.icon
                    className="h-5 w-5 text-cyan-200 group-hover:text-cyan-100"
                    strokeWidth={2.2}
                  />
                </motion.div>
                <div className="text-gradient mb-1 font-display text-lg font-bold">{c.name}</div>
                <div className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/90">
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

        {/* Demo panel */}
        <AnimatePresence mode="wait">
          {selectedConcept ? (
            <motion.div
              key={`${selectedConcept}-${animKey}`}
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="font-display text-base font-semibold text-foreground md:text-lg">
                  {selectedConcept} — interactive demo
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAnimKey((k) => k + 1)}
                  className="cursor-pointer rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-200 transition-colors hover:bg-cyan-400/20"
                >
                  ↺ replay
                </motion.button>
              </div>
              {renderConceptAnimation(selectedConcept)}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="glass rounded-2xl px-4 py-3 text-center text-sm text-muted-foreground"
            >
              👆 Click any concept card above to see an interactive animation demo
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
}
