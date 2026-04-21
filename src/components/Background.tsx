import { motion } from "framer-motion";

export function Orbs({ intense = false }: { intense?: boolean }) {
  const opacity = intense ? 0.7 : 0.5;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full drift-1"
        style={{
          background: "radial-gradient(circle, #6366f1, transparent 60%)",
          opacity,
          filter: "blur(60px)",
        }}
      />
      <motion.div
        className="absolute top-1/4 -right-40 h-[720px] w-[720px] rounded-full drift-2"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent 60%)",
          opacity,
          filter: "blur(70px)",
        }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 h-[560px] w-[560px] rounded-full drift-3"
        style={{
          background: "radial-gradient(circle, #ec4899, transparent 60%)",
          opacity: opacity * 0.9,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

export function GridOverlay() {
  return <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" />;
}

export function Particles({ count = 40 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const dur = Math.random() * 8 + 6;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -40, -80],
            }}
            transition={{ duration: dur, repeat: Infinity, delay: Math.random() * 6 }}
          />
        );
      })}
    </div>
  );
}
