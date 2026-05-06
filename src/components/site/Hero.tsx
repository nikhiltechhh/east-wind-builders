import { motion } from "framer-motion";
import hero from "@/assets/hero-interior.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Luxury interior designed by East Wind Contractors"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />

      <div className="container relative z-10 pt-32 pb-20">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-6"
        >
          Design · Build · Deliver
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-cream leading-[1.05] max-w-5xl"
        >
          Crafting Spaces of <em className="text-gold not-italic">Timeless</em> Elegance
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-cream/85 text-base md:text-lg leading-relaxed"
        >
          A full-service design and build company turning ideas into exceptional spaces — interiors, construction, materials and turnkey projects, all under one roof.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gradient-gold text-espresso px-8 py-4 rounded-sm font-medium tracking-wide hover:shadow-elegant transition-all"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 border border-cream/60 text-cream px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-cream hover:text-espresso transition-all"
          >
            Our Works
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-xs tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
