// src/components/Stats.tsx
import React, { useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Award, Briefcase, Layers, Smile } from "lucide-react";

/**
 * Polished Stats with animated counters, subtle glow, and accessibility
 * FIX v2: Removed dependency on `animate(...)` and implemented a
 * version-agnostic, requestAnimationFrame-based count-up.
 * This avoids any framer-motion version mismatches causing errors like
 * `mv.animate is not a function` or missing `animate()` util.
 */

const items = [
  { k: "+1", v: "Years of Experience", Icon: Briefcase },
  { k: "+8", v: "Projects Completed", Icon: Layers },
  { k: "+18", v: "Happy Clients", Icon: Smile },
  { k: "+2", v: "Awards Won", Icon: Award },
];

// Parse helper so behavior is easy to test and reason about
export function parseStat(input: string): { sign: string; num: number } {
  // ✅ ka saar named groups si ay ula shaqeyso ES2015
  const m = input.match(/^([+\-]?)(\d+)/);
  const sign = (m?.[1] ?? "").trim();
  const num = Number(m?.[2] ?? 0);
  return { sign, num: Number.isFinite(num) ? num : 0 };
}

function CountUp({ target, start = 0, duration = 1800 }: { target: number; start?: number; /** ms */ duration?: number }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(start);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (reduce) {
      mv.set(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const from = mv.get();
    const to = target;
    const d = Math.max(1, duration);

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / d);
      // easeOutCubic
      const e = 1 - Math.pow(1 - p, 3);
      mv.set(from + (to - from) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, reduce]);

  return <motion.span aria-hidden>{rounded}</motion.span>;
}

export default function Stats(): JSX.Element {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40% 0px -40% 0px" });

  return (
    <section className="relative py-12">
      {/* Halo accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-40 w-40 rounded-full opacity-20 blur-3xl"
          style={{ background: "conic-gradient(from 0deg, #7c3aed, #ec4899, #06b6d4, #7c3aed)" }}
        />
      </div>

      <div ref={ref} className="relative container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((it, i) => {
          const { sign, num } = parseStat(it.k);
          const Icon = it.Icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-md"
            >
              {/* subtle corner glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-md"
              />

              <div className="flex items-center justify-center gap-2 text-zinc-400">
                <Icon size={16} />
                <span className="text-[11px] uppercase tracking-wide">{it.v}</span>
              </div>

              <div className="mt-2 text-4xl md:text-5xl font-extrabold text-white tabular-nums">
                <span className="align-baseline text-brand-400">{sign}</span>
                {isInView ? <CountUp target={num} /> : 0}
              </div>

              {/* underline */}
              <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </motion.div>
          );
        })}
      </div>

      {/* vertical dividers (only md+) */}
      <div aria-hidden className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="container mx-auto grid grid-cols-4">
          <span className="col-span-1 h-0.5 bg-white/0" />
          <span className="h-full w-px justify-self-center bg-white/10" />
          <span className="h-full w-px justify-self-center bg-white/10" />
          <span className="h-full w-px justify-self-center bg-white/10" />
        </div>
      </div>

      {/**
       * Dev-only assertions (simple tests) — won't affect production
       * We keep behavior identical: integer-only parsing with optional leading sign
       */}
      {process.env.NODE_ENV !== "production" && (
        <div style={{ display: "none" }}>
          {(() => {
            const T = [
              { i: "+1", e: { sign: "+", num: 1 } },
              { i: "+180", e: { sign: "+", num: 180 } },
              { i: "8", e: { sign: "", num: 8 } },
              { i: "002", e: { sign: "", num: 2 } },
              { i: "-3", e: { sign: "-", num: 3 } },
            ];
            T.forEach(({ i, e }) => {
              const r = parseStat(i);
              console.assert(r.sign === e.sign && r.num === e.num, `parseStat failed for ${i}`, r, e);
            });
            return null;
          })()}
        </div>
      )}
    </section>
  );
}

