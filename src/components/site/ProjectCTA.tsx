import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cta from "@/assets/cta-interior.jpg";

const ProjectCTA = () => (
  <section className="relative overflow-hidden">
    <img
      src={cta}
      alt="Elegant interior styled by East Wind Contractors"
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      width={1920}
      height={1280}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/20" />

    <div className="container relative z-10 py-24 md:py-36 lg:py-44">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">
          Let's Collaborate
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.05]">
          Have a project <em className="not-italic text-gold">in mind?</em>
        </h2>
        <p className="mt-8 text-cream/80 text-base md:text-lg leading-relaxed max-w-xl">
          Ready to transform your space? Let's turn your vision into reality. Contact us now to discuss your interior design or construction project and bring your ideas to life.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gradient-gold text-espresso px-8 py-4 rounded-sm font-medium tracking-wide hover:shadow-elegant transition-all"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:6359595978"
            className="inline-flex items-center gap-3 border border-cream/60 text-cream px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-cream hover:text-espresso transition-all"
          >
            Call 6359595978
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectCTA;
