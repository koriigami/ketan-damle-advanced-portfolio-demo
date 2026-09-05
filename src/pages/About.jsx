import Reveal from '../components/motion/Reveal'
import SplitText from '../components/motion/SplitText'
import {
  siteConfig,
  originStory,
  services,
  lookingFor,
  personalInterests,
} from '../data/site-config'

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-16 md:px-8 md:pt-44">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
          About · {siteConfig.name}
        </p>
        <h1 className="display mt-5 max-w-4xl text-ink" style={{ fontSize: 'clamp(2.75rem, 8vw, 7.5rem)' }}>
          <SplitText text="I've been folding paper since I was 8." />{' '}
          <span className="inline-block overflow-hidden align-baseline">
            <em className="display-italic text-accent">Turns out</em>
          </span>{' '}
          <SplitText text="that's a surprisingly useful background for product design." delay={0.4} />
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-2">
          {siteConfig.extendedBio}
        </p>
      </section>

      {/* Origin story — 3 eras */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Origin story</p>
        <h2 className="display mt-3 text-4xl md:text-6xl">
          Three eras, roughly.
        </h2>

        <div className="mt-16 space-y-24 md:space-y-32">
          {originStory.map((era, i) => (
            <Reveal key={era.id}>
              <article className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-14">
                <div className="md:col-span-4">
                  <div className="sticky top-28">
                    <p className="font-mono text-[11px] tracking-widest text-accent uppercase">
                      {era.era}
                    </p>
                    <h3 className="display mt-3 text-3xl md:text-4xl">{era.title}</h3>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p className={`text-lg leading-relaxed text-ink/85 md:text-xl ${i === 0 ? 'dropcap' : ''}`}>
                    {era.paragraph}
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {era.images.map((im) => (
                      <figure
                        key={im.src}
                        className="overflow-hidden rounded-2xl border border-line bg-bg-2"
                      >
                        <img
                          src={im.src}
                          alt={im.caption || ''}
                          loading="lazy"
                          className="aspect-square w-full object-cover"
                        />
                        {im.caption && (
                          <figcaption className="border-t border-line px-3 py-2 font-mono text-[10px] tracking-widest text-ink-3 uppercase">
                            {im.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
          What I do
        </p>
        <h2 className="display mt-3 text-4xl md:text-6xl">A range that stayed useful.</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-line bg-card p-6">
                <div className="font-mono text-sm text-accent">0{i + 1}</div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-ink">
                  {cat.title}
                </div>
                <ul className="mt-4 space-y-1.5">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-baseline gap-2 text-sm text-ink-2">
                      <span className="mt-1 inline-block size-1 shrink-0 rounded-full bg-ink-3" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What I'm looking for */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div
          className="rounded-3xl border border-line p-8 md:p-12"
          style={{ background: 'color-mix(in oklch, var(--accent) 8%, var(--card))' }}
        >
          <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
            {lookingFor.headline}
          </p>
          <h3 className="display mt-3 text-3xl md:text-5xl">
            {lookingFor.description}
          </h3>
          <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            {lookingFor.opportunities.map((op, i) => (
              <li
                key={op}
                className="rounded-2xl border border-line bg-bg px-5 py-4 text-sm font-medium text-ink"
              >
                <span className="mr-2 font-mono text-xs text-accent">0{i + 1}</span>
                {op}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs tracking-widest text-ink-3 uppercase">
            {siteConfig.availability}
          </p>
        </div>
      </section>

      {/* Personal interests */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
          {personalInterests.sectionTitle}
        </p>
        <h2 className="display mt-3 max-w-3xl text-3xl md:text-5xl">
          {personalInterests.sectionDescription}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {personalInterests.images.map((im) => (
            <figure
              key={im.src}
              className="overflow-hidden rounded-2xl border border-line bg-bg-2"
            >
              <img
                src={im.src}
                alt={im.category}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
              />
              <figcaption className="border-t border-line px-3 py-2 font-mono text-[10px] tracking-widest text-ink-3 uppercase">
                {im.category}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}
