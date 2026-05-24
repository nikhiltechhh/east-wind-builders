import { motion } from "framer-motion";
import about from "@/assets/about-interior.jpg";

const points = [
  "Timeless Traditional Elegance",
  "Modern Design Sensibility",
  "Handcrafted Detailing",
  "Premium Materials & Finishes",
  "Personalized Concepts",
  "Residential & Commercial",
];

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-cream">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <img
          src="https://i.ibb.co/JjYM8dqz/Whats-App-Image-2026-05-13-at-3-38-51-PM-1.jpg"
          alt="Elegant interior detail by East Wind Contractors"
          className="w-full h-[480px] md:h-[600px] object-cover rounded-sm shadow-elegant"
          loading="lazy"
          width={1280}
          height={1280}
        />
        <div className="hidden md:block absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-sm shadow-elegant max-w-xs">
          <p className="font-display text-5xl text-gold">10+</p>
          <p className="mt-2 text-sm uppercase tracking-widest">Years of Craftsmanship</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">About Us</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          A perfect balance of <em className="not-italic text-accent">luxury, comfort &amp; cultural elegance.</em>
        </h2>
        <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            At East Wind Contractors, every space is designed to feel both grand and welcoming. We pair timeless traditional elements with modern sophistication intricate detailing, rich textures and handcrafted finishes set against contemporary layouts and premium materials.
          </p>
          <p>
            With a passion for excellence, we transform homes, villas, offices and commercial spaces into refined environments that embody style and individuality true expressions of elegance and timeless beauty.
          </p>
        </div>
        <ul className="mt-8 grid sm:grid-cols-2 gap-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm md:text-base text-foreground">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default About;
