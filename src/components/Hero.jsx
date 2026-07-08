import { motion } from "framer-motion";
import { useScrollPosition } from "../hooks/useScrollPosition";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const scrollY = useScrollPosition();
  const lift = Math.min(scrollY * 0.15, 120);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-end">
      <div
        className="absolute inset-0 bg-obsidian-soft"
        style={{ transform: `translateY(${lift}px) scale(1.12)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1764605206511-7a649d9df63b?q=80&w=2000&auto=format&fit=crop"
          srcSet="https://images.unsplash.com/photo-1764605206511-7a649d9df63b?q=80&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1764605206511-7a649d9df63b?q=80&w=1200&auto=format&fit=crop 1200w, https://images.unsplash.com/photo-1764605206511-7a649d9df63b?q=80&w=2000&auto=format&fit=crop 2000w"
          sizes="100vw"
          alt="Black luxury sedan on a city street at night"
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
            "linear-gradient(180deg, rgba(15,15,16,0.82) 0%, rgba(15,15,16,0.4) 18%, rgba(15,15,16,0.55) 50%, rgba(15,15,16,0.97) 100%)",
        }}
      />
      {/* extra veil on small screens: the photo recedes into black, Escalux-style */}
      <div className="absolute inset-0 bg-obsidian/45 md:bg-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full"
      >
        <motion.p
          variants={item}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-accent mb-5"
        >
          Luxe Link
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] max-w-3xl"
        >
          Luxury Experiences, Connected.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted text-base md:text-lg mt-6 max-w-md tracking-wide"
        >
          Book. Travel. Shop.
          <br />
          One premium platform for the moments that matter.
        </motion.p>

        <motion.div variants={item} className="flex flex-row gap-3 md:gap-4 mt-10">
          <a
            href="/#chauffeur"
            className="flex-1 sm:flex-none whitespace-nowrap bg-accent text-obsidian text-center text-xs md:text-sm font-medium tracking-wide uppercase px-4 md:px-8 py-3.5 hover:bg-accent-hover transition-colors duration-300"
          >
            Book Chauffeur
          </a>
          <a
            href="/#services"
            className="flex-1 sm:flex-none whitespace-nowrap border border-ivory/40 text-center text-xs md:text-sm font-medium tracking-wide uppercase px-4 md:px-8 py-3.5 hover:border-accent hover:bg-accent/10 transition-colors duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
