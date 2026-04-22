import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { AnimatedLines } from "../AnimatedText";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const speakers = [
    {
    name: "Jakka Abhilash Reddy",
    title: "Speaker",
    initials: "JR",
    photoUrl: "/images/abhilash.png",
  },
  {
    name: "Vishal Kumar Jain",
    title: "Speaker",
    initials: "VJ",
    photoUrl: "/images/vishalimage.jpg",
  },

];

export function Slide00Introduction() {
  return (
    <SlideShell intense>
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] glass border-[#22d3ee]/40 text-[#22d3ee] shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)]">
              <Sparkles className="h-3 w-3" />
              TechTalk 2026
            </span>
          </motion.div>

          <div className="relative mt-6 max-w-4xl">
            <AnimatedLines
              lines={["Agent-Driven" , "Development with AI"]}
              className="font-display font-black tracking-tight leading-[0.95]"
              lineClassName="text-5xl md:text-7xl xl:text-8xl text-gradient"
              stagger={0.18}
            />
            <motion.div
              className="mx-auto mt-6 h-1 rounded-full bg-gradient-primary lg:mx-0"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "60%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ boxShadow: "0 0 30px rgba(168,85,247,0.7)" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
          >
            How agentic AI is rewriting the developer workflow - and how to harness it today.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_-5px_rgba(168,85,247,0.6)] transition-shadow hover:shadow-[0_0_60px_-5px_rgba(168,85,247,0.9)]"
          >
            Begin
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="mt-6 float-y"
          >
            <div className="glass rounded-xl px-5 py-3 font-mono text-sm text-foreground/80">
              <span className="text-[#22d3ee]">agent</span>
              <span className="text-foreground/60">.</span>
              <span className="text-[#c084fc]">run</span>
              <span className="text-foreground/60">(</span>
              <span className="text-[#f472b6]">'Build the auth module'</span>
              <span className="text-foreground/60">)</span>
              <span className="caret ml-1">▌</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="glass-strong mx-auto w-full max-w-2xl rounded-[2rem] p-5 text-left lg:mx-0"
        >
          <div className="space-y-4">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80 sm:text-left">
              On stage today
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 1.05 + index * 0.12 }}
                  className="glass rounded-[1.5rem] p-4"
                >
                  <div className="mx-auto h-24 w-24 md:h-28 md:w-28">
                    <Avatar className="h-full w-full rounded-full border border-white/15 shadow-2xl shadow-black/40">
                      {speaker.photoUrl ? (
                        <AvatarImage
                          src={speaker.photoUrl}
                          alt={speaker.name}
                          className="object-cover object-[center_20%]"
                        />
                      ) : null}
                      <AvatarFallback className="rounded-full bg-gradient-to-br from-cyan-400/20 via-white/5 to-pink-500/20 text-2xl font-bold text-foreground">
                        {speaker.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="mt-4 text-center">
                    <h2 className="font-display text-xl font-black md:text-2xl">{speaker.name}</h2>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
