import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const gates = [
  { label: "Gate 1", action: "Approve Spec", when: "After Planning", pos: "20%" },
  { label: "Gate 2", action: "Approve Architecture", when: "After Design", pos: "50%" },
  { label: "Gate 3", action: "Merge the MR", when: "After CI passes", pos: "80%" },
];

const stats = [
  { value: "~95%", label: "Autonomous" },
  { value: "3", label: "Human Decisions" },
  { value: "Hours", label: "to Production" },
];

export function SlideADLC08Gates() {
  return (
    <SlideShell>
      <div className="relative z-10 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display font-black text-3xl md:text-4xl text-gradient">
            Maximum Autonomy. Minimum Interruption.
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            You only decide 3 times. Everything else is automatic.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto w-full max-w-3xl">
          {/* Background bar */}
          <div className="relative h-10 rounded-full bg-white/5 border border-white/10 overflow-visible">
            {/* Animated fill */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-emerald-500/20 border-r border-emerald-400/30"
              initial={{ width: 0 }}
              animate={{ width: "18%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.div
              className="absolute inset-y-0 rounded-full bg-emerald-500/20"
              style={{ left: "22%", right: "78%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, right: "48%" }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />
            <motion.div
              className="absolute inset-y-0 rounded-full bg-emerald-500/20"
              style={{ left: "52%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, right: "18%" }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
            <motion.div
              className="absolute inset-y-0 rounded-full bg-emerald-500/20"
              style={{ left: "82%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, right: "0%" }}
              transition={{ duration: 0.8, delay: 2.0 }}
            />

            {/* Autonomous labels on bar */}
            <div className="absolute inset-0 flex items-center justify-around px-4 pointer-events-none">
              {["🤖 Auto", "🤖 Auto", "🤖 Auto", "🤖 Auto"].map((label, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.4 }}
                  className="text-[10px] font-bold text-emerald-300"
                >
                  {label}
                </motion.span>
              ))}
            </div>

            {/* Gate markers */}
            {gates.map((gate, i) => (
              <motion.div
                key={gate.label}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: gate.pos }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.4, type: "spring" }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-red-500/30 border-2 border-red-400 flex items-center justify-center"
                  animate={{ boxShadow: ["0 0 0px rgba(239,68,68,0)", "0 0 20px rgba(239,68,68,0.8)", "0 0 0px rgba(239,68,68,0)"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <span className="text-red-300 font-black text-xs">🔴</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Gate labels below */}
          <div className="relative h-16 mt-2">
            {gates.map((gate, i) => (
              <motion.div
                key={gate.label}
                className="absolute -translate-x-1/2 text-center"
                style={{ left: gate.pos }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.4 }}
              >
                <div className="text-xs font-bold text-red-300">{gate.label}</div>
                <div className="text-[11px] text-foreground/70">{gate.action}</div>
                <div className="text-[10px] text-muted-foreground">{gate.when}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 + i * 0.15 }}
              className="glass-strong rounded-2xl p-4 text-center border border-white/10"
            >
              <div className="font-display font-black text-3xl text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
