import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatBotAnimationProps {
  prompt: string;
  response: string;
  startDelay?: number;
  speed?: number;
}

export function ChatBotAnimation({
  prompt,
  response,
  startDelay = 300,
  speed = 30,
}: ChatBotAnimationProps) {
  const [typedPrompt, setTypedPrompt] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [typedResponse, setTypedResponse] = useState(0);

  useEffect(() => {
    setTypedPrompt(0);
    setShowResponse(false);
    setTypedResponse(0);

    const startTimer = setTimeout(() => {
      const promptInterval = setInterval(() => {
        setTypedPrompt((prev) => {
          if (prev >= prompt.length) {
            clearInterval(promptInterval);
            setShowResponse(true);
            return prev;
          }
          return prev + 1;
        });
      }, speed);

      return () => clearInterval(promptInterval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [prompt, speed, startDelay]);

  useEffect(() => {
    if (showResponse) {
      const responseDelay = setTimeout(() => {
        const responseInterval = setInterval(() => {
          setTypedResponse((prev) => {
            if (prev >= response.length) {
              clearInterval(responseInterval);
              return prev;
            }
            return prev + 1;
          });
        }, speed);

        return () => clearInterval(responseInterval);
      }, 500);

      return () => clearTimeout(responseDelay);
    }
  }, [showResponse, response, speed]);

  const visiblePrompt = prompt.slice(0, typedPrompt);
  const visibleResponse = response.slice(0, typedResponse);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-2xl overflow-hidden glow-purple max-h-[500px] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-black/40">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-3 text-xs text-muted-foreground font-mono">
          assistant.chat
        </span>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 flex flex-col">
        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-end"
        >
          <div className="max-w-xs bg-cyan-500/20 border border-cyan-400/30 rounded-lg px-4 py-3">
            <div className="text-sm text-foreground/90 font-mono break-words">
              {visiblePrompt}
              {typedPrompt < prompt.length && <span className="caret">▌</span>}
            </div>
          </div>
        </motion.div>

        {/* Assistant Response */}
        <AnimatePresence mode="wait">
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-start"
            >
              <div className="max-w-xs bg-purple-500/20 border border-purple-400/30 rounded-lg px-4 py-3">
                <div className="text-sm text-foreground/90 font-mono break-words whitespace-pre-wrap">
                  {visibleResponse}
                  {typedResponse < response.length && (
                    <span className="caret">▌</span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="border-t border-white/10 px-4 py-3 bg-black/40">
        <div className="text-xs text-muted-foreground/60 font-mono">
          Type your question...
        </div>
      </div>
    </motion.div>
  );
}
