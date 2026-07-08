import { motion } from "framer-motion";
import { RIDE_CLASSES } from "../../data/chauffeur";

const EASE = [0.16, 1, 0.3, 1];

export default function FleetShowcase() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">The fleet</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Three classes. One standard.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {RIDE_CLASSES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-obsidian-soft">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,15,16,0) 55%, rgba(15,15,16,0.75) 100%)",
                  }}
                />
                <p className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-ivory/90">
                  From ${c.from}
                </p>
              </div>
              <div className="pt-5">
                <h3 className="font-display text-xl md:text-2xl">{c.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-muted mt-1.5">
                  {c.capacity}
                </p>
                <p className="text-muted text-sm mt-3 leading-relaxed max-w-sm">{c.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
