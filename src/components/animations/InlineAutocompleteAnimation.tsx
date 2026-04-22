import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface InlineAutocompleteAnimationProps {
  code: string;
  suggestion: string;
  filename?: string;
  speed?: number;
  startDelay?: number;
}

export function InlineAutocompleteAnimation({
  code,
  suggestion,
  filename,
  speed = 30,
  startDelay = 300,
}: InlineAutocompleteAnimationProps) {
  const [typedCode, setTypedCode] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionOpacity, setSuggestionOpacity] = useState(0);

  useEffect(() => {
    setTypedCode(0);
    setShowSuggestion(false);
    setSuggestionOpacity(0);

    const startTimer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        setTypedCode((prev) => {
          if (prev >= code.length) {
            clearInterval(typeInterval);
            setShowSuggestion(true);
            return prev;
          }
          return prev + 1;
        });
      }, speed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [code, speed, startDelay]);

  useEffect(() => {
    if (showSuggestion) {
      const fadeInTimer = setTimeout(() => {
        setSuggestionOpacity(1);
      }, 200);
      return () => clearTimeout(fadeInTimer);
    }
  }, [showSuggestion]);

  const visibleCode = code.slice(0, typedCode);
  const lines = visibleCode.split("\n");
  const done = typedCode >= code.length;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-2xl overflow-hidden glow-purple"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-black/40">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        {filename && (
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            {filename}
          </span>
        )}
      </div>
      <pre className="font-mono text-sm leading-relaxed p-6 text-foreground/90 whitespace-pre-wrap overflow-auto max-h-[500px] relative">
        <div className="relative">
          {lines.map((l, i) => (
            <div key={i}>
              <span className="text-foreground/90">{l}</span>
              {i === lines.length - 1 && (
                <>
                  {!done && <span className="caret">▌</span>}
                  {done && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: suggestionOpacity }}
                      className="ml-1 text-cyan-400/60"
                    >
                      {suggestion}
                    </motion.span>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-xs text-cyan-300/70 bg-cyan-500/5 px-3 py-2 rounded border border-cyan-400/20"
          >
            ↳ Inline suggestion appears instantly
          </motion.div>
        )}
      </pre>
    </motion.div>
  );
}
