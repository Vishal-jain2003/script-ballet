import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CountUp({
  to,
  duration = 1.4,
  className = "",
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start = 0;
    const t0 = performance.now() + delay * 1000;
    const tick = (t: number) => {
      if (t < t0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      if (!start) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      {n}
      {suffix}
    </motion.span>
  );
}
