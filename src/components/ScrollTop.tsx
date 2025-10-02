
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollTop(): JSX.Element {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: .9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white grid place-items-center shadow-soft"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="scroll to top">
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
