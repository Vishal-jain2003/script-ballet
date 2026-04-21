import { ReactNode } from "react";
import { Orbs, GridOverlay } from "./Background";

export function SlideShell({
  children,
  withOrbs = true,
  withGrid = true,
  intense = false,
  className = "",
}: {
  children: ReactNode;
  withOrbs?: boolean;
  withGrid?: boolean;
  intense?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`relative h-full w-full overflow-hidden flex items-center justify-center px-6 md:px-16 lg:px-24 ${className}`}
    >
      {withOrbs && <Orbs intense={intense} />}
      {withGrid && <GridOverlay />}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  glow = "cyan",
}: {
  children: ReactNode;
  glow?: "cyan" | "purple" | "pink";
}) {
  const cls = {
    cyan: "border-[#22d3ee]/40 text-[#22d3ee] shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)]",
    purple: "border-purple-400/40 text-purple-300 shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]",
    pink: "border-pink-400/40 text-pink-300 shadow-[0_0_30px_-8px_rgba(236,72,153,0.6)]",
  }[glow];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] glass ${cls}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
}
