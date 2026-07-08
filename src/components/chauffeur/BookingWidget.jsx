import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RIDE_CLASSES } from "../../data/chauffeur";

const EASE = [0.16, 1, 0.3, 1];

const inputClasses =
  "w-full bg-obsidian-soft/90 border border-ivory/15 px-4 py-3.5 text-sm tracking-wide placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors duration-300 [color-scheme:dark]";

/** Inline ride-quote widget — price-forward, state only, no booking logic. */
export default function BookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [rideClass, setRideClass] = useState(RIDE_CLASSES[0].id);
  const [estimated, setEstimated] = useState(false);

  const chosen = RIDE_CLASSES.find((c) => c.id === rideClass);

  return (
    <div className="bg-obsidian/80 backdrop-blur-md border border-ivory/15 p-4 md:p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEstimated(true);
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_0.9fr_1fr_auto] gap-3"
      >
        <input
          aria-label="Pickup location"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From — address or airport"
          className={inputClasses}
        />
        <input
          aria-label="Destination"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To — destination"
          className={inputClasses}
        />
        <input
          aria-label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={inputClasses}
        />
        <select
          aria-label="Vehicle class"
          value={rideClass}
          onChange={(e) => {
            setRideClass(e.target.value);
            setEstimated(false);
          }}
          className={inputClasses}
        >
          {RIDE_CLASSES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} — from ${c.from}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-accent text-obsidian text-xs md:text-sm font-medium tracking-wide uppercase px-6 py-3.5 hover:bg-accent-hover transition-colors duration-300 whitespace-nowrap"
        >
          View Estimate
          <ArrowRight size={15} />
        </button>
      </form>

      <AnimatePresence>
        {estimated && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-sm text-ivory/90 pt-4 tracking-wide"
          >
            {chosen.name} — from <span className="text-accent">${chosen.from}</span> ·
            all-inclusive, fixed before you ride. A concierge confirms within minutes.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
