import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './motion/Reveal'
import { haptic } from '../store/settings'
import { siteConfig } from '../data/site-config'

const facts = [
  { k: 'Based in', v: `${siteConfig.location} — ${siteConfig.timezone}` },
  { k: 'Currently', v: 'Founding Designer @ Qwark (2023 → now)' },
  { k: 'Before', v: 'IIT Kharagpur (MechE) → M.Des Industrial Design' },
  { k: 'Freelance as', v: 'Kagadmodyaa Studio · toshalife · kad3dstudio' },
]

export default function AboutBlock() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5" y={20}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] shadow-2xl">
            <img
              src="/personal/headshot.jpg"
              alt={siteConfig.name}
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
          <h2 className="mt-3 display text-4xl md:text-6xl">
            I'm a designer{' '}
            <em className="display-italic text-accent">who codes</em>{' '}
            — or a coder who designs, depending on who's asking.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-2">
            <p>{siteConfig.bio}</p>
            <p>{siteConfig.extendedBio}</p>
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
            <span className="link-underline">The full origin story</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
