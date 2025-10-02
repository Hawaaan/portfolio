
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Clients from "./sections/Clients";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App(): JSX.Element {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark"); else root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-brand-500/40 selection:text-white">
      <Navbar theme={theme} onToggle={() => setTheme(prev => prev === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Skills />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
