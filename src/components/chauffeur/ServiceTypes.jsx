import { motion } from "framer-motion";
import { SERVICES } from "../../data/chauffeur";

const EASE = [0.16, 1, 0.3, 1];

export default function ServiceTypes() {
  return (
    <section className="py-20 md:py-32 border-t border-ivory/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">The occasions</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Wherever the day takes you.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              className="border border-ivory/10 p-6 md:p-8 hover:border-accent/40 transition-colors duration-500"
            >
              <s.icon size={20} className="text-accent mb-5" />
              <h3 className="font-display text-lg md:text-xl">{s.title}</h3>
              <p className="text-muted text-sm mt-3 leading-relaxed">{s.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
