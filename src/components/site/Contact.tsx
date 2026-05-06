import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi East Wind Contractors,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/916359595978?text=${text}`, "_blank");
    toast.success("Opening WhatsApp to send your enquiry...");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Let's build something <em className="not-italic text-accent">remarkable</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Whether it's a full home, a commercial fit-out or a turnkey development — we'd love to hear about your vision.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:6359595978" className="flex items-center gap-4 group">
              <span className="h-12 w-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-espresso transition-all">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Call Us</p>
                <p className="font-display text-xl text-primary">+91 63595 95978</p>
              </div>
            </a>
            <a href="https://wa.me/916359595978" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <span className="h-12 w-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-espresso transition-all">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                <p className="font-display text-xl text-primary">Message us instantly</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="h-12 w-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Service Area</p>
                <p className="font-display text-xl text-primary">Pan India Projects</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-background p-8 md:p-10 rounded-sm shadow-elegant border border-border"
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">Request a Quote</h3>
          <div className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Your Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us about your project</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium hover:bg-espresso transition-colors w-full sm:w-auto justify-center"
            >
              Send Enquiry
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
