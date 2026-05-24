import { motion } from "framer-motion";
import { Heart, Sparkles, Hammer, ShieldCheck, Compass, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Designed Around You",
    desc: "Fully customized interiors composed around your lifestyle, values and emotional connection to home.",
  },
  {
    icon: Sparkles,
    title: "Modern Meets Ethnic",
    desc: "Clean contemporary aesthetics blended with rich Indian heritage and vernacular detailing.",
  },
  {
    icon: Leaf,
    title: "Back to Roots",
    desc: "Earthy textures, natural materials and cultural patterns that carry warmth, identity and soul.",
  },
  {
    icon: Hammer,
    title: "Honest Craftsmanship",
    desc: "Every detail carefully curated and beautifully delivered — handcrafted with traditional skill.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Execution",
    desc: "Concept to completion handled with responsibility, transparency and uncompromising quality.",
  },
  {
    icon: Compass,
    title: "Timeless & Soulful",
    desc: "Spaces that feel familiar, comforting and rooted built to remain meaningful for years.",
  },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 md:py-32 bg-cream">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Why Choose Us</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          Spaces that feel <em className="not-italic text-accent">personal, emotional &amp; rooted.</em>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          We don't just design spaces we create environments shaped with care, intention and a deep respect for tradition, culture and timeless living. Choosing East Wind Contractors is choosing a design journey that reconnects you with heritage and transforms your space into something truly soulful.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="group relative bg-background border border-border rounded-sm p-7 hover:border-gold hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-sm bg-gradient-gold flex items-center justify-center text-espresso flex-shrink-0">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-primary leading-tight">{r.title}</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
