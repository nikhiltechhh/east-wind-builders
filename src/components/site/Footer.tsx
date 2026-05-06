import logo from "@/assets/ewc-logo.jpeg";

const Footer = () => (
  <footer className="bg-espresso text-cream/80 py-14">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-3">
          <img src={logo} alt="East Wind Contractors" className="h-14 w-14 rounded-sm" width={56} height={56} loading="lazy" />
          <div>
            <p className="font-display text-xl text-cream">East Wind</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold">Contractors</p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-cream/70 max-w-sm">
          Design · Build · Material Supply · Turnkey. Crafting interiors and structures that inspire.
        </p>
      </div>
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Explore</p>
        <ul className="space-y-2 text-sm">
          {["About", "Services", "Approach", "Projects", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Reach Us</p>
        <p className="text-sm">+91 63595 95978</p>
        <a href="https://wa.me/916359595978" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gold transition-colors">WhatsApp Chat</a>
      </div>
    </div>
    <div className="container mt-12 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-wrap justify-between gap-3">
      <p>© {new Date().getFullYear()} East Wind Contractors. All rights reserved.</p>
      <p>Crafted with care.</p>
    </div>
  </footer>
);

export default Footer;
