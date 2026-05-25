import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/ewc-logo.jpeg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Why Us", href: "#why-us" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#projects" },
  { label: "Survey & Mapping", href: "#survey" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center gap-2 md:gap-3">
          <img
            src={logo}
            alt="East Wind Contractors logo"
            className={`transition-all duration-500 rounded-sm ${
              scrolled
                ? "h-10 w-10 md:h-12 md:w-12"
                : "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
            }`}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg md:text-xl lg:text-2xl font-semibold text-primary">
              East Wind
            </span>
            <span className="text-[9px] md:text-[10px] lg:text-xs tracking-[0.25em] md:tracking-[0.3em] text-muted-foreground uppercase">
              Contractors
            </span>
            <span className="text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.08em] md:tracking-[0.12em] text-gold mt-0.5 uppercase">
              Spaces Become Soulful Experiences
            </span>
          </div>
        </a>

        {/* Desktop Nav — hidden below lg (1024px) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs xl:text-sm font-medium text-foreground/80 hover:text-primary relative group transition-colors whitespace-nowrap"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Hamburger — visible on tablet and mobile (below lg) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative h-10 w-10 flex items-center justify-center text-primary"
        >
          <span className="relative block h-5 w-7">
            <motion.span
              className="absolute left-0 right-0 h-[2px] bg-current rounded-full origin-center"
              animate={open ? { top: "50%", rotate: 45 } : { top: "15%", rotate: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 right-0 h-[2px] bg-current rounded-full"
              animate={open ? { width: 0, opacity: 0 } : { width: "60%", opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="absolute left-0 right-0 h-[2px] bg-current rounded-full origin-center"
              animate={open ? { top: "50%", rotate: -45 } : { top: "85%", rotate: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-cream border-t border-border"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="py-3 px-2 text-base font-medium border-b border-border/60 text-foreground hover:text-primary hover:pl-4 transition-all"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;