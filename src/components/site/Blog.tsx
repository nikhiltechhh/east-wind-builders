"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const categories = ["All", "Seating", "Tables", "Storage", "Beds", "Outdoor"];

const items = [
  {
    id: 1,
    category: "Seating",
    title: "Rattan Lounge Chair",
    material: "Rattan & Linen",
    finish: "Natural",
    img: "https://i.ibb.co/jZWjnZ1m/Whats-App-Image-2026-05-15-at-6-17-30-PM-1.jpg",
  },
  {
    id: 2,
    category: "Tables",
    title: "Marble Dining Table",
    material: "Carrara Marble & Brass",
    finish: "Polished",
    img: "https://i.ibb.co/kVbBbXwK/Whats-App-Image-2026-05-15-at-6-17-30-PM.jpg",
  },
  {
    id: 3,
    category: "Storage",
    title: "Walnut Sideboard",
    material: "Solid Walnut",
    finish: "Matte Oil",
    img: "https://i.ibb.co/twHKS83Y/Whats-App-Image-2026-05-15-at-6-17-31-PM-1.jpg",
  },
  {
    id: 4,
    category: "Beds",
    title: "Upholstered Platform Bed",
    material: "Velvet & Teak",
    finish: "Smoke Grey",
    img: "https://i.ibb.co/6RzhgfQS/Whats-App-Image-2026-05-15-at-6-17-31-PM-2.jpg",
  },
  {
    id: 5,
    category: "Seating",
    title: "Wingback Accent Chair",
    material: "Bouclé & Brass",
    finish: "Ivory",
    img: "https://i.ibb.co/9Hn2dgrw/Whats-App-Image-2026-05-15-at-6-17-32-PM.jpg",
  },
  {
    id: 6,
    category: "Tables",
    title: "Live Edge Coffee Table",
    material: "River Wood & Iron",
    finish: "Raw",
    img: "https://i.ibb.co/JjBpq8Hz/Whats-App-Image-2026-05-15-at-6-17-33-PM-1.jpg",
  },
  {
    id: 7,
    category: "Outdoor",
    title: "Teak Garden Bench",
    material: "Grade-A Teak",
    finish: "Weathered",
    img: "https://i.ibb.co/V0wzGf49/Whats-App-Image-2026-05-15-at-6-17-33-PM.jpg",
  },
  {
    id: 8,
    category: "Storage",
    title: "Cane Wardrobe",
    material: "Cane & Mango Wood",
    finish: "Antique White",
    img: "http://i.ibb.co/3Yk9mn4K/Whats-App-Image-2026-05-15-at-6-17-34-PM-1.jpg",
  },
];

const Furniture = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  const selectedItem = selected !== null ? items.find((i) => i.id === selected) : null;
  const selectedIndex = selected !== null ? filtered.findIndex((i) => i.id === selected) : -1;

  const prev = () => {
    if (selectedIndex > 0) setSelected(filtered[selectedIndex - 1].id);
  };
  const next = () => {
    if (selectedIndex < filtered.length - 1) setSelected(filtered[selectedIndex + 1].id);
  };

  return (
    <section id="furniture" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">
            Exclusive Furniture
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Curated pieces.{" "}
            <em className="not-italic text-accent">Crafted to last.</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Each piece in our exclusive collection is sourced or crafted with intention —
            premium materials, artisan finishes and timeless forms that anchor every space.
          </p>
        </div>

        {/* Category filter */}
        {/* <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-4 py-2 rounded-sm border transition-all ${
                activeCategory === cat
                  ? "bg-primary text-cream border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-gold hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group bg-cream border border-border rounded-sm overflow-hidden hover:border-gold hover:shadow-elegant transition-all cursor-pointer"
                onClick={() => setSelected(item.id)}
              >
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-300 flex items-center justify-center">
                    <Maximize2 className="h-5 w-5 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                {/* <div className="p-4">
                  <p className="text-[10px] text-gold tracking-[0.15em] uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-display text-base text-primary leading-snug mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.material}</span>
                    <span className="border border-border rounded-sm px-2 py-0.5">
                      {item.finish}
                    </span>
                  </div>
                </div> */}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full bg-cream border border-border rounded-sm overflow-hidden shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className="w-full object-cover"
                style={{ maxHeight: "65vh" }}
              />
              {/* <div className="flex items-center justify-between px-6 py-4 border-t border-border">
                <div>
                  <p className="text-[10px] text-gold tracking-[0.2em] uppercase mb-0.5">
                    {selectedItem.category} · {selectedItem.material}
                  </p>
                  <p className="font-display text-xl text-primary">{selectedItem.title}</p>
                </div>
                <span className="text-xs border border-border rounded-sm px-3 py-1.5 text-muted-foreground">
                  {selectedItem.finish}
                </span>
              </div> */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 h-9 w-9 rounded-sm bg-espresso/70 hover:bg-espresso flex items-center justify-center text-cream transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              {selectedIndex > 0 && (
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-sm bg-espresso/70 hover:bg-espresso flex items-center justify-center text-cream transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {selectedIndex < filtered.length - 1 && (
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-sm bg-espresso/70 hover:bg-espresso flex items-center justify-center text-cream transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Furniture;