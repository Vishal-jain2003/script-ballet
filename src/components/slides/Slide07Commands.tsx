import { motion } from "framer-motion";
import { Wrench, Eye, BookOpen, GitPullRequest, FileText, TestTube, Folder, File } from "lucide-react";
import { SlideShell } from "../SlideShell";

const commands = [
  { cmd: "/fix", desc: "Fix errors and failing tests", icon: Wrench },
  { cmd: "/review", desc: "Review code for issues & improvements", icon: Eye },
  { cmd: "/explain", desc: "Explain any code block or concept", icon: BookOpen },
  { cmd: "/create-pr", desc: "Draft, title & open a pull request", icon: GitPullRequest },
  { cmd: "/doc", desc: "Generate / update documentation", icon: FileText },
  { cmd: "/test", desc: "Write missing tests for a file", icon: TestTube },
];

const customFiles = ["onboard-feature.md", "deploy-check.md", "bug-report.md"];

export function Slide07Commands() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl md:text-5xl"
          >
            Commands — <span className="text-gradient">Instant</span> Agent Actions
          </motion.h2>
          <p className="mt-2 text-muted-foreground italic">One word. Entire workflow. Zero friction.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: What Commands Are */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Commands are <span className="text-white font-semibold">pre-built slash instructions</span> that trigger complex
              multi-step agent workflows with a <span className="text-gradient font-bold">single word</span>.
            </p>

            <div className="glass rounded-2xl p-4 space-y-1">
              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-mono">Quick Reference</div>
              {commands.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.cmd}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <Icon size={14} className="text-[#a855f7] shrink-0" />
                    <span className="font-mono text-sm text-[#22d3ee] glow-cyan w-24 shrink-0">{c.cmd}</span>
                    <span className="text-muted-foreground text-xs">{c.desc}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Before vs After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-4"
          >
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl p-4 border border-rose-500/40"
            >
              <div className="text-xs text-rose-400 uppercase tracking-widest font-mono mb-2">Before — Natural language friction 😩</div>
              <p className="text-muted-foreground text-xs italic leading-relaxed">
                "Hey, please look at this file, find all the failing tests, figure out why they're failing, fix the root
                cause, make sure nothing else broke, then also check if there are any obvious code quality issues while
                you're at it..."
              </p>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="glass-strong rounded-2xl p-4 border border-emerald-500/50 glow-cyan"
            >
              <div className="text-xs text-emerald-400 uppercase tracking-widest font-mono mb-2">After — One word. Done. ✅</div>
              <span className="font-mono text-2xl font-bold text-[#22d3ee]">/fix</span>
            </motion.div>

            {/* Custom Commands */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="glass rounded-2xl p-4"
            >
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono mb-3">Custom Commands</div>
              <div className="font-mono text-xs space-y-1">
                <div className="flex items-center gap-2 text-[#a855f7]">
                  <Folder size={12} />
                  <span>.claude/commands/</span>
                </div>
                {customFiles.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground pl-4"
                  >
                    <File size={11} />
                    <span>{f}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">Build your own team commands in markdown</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="text-center font-display italic text-xl md:text-2xl text-gradient font-bold"
        >
          "Type <span className="font-mono not-italic">/</span> and see your entire team's playbook — instantly."
        </motion.p>
      </div>
    </SlideShell>
  );
}
