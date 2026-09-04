/**
 * DappledLight — abstract "light through blinds" overlay. No trees, no forest;
 * just organic light patches drifting slowly. Sits behind the hero and softens
 * the background in a way a designer would notice.
 */
export default function DappledLight({ opacity = 0.55, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        className="dapple-a absolute -top-24 -left-24 h-[80vh] w-[80vh] mix-blend-multiply"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="d1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="180" cy="200" rx="180" ry="140" fill="url(#d1)" />
        <ellipse cx="260" cy="120" rx="60" ry="40" fill="url(#d1)" opacity="0.7" />
      </svg>
      <svg
        className="dapple-b absolute -right-24 -bottom-24 h-[70vh] w-[70vh] mix-blend-multiply"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="d2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="0.45" />
            <stop offset="60%" stopColor="var(--accent-2)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="220" cy="220" rx="200" ry="160" fill="url(#d2)" />
        <ellipse cx="120" cy="300" rx="70" ry="50" fill="url(#d2)" opacity="0.6" />
      </svg>
    </div>
  )
}
