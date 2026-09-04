import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './motion/Reveal'
import { haptic } from '../store/settings'

const facts = [
  { k: 'Based in', v: 'Bengaluru, India — remote-first' },
  { k: 'Currently', v: 'Product Designer @ Kaya Finance' },
  { k: 'Before', v: 'Nova, Meru, Lumina, a few good agencies' },
  { k: 'Teaches', v: 'UX & product design at MIT ID · MDes' },
]

export default function AboutBlock() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5" y={20}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=1000&q=80"
              alt="Ketan Damle"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute right-3 bottom-3 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
              hi, ketan here
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" y={30} delay={0.1}>
          <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">About</p>
          <h2 className="mt-3 text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-5xl">
            I care more about the{' '}
            <em className="font-serif font-normal italic text-accent">second</em>{' '}
            release than the first.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-2">
            <p>
              I'm a product designer who's spent the last six years shipping — not
              just pitching — software across fintech, wellness, and B2B SaaS. The
              projects I'm proudest of aren't the flashiest; they're the ones
              still running.
            </p>
            <p>
              I run tight research loops, keep a healthy respect for systems, and
              write copy that survives handoff. I also teach the next lot of
              designers at MIT Institute of Design, because paying it forward
              tends to keep you honest.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {facts.map(({ k, v }) => (
              <div key={k} className="flex flex-col border-t border-line pt-3">
                <dt className="font-mono text-[11px] tracking-widest text-ink-3 uppercase">
                  {k}
                </dt>
                <dd className="mt-1 text-base text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/about"
            onClick={() => haptic(10)}
            className="group mt-10 inline-flex items-center gap-2 text-base font-medium text-ink"
          >
            <span className="link-underline">More about how I work</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
