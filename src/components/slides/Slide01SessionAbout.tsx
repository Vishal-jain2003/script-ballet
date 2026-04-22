import { motion } from "framer-motion";
import { Compass, Goal, MessageSquareText } from "lucide-react";
import { SlideShell, Eyebrow } from "../SlideShell";

const details = [
  {
    icon: Compass,
    title: "What This Session Is About",
    text: "How AI coding assistants evolved into autonomous agents, and what that means for daily software delivery.",
    color: "text-cyan-300",
  },
  {
    icon: Goal,
    title: "Whole Description",
    text: "A practical walkthrough of mindset, workflows, and repeatable patterns to use agentic development without hype.",
    color: "text-purple-300",
  },
  {
    icon: MessageSquareText,
    title: "Expected Outcome",
    text: "You will leave with a clear playbook to define tasks, guide agents, and review results with confidence.",
    color: "text-pink-300",
  },
];

export function Slide01SessionAbout() {
  return (
    <SlideShell>
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <Eyebrow glow="cyan">Session Setup</Eyebrow>
          <h2 className="font-display font-black tracking-tight text-4xl md:text-6xl">
            Before We Dive In
          </h2>
          <p className="max-w-3xl text-base md:text-xl text-muted-foreground">
            Let&apos;s align on scope first: what this session is, why it matters now,
            and what practical value you should expect by the end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.15 }}
                className="glass-strong rounded-3xl p-6 md:p-7"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}
