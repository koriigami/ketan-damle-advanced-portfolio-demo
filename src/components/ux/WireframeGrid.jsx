import Reveal from '../motion/Reveal'

/**
 * UI exploration grid — small annotated frames.
 * Data: [{ src, label, note? }]
 */
export default function WireframeGrid({ items, columns = 3 }) {
  const grid = columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
  return (
    <div className={`grid grid-cols-2 gap-3 ${grid} md:gap-4`}>
      {items.map((it, i) => (
        <Reveal key={it.src + i} delay={i * 0.05}>
          <figure className="overflow-hidden rounded-2xl border border-line bg-bg-2 transition-transform hover:-translate-y-1">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
            <figcaption className="border-t border-line px-3 py-2 md:px-4 md:py-3">
              <div className="font-mono text-[10px] tracking-widest text-ink-3 uppercase">
                exploration
              </div>
              <div className="mt-0.5 text-sm font-medium text-ink">{it.label}</div>
              {it.note && <div className="text-xs text-ink-3">{it.note}</div>}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}
