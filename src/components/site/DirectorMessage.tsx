import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const paragraphs = [
  "At East Wind Contractors, this is not just a business, it is a vision that refused to stay ordinary.",
  "Our founder, Dr. Mouni Teja Maharaj, M.D, began his journey in medicine, trained as a doctor in the United States and worked within some of the most disciplined and prestigious environments. Alongside, he was exposed to global architecture, luxury spaces and radically different cultures across the Western world experiences that completely reshaped how he saw life, people and the spaces they live in.",
  "What he discovered was simple yet powerful spaces heal, inspire and transform human behavior just like medicine does. From hospital corridors to high-end global interiors, from structured systems to artistic chaos, a new obsession was born: to create spaces that carry emotion, identity and soul.",
  "This passion led to East Wind Contractors, a platform where clinical precision meets artistic madness, where discipline meets creativity, and where global exposure meets deep-rooted Indian heritage.",
  "We don't believe in 'just interiors.' We believe in experiences that hit differently, spaces that don't just look good, but feel powerful. We design with obsession, build with intensity, and execute with responsibility. Every project is a living story, never a contract.",
];

const DirectorMessage = () => (
  <section
    id="director"
    className="py-14 bg-espresso text-cream relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--gold))_0%,transparent_55%)]" />

    <div className="container relative max-w-3xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-gold tracking-[0.3em] text-xs uppercase mb-2"
      >
        Director's Message
      </motion.p>
    

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl md:text-4xl leading-snug mb-6"
      >
        A vision that refused to stay{" "}
        <em className="not-italic text-gold">ordinary.</em>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border-l-2 border-gold/40 pl-5"
      >
        <Quote className="h-6 w-6 text-gold/50 mb-3" />
        <div className="space-y-3 text-cream/80 leading-relaxed text-sm md:text-base">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <p className="mt-6 font-display text-base text-gold italic">
          "We are not here to follow design trends. We are here to create spaces that people remember forever."
        </p>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-8 bg-gold/40" />
          <div>
            <p className="font-display text-sm text-cream">Dr. Maharaj, M.D</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60">Founder &amp; Director</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DirectorMessage;