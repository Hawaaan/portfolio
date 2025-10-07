import { image } from "framer-motion/client";
import Cart from "../assets/logos/cart-shops.png"; 
import cirfeed from "../assets/Cirfeed.png"; 
import yiksi from "../assets/logos/yiksi.png"; 
import echo from "../assets/logos/echo.png"; 
import calculator from "../assets/logos/Calculator.png"; 

export const services = [
{
    id: 1,
    title: "React / Next.js Development",
    desc: "SPA & SSR apps with clean architecture, TypeScript, and best practices.",
    icon: "Code2",
  },
  {
    id: 2,
    title: "Responsive UI & Tailwind",
    desc: "Pixel-perfect, mobile-first layouts and components with Tailwind CSS.",
    icon: "MonitorSmartphone",
  },
  {
    id: 3,
    title: "Performance Optimization",
    desc: "Core Web Vitals, code-splitting, lazy loading, and caching strategies.",
    icon: "Zap",
  },
  {
    id: 4,
    title: "Accessibility (a11y)",
    desc: "WCAG 2.1 AA, keyboard navigation, ARIA, and screen-reader support.",
    icon: "Accessibility",
  },
  {
    id: 5,
    title: "Animations & Micro-interactions",
    desc: "Delightful interactions using Framer Motion & CSS animations.",
    icon: "Sparkles",
  },
  {
    id: 6,
    title: "Testing & QA",
    desc: "Jest, React Testing Library, and Cypress with CI integration.",
    icon: "FlaskConical",
  },
];


// src/data/content.ts (ama halka aad ku haysid xogta)
export const portfolio = [
  { id: 1, title: "yiksi exchange", tag: "UI Web", company: "Project",         link: "https://website.yiksi.exchange/",      image: yiksi },           // ✅ isticmaal import-kii kore
  { id: 2, title: "Cirfeed",    tag: "Website", company: "Project", link: "https://hawaaan.github.io/Cirfeeed.com/src/login.html",    image: cirfeed },
  { id: 3, title: "Echo Daily", tag: "Product", company: "Project", link: "https://hawaaan.github.io/Echo-daily/src/index.html", image: echo },
  { id: 4, title: "App calculator", tag: "App", company: "Creative Pulse", link: "https://hawaaan.github.io/Project-Assignment/Calculator.html", image: calculator },
];


export const skills = [
  { name: "HTML5", value: 98, note: "Semantic markup" },
  { name: "CSS3", value: 92, note: "Layouts, animations, BEM" },
  { name: "JavaScript (ES6+)", value: 95, note: "Async, modules, patterns" },
  { name: "TypeScript", value: 90, note: "Typesafe React apps" },
  { name: "React", value: 95, note: "Hooks, context, performance" },
  { name: "Next.js", value: 88, note: "App Router, SSR/SSG" },
  { name: "Tailwind CSS", value: 92, note: "Design systems + utilities" },
  { name: "Framer Motion", value: 85, note: "Micro-interactions" },
];


export const posts = [
  {
    title: "React Performance Patterns for 2025: memo, signals & streaming UIs",
    tag: "React · Performance",
    date: "Jun 12, 2025",
    read: "4 min",
    link: "#",
  },
  {
    title: "TypeScript Tips for Scalable Frontends: utility types, zod, and DX",
    tag: "TypeScript",
    date: "Jun 03, 2025",
    read: "5 min",
    link: "#",
  },
  {
    title: "Tailwind CSS Architecture: design tokens, dark mode & theming",
    tag: "Tailwind",
    date: "May 26, 2025",
    read: "3 min",
    link: "#",
  },
  {
    title: "Next.js App Router: when to use SSR, SSG, ISR & edge runtime",
    tag: "Next.js",
    date: "May 18, 2025",
    read: "6 min",
    link: "#",
  },
  {
    title: "Micro-interactions with Framer Motion: patterns that feel alive",
    tag: "Framer Motion",
    date: "May 10, 2025",
    read: "4 min",
    link: "#",
  },
  {
    title: "Core Web Vitals in practice: prefetch, preconnect & code-splitting",
    tag: "Performance",
    date: "Apr 29, 2025",
    read: "5 min",
    link: "#",
  },
  // Haddii aadan haysan sawirrada, ku dar placeholders hadda: /portfolio/…
// Ku raar public/:
//   public/portfolio/calc-app.jpg
//   public/portfolio/navbar.jpg
//   public/portfolio/interaction.jpg
//   public/portfolio/consult.jpg
];

