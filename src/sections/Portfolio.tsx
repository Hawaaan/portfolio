import SectionHeader from "../components/SectionHeader";
import { portfolio } from "../data/content";
import { motion } from "framer-motion";

export default function Portfolio(): JSX.Element {
  return (
    <section id="portfolio">
      <SectionHeader title="My Latest Works" sub="Recent projects and explorations." />
      <div className="container grid md:grid-cols-2 gap-8 -mt-8">
        {portfolio.map((p, i) => (
          <motion.article
            key={p.id}
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="aspect-video bg-zinc-900 grid place-items-center text-zinc-600">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <>Thumbnail</>
              )}
            </div>

            <div className="p-6">
              <h3 className="h3">{p.title}</h3>
              <p className="muted">{p.company}</p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost mt-4"
                  aria-label={`View ${p.title} project`}
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
