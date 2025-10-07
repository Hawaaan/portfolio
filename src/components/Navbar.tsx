import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "public/avatar.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

type Props = { theme: "dark" | "light"; onToggle: () => void };

export default function Navbar({ theme, onToggle }: Props): JSX.Element {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-zinc-800/60 bg-zinc-950/60">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2 font-bold">
          <span className="inline-grid place-items-center w-11 h-11 rounded-full bg-brand-600 ">
            <img src={logo} alt="" className="rounded-[100px] h-10 w-10" />
          </span>
          <span className="hidden sm:block">Eng Zoja</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              className="text-zinc-300 hover:text-white"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden btn-ghost"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-zinc-800 bg-zinc-950"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  className="text-zinc-300 hover:text-white"
                  href={l.href}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
