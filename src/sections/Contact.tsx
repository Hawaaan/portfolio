import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

export default function Contact(): JSX.Element {
  const sendEmail = (e) =>  {
    e.preventDefault();

    emailjs.sendForm('service_yoasfvl', 'template_wjmiogr', e.target, 'HauTBnUroDZdYXQQA')
      .then((result) => {
        toast.success("Fariintaada waa la soo diray!"); // Toast for success
      }, (error) => {
        toast.error("Fariintaada lama dirin. Fadlan isku day mar kale."); // Toast for error
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          <h2 className="h2">Get in touch</h2>
          <p className="muted">I'm always excited to take on new projects and collaborate with innovative minds.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="muted text-sm">Phone</div>
              <div className="font-semibold">+252612910193</div>
            </div>
            <div className="card p-5">
              <div className="muted text-sm">Email</div>
              <div className="font-semibold">abdisalan1221@gmail.com</div>
            </div>
            <div className="card p-5 sm:col-span-2">
              <div className="muted text-sm">Address</div>
              <div className="font-semibold">Suuqbacaad Yaaqshiid Banaadir Mogadishu Somalia</div>
            </div>
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={sendEmail} className="card p-6 space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input name="user_name" required className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input name="user_email" type="email" required className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2"></textarea>
          </div>
          <button className="btn-primary">Send message</button>
        </motion.form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
}
