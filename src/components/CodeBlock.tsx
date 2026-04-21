import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  speed?: number;
  startDelay?: number;
}

// Very lightweight token highlighter
function highlight(line: string) {
  // comments
  if (/^\s*#/.test(line) || /^\s*\/\//.test(line)) {
    return <span className="text-muted-foreground/70">{line}</span>;
  }
  const parts: React.ReactNode[] = [];
  const regex =
    /(".*?"|'.*?'|\b(?:const|let|var|function|return|import|from|export|async|await|if|else|true|false|null|undefined|class|new|public|private)\b|\b\d+\b|✓|✗|⚠️|→|←)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(line)) !== null) {
    if (m.index > last) parts.push(line.slice(last, m.index));
    const t = m[0];
    let cls = "";
    if (t.startsWith('"') || t.startsWith("'")) cls = "text-[#f472b6]";
    else if (/^\d+$/.test(t)) cls = "text-[#fbbf24]";
    else if (t === "✓") cls = "text-[#4ade80]";
    else if (t === "✗") cls = "text-[#f87171]";
    else if (t === "⚠️") cls = "";
    else if (t === "→" || t === "←") cls = "text-[#22d3ee]";
    else cls = "text-[#c084fc]";
    parts.push(
      <span key={key++} className={cls}>
        {t}
      </span>,
    );
    last = m.index + t.length;
  }
  if (last < line.length) parts.push(line.slice(last));
  return parts;
}

export function CodeBlock({
  code,
  filename,
  speed = 14,
  startDelay = 300,
}: CodeBlockProps) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setShown((s) => {
          if (s >= code.length) {
            clearInterval(id);
            return s;
          }
          return s + 1;
        });
      }, speed);
      return () => clearInterval(id);
    }, startDelay);
    return () => clearTimeout(start);
  }, [code, speed, startDelay]);

  const visible = code.slice(0, shown);
  const lines = visible.split("\n");
  const done = shown >= code.length;

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
          <span className="ml-3 text-xs text-muted-foreground font-mono">{filename}</span>
        )}
      </div>
      <pre className="font-mono text-sm leading-relaxed p-6 text-foreground/90 whitespace-pre-wrap overflow-auto max-h-[500px]">
        {lines.map((l, i) => (
          <div key={i}>
            {highlight(l)}
            {i === lines.length - 1 && !done && <span className="caret">▌</span>}
          </div>
        ))}
        {done && <span className="caret">▌</span>}
      </pre>
    </motion.div>
  );
}
