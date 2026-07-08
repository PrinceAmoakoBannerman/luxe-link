import { motion } from "framer-motion";
import { STANDARDS } from "../../data/chauffeur";

const EASE = [0.16, 1, 0.3, 1];

export default function Standards() {
  return (
    <section className="py-20 md:py-32 border-t border-ivory/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">The standard</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            What never varies.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {STANDARDS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
            >
              <s.icon size={20} className="text-accent mb-5" />
              <h3 className="font-display text-xl md:text-2xl">{s.title}</h3>
              <p className="text-muted text-sm md:text-base mt-3 leading-relaxed max-w-xs">
                {s.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
