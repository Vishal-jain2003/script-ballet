import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { Slide00Introduction } from "./slides/Slide00Introduction";
import { Slide01SessionAbout } from "./slides/Slide01SessionAbout";
import { Slide02SessionQuestion } from "./slides/Slide02SessionQuestion";
import { Slide02Shift } from "./slides/Slide02Shift";
import { Slide03Agenda } from "./slides/Slide03Agenda";
import { Slide04Core } from "./slides/Slide04Core";
import { Slide05Concepts } from "./slides/Slide05Concepts";
import { Slide06Instructions } from "./slides/Slide06Instructions";
import { Slide07MCP } from "./slides/Slide07MCP";
import { Slide08Hooks } from "./slides/Slide08Hooks";
import { Slide09Skills } from "./slides/Slide09Skills";
import { Slide10Permissions } from "./slides/Slide10Permissions";
import { Slide11SDLC } from "./slides/Slide11SDLC";
import { Slide12Conclusion } from "./slides/Slide12Conclusion";

const slides = [
  Slide00Introduction,
  Slide01SessionAbout,
  Slide02SessionQuestion,
  Slide02Shift,
  Slide03Agenda,
  Slide04Core,
  Slide05Concepts,
  Slide06Instructions,
  Slide07MCP,
  Slide08Hooks,
  Slide09Skills,
  Slide10Permissions,
  Slide11SDLC,
  Slide12Conclusion,
];

const AUTOPLAY_MS = 8000;

export function SlideShow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(false);
  const [hovered, setHovered] = useState(false);
  const total = slides.length;
  const touchStart = useRef<number | null>(null);

  const goTo = (n: number) => {
    setDirection(n > current ? 1 : -1);
    setCurrent(n);
  };

  useSlideNavigation({
    current,
    total,
    setCurrent: goTo,
    onTogglePause: () => setAutoplay((p) => !p),
  });

  useEffect(() => {
    if (!autoplay || hovered) return;
    const id = setTimeout(() => {
      goTo((current + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, hovered, current, total]);

  const Active = slides[current];

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-background"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 60) {
          if (dx < 0 && current < total - 1) goTo(current + 1);
          if (dx > 0 && current > 0) goTo(current - 1);
        }
        touchStart.current = null;
      }}
    >
      <ProgressBar current={current} total={total} />

      {/* Autoplay toggle */}
      <button
        onClick={() => setAutoplay((p) => !p)}
        className="fixed top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full glass hover:scale-105 transition-transform"
        aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
      >
        {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>

      {/* Slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -direction * 80, scale: 0.95 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Active />
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows */}
      <button
        onClick={() => current > 0 && goTo(current - 1)}
        disabled={current === 0}
        className="fixed left-5 top-1/2 z-40 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full glass hover:glow-purple hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => current < total - 1 && goTo(current + 1)}
        disabled={current === total - 1}
        className="fixed right-5 top-1/2 z-40 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full glass hover:glow-purple hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Bottom counter + dots */}
      <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group p-1.5"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === current
                    ? "h-2 w-8 bg-gradient-primary shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                    : "h-2 w-2 bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
