import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from '../components/motion/Reveal'
import SplitText from '../components/motion/SplitText'
import { haptic } from '../store/settings'

export default function Work() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-16 md:px-8 md:pt-44 md:pb-20">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
          Work · 2023 → 2026
        </p>
        <h1 className="mt-5 text-6xl leading-[0.98] font-semibold tracking-tight md:text-8xl">
          <SplitText text="Selected projects," /><br />
          <span className="inline-block overflow-hidden align-baseline">
            <em className="inline-block font-serif font-normal italic text-accent">
              shipped
            </em>
          </span>{' '}
          <SplitText text="or in orbit." delay={0.35} />
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-2">
          A slower list than my full CV — the projects I'd re-do on purpose, and
          the ones I'd hand a junior designer to learn from.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8 md:pb-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} className={i === 0 ? 'md:col-span-2' : ''}>
              <Link
                to={`/work/${project.slug}`}
                onClick={() => haptic(12)}
                data-magnetic
                className="group block overflow-hidden rounded-3xl border border-line bg-card transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-1 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
                    <span
                      className="inline-block size-1.5 rounded-full"
                      style={{ background: project.accent }}
                    />
                    {project.tag}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6 md:p-8">
                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-ink-3 uppercase">
                      {project.industry} · {project.year} · {project.role}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-1 font-serif text-lg italic text-ink/80">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-dashed border-line p-8 text-center md:p-12">
          <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
            Working on something else
          </p>
          <p className="mx-auto mt-4 max-w-xl font-serif text-2xl italic text-ink md:text-3xl">
            Two more case studies land here in Q2. If you're hiring or curious,
            the fastest path is a short email.
          </p>
          <a
            href="mailto:koriigami@gmail.com"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm text-bg transition-transform hover:-translate-y-0.5"
          >
            Say hello
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
