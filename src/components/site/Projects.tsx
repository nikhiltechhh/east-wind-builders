import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import hero from "@/assets/hero-interior.jpg";
import about from "@/assets/about-interior.jpg";

const items = [
  { img: "https://i.pinimg.com/1200x/8a/d3/d3/8ad3d3d9e170b9ea572db0257ff05f21.jpg", title: "Master Bedroom Suite", tag: "Residential" },
  { img: "https://i.pinimg.com/736x/fd/ce/cf/fdcecfa3b1a5f4d89d74ced197869036.jpg", title: "Heritage Dining Room", tag: "Residential" },
  { img: "https://i.pinimg.com/1200x/f3/eb/fb/f3ebfba4e95988ef98d1fa0834c763a9.jpg", title: "Corporate Lobby", tag: "Commercial" },
  { img: "https://i.pinimg.com/736x/e9/33/e3/e933e3427a7ad5571098b58aa5b7b347.jpg", title: "Spa Bathroom", tag: "Residential" },
  { img: "https://i.pinimg.com/1200x/83/0a/8f/830a8fedbfdcc72f823ae98e06c501f5.jpg", title: "Open Living Space", tag: "Turnkey" },
  { img: "https://i.pinimg.com/1200x/85/ed/95/85ed959fab841411bd34274d84a1a9cf.jpg", title: "Lounge Detailing", tag: "Interior" },
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
