import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Initial Consultation",
    desc: "We meet with you to understand your vision, identify needs and finalize a budget aligned with your project scope.",
  },
  {
    n: "02",
    title: "Planning & Design",
    desc: "Detailed site inspection followed by a comprehensive design plan — layout, color schemes and material selection.",
  },
  {
    n: "03",
    title: "Execution & Handover",
    desc: "Our skilled team meticulously executes every detail, with a final walkthrough to ensure complete satisfaction.",
  },
];

const Approach = () => (
  <section id="approach" className="py-24 md:py-32 bg-espresso text-cream relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold))_0%,transparent_50%)]" />
    <div className="container relative">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
        <div className="max-w-2xl">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Our Approach</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            From concept to completion.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative bg-cream/5 backdrop-blur border border-cream/10 p-8 md:p-10 rounded-sm hover:border-gold/60 transition-colors"
          >
            <p className="font-display text-7xl text-gold/80">{s.n}</p>
            <h3 className="font-display text-2xl md:text-3xl mt-4 text-cream">{s.title}</h3>
            <p className="mt-4 text-cream/75 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
