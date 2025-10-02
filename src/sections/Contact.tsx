import { motion } from 'framer-motion';

export default function Contact(): JSX.Element {
  const MAP_LINK = "https://maps.app.goo.gl/Z7ZsBrnKjufbv8Ai6";
  const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_LINK)}&output=embed`;

  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="space-y-4"
        >
          <h2 className="h2">Get in touch</h2>
          <p className="muted">
            I'm always excited to take on new projects and collaborate with innovative minds.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="muted text-sm">Phone</div>
              <div className="font-semibold">+1-234-567-8901</div>
            </div>
            <div className="card p-5">
              <div className="muted text-sm">Email</div>
              <div className="font-semibold">contact@william.design</div>
            </div>
            <div className="card p-5 sm:col-span-2">
              <div className="muted text-sm">Address</div>
              <div className="font-semibold">0811 Erdman Prairie Road, Joaville, California 90210</div>
            </div>
          </div>
        </motion.div>

        {/* Right column: Form + Map */}
        <div className="space-y-4">
          <motion.form
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            onSubmit={(e)=>{ e.preventDefault(); alert("Thanks! I'll reach out."); }}
            className="card p-6 space-y-4"
          >
            <div>
              <label className="text-sm">Name</label>
              <input required className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2"/>
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2"/>
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2"></textarea>
            </div>
            <button className="btn-primary">Send message</button>
          </motion.form>

          {/* Google Map (responsive 16:9) */}
          <motion.div
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className="card p-0 overflow-hidden"
          >
            <div className="aspect-[16/9] w-full">
              <iframe
                src={MAP_SRC}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
            <div className="p-3 flex justify-end">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
