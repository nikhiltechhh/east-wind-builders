import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import type { Capability } from "@/data/capabilities";

type Props = {
  capability: Capability | null;
  onOpenChange: (open: boolean) => void;
};

const CapabilityModal = ({ capability, onOpenChange }: Props) => {
  return (
    <Dialog open={!!capability} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-cream border-border">
        {capability && (
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full min-h-[20rem] overflow-hidden">
              <img
                src={capability.image}
                alt={capability.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-cream/10" />
            </div>

            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              <DialogHeader className="text-left space-y-2">
                <p className="text-gold tracking-[0.3em] text-[10px] uppercase">
                  {capability.subtitle}
                </p>
                <DialogTitle className="font-display text-3xl md:text-4xl text-primary leading-tight">
                  {capability.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  {capability.shortDesc}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 h-px w-12 bg-gold" />

              <p className="mt-6 text-sm md:text-base text-foreground/80 leading-relaxed">
                {capability.longDesc}
              </p>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Highlights
                </p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1.5 rounded-sm bg-secondary text-secondary-foreground border border-border"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="tel:6359595978"
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-espresso transition-colors"
              >
                <Phone className="h-4 w-4" /> Discuss this project
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CapabilityModal;
