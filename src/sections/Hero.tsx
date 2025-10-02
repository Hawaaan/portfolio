import { motion } from "framer-motion";
import TitleRotator from "../components/TitleRotator";

const TITLES = [
  "Crafting Code into Creative Experiences",
  "Building Fast, Beautiful & Scalable Web Apps",
  "Designing the Web of Tomorrow, Today",
  "From Idea to Interactive Reality",
  "Code. Create. Innovate.",
];

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="section pt-24">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-brand-400 font-medium">👋 Hi there, I'm Eng Zoja</p>

            {/* Title + Rotating subtitle */}
            <h1 className="h1 mt-3 leading-tight">
              Web Developer •{" "}
              <TitleRotator items={TITLES} className="inline-block" />
            </h1>

            <p className="muted mt-4 max-w-xl">
              I turn ambitious ideas into high-quality digital products with elegant UI, solid architecture, and delightful interactions.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#" className="btn-primary">Download CV</a>
              <a href="#contact" className="btn-ghost">Hire me →</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -z-10 -top-10 -left-10 w-56 h-56 rounded-[40%] bg-brand-600/30 blur-3xl" />
          <img src="/src/assets/avatar.svg" alt="avatar" className="w-full max-w-sm mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
