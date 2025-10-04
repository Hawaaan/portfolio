// src/components/Footer.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import React from "react";
import logo from "../assets/avatar.jpeg"

/**
 * Ultra-Unique Footer — "Ribbon & Tiles"
 * - Signature animated ribbon divider (SVG stroke animation)
 * - Mosaic link tiles with icons
 * - Orbiting badge socials (distinct glow but subtle)
 * - No external CSS — Tailwind + Framer Motion only
 */

export default function Footer(): JSX.Element {
  const tiles = [
    { href: "#home", label: "Home", desc: "Back to start" },
    { href: "#services", label: "Services", desc: "What I do" },
    { href: "#portfolio", label: "Portfolio", desc: "Selected work" },
    { href: "#blog", label: "Blog", desc: "Notes & ideas" },
    { href: "#contact", label: "Contact", desc: "Say hello" },
  ];

  const socials = [
    { href: "https://github.com/", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
    { href: "https://twitter.com/", label: "X (Twitter)", Icon: Twitter },
    { href: "https://instagram.com/", label: "Instagram", Icon: Instagram },
  ];

  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-zinc-300 selection:bg-brand-500/30 selection:text-white">
      {/* --- Signature Ribbon Divider --- */}
      <div className="relative">
        <svg className="block w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c3aed"/>
              <stop offset="50%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
          <path d="M0,80 C180,40 360,110 540,70 C720,30 900,90 1080,60 C1260,30 1350,40 1440,30 L1440,0 L0,0 Z" fill="#0b0b0b"/>
          <path
            d="M0,78 C180,38 360,108 540,68 C720,28 900,88 1080,58 C1260,28 1350,38 1440,28"
            fill="none"
            stroke="url(#ribbonGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="14 10"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-400" dur="18s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      {/* --- Content Shell --- */}
      <div className="relative max-w-7xl mx-auto px-6 pb-14">
        {/* Top Row: Badge + Pitch */}
        <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Brand badge with orbital dot */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <motion.span
                className="grid place-items-center w-14 h-14 rounded-2xl text-white font-bold bg-gradient-to-tr from-brand-600 to-fuchsia-500 shadow-[0_0_40px_-12px_rgba(236,72,153,0.45)]"
                whileHover={{ scale: 1.04 }}
              >
                EZ
              </motion.span>
              {/* orbiting dot */}
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold leading-tight">Eng-zoja</h3>
              <p className="text-sm text-zinc-400">Interfaces with personality — fast, elegant, memorable.</p>
            </div>
          </div>

          {/* Socials: unique halo buttons */}
          <div className="flex flex-wrap gap-2">
            {socials.map(({ href, label, Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2, scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs backdrop-blur-md"
              >
                <span className="absolute inset-0 rounded-full opacity-40 blur-md" style={{ background: "conic-gradient(from 0deg, #7c3aed, #ec4899, #06b6d4, #7c3aed)" }} />
                <Icon size={16} className="relative z-10" />
                <span className="relative z-10 hidden sm:inline">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mosaic Tiles */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {tiles.map((t, idx) => (
            <motion.a
              key={t.href}
              href={t.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 p-4 hover:border-fuchsia-400/40"
            >
              {/* corner accent */}
              <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-md" />
              <span className="text-sm font-medium text-white">{t.label}</span>
              <p className="mt-1 text-xs text-zinc-400">{t.desc}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] text-zinc-400">
                Explore
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-80">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M9 7H17V15" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </span>
              {/* underline swipe */}
              <motion.span
                className="absolute left-4 right-4 bottom-3 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Contact & Legal */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <a href="tel:+252612910193" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:border-cyan-400/40">
              <Phone size={16} /> +252-612910193
            </a>
            <a href="mailto:abdisalan1221@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:border-emerald-400/40">
              <Mail size={16} /> abdisalan1221@gmail.com
            </a>
          </div>

          <p className="text-[12px] text-zinc-500">© {new Date().getFullYear()} <span className="text-white/90">Eng-zoja</span> — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
