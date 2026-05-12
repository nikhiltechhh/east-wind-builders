import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Palette, TreePine, Wind, Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories, sustainabilityPillars, type Capability } from "@/data/capabilities";
import CapabilityModal from "./CapabilityModal";
import ProcessTimeline from "./ProcessTimeline";

const pillarIcons = [Leaf, Palette, TreePine, Wind];

const Capabilities = () => {
  const [active, setActive] = useState<Capability | null>(null);

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Our Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Every space, every style — crafted with intent.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Exteriors, interiors and renovations across residential and commercial projects — with
            deep specialization in sustainable, vernacular and heritage Indian design.
          </p>
        </div>

        {/* Sustainability pillars */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sustainabilityPillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-cream border border-border rounded-sm p-5 hover:border-gold hover:shadow-soft transition-all"
              >
                <div className="h-10 w-10 rounded-sm bg-gradient-gold flex items-center justify-center text-espresso mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg text-primary leading-tight">{p.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue={categories[0].key} className="mt-16">
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <TabsList className="bg-cream border border-border h-auto p-1 flex w-max md:w-full md:justify-start gap-1">
              {categories.map((c) => (
                <TabsTrigger
                  key={c.key}
                  value={c.key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none rounded-sm px-4 py-2.5 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap"
                >
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((c) => (
            <TabsContent key={c.key} value={c.key} className="mt-10">
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-8">
                {c.intro}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {c.items.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    aria-label={`Learn more about ${item.title}`}
                    className="group relative text-left bg-cream rounded-sm overflow-hidden border border-border hover:border-gold transition-all duration-500 hover:shadow-elegant hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent opacity-90" />
                      <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-cream/95 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-90">
                        <Plus className="h-4 w-4" />
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-5">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                          {item.subtitle}
                        </p>
                        <h3 className="font-display text-2xl text-primary-foreground leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.shortDesc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary group-hover:text-gold transition-colors">
                        View Details
                        <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <ProcessTimeline />
      </div>

      <CapabilityModal capability={active} onOpenChange={(o) => !o && setActive(null)} />
    </section>
  );
};

export default Capabilities;
