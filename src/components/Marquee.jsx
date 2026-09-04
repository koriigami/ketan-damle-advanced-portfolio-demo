const items = [
  'user research',
  'design systems',
  'motion & prototyping',
  'product strategy',
  'accessibility',
  'workshops & mentoring',
  'ui engineering',
  'writing',
]

const counter = [
  'no. 001',
  'no. 002',
  'no. 003',
  'no. 004',
  'no. 005',
  'no. 006',
  'no. 007',
  'no. 008',
]

export default function Marquee() {
  const row = [...items, ...items]
  const row2 = [...counter, ...counter]
  return (
    <section className="relative -my-6 overflow-hidden py-14">
      {/* Row 1 — tilted -2deg, dark strip, left to right */}
      <div
        className="relative -mx-8 overflow-hidden border-y border-line bg-ink py-6 text-bg"
        style={{ transform: 'rotate(-2deg)' }}
      >
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap font-mono text-lg tracking-tight md:text-2xl">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-14">
              <span className="opacity-90">{item}</span>
              <span
                className="inline-block size-2 shrink-0 rotate-45 bg-accent"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — tilted +2deg, thin, reverses direction */}
      <div
        className="relative -mx-8 mt-3 overflow-hidden py-2"
        style={{ transform: 'rotate(2deg)' }}
      >
        <div className="flex w-max animate-marquee-rev gap-10 whitespace-nowrap font-mono text-xs tracking-widest text-ink-3 uppercase md:text-sm">
          {row2.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{item}</span>
              <span className="inline-block h-px w-8 shrink-0 bg-line" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
