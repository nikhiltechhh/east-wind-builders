import { motion } from "framer-motion";
import { Home, Building2, Wrench } from "lucide-react";

const groups = [
  {
    icon: Home,
    title: "Residential Interiors",
    tag: "Live beautifully",
    desc: "Homes that reflect comfort, personality and refined living — balancing luxury with everyday functionality.",
    items: ["Flats & Apartments", "Villas", "Farmhouses"],
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    tag: "Designed for impact",
    desc: "Dynamic spaces that elevate brand identity, productivity and customer experience — tailored to industry needs.",
    items: [
      "Office Design (Corporate · Startups · Co-working)",
      "Hospitality (Showrooms · Restaurants · Cafés · Resorts)",
      "Healthcare (Hospitals · Clinics · Diagnostics)",
      "Commercial Kitchens & Food Spaces",
      "Entertainment & Recreation",
      "Luxury Boutiques & VIP Lounges",
    ],
  },
  {
    icon: Wrench,
    title: "Renovation Services",
    tag: "Reimagine your space",
    desc: "Transform existing spaces into modern, functional and aesthetically upgraded environments — with minimal disruption.",
    items: ["Residential Renovation", "Commercial Renovation", "Space Upgrade & Remodeling"],
  },
];

const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-secondary/30">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Our Services</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          Thoughtfully designed spaces, end to end.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Residential, commercial and renovation expertise — delivered with detail, craftsmanship and clarity of vision.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <motion.article
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-cream p-8 rounded-sm border border-border hover:border-gold transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div className="h-14 w-14 rounded-sm bg-gradient-gold flex items-center justify-center text-espresso">
                <g.icon className="h-6 w-6" />
              </div>
              <span className="font-display text-3xl text-gold/30 group-hover:text-gold/60 transition-colors">
                0{i + 1}
              </span>
            </div>
            <p className="mt-6 text-[11px] tracking-[0.25em] uppercase text-gold">{g.tag}</p>
            <h3 className="font-display text-2xl md:text-3xl text-primary mt-2">{g.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>

            <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1 w-3 bg-gold flex-shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <p className="mt-12 max-w-3xl text-sm md:text-base text-muted-foreground italic">
        Every project is executed with precision, creativity and a commitment to excellence — spaces that are visually striking, meaningful, functional and built to last.
      </p>
    </div>
  </section>
);

export default Services;
