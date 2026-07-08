/**
 * Luxe Link wordmark — "LUXE L NK", the missing "I" is negative space,
 * matching the brand logo. Swap for the real SVG in src/assets when available.
 */
export default function Logo({ className = "text-lg" }) {
  return (
    <span
      role="img"
      aria-label="Luxe Link"
      className={`font-logo font-semibold tracking-[0.22em] whitespace-nowrap select-none ${className}`}
    >
      <span aria-hidden="true">
        LUXE
        <span className="inline-block w-[0.9em]" />
        L
        <span className="inline-block w-[0.72em]" />
        NK
      </span>
    </span>
  );
}
