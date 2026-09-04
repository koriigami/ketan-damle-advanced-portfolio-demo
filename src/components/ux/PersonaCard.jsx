export default function PersonaCard({ persona }) {
  const p = persona
  return (
    <article className="grid grid-cols-1 gap-6 rounded-3xl border border-line bg-card p-6 md:grid-cols-[180px_1fr] md:gap-8 md:p-8">
      <div>
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-bg-2">
          <img
            src={p.photo}
            alt={p.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="mt-3 text-center font-mono text-[10px] tracking-widest text-ink-3 uppercase">
          Persona · P{p.id}
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">{p.name}</h3>
          <span className="text-sm text-ink-3">
            {p.age} · {p.role} · {p.location}
          </span>
        </div>
        <p className="mt-1 font-serif text-lg italic text-ink/85">"{p.quote}"</p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-accent uppercase">Goals</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-2">
              {p.goals.map((g) => (
                <li key={g} className="flex gap-2">
                  <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-ink-3 uppercase">Frustrations</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-2">
              {p.frustrations.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-ink-3" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {p.techLevel && (
          <div className="mt-6">
            <p className="font-mono text-[10px] tracking-widest text-ink-3 uppercase">
              Comfort with tech
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg-2">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${p.techLevel}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
