import { motion } from "framer-motion";

const services = [
  { n: "01", title: "Land Surveys", icon: "ti-map" },
  { n: "02", title: "Topographical Surveys", icon: "ti-mountain" },
  { n: "03", title: "Drone Surveys", icon: "ti-drone" },
  { n: "04", title: "DGPS Total Station", icon: "ti-antenna" },
  { n: "05", title: "Layout Planning", icon: "ti-layout-2" },
  { n: "06", title: "Boundary Marking", icon: "ti-vector-triangle" },
  { n: "07", title: "Road Project Surveys", icon: "ti-road" },
  { n: "08", title: "HMDA/DTCP/GP Layouts", icon: "ti-building-community" },
  { n: "09", title: "Building Marking", icon: "ti-building" },
  { n: "10", title: "Property Demarcation", icon: "ti-border-all" },
  { n: "11", title: "Village Maps", icon: "ti-map-2" },
  { n: "12", title: "Tipan Maps", icon: "ti-file-description" },
];

const stats = [
  { value: "AutoCAD", label: "Drawings instantly after survey" },
  { value: "DGPS", label: "Total station precision" },
  { value: "Drone", label: "Aerial survey capability" },
  { value: "HMDA", label: "DTCP & GP approvals" },
];

const Map = () => (
  <section
    id="map"
    className="py-20 md:py-28 bg-espresso text-cream relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--gold))_0%,transparent_50%)]" />

    <div className="container relative max-w-5xl">
      {/* Header */}
      <div
        className="grid md:grid-cols-2 gap-10 items-end mb-12 pb-10"
        style={{ borderBottom: "0.5px solid rgba(245,240,232,0.08)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-3">
            Survey & Mapping
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Precision Land<br />Survey & Mapping.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-cream/55 text-sm leading-relaxed"
        >
          Professional surveying headed by best-in-class professionals,
          delivering accurate measurements, reliable solutions, and instant
          AutoCAD drawings immediately after survey completion. Built for
          residential, commercial, and infrastructure projects.
        </motion.p>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
      >
        {stats.map((s) => (
          <div
            key={s.value}
            className="px-4 py-3 rounded-sm"
            style={{ background: "rgba(245,240,232,0.04)", border: "0.5px solid rgba(245,240,232,0.08)" }}
          >
            <p className="font-display text-gold text-lg leading-none mb-1">{s.value}</p>
            <p className="text-cream/40 text-[11px] leading-snug">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Services grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group flex items-center gap-3 px-3 py-3 rounded-sm cursor-default transition-colors"
            style={{
              border: "0.5px solid rgba(245,240,232,0.08)",
              background: "rgba(245,240,232,0.03)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(201,169,110,0.35)";
              (e.currentTarget as HTMLDivElement).style.background =
                "rgba(201,169,110,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(245,240,232,0.08)";
              (e.currentTarget as HTMLDivElement).style.background =
                "rgba(245,240,232,0.03)";
            }}
          >
            <i
              className={`ti ${s.icon} text-gold/60 group-hover:text-gold transition-colors`}
              style={{ fontSize: 16 }}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-[10px] text-cream/25 leading-none mb-0.5">{s.n}</p>
              <p className="text-[12px] text-cream/80 leading-snug truncate">{s.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="mt-8 pt-5 flex items-center justify-between"
        style={{ borderTop: "0.5px solid rgba(245,240,232,0.08)" }}
      >
        <span className="text-[10px] uppercase tracking-[.2em] text-cream/25">
          All project types covered
        </span>
        <span className="text-[11px] text-cream/40">12 specialisations</span>
      </div>
    </div>
  </section>
);

export default Map;