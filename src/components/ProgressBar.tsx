import { motion } from "framer-motion";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
      <motion.div
        className="h-full bg-gradient-primary"
        style={{ boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
        initial={false}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
