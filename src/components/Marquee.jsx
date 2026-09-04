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

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink py-8 text-bg">
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
    </section>
  )
}
