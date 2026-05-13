import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import director from "@/assets/director.jpg";

const paragraphs = [
  "At East Wind Contractors, this is not just a business — it is a vision that refused to stay ordinary.",
  "Our founder, Dr. Mouni Teja Maharaj, M.D, began his journey in medicine, trained as a doctor in the United States and worked within some of the most disciplined and prestigious environments. Alongside, he was exposed to global architecture, luxury spaces and radically different cultures across the Western world — experiences that completely reshaped how he saw life, people and the spaces they live in.",
  "What he discovered was simple yet powerful — spaces heal, inspire and transform human behavior just like medicine does. From hospital corridors to high-end global interiors, from structured systems to artistic chaos — a new obsession was born: to create spaces that carry emotion, identity and soul.",
  "This passion led to East Wind Contractors — a platform where clinical precision meets artistic madness, where discipline meets creativity, and where global exposure meets deep-rooted Indian heritage.",
  "We don't believe in 'just interiors.' We believe in experiences that hit differently — spaces that don't just look good, but feel powerful. We design with obsession, build with intensity, and execute with responsibility. Every project is a living story, never a contract.",
];

const DirectorMessage = () => (
  <section id="director" className="py-24 md:py-32 bg-espresso text-cream relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--gold))_0%,transparent_55%)]" />
    <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-5"
      >
        <div className="relative">
          <img
            src={director}
            alt="Dr. Mouni Teja Maharaj, Founder of East Wind Contractors"
            className="w-full h-[480px] md:h-[600px] object-cover rounded-sm shadow-elegant"
            loading="lazy"
            width={1024}
            height={1280}
          />
          <div className="absolute -bottom-6 -left-6 bg-gradient-gold text-espresso px-6 py-4 rounded-sm shadow-elegant max-w-xs">
            <p className="font-display text-xl leading-tight">Dr. Mouni Teja Maharaj, M.D</p>
            <p className="text-[11px] tracking-[0.25em] uppercase mt-1">Founder &amp; Director</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-7"
      >
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Director's Message</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
          A vision that refused to stay <em className="not-italic text-gold">ordinary.</em>
        </h2>

        <Quote className="h-10 w-10 text-gold/60 mt-8" />
        <div className="mt-4 space-y-5 text-cream/85 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <p className="mt-10 font-display text-xl text-gold italic">
          "We are not here to follow design trends. We are here to create spaces that people remember forever."
        </p>
      </motion.div>
    </div>
  </section>
);

export default DirectorMessage;
