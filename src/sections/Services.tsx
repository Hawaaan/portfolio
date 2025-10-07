import SectionHeader from "../components/SectionHeader";
import { services } from "../data/content";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ✅ ku samee cast ammaan ah mar uun, kadib isticmaal
const ICONS = Icons as unknown as Record<string, LucideIcon>;

const getIcon = (name?: string): LucideIcon => {
  return ICONS[name ?? "Code2"] ?? Icons.Code2;
};

export default function Services(): JSX.Element {
  return (
    <section id="services">
      <SectionHeader
        eyebrow="What I do"
        title="Frontend Services"
        sub="I build fast, accessible, and delightful web apps using React, TypeScript, and modern tooling."
      />
      <div className="container grid md:grid-cols-3 gap-6 -mt-8">
        {services.map((s, i) => {
          const Icon = getIcon(s.icon);
          return (
            <motion.div
              key={s.id}
              className="card p-6 group hover:border-brand-500/50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-600/10 ring-1 ring-brand-600/30 group-hover:bg-brand-600/20">
                    <Icon size={22} className="text-brand-400" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                </div>
                <span className="text-sm text-zinc-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="muted mt-3">{s.desc}</p>
              <a href="#contact" className="btn-ghost mt-6"> Get a Quote → </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
