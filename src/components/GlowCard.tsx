import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends HTMLMotionProps<"div"> {
  glow?: "purple" | "cyan" | "pink" | "green" | "red" | "amber" | "none";
  float?: boolean;
}

const glowMap = {
  purple: "shadow-[0_0_60px_-10px_rgba(168,85,247,0.45)]",
  cyan: "shadow-[0_0_60px_-10px_rgba(34,211,238,0.45)]",
  pink: "shadow-[0_0_60px_-10px_rgba(236,72,153,0.45)]",
  green: "shadow-[0_0_60px_-10px_rgba(34,197,94,0.45)]",
  red: "shadow-[0_0_60px_-10px_rgba(239,68,68,0.45)]",
  amber: "shadow-[0_0_60px_-10px_rgba(251,191,36,0.45)]",
  none: "",
};

export function GlowCard({
  children,
  className,
  glow = "purple",
  float = false,
  ...props
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 will-change-transform",
        glowMap[glow],
        float && "float-y",
        className,
      )}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
