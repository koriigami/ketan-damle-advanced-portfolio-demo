import { motion } from 'framer-motion'

/**
 * Horizontal journey map. Stages with action, thought, emotion score (-2..2).
 * Draws a smooth curve of the emotion arc below the row.
 */
export default function JourneyMap({ stages }) {
  const N = stages.length
  const pts = stages.map((s, i) => ({
    x: (i / (N - 1)) * 100,
    // Map emotion -2..2 → 90..10 (SVG y flipped)
    y: 50 - s.emotion * 18,
  }))

  // Simple cubic path
  const path = pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`
    const prev = pts[i - 1]
    const cx = (prev.x + p.x) / 2
    return `${acc} C ${cx} ${prev.y}, ${cx} ${p.y}, ${p.x} ${p.y}`
  }, '')

  const emotionLabel = (e) =>
    e >= 1.5 ? 'delighted' : e >= 0.5 ? 'positive' : e >= -0.5 ? 'neutral' : e >= -1.5 ? 'frustrated' : 'blocked'

  return (
    <div className="rounded-3xl border border-line bg-card p-6 md:p-8">
      <div
        className="grid gap-4 md:gap-6"
        style={{ gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))` }}
      >
        {stages.map((s, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full bg-accent font-mono text-[11px] text-on-accent">
                0{i + 1}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-ink-3 uppercase">
                {s.stage}
              </span>
            </div>
            <div className="text-sm font-semibold text-ink">{s.action}</div>
            <div className="text-sm text-ink-2">{s.thought}</div>
          </div>
        ))}
      </div>

      {/* Emotion curve */}
      <div className="relative mt-8">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-32 w-full">
          <defs>
            <linearGradient id="jm-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* baseline */}
          <line x1="0" y1="50" x2="100" y2="50" stroke="var(--line)" strokeWidth="0.35" strokeDasharray="1 2" />
          <motion.path
            d={`${path} L 100 100 L 0 100 Z`}
            fill="url(#jm-fill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.path
            d={path}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="1.4" fill="var(--accent)" />
          ))}
        </svg>
        <div
          className="mt-2 grid font-mono text-[10px] tracking-widest text-ink-3 uppercase"
          style={{ gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))` }}
        >
          {stages.map((s, i) => (
            <div key={i}>{emotionLabel(s.emotion)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
