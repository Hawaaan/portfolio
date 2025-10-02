
import { motion } from 'framer-motion';

type Props = { eyebrow?: string; title: string; sub?: string; id?: string };

export default function SectionHeader({ eyebrow, title, sub, id }: Props): JSX.Element {
  return (
    <div id={id} className="container section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .4 }}
        transition={{ duration: .6 }}
        className="text-center max-w-3xl mx-auto">
        {eyebrow && <div className="badge mb-3">{eyebrow}</div>}
        <h2 className="h2">{title}</h2>
        {sub && <p className="muted mt-3">{sub}</p>}
      </motion.div>
    </div>
  );
}
