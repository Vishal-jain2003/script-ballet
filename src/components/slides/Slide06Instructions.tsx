import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { CodeBlock } from "../CodeBlock";

const tools = [
  { tool: "Claude Code", file: "CLAUDE.md" },
  { tool: "GitHub Copilot", file: ".github/copilot-instructions.md" },
  { tool: "Cursor", file: ".cursorrules" },
  { tool: "Windsurf", file: ".windsurfrules" },
];

const anatomy = [
  "PROJECT IDENTITY",
  "STRUCTURE MAP",
  "CONVENTIONS",
  "COMMANDS",
  "GUARDRAILS",
];

const codeContent = `# TaskFlow API - CLAUDE.md

## Project Summary
TaskFlow API is the backend for an internal workflow platform.
Keep changes small, explicit, and easy to review.

## Stack
- Node.js 20 + Express + TypeScript
- PostgreSQL + Prisma ORM
- Jest + pnpm

## Code Structure
- routes/ -> HTTP entry points
- services/ -> business logic
- repositories/ -> database access
- validators/ -> Zod schemas

## Working Rules
✓ ALWAYS use the repository pattern
✓ Keep route handlers thin
✓ Validate all input with Zod
✓ Prefer small composable functions
✗ NEVER put DB queries in routes
✗ Never modify prisma/migrations/

## Commands
- pnpm dev
- pnpm test
- pnpm lint
- pnpm prisma migrate dev

## Definition of Done
✓ Tests pass
✓ Types are clean
✓ No broken imports
✓ Update docs when behavior changes

## When In Doubt
- Read existing patterns first
- Match nearby file conventions
- Leave a short summary of what changed`;

export function Slide06Instructions() {
  return (
    <SlideShell>
      <div className="space-y-7">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center font-display font-black text-3xl md:text-5xl"
        >
          Instruction File
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            {tools.map((t, i) => (
              <motion.div
                key={t.tool}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 glass rounded-lg px-4 py-2.5"
              >
                <span className="text-sm text-foreground/80 min-w-[140px]">{t.tool}</span>
                <span className="text-[#22d3ee]">→</span>
                <span className="font-mono text-sm text-[#c084fc]">{t.file}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-center text-sm italic text-muted-foreground pt-2"
            >
              ↑ All the same concept ↑
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {anatomy.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="rounded-full bg-gradient-primary/20 border border-purple-400/30 px-3 py-1.5 text-xs font-bold tracking-wider text-purple-200"
              >
                {i + 1}. {a}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <CodeBlock code={codeContent} filename="CLAUDE.md" speed={10} startDelay={800} />
        </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
