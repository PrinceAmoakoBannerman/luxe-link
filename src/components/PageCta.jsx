import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/** Closing call-to-action band shared by the service pages. */
export default function PageCta({ kicker, title, body, ctaLabel, href = "/#services" }) {
  return (
    <section className="border-t border-ivory/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-accent mb-5">{kicker}</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
            {title}
          </h2>
          {body && (
            <p className="text-muted text-sm md:text-base mt-5 max-w-md mx-auto leading-relaxed">
              {body}
            </p>
          )}
          <a
            href={href}
            className="inline-block mt-10 bg-accent text-obsidian text-xs md:text-sm font-medium tracking-wide uppercase px-8 py-3.5 hover:bg-accent-hover transition-colors duration-300"
          >
            {ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
