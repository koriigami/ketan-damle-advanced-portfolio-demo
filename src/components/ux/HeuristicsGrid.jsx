import { Check, TriangleAlert, X } from 'lucide-react'

/**
 * Nielsen 10 heuristics scored 1-5, with a short verdict.
 * Data: [{ n, name, score, verdict }]
 */
const iconFor = (score) => {
  if (score >= 4) return { Icon: Check, color: 'text-accent', tag: 'passes' }
  if (score >= 3) return { Icon: TriangleAlert, color: 'text-ink-2', tag: 'watch' }
  return { Icon: X, color: 'text-ink-3', tag: 'fix' }
}

export default function HeuristicsGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
      {items.map((h) => {
        const { Icon, color, tag } = iconFor(h.score)
        return (
          <div
            key={h.n}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-line bg-card p-4 md:p-5"
          >
            <div className="font-mono text-lg text-ink-3">H{h.n}</div>
            <div>
              <div className="text-sm font-semibold text-ink md:text-base">{h.name}</div>
              <div className="text-sm text-ink-2">{h.verdict}</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`block h-2 w-1.5 rounded-sm ${
                      i < h.score ? 'bg-accent' : 'bg-line'
                    }`}
                  />
                ))}
              </div>
              <span className={`inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase ${color}`}>
                <Icon className="size-3" /> {tag}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
