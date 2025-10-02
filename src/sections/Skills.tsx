import SectionHeader from "../components/SectionHeader";
import { skills } from "../data/content";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
  return (
    <section id="skills">
      <SectionHeader
        title="Frontend Skills"
        sub="Focused on performant, accessible and delightful web experiences."
      />
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 -mt-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            className="card p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-white">{s.name}</h3>
              <span className="text-sm text-zinc-400">{s.value}%</span>
            </div>

            {/* progress bar */}
            <div className="mt-4 h-2 w-full rounded-lg bg-zinc-800 overflow-hidden">
              <motion.div
                className="h-2 rounded-lg bg-brand-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            </div>

            {s.note && (
              <p className="mt-3 text-sm text-zinc-400">{s.note}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
