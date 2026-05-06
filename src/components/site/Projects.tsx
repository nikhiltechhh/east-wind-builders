import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import hero from "@/assets/hero-interior.jpg";
import about from "@/assets/about-interior.jpg";

const items = [
  { img: p1, title: "Master Bedroom Suite", tag: "Residential" },
  { img: p2, title: "Heritage Dining Room", tag: "Residential" },
  { img: p3, title: "Corporate Lobby", tag: "Commercial" },
  { img: p4, title: "Spa Bathroom", tag: "Residential" },
  { img: hero, title: "Open Living Space", tag: "Turnkey" },
  { img: about, title: "Lounge Detailing", tag: "Interior" },
];

const Projects = () => (
  <section id="projects" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Recent Projects</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          Spaces that tell a story.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group relative overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={it.img}
              alt={it.title}
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <figcaption className="absolute bottom-0 inset-x-0 p-6 text-cream">
              <p className="text-gold text-xs tracking-[0.3em] uppercase">{it.tag}</p>
              <p className="font-display text-2xl mt-2">{it.title}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
