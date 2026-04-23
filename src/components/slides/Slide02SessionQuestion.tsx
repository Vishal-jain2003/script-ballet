import { Bot, Brain, Sparkles } from "lucide-react";
import { SlideShell, Eyebrow } from "../SlideShell";

// my name is 

const keyPoints = [
  "Move from chat-based help to goal-driven task execution",
  "Embed agents into planning, coding, testing, and documentation",
  "Keep humans in the loop for scope, guardrails, and review",
  "Treat the agent as part of the SDLC, not a one-off assistant",
];

export function Slide02SessionQuestion() {
  return (
    <SlideShell>
      <div className="space-y-8 lg:space-y-10">
        <div className="space-y-5">
          <div className="space-y-4">
            <Eyebrow glow="pink">Core Question</Eyebrow>
            <h2 className="font-display font-black leading-tight text-4xl md:text-6xl lg:text-[4.25rem] max-w-5xl">
              How do we move from AI chat to an agent-powered development lifecycle?
            </h2>
          </div>

          <div className="h-1 origin-left rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 shadow-[0_0_32px_rgba(168,85,247,0.55)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-4 md:p-5 border-pink-400/30">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-pink-300 mt-0.5" />
                <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                  Core idea: developers are moving from code producers to system
                  designers, reviewers, and orchestrators.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/5 px-4 py-4 md:px-5 md:py-5">
              <div className="font-display text-xl md:text-2xl font-black text-foreground tracking-wide">
                What will be discussed in this session
              </div>
              <ul className="space-y-3">
                {keyPoints.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2.5 h-2.5 w-2.5 rounded-full bg-gradient-primary flex-shrink-0" />
                    <span className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[240px] glass-strong rounded-[2rem] p-3 md:p-4">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-display text-sm md:text-base font-bold text-foreground">
                    Thinking agent
                  </div>
                  <div className="text-[8px] font-mono tracking-[0.25em] uppercase text-cyan-300/90">
                    reasoning loop
                  </div>
                </div>
                <Brain className="h-4 w-4 text-pink-300" />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top,#19294f_0%,#120f24_48%,#0b0914_100%)]">
                <div className="absolute left-4 top-4 h-14 w-14 rounded-full border border-cyan-300/30 bg-cyan-400/8" />
                <div className="absolute right-4 top-6 h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(236,72,153,0.9)]" />
                <div className="absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 rounded-full border border-white/10 bg-white/6 blur-[1px]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative mt-4">
                    <div className="mx-auto h-20 w-20 rounded-[38%] border border-cyan-200/30 bg-gradient-to-br from-cyan-200/95 via-sky-100/90 to-purple-200/90 shadow-[0_0_40px_rgba(34,211,238,0.18)]" />
                    <div className="absolute left-1/2 top-1 h-4 w-1.5 -translate-x-1/2 rounded-full bg-pink-300 shadow-[0_0_14px_rgba(236,72,153,0.8)]" />
                    <div className="absolute left-1/2 top-5 h-2 w-10 -translate-x-1/2 rounded-full bg-slate-900/15" />
                    <div className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-slate-900/55 shadow-[0_0_10px_rgba(15,23,42,0.25)]" />
                      <span className="h-2 w-2 rounded-full bg-slate-900/55 shadow-[0_0_10px_rgba(15,23,42,0.25)]" />
                    </div>
                    <div className="absolute left-1/2 top-12 h-3 w-8 -translate-x-1/2 rounded-full border border-slate-900/15 bg-slate-900/10" />
                    <div className="absolute left-1/2 top-20 h-16 w-32 -translate-x-1/2 rounded-[44px] border border-white/10 bg-white/76 shadow-[0_24px_40px_rgba(11,9,20,0.28)]" />
                    <div className="absolute left-1/2 top-[5.5rem] h-7 w-[6.5rem] -translate-x-1/2 rounded-[36px] bg-slate-900/20" />
                    <div className="absolute -left-4 top-[3.5rem] h-7 w-7 rounded-full border border-cyan-300/35 bg-cyan-400/12" />
                    <div className="absolute -right-5 top-[3rem] h-4 w-4 rounded-full border border-pink-300/35 bg-pink-400/20" />
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/10 absolute -right-1 top-[5rem]">
                      <Bot className="h-3 w-3 text-cyan-200" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/42 px-2 py-1.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground/85">
                    <Brain className="h-3 w-3 text-cyan-300" />
                    Thinking through the next step
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
