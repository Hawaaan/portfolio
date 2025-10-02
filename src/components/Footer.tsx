// src/components/Footer.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer(): JSX.Element {
  const nav = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { href: "https://github.com/", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
    { href: "https://twitter.com/", label: "X (Twitter)", Icon: Twitter },
    { href: "https://instagram.com/", label: "Instagram", Icon: Instagram },
    { href: "mailto:contact@william.design", label: "Email", Icon: Mail },
  ];

  return (
    <footer className="relative z-10 bg-dark text-zinc-300 pt-16 pb-10 px-6 overflow-hidden">
      {/* ---- Animated Aurora Background ---- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-[40%] bg-gradient-to-br from-brand-500/30 to-fuchsia-500/30 blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0], rotate: [0, 6, -4, 0] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-[40%] bg-gradient-to-br from-fuchsia-500/20 to-brand-500/20 blur-3xl"
        animate={{ x: [0, -16, 10, 0], y: [0, 12, -8, 0], rotate: [0, -5, 4, 0] }}
        transition={{ duration: 24, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      />

      {/* Watermark (softer, responsive) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold tracking-tight text-zinc-800/20">
          Eng-zoja
        </h1>
      </div>

      {/* ---- Content ---- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative container flex flex-col items-center gap-8"
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-600 text-white font-bold">
            EZ
          </span>
          <span className="font-semibold text-white">Eng-zoja</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-zinc-300 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-ghost"
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{label}</span>
            </motion.a>
          ))}
          {/* Quick contact pills */}
          <span className="hidden sm:inline h-6 w-px bg-zinc-700/60 mx-1" />
          <a href="tel:+252612910193" className="btn-ghost">
            <Phone size={18} />
            +252-612910193
          </a>
          <a href="mailto:contact@william.design" className="btn-ghost">
            <Mail size={18} />
            abdisalan1221@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />

        {/* Copyright */}
        <p className="text-xs text-zinc-400 text-center">
          © {new Date().getFullYear()} Eng-zoja — All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
