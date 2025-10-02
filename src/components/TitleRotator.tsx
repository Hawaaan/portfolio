import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = { items: string[]; intervalMs?: number; className?: string };

export default function TitleRotator({ items, intervalMs = 2400, className }: Props): JSX.Element {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-brand-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          {items[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
