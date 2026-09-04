import { ArrowRight, Diamond } from 'lucide-react'

/**
 * Flat user-flow renderer. Data:
 *   [{ type: 'start'|'step'|'decision'|'end', label, note? }]
 * Rendered as pill nodes with arrows between them. Wraps naturally.
 */
export default function UserFlow({ nodes }) {
  return (
    <div className="rounded-3xl border border-line bg-card p-4 md:p-6">
      <div className="flex flex-wrap items-stretch gap-3 md:gap-4">
        {nodes.map((n, i) => (
          <div key={i} className="flex items-stretch gap-3 md:gap-4">
            <FlowNode node={n} index={i} />
            {i < nodes.length - 1 && (
              <div className="flex items-center text-ink-3">
                <ArrowRight className="size-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function FlowNode({ node, index }) {
  const base =
    'inline-flex flex-col rounded-2xl border px-4 py-3 min-w-[160px] max-w-[220px]'
  if (node.type === 'start' || node.type === 'end') {
    return (
      <div className={`${base} border-ink bg-ink text-bg`}>
        <span className="font-mono text-[10px] tracking-widest opacity-70 uppercase">
          {node.type}
        </span>
        <span className="mt-0.5 text-sm font-semibold">{node.label}</span>
      </div>
    )
  }
  if (node.type === 'decision') {
    return (
      <div className={`${base} border-accent bg-transparent`}>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-accent uppercase">
          <Diamond className="size-3" /> decision
        </span>
        <span className="mt-0.5 text-sm font-semibold text-ink">{node.label}</span>
        {node.note && <span className="mt-1 text-xs text-ink-3">{node.note}</span>}
      </div>
    )
  }
  return (
    <div className={`${base} border-line bg-bg`}>
      <span className="font-mono text-[10px] tracking-widest text-ink-3 uppercase">
        step {String(index + 1).padStart(2, '0')}
      </span>
      <span className="mt-0.5 text-sm font-semibold text-ink">{node.label}</span>
      {node.note && <span className="mt-1 text-xs text-ink-3">{node.note}</span>}
    </div>
  )
}
