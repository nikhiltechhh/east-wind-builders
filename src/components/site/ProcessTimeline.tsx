import { motion } from "framer-motion";
import { processSteps } from "@/data/capabilities";

const ProcessTimeline = () => (
  <div className="mt-12">
    <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
      <div>
        <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-2">Designing Process</p>
        <h3 className="font-display text-3xl md:text-4xl text-primary leading-tight">
          From first conversation to handover.
        </h3>
      </div>
      <p className="text-sm text-muted-foreground max-w-md">
        A disciplined 19-step journey that keeps every project transparent, on time and on budget.
      </p>
    </div>

    <div className="relative">
      <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="grid grid-flow-col auto-cols-[14rem] sm:auto-cols-[16rem] gap-4 md:gap-5">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group relative bg-cream border border-border rounded-sm p-5 hover:border-gold hover:shadow-soft transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-display text-2xl text-gold/70 group-hover:text-gold transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border group-hover:bg-gold/40 transition-colors" />
              </div>
              <h4 className="font-display text-lg text-primary leading-tight">{s.title}</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProcessTimeline;
