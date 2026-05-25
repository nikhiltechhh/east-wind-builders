"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    src: "https://i.ibb.co/JjfGyR3T/Whats-App-Image-2026-05-13-at-3-38-49-PM.jpg",
    title: "Living Room Design",
    category: "Interior",
  },
  {
    id: 2,
    src: "https://i.ibb.co/sp7tyjVk/Whats-App-Image-2026-05-13-at-3-38-50-PM.jpg",
    title: "Kitchen Remodel",
    category: "Interior",
  },
  {
    id: 3,
    src: "https://i.ibb.co/JjYM8dqz/Whats-App-Image-2026-05-13-at-3-38-51-PM-1.jpg",
    title: "Master Bedroom",
    category: "Interior",
  },
  {
    id: 4,
    src: "https://i.ibb.co/zHt5S47H/Whats-App-Image-2026-05-13-at-3-38-51-PM.jpg",
    title: "Modern Bathroom",
    category: "Interior",
  },
  {
    id: 5,
    src: "https://i.ibb.co/YBbL42Hv/Whats-App-Image-2026-05-13-at-4-29-31-PM-1.jpg",
    title: "Office Space",
    category: "Commercial",
  },
  {
    id: 6,
    src: "https://i.ibb.co/ymPpyq21/Whats-App-Image-2026-05-13-at-4-29-31-PM-2.jpg",
    title: "Villa Exterior",
    category: "Architecture",
  },
  {
    id: 7,
    src: "https://i.ibb.co/Z1F0SZXr/Whats-App-Image-2026-05-13-at-4-29-31-PM.jpg",
    title: "Dining Area",
    category: "Interior",
  },
  {
    id: 8,
    src: "https://i.ibb.co/tTgRSPcz/Whats-App-Image-2026-05-13-at-4-29-32-PM-1.jpg",
    title: "Study Room",
    category: "Interior",
  },
  {
    id: 9,
    src: "https://i.ibb.co/3ywCYxjR/Whats-App-Image-2026-05-13-at-4-29-32-PM.jpg",
    title: "Luxury Villa",
    category: "Architecture",
  },
  {
    id: 10,
    src: "https://i.ibb.co/h1T0JJNP/Whats-App-Image-2026-05-13-at-4-42-02-PM.jpg",
    title: "Corridor Design",
    category: "Interior",
  },
  {
    id: 11,
    src: "https://i.ibb.co/PZ9Gvgzh/Whats-App-Image-2026-05-14-at-8-53-39-PM-1.jpg",
    title: "Commercial building",
    category: "Commercial",
  },
  {

    id: 12,
    src: "https://i.ibb.co/r2vK6Y0m/Whats-App-Image-2026-05-14-at-8-53-43-PM.jpg",
    title: "Outdoor Patio",
    category: "Exterior",
  },
  {
    id: 13,
    src: "https://i.ibb.co/Rkzf8K4H/Whats-App-Image-2026-05-14-at-8-53-44-PM.jpg",
    title: "Apartment",
    category: "Commercial",
  },
  {
    id: 14, 
    src: "https://i.ibb.co/v5jj6jY/Whats-App-Image-2026-05-14-at-8-53-54-PM-1.jpg",
    title: "Lobby Design",
    category: "Commercial",
  },
  {
    id: 15, 
    src: "https://i.ibb.co/Zz4GPgds/Whats-App-Image-2026-05-14-at-8-53-55-PM.jpg",
    title: "Luxury Villa",
    category: "Architecture",
  },
  {
    id: 16,
    src: "https://i.ibb.co/8L44yz9q/Whats-App-Image-2026-05-14-at-8-53-54-PM-2.jpg",
    title: "Villa",
    category: "Commercial",
  },
  {
id: 17,
src: "https://i.ibb.co/LX67XRT5/Whats-App-Image-2026-05-14-at-8-53-56-PM-1.jpg",
title: "Villa Exterior",
category: "Commercial",
  },
  {
    id: 18,
    src: "https://i.ibb.co/Hf3XJ2wQ/Whats-App-Image-2026-05-14-at-9-05-13-PM-1.jpg",
    title: "Living Room",
    category: "Interior",
  },
  { 
    id: 19,
    src: "https://i.ibb.co/SDvhKwJn/Whats-App-Image-2026-05-14-at-9-05-13-PM.jpg",
    title: "Living Room",
    category: "Living Room",
  },
  { 
    id: 20,
    src: "https://i.ibb.co/Xf87v9R8/Whats-App-Image-2026-05-14-at-9-22-51-PM-1.jpg",
    title: "Villa Interior",
    category: "Bedroom",
  },
  {
    id: 21,
    src: "https://i.ibb.co/4R1ZGzcv/Whats-App-Image-2026-05-14-at-9-22-51-PM-2.jpg",
    title: "Wardrobe Design",
    category: "Bedroom",
  },
  {
    id: 22,
    src: "https://i.ibb.co/YFQv8QnR/Whats-App-Image-2026-05-14-at-9-22-51-PM.jpg",
    title: "Wardrobe Design",
    category: "Bedroom",
  },
  {
    id: 23,
    src: "https://i.ibb.co/gLqkxFYY/Whats-App-Image-2026-05-14-at-9-22-54-PM.jpg",
    title: "Wardrobe Design",
    category: "Bedroom",
  },
  {
    id: 24,
    src: "https://i.ibb.co/Zr7bSB0/Whats-App-Image-2026-05-14-at-9-40-48-PM-1.jpg",
    title: "Tv Unit Design",
    category: "Living Room",
  },
  {
    id: 25,
    src: "https://i.ibb.co/zhf8gyb7/Whats-App-Image-2026-05-14-at-9-40-48-PM.jpg",
    title: "Tv Unit Design",
    category: "Living Room",
  },
  {
    id: 26,
    src: "https://i.ibb.co/xKMhfp44/Whats-App-Image-2026-05-14-at-9-40-49-PM-1.jpg",
    title: "Tv Unit Design",
    category: "Living Room",
  },
  {
    id: 27,
    src: "https://i.ibb.co/gLtsw8Ft/Whats-App-Image-2026-05-14-at-9-40-49-PM.jpg",
    title: "Tv Unit Design",
    category: "Living Room",
  },
  {
    id: 28,
    src: "https://i.ibb.co/Jw0D9K73/Whats-App-Image-2026-05-14-at-9-40-51-PM.jpg",
    title: "Tv Unit Design",
    category: "Living Room",
  },
  {
    id: 29, 
    src: "https://i.ibb.co/xtH57KqZ/Whats-App-Image-2026-05-14-at-10-20-06-PM-1.jpg",
    title: "Restaurant Interior",
    category: "Restaurant",
  },
  {
    id: 30,
    src: "https://i.ibb.co/d4C5DdhL/Whats-App-Image-2026-05-14-at-10-20-08-PM.jpg",
    title: "Restaurant Interior",
    category: "Restaurant",
  },
  {
    id: 31,
    src: "https://i.ibb.co/VpNNGBRN/Whats-App-Image-2026-05-14-at-10-20-11-PM.jpg",
    title: "Restaurant Interior",
    category: "Restaurant",
  },
  {
    id: 32,
    src: "https://i.ibb.co/WWdKRYmn/Whats-App-Image-2026-05-14-at-10-58-15-PM.jpg",
    title: "Office Interior",
    category: "Office",
  },
  {
    id: 33,
    src: "https://i.ibb.co/rKb7tBsb/Whats-App-Image-2026-05-14-at-10-58-22-PM-2.jpg",
    title: "Office Interior",
    category: "Office",
  }
];

// Duplicate for seamless loop
const track = [...images, ...images];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>();
  const posRef = useRef(0);

  const SPEED = 0.6; // px per frame
  const CARD_W = 280 + 12; // card width + gap

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const loop = () => {
      if (!paused) {
        posRef.current += SPEED;
        // Reset halfway (original set width)
        if (posRef.current >= CARD_W * images.length) {
          posRef.current = 0;
        }
        el.scrollLeft = posRef.current;
      }
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current!);
  }, [paused]);

  const selectedImg = selected !== null ? images[selected] : null;

  const prev = () =>
    setSelected((s) => (s === null ? 0 : (s - 1 + images.length) % images.length));
  const next = () =>
    setSelected((s) => (s === null ? 0 : (s + 1) % images.length));

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mb-10">
        {/* <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Our Work</p> */}
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              {" "}
            <em className="not-italic text-accent">Creative Corner</em>
          </h2>
          {/* <p className="text-sm text-muted-foreground max-w-sm">
            A selection of completed projects across residential, commercial and infrastructure design.
          </p> */}
        </div>
      </div>

      {/* Scrolling strip */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-hidden cursor-pointer select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {track.map((img, i) => (
          <div
            key={`${img.id}-${i}`}
            className="flex-shrink-0 relative group rounded-sm overflow-hidden border border-border hover:border-gold transition-all hover:shadow-elegant"
            style={{ width: 280, height: 200 }}
            onClick={() => setSelected(img.id - 1)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              draggable={false}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
              <p className="text-[10px] text-gold tracking-[0.2em] uppercase mb-1">
                {img.category}
              </p>
              {/* <p className="font-display text-cream text-base leading-snug">{img.title}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full bg-cream border border-border rounded-sm overflow-hidden shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full object-cover"
                style={{ maxHeight: "70vh" }}
              />

              {/* Caption bar */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-border">
                <div>
                  <p className="text-[10px] text-gold tracking-[0.2em] uppercase mb-0.5">
                    {selectedImg.category}
                  </p>
                  <p className="font-display text-xl text-primary">{selectedImg.title}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selected + 1} / {images.length}
                </p>
              </div>

              {/* Controls */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 h-9 w-9 rounded-sm bg-espresso/70 hover:bg-espresso flex items-center justify-center text-cream transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-sm bg-espresso/70 hover:bg-espresso flex items-center justify-center text-cream transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-sm bg-espresso/70 hover:bg-espresso flex items-center justify-center text-cream transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;