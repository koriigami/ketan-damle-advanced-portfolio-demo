import { MessageCircle, Brain, Zap, Heart } from 'lucide-react'

export default function EmpathyMap({ subject = 'First-time user', data }) {
  const cells = [
    { key: 'says', label: 'Says', icon: MessageCircle, list: data.says },
    { key: 'thinks', label: 'Thinks', icon: Brain, list: data.thinks },
    { key: 'does', label: 'Does', icon: Zap, list: data.does },
    { key: 'feels', label: 'Feels', icon: Heart, list: data.feels },
  ]
  return (
    <div className="relative rounded-3xl border border-line bg-card p-4 md:p-6">
      {/* Center label */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 font-mono text-xs tracking-widest text-ink uppercase md:inline-flex">
        <span className="inline-block size-1.5 rounded-full bg-accent" />
        {subject}
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {cells.map(({ key, label, icon: Icon, list }) => (
          <div
            key={key}
            className="min-h-[160px] rounded-2xl border border-line bg-bg p-4 md:min-h-[200px] md:p-6"
          >
            <div className="flex items-center gap-2">
              <Icon className="size-3.5 text-accent" />
              <span className="font-mono text-[11px] tracking-widest text-ink-3 uppercase">
                {label}
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink/85">
              {list.map((it, i) => (
                <li key={i} className="font-serif italic leading-snug text-ink md:text-base">
                  "{it}"
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
