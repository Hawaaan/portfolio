
import { motion } from "framer-motion";

import logo from "../assets/logos/logo.svg";
import yiksi from "../assets/logos/yiksi.svg";
import dahabshiil from "../assets/logos/dahabshiil.jpg";
import hormuud from "../assets/logos/hormuud.svg";
import fintechx from "../assets/logos/fintechx.svg";
import expresspay from "../assets/logos/expresspay.svg";


type Client = { name: string; src: string };

const CLIENTS: Client[] = [
  { name: "Taran App", src: logo },
  { name: "Yiksi.com", src: yiksi },
  { name: "dahabshiil.com", src: dahabshiil },
  { name: "hormuud.com", src: hormuud },
  { name: "FintechX", src: fintechx },
  { name: "ExpressPay", src: expresspay },
];

export default function Clients(): JSX.Element {
  const track = [...CLIENTS, ...CLIENTS]; // seamless loop
  return (
    <section id="clients" className="section">
      <div className="container">
        <div className="text-center mb-8">
          <div className="badge">Partners Company</div>
          <h2 className="h2 mt-2">Trusted by industry leaders</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />
          <motion.div
            className="flex items-center gap-6 min-w-max py-4"
            initial={{ x: "0%" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {track.map((c, i) => (
              <motion.div
                key={`${c.name}-${i}`}
                whileHover={{ y: -3, scale: 1.02 }}
                className="card h-20 px-5 flex items-center justify-center"
              >
                <img
                  src={c.src}
                  alt={c.name}
                  className="h-12 w-auto opacity-90"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
