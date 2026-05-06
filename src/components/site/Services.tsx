import { motion } from "framer-motion";
import { Compass, Hammer, Package, KeyRound } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Interior Design",
    desc: "Spaces that are visually striking, highly functional and tailored to each client's lifestyle or business needs.",
  },
  {
    icon: Hammer,
    title: "Construction",
    desc: "Strong technical expertise and disciplined project management delivering structures that stand the test of time.",
  },
  {
    icon: Package,
    title: "Material Supply",
    desc: "Reliable sourcing and strong vendor networks ensuring durability, consistency and cost efficiency.",
  },
  {
    icon: KeyRound,
    title: "Turnkey Projects",
    desc: "Design, planning, procurement, execution and finishing — fully completed, ready-to-use spaces.",
  },
];

const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          A complete design & build experience.
        </h2>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-cream p-8 rounded-sm border border-border hover:border-gold transition-all duration-500 hover:shadow-elegant hover:-translate-y-2"
          >
            <div className="h-14 w-14 rounded-sm bg-gradient-gold flex items-center justify-center mb-6 text-espresso">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl text-primary mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <span className="absolute top-6 right-6 font-display text-3xl text-gold/30 group-hover:text-gold/60 transition-colors">
              0{i + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
