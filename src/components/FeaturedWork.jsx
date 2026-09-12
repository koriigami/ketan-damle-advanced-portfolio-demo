import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { JapaneseTowerLandscape } from '@designcodeio/threeui'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './motion/Reveal'
import useReducedMotion from '../hooks/useReducedMotion'
import useInView from '../hooks/useInView'
import { haptic } from '../store/settings'

function WorkCard({ project, index }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.06])

  return (
    <div
      ref={cardRef}
      className="group/row relative grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10"
    >
      {/* Oversized editorial index number in the gutter */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 hidden select-none display leading-none text-line-strong opacity-40 transition-opacity duration-500 group-hover/row:opacity-70 md:block ${
          index % 2 === 1 ? 'right-[-2rem] text-right' : 'left-[-2rem]'
        }`}
        style={{ fontSize: 'clamp(6rem, 12vw, 12rem)', color: 'color-mix(in oklch, var(--ink) 8%, transparent)' }}
      >
        0{index + 1}
      </div>

      <div className={`md:col-span-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <Link
          to={`/work/${project.slug}`}
          onClick={() => haptic(12)}
          data-magnetic
          className="group relative block aspect-[16/10] overflow-hidden rounded-3xl bg-bg-2 md:aspect-[16/9]"
        >
          <motion.img
            style={{ y, scale }}
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-1 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
            <span
              className="inline-block size-1.5 rounded-full"
              style={{ background: project.accent }}
            />
            {project.tag}
          </div>
          <div className="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="size-5" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-center md:col-span-4">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
            0{index + 1} · {project.industry} · {project.year}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 font-serif text-xl italic text-ink/85">
            {project.tagline}
          </p>
          <p className="mt-4 text-ink-2">{project.description}</p>

          <div className="mt-6 flex items-baseline gap-6">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <div className="text-2xl font-semibold tracking-tight text-ink">
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[11px] tracking-wide text-ink-3 uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            to={`/work/${project.slug}`}
            onClick={() => haptic(12)}
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink"
          >
            <span className="link-underline">Read the case study</span>
            <ArrowUpRight className="size-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </div>
  )
}

export default function FeaturedWork() {
  const reducedMotion = useReducedMotion()
  // Observed on the fixed-height band itself, not the (very tall) section —
  // a tall section would stay "intersecting" for its whole scroll length.
  const [bandRef, sceneInView] = useInView({ rootMargin: '0px' })

  return (
    <section id="work" className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
      {/* Fixed-height band, not the full (very tall) scrolling section —
          the scene is a single WebGL viewport, not a tileable pattern.
          Only mounted while in view: running more than one ThreeUI scene
          on the page at once has been observed to stall both. */}
      <div ref={bandRef} className="absolute inset-x-0 top-0 h-[560px] md:h-[720px]">
        {!reducedMotion && sceneInView && (
          <div className="absolute inset-0 opacity-70">
            <JapaneseTowerLandscape country="japan" className="absolute inset-0 h-full w-full" />
          </div>
        )}
        {/* Scrim so the heading stays legible, fading to the normal page
            background before the card grid begins. Lighter than a first
            pass — this scene's muted earth tones need less dimming than
            the hero's high-saturation sunset to still read once visible. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, color-mix(in oklch, var(--bg) 20%, transparent) 0%, color-mix(in oklch, var(--bg) 55%, transparent) 55%, var(--bg) 100%)',
          }}
        />
      </div>

      {/* Editorial rules top & bottom to feel like a magazine spread */}
      <div aria-hidden="true" className="absolute top-16 right-6 left-6 h-px bg-line md:right-8 md:left-8" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">
              Selected work · 2023–2026
            </p>
            <Reveal>
              <h2 className="mt-3 text-4xl leading-[1.02] font-semibold tracking-tight text-ink md:text-6xl">
                Three projects,{' '}
                <em className="font-serif text-[1.05em] font-normal italic text-accent">
                  one thread
                </em>
                :<br />
                take the friction out.
              </h2>
            </Reveal>
          </div>
          <Link
            to="/work"
            data-magnetic
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 font-mono text-sm text-ink transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            All work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex flex-col gap-14 md:gap-24">
          {projects.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
