
import { motion } from 'framer-motion';

const items = [
  { k: '+1', v: 'Years of Experience' },
  { k: '+8', v: 'Projects Completed' },
  { k: '+180', v: 'Happy Clients' },
  { k: '+2', v: 'Awards Won' },
];

export default function Stats(): JSX.Element {
  return (
    <section className="py-10 border-y border-zinc-800/60 bg-zinc-900/20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * .1 }}
            className="card py-6">
            <div className="text-4xl font-extrabold text-white">{it.k}</div>
            <div className="muted mt-1">{it.v}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
