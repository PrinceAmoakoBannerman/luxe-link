import { motion } from "framer-motion";
import { MARKET_HERO } from "../../data/marketplace";

const EASE = [0.16, 1, 0.3, 1];

/** Restrained hero — on this page the grid is the moment. */
export default function MarketHero() {
  return (
    <section className="pt-32 md:pt-44 pb-12 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="max-w-6xl mx-auto px-6 md:px-10"
      >
        <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-accent mb-4">
          {MARKET_HERO.kicker}
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl">
          {MARKET_HERO.headline}
        </h1>
        <p className="text-muted text-base md:text-lg mt-5 max-w-md tracking-wide">
          {MARKET_HERO.subline}
        </p>
      </motion.div>
    </section>
  );
}
