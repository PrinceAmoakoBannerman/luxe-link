import { Search } from "lucide-react";
import { CATEGORIES } from "../../data/marketplace";

/** Category chips + search. Filters the in-memory list only. */
export default function FilterBar({ category, onCategory, query, onQuery }) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10 md:mb-14">
      <label className="relative block max-w-md mb-6">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search the collection"
          className="w-full bg-obsidian-soft border border-ivory/15 pl-11 pr-4 py-3 text-sm tracking-wide placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors duration-300"
        />
      </label>

      <div className="no-scrollbar overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
        <div className="flex gap-2 w-max">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => onCategory(c)}
              aria-pressed={category === c}
              className={`shrink-0 px-4 py-2 text-[11px] md:text-xs tracking-wide uppercase border transition-colors duration-300 ${
                category === c
                  ? "bg-accent text-obsidian border-accent font-medium"
                  : "border-ivory/20 text-muted hover:border-accent/60 hover:text-ivory"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
