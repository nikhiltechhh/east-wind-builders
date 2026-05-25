import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Leaf, Droplets, Sun } from "lucide-react";

const pillars = [
  {
    key: "design",
    label: "Landscape Design",
    icon: Leaf,
    title: "Crafting outdoor spaces that breathe life into every corner.",
    paragraphs: [
      "Our landscape design philosophy begins with understanding the land — its light, its soil, its relationship with the structure it surrounds. We create outdoor environments that feel intentional, balanced and deeply connected to the spaces they serve.",
      "Specialising in luxury landscape design for modern Indian homes and commercial properties, we blend contemporary spatial planning with lush tropical sensibilities — layered greenery, sculpted lawns, terrace gardens and beautifully conceived courtyard concepts.",
      "From detailed garden planning and execution to balcony gardens and premium outdoor styling, every project we undertake is a curated living composition designed to evolve and flourish over time.",
    ],
    highlights: [
      "Luxury Landscape Design",
      "Garden Planning & Execution",
      "Terrace & Balcony Gardens",
      "Outdoor Seating & Sit-Out Concepts",
    ],
  },
  {
    key: "elements",
    label: "Water & Stone",
    icon: Droplets,
    title: "Water, stone and earth — the timeless vocabulary of outdoor craft.",
    paragraphs: [
      "Water features bring movement, serenity and an unmistakable sense of luxury to any outdoor environment. From reflective pools and cascading water walls to decorative fountains and stream channels, we design water elements that become the soul of a space.",
      "Our stonework and pathway design draws from traditional Indian craftsmanship — handlaid natural stone, cobbled walkways, laterite borders and sculpted steps that connect spaces with both purpose and beauty.",
      "We source authentic materials — Kota stone, river pebbles, granite and terracotta — selected not just for their aesthetics but for their suitability to the local climate, ensuring outdoor surfaces that age with character.",
    ],
    highlights: [
      "Water Features & Decorative Elements",
      "Pathway & Stonework Design",
      "Natural Stone Sourcing",
      "Courtyard Concepts",
    ],
  },
  {
    key: "living",
    label: "Planting & Care",
    icon: Sun,
    title: "Every plant placed with intention. Every garden tended with pride.",
    paragraphs: [
      "Plantation and lawn development form the living heart of our landscape work. We specialise in tropical and regional plantations suited to the Indian climate — selecting species for colour, canopy, fragrance, seasonal interest and low-maintenance resilience.",
      "Outdoor lighting is the final layer that transforms a landscape from day to evening — uplighting trees, illuminating pathways, accentuating water features and creating an atmosphere of warmth and intimacy after dark.",
      "Our ongoing maintenance and landscape care services ensure your outdoor space remains vibrant through every season — with scheduled care, seasonal planting rotations and responsive attention to the health of every living element.",
    ],
    highlights: [
      "Plantation & Lawn Development",
      "Lighting for Outdoor Spaces",
      "Maintenance & Landscape Care",
      "Tropical Species Selection",
    ],
  },
];

const Landscape = () => (
  <section id="landscape" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Outdoor Spaces</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          Landscape design, planting &amp; outdoor living crafted for India.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Our team specialises in landscape design, lawn development, tropical plantations, stone pathways, water features, courtyard concepts, terrace gardens and premium outdoor styling — tailored for modern Indian homes and commercial spaces.
        </p>
      </div>

      <Tabs defaultValue="design" className="mt-12">
        <TabsList className="bg-secondary/50 h-auto p-1 flex-wrap justify-start">
          {pillars.map((p) => (
            <TabsTrigger
              key={p.key}
              value={p.key}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2 py-2.5 px-4"
            >
              <p.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{p.label}</span>
              <span className="sm:hidden">{p.label.split(" ")[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {pillars.map((p) => (
          <TabsContent key={p.key} value={p.key} className="mt-10">
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-5 gap-8 lg:gap-12"
            >
              <div className="lg:col-span-3 bg-cream border border-border rounded-sm p-8 md:p-12 shadow-soft">
                <div className="h-12 w-12 rounded-sm bg-gradient-gold flex items-center justify-center text-espresso mb-6">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                  {p.title}
                </h3>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  {p.paragraphs.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-2 bg-espresso text-cream rounded-sm p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6">Highlights</p>
                  <ul className="space-y-4">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 border-b border-cream/10 pb-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                        <span className="font-display text-lg md:text-xl">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex w-full items-center justify-center bg-gradient-gold text-espresso px-6 py-3 rounded-sm font-medium tracking-wide hover:shadow-elegant transition-all"
                >
                  Start a Conversation
                </a>
              </aside>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default Landscape;