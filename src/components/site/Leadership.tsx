import { motion } from "framer-motion";
import {
  Compass,
  HardHat,
  ClipboardList,
  Factory,
  Hammer,
  Box,
  Users,
  Sparkles,
} from "lucide-react";

const expertise = [
  { icon: Compass, title: "Architecture & Interior Design" },
  { icon: HardHat, title: "Civil Engineering & Structural Execution" },
  { icon: ClipboardList, title: "Project Planning & Management" },
  { icon: Factory, title: "Modular Manufacturing & Production" },
  { icon: Hammer, title: "Fine Carpentry & Artisan Craftsmanship" },
  { icon: Box, title: "Design Visualization & 3D Development" },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Leadership Vision",
    desc: "Our directors lead with a shared belief that great spaces are created through discipline, creativity and precision shaped by global exposure and a deep understanding of human comfort.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Designers, planners, engineers and skilled craftsmen work as one integrated team ensuring every design is visually exceptional, structurally sound and practically efficient.",
  },
];

const Leadership = () => (
  <section id="leadership" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Directors &amp; Leadership</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          One integrated vision. <em className="not-italic text-accent">Many disciplines.</em>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Our leadership blends design, engineering, healthcare discipline, project management and creative arts under one unified vision bringing together global exposure, technical expertise and traditional craftsmanship.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-cream border border-border rounded-sm p-8 md:p-10 hover:border-gold hover:shadow-elegant transition-all"
          >
            <div className="h-14 w-14 rounded-sm bg-gradient-gold flex items-center justify-center text-espresso mb-6">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-primary">{p.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h3 className="font-display text-2xl md:text-3xl text-primary">
            Diverse Expertise Team
          </h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Professionals drawn from diverse educational and professional backgrounds united by craft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center gap-4 bg-secondary/40 border border-border rounded-sm p-5 hover:bg-cream hover:border-gold transition-all"
            >
              <div className="h-11 w-11 rounded-sm bg-primary/10 group-hover:bg-gradient-gold flex items-center justify-center text-primary group-hover:text-espresso transition-all flex-shrink-0">
                <e.icon className="h-5 w-5" />
              </div>
              <p className="font-medium text-foreground text-sm md:text-base leading-snug">
                {e.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-12 max-w-3xl text-sm md:text-base text-muted-foreground italic">
        At East Wind Contractors, we don't work as separate departments, we work as one integrated vision, driven by passion and precision to create spaces that truly stand out.
      </p>
    </div>
  </section>
);

export default Leadership;
