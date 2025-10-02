import { useEffect, useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { posts } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const INTERVAL_MS = 3500;

export default function Blog(): JSX.Element {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = posts.length;

  // auto rotate
  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % total), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  const current = useMemo(() => posts[idx], [idx]);

  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  // tag → gradient background
  const bg = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes("react")) return "from-sky-500/30 to-indigo-500/30";
    if (t.includes("typescript")) return "from-emerald-500/30 to-teal-500/30";
    if (t.includes("tailwind")) return "from-fuchsia-500/30 to-violet-500/30";
    if (t.includes("next")) return "from-zinc-600/30 to-zinc-400/30";
    if (t.includes("performance")) return "from-amber-500/30 to-rose-500/30";
    return "from-brand-500/30 to-fuchsia-500/30";
  };

  return (
    <section id="blog">
      <SectionHeader
        title="Recent Blog"
        sub="Fresh tips & patterns for modern web developers."
      />

      <div className="container -mt-6">
        <div
          className="relative card overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Controls */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:bg-zinc-800 p-2"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:bg-zinc-800 p-2"
          >
            <ChevronRight size={18} />
          </button>

          {/* Slide */}
          <div className="aspect-[16/9] w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${bg(
                  current.tag
                )} grid place-items-center text-zinc-200`}
              >
                {/* “Cover” placeholder; waxaad rabtaa sawir, geli <img src=...> halkan */}
                <div className="text-center">
                  <span className="badge mb-3">{current.tag}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold max-w-3xl px-4">
                    {current.title}
                  </h3>
                  <p className="muted mt-2">{current.date} · {current.read} read</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Meta + CTA */}
          <div className="p-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="muted text-sm">
              Showing {idx + 1} / {total}
              {paused && <span className="ml-2 text-zinc-400">(paused)</span>}
            </div>
            <a
              href={current.link ?? "#"}
              className="btn-ghost"
            >
              Read article →
            </a>
          </div>

          {/* Dots */}
          <div className="pb-5 flex items-center justify-center gap-2">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition ${
                  i === idx ? "w-8 bg-brand-500" : "w-2.5 bg-zinc-700 hover:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
