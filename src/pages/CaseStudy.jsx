import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import { projects, projectBySlug } from '../data/projects'
import { haptic } from '../store/settings'

// UX blocks
import CompareSlider from '../components/ux/CompareSlider'
import PersonaCard from '../components/ux/PersonaCard'
import EmpathyMap from '../components/ux/EmpathyMap'
import JourneyMap from '../components/ux/JourneyMap'
import IATree from '../components/ux/IATree'
import UserFlow from '../components/ux/UserFlow'
import HeuristicsGrid from '../components/ux/HeuristicsGrid'
import WireframeGrid from '../components/ux/WireframeGrid'
import UsabilityFindings from '../components/ux/UsabilityFindings'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  const barWidth = useTransform(progress, [0, 1], ['0%', '100%'])

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
        <p className="font-mono text-sm text-ink-3">no case study</p>
        <h1 className="mt-4 font-serif text-5xl italic">couldn't find "{slug}"</h1>
        <Link to="/work" className="mt-8 inline-flex items-center gap-2 underline">
          <ArrowLeft className="size-4" /> Back to work
        </Link>
      </main>
    )
  }

  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <main>
      <motion.div
        style={{ width: barWidth }}
        className="fixed top-0 left-0 z-50 h-[3px] origin-left bg-accent"
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 pt-36 pb-14 md:px-8 md:pt-44 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-40 -z-0 size-[520px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(closest-side, ${project.accent}, transparent)`,
            filter: 'blur(60px)',
          }}
        />

        <Link
          to="/work"
          onClick={() => haptic(10)}
          className="group inline-flex items-center gap-2 font-mono text-sm text-ink-3 hover:text-ink"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All work
        </Link>

        <div className="relative mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
              <span
                className="mr-2 inline-block size-1.5 rounded-full align-middle"
                style={{ background: project.accent }}
              />
              {project.tag} · {project.industry} · {project.year}
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="display mt-5 text-ink"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
            >
              {project.title}
            </motion.h1>
            <p className="mt-6 max-w-2xl font-serif text-2xl italic text-ink/85 md:text-3xl">
              {project.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg text-ink-2">{project.description}</p>
          </div>

          <div className="md:col-span-4">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-1">
              {[
                { k: 'Role', v: project.role },
                { k: 'Team', v: project.team },
                { k: 'Duration', v: project.duration },
                { k: 'Stack', v: project.stack.join(' · ') },
              ].map(({ k, v }) => (
                <div key={k} className="border-t border-line pt-3">
                  <dt className="font-mono text-[11px] tracking-widest text-ink-3 uppercase">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-bg-2 shadow-2xl">
            <img
              src={project.cover}
              alt={`${project.title} cover`}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Metrics */}
      <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-8">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Impact</p>
        <div className="mt-6 grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4 md:gap-10">
          {project.metrics.map((m) => (
            <Reveal key={m.label} y={16}>
              <div className="display text-4xl md:text-5xl">{m.value}</div>
              <div className="mt-2 text-base text-ink-2">{m.label}</div>
              {m.hint && (
                <div className="mt-1 font-mono text-[11px] tracking-wide text-ink-3 uppercase">
                  {m.hint}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Chapters — sticky spine */}
      <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          <ChapterSpine chapters={project.chapters} />

          <div className="space-y-28 md:col-span-9 md:space-y-40">
            {project.chapters.map((ch, i) => (
              <ChapterBody key={ch.id} chapter={ch} accent={project.accent} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="mx-auto mt-32 max-w-4xl px-6 md:px-8">
        <div
          className="rounded-3xl border border-line p-10 md:p-14"
          style={{ background: `color-mix(in oklch, ${project.accent} 12%, var(--card))` }}
        >
          <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
            A line I kept coming back to
          </p>
          <blockquote className="mt-4 font-serif text-3xl leading-[1.15] italic md:text-5xl">
            "Design isn't the moment of the reveal — it's the six weeks of quiet
            decisions that led there."
          </blockquote>
        </div>
      </section>

      {/* Next up */}
      <section className="mx-auto mt-24 max-w-7xl px-6 pb-24 md:mt-32 md:px-8 md:pb-32">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Next up</p>
        <Link
          to={`/work/${next.slug}`}
          onClick={() => haptic(14)}
          className="group mt-6 grid grid-cols-1 items-center gap-6 rounded-3xl border border-line bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl md:grid-cols-12 md:gap-10 md:p-8"
        >
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={next.cover}
                alt={next.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
              {next.tag} · {next.industry}
            </p>
            <h3 className="display mt-2 text-4xl md:text-5xl">{next.title}</h3>
            <p className="mt-2 font-serif text-xl italic text-ink/85">{next.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
              <span className="link-underline">Read next case study</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </section>
    </main>
  )
}

function ChapterSpine({ chapters }) {
  const [active, setActive] = useState(chapters[0]?.id)
  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(`ch-${c.id}`))
      .filter(Boolean)
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.replace('ch-', ''))
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [chapters])

  return (
    <aside className="md:col-span-3">
      <div className="sticky top-28">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Chapters</p>
        <ul className="mt-4 space-y-3 border-l border-line pl-4">
          {chapters.map((c) => {
            const isActive = c.id === active
            return (
              <li key={c.id} className="relative">
                <a
                  href={`#ch-${c.id}`}
                  className={`block text-sm transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-3 hover:text-ink-2'
                  }`}
                  onClick={() => haptic(8)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="chapter-active"
                      className="absolute -left-[1.25rem] top-1.5 block size-2 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="font-mono text-[10px] tracking-widest text-ink-3 uppercase">
                    {c.eyebrow}
                  </span>
                  <span className="mt-0.5 block">{c.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

function ChapterBody({ chapter, accent, index }) {
  return (
    <div id={`ch-${chapter.id}`} className="scroll-mt-32">
      <Reveal>
        <p
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: accent }}
        >
          {chapter.eyebrow}
        </p>
        <h3 className="display mt-3 max-w-2xl text-3xl md:text-5xl" style={{ letterSpacing: '-0.02em' }}>
          {chapter.title}
        </h3>
      </Reveal>

      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-2">
        {chapter.body.map((p, i) => (
          <Reveal key={i} y={20} delay={i * 0.05}>
            <p className={i === 0 && index > 0 ? 'dropcap' : ''}>{p}</p>
          </Reveal>
        ))}
      </div>

      {chapter.quote && (
        <Reveal>
          <blockquote
            className="mt-10 max-w-2xl border-l-2 pl-6 font-serif text-2xl leading-snug italic text-ink md:text-3xl"
            style={{ borderColor: accent }}
          >
            {chapter.quote.text}
            <cite className="mt-3 block font-sans text-sm not-italic text-ink-3">
              — {chapter.quote.who}
            </cite>
          </blockquote>
        </Reveal>
      )}

      {chapter.images && (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {chapter.images.map((img, i) => (
            <Reveal
              key={img.src}
              y={30}
              delay={i * 0.08}
              className={chapter.images.length === 1 ? 'md:col-span-2' : undefined}
            >
              <figure className="overflow-hidden rounded-2xl bg-bg-2">
                <img
                  src={img.src}
                  alt={img.caption || ''}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                {img.caption && (
                  <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-ink-3">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      )}

      {/* Typed UX blocks */}
      {chapter.blocks?.map((b, i) => (
        <div key={i} className="mt-12">
          <Reveal>
            <BlockRenderer block={b} />
          </Reveal>
        </div>
      ))}
    </div>
  )
}

function BlockRenderer({ block }) {
  switch (block.type) {
    case 'compare':
      return (
        <CompareSlider
          a={block.a}
          b={block.b}
          aLabel={block.aLabel}
          bLabel={block.bLabel}
          aspect={block.aspect}
          caption={block.caption}
        />
      )
    case 'personas':
      return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {block.items.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      )
    case 'empathy':
      return <EmpathyMap subject={block.subject} data={block.data} />
    case 'journey':
      return <JourneyMap stages={block.stages} />
    case 'ia':
      return <IATree root={block.root} />
    case 'flow':
      return <UserFlow nodes={block.nodes} />
    case 'heuristics':
      return <HeuristicsGrid items={block.items} />
    case 'wireframes':
      return <WireframeGrid items={block.items} columns={block.columns} />
    case 'usability':
      return <UsabilityFindings items={block.items} participants={block.participants} />
    default:
      return null
  }
}
