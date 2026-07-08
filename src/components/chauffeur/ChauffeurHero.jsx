import { motion } from "framer-motion";
import { CHAUFFEUR_HERO } from "../../data/chauffeur";
import BookingWidget from "./BookingWidget";

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function ChauffeurHero() {
  const { image, imageSmall, kicker, headline, subline } = CHAUFFEUR_HERO;

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-end">
      <div className="absolute inset-0 bg-obsidian-soft">
        <img
          src={image}
          srcSet={`${imageSmall} 900w, ${image} 2000w`}
          sizes="100vw"
          alt="Chauffeur's hands on the wheel at dusk"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,16,0.72) 0%, rgba(15,15,16,0.3) 35%, rgba(15,15,16,0.6) 65%, rgba(15,15,16,0.97) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-obsidian/35 md:bg-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-14 md:pb-20 w-full"
      >
        <motion.p
          variants={item}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-accent mb-5"
        >
          {kicker}
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] max-w-3xl"
        >
          {headline}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-muted text-base md:text-lg mt-6 max-w-md tracking-wide"
        >
          {subline}
        </motion.p>

        <motion.div variants={item} className="mt-10 md:mt-12">
          <BookingWidget />
        </motion.div>
      </motion.div>
    </section>
  );
}
