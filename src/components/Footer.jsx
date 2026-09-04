import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from './motion/Magnetic'
import { haptic } from '../store/settings'

const social = [
  { label: 'email', href: 'mailto:koriigami@gmail.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/ketandamle' },
  { label: 'read.cv', href: 'https://read.cv/ketandamle' },
  { label: 'twitter', href: 'https://twitter.com/ketandamle' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bg">
      <div className="pointer-events-none aurora-glow" style={{ opacity: 0.35 }} />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-12 md:px-8 md:pt-32">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-xs tracking-widest text-bg/60 uppercase">
              Let's work together
            </p>
            <h2 className="mt-4 text-5xl leading-[0.98] font-semibold tracking-tight md:text-8xl">
              have a project<br />in mind?{' '}
              <em className="font-serif font-normal italic text-accent">say hello.</em>
            </h2>
            <Magnetic>
              <a
                href="mailto:koriigami@gmail.com"
                onClick={() => haptic(14)}
                data-magnetic
                className="group mt-10 inline-flex items-center gap-3 text-2xl underline decoration-accent decoration-2 underline-offset-8 transition-all hover:decoration-4 md:text-3xl"
              >
                koriigami@gmail.com
                <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Magnetic>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-widest text-bg/60 uppercase">Elsewhere</p>
            <ul className="mt-4 space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-xl text-bg/90 transition-colors hover:text-bg"
                  >
                    {s.label}
                    <ArrowUpRight className="size-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-bg/15 pt-8 text-sm text-bg/60 md:flex-row md:items-center">
          <div className="font-mono">
            © {new Date().getFullYear()} — Ketan Damle. All good ideas welcome.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/work" className="font-mono hover:text-bg">work</Link>
            <Link to="/about" className="font-mono hover:text-bg">about</Link>
            <Link to="/contact" className="font-mono hover:text-bg">contact</Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none -mt-6 flex select-none justify-center overflow-hidden text-[22vw] leading-[0.85] font-semibold tracking-tighter text-bg/[0.06]"
      >
        ketandamle
      </div>
    </footer>
  )
}
