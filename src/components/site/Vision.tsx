import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Eye, Layers, Hammer } from "lucide-react";

const pillars = [
  {
    key: "vision",
    label: "Company Vision",
    icon: Eye,
    title: "Redefining interiors through tradition & contemporary luxury.",
    paragraphs: [
      "Our vision is to create environments that are not only visually stunning but deeply meaningful spaces that reflect individuality, culture, comfort and refined living.",
      "Inspired by rich traditional elements and modern architectural excellence, we design interiors that preserve cultural essence while embracing innovation and functionality.",
      "From luxurious residences and villas to premium commercial environments, we craft interiors that evoke warmth, grandeur and harmony built to stand the test of time.",
    ],
    highlights: ["Cultural Essence", "Modern Innovation", "Personalized Concepts", "Exceptional Craftsmanship"],
  },
  {
    key: "blend",
    label: "Modern + Traditional",
    icon: Layers,
    title: "A blend of modern simplicity and the richness of cultural heritage.",
    paragraphs: [
      "We combine contemporary principles — clean lines, open layouts and functional planning — with traditional elements that bring depth, warmth and craftsmanship to every interior.",
      "Specializing in heritage and vernacular Indian design, we draw from regional architecture, local materials and cultural artistry — intricate woodwork, carved details, natural stone, earthy textures and courtyards.",
      "The result is a balanced, soulful style that feels luxurious yet rooted, contemporary yet culturally rich — where every detail tells a story.",
    ],
    highlights: ["Vernacular Indian", "Carved Detailing", "Natural Stone & Wood", "Courtyards & Texture"],
  },
  {
    key: "craft",
    label: "Craftsmanship",
    icon: Hammer,
    title: "Skill, patience and passion — shaped into every surface.",
    paragraphs: [
      "Craftsmanship is a deep respect for art, tradition and the human touch. Every detail we create carries intention — from the first cut of wood to the final finish on a surface.",
      "We work closely with skilled artisans who carry generations of knowledge in traditional Indian techniques, blending them with modern precision for interiors that are both authentic and enduring.",
      "Our promise is to build spaces that age gracefully, tell stories over time and remain timeless in both strength and style.",
    ],
    highlights: ["Heritage Techniques", "Modern Precision", "Authentic Materials", "Enduring Quality"],
  },
];

const Vision = () => (
  <section id="vision" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Our Philosophy</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
          Vision, design philosophy &amp; the craft behind every space.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          We believe great design is a balance of luxury, functionality and timeless elegance a thoughtful dialogue between heritage and modernity.
        </p>
      </div>

      <Tabs defaultValue="vision" className="mt-12">
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

export default Vision;
