/**
 * Usability testing results — per-task success + time + issue notes.
 * Data: [{ task, success, time, severity: 1..3, note }]
 */
const sevLabel = ['—', 'minor', 'major', 'critical']
const sevClass = [
  '',
  'text-ink-3 border-line',
  'text-accent border-accent',
  'text-accent border-accent',
]

export default function UsabilityFindings({ items, participants = 8 }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-card">
      <div className="flex items-baseline justify-between border-b border-line px-6 py-3">
        <p className="font-mono text-[11px] tracking-widest text-ink-3 uppercase">
          Usability round · n={participants}
        </p>
        <p className="font-mono text-[11px] tracking-widest text-ink-3 uppercase">
          Success rate · time to task · severity
        </p>
      </div>
      <ul className="divide-y divide-line">
        {items.map((it, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-3 px-6 py-4 md:grid-cols-[1.4fr_auto_auto_1.6fr] md:items-center md:gap-6"
          >
            <div className="text-sm font-semibold text-ink">{it.task}</div>

            <div className="flex items-center gap-3">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-bg-2">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${it.success}%` }}
                />
              </div>
              <span className="font-mono text-xs text-ink-2 tabular-nums">
                {it.success}%
              </span>
            </div>

            <div className="font-mono text-xs text-ink-2 tabular-nums">{it.time}</div>

            <div className="flex items-start gap-3">
              <span
                className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase ${sevClass[it.severity]}`}
              >
                {sevLabel[it.severity]}
              </span>
              <span className="text-sm text-ink-2">{it.note}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
