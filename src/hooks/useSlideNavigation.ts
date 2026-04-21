import { useEffect } from "react";

export function useSlideNavigation({
  current,
  total,
  setCurrent,
  onTogglePause,
}: {
  current: number;
  total: number;
  setCurrent: (n: number) => void;
  onTogglePause?: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        if (current < total - 1) setCurrent(current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        if (current > 0) setCurrent(current - 1);
      } else if (e.key === "Home") {
        setCurrent(0);
      } else if (e.key === "End") {
        setCurrent(total - 1);
      } else if (e.key === "Escape") {
        onTogglePause?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, total, setCurrent, onTogglePause]);
}
