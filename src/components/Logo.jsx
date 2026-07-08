/**
 * Luxe Link wordmark. Swap for the real SVG in src/assets when available.
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
        <span className="inline-block w-[0.55em]" />
        LINK
      </span>
    </span>
  );
}
