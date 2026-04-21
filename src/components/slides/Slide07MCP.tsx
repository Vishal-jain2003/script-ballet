import { motion } from "framer-motion";
import { Database, Ticket, Network } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { AnimatedText } from "../AnimatedText";
import { CountUp } from "../CountUp";

const useCases = [
  { icon: Database, title: "Database-Aware Dev", desc: "Agent queries live DB schema" },
  { icon: Ticket, title: "Ticket-Driven Dev", desc: "Agent reads & implements Jira tasks" },
  { icon: Network, title: "Full-Context Dev", desc: "GitHub + Slack + DB = total awareness" },
];

const servers = ["postgres", "github", "slack", "puppeteer", "filesystem", "jira", "+100 more"];

export function Slide07MCP() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-8">
        <div className="text-center space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl md:text-5xl"
          >
            MCP — The <span className="text-gradient">USB-C of AI</span> Integrations
          </motion.h2>
          <AnimatedText
            text="One protocol. Any agent. Any service."
            className="text-muted-foreground text-lg font-mono"
            delay={0.6}
          />
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass rounded-2xl p-6 border border-rose-400/20"
          >
            <div className="text-xs uppercase tracking-widest text-rose-400 mb-2">Before</div>
            <div className="flex items-baseline gap-3">
              <CountUp to={100} className="text-5xl font-black text-rose-400 line-through decoration-rose-500/60" />
              <span className="text-foreground/80">custom integrations 😩</span>
            </div>
            <div className="text-sm text-muted-foreground mt-2 font-mono">10 tools × 10 services</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="glass rounded-2xl p-6 border border-emerald-400/30 glow-cyan"
          >
            <div className="text-xs uppercase tracking-widest text-[#22d3ee] mb-2">After</div>
            <div className="flex items-baseline gap-3">
              <CountUp
                to={10}
                delay={1.4}
                className="text-5xl font-black text-gradient"
              />
              <span className="text-foreground/80">integrations ✅</span>
            </div>
            <div className="text-sm text-muted-foreground mt-2 font-mono">10 tools × 1 protocol</div>
          </motion.div>
        </div>

        {/* Center diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
        >
          {["AI Agent", "MCP Client", "MCP Server"].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + i * 0.2, type: "spring" }}
                className="glass-strong rounded-xl px-5 py-3 font-mono text-sm font-semibold"
              >
                {label}
              </motion.div>
              {i < 2 && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 40 }}
                  transition={{ delay: 1.7 + i * 0.2 }}
                  className="relative h-px bg-gradient-to-r from-[#22d3ee] to-[#a855f7]"
                >
                  <motion.span
                    className="absolute -top-1 h-2 w-2 rounded-full bg-[#22d3ee] shadow-[0_0_10px_#22d3ee]"
                    animate={{ left: ["-5%", "105%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Use cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {useCases.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + i * 0.15 }}
              className="glass rounded-xl p-5 hover:scale-105 transition-transform"
            >
              <u.icon className="h-6 w-6 text-[#22d3ee] mb-2" />
              <div className="font-display font-bold text-base mb-1">{u.title}</div>
              <div className="text-xs text-muted-foreground">{u.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {servers.map((s) => (
            <span
              key={s}
              className="font-mono text-xs rounded-full glass px-3 py-1 text-foreground/70"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </SlideShell>
  );
}
