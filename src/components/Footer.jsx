import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from './motion/Magnetic'
import { haptic } from '../store/settings'
import { siteConfig, socialLinks } from '../data/site-config'

const social = [
  { label: 'email', href: `mailto:${socialLinks.email}` },
  { label: 'linkedin', href: socialLinks.linkedin },
  { label: 'dribbble', href: socialLinks.dribbble },
  { label: 'medium', href: socialLinks.medium },
  { label: 'figma', href: socialLinks.figma },
  { label: 'github', href: socialLinks.github },
  { label: 'twitter', href: socialLinks.twitter },
  { label: 'instagram', href: socialLinks.instagram },
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
                href={`mailto:${socialLinks.email}`}
                onClick={() => haptic(14)}
                data-magnetic
                className="group mt-10 inline-flex items-center gap-3 text-2xl underline decoration-accent decoration-2 underline-offset-8 transition-all hover:decoration-4 md:text-3xl"
              >
                {socialLinks.email}
                <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Magnetic>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-widest text-bg/60 uppercase">Elsewhere</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-lg text-bg/90 transition-colors hover:text-bg"
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
            © {new Date().getFullYear()} — {siteConfig.name}. {siteConfig.currently}.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/work" className="font-mono hover:text-bg">work</Link>
            <Link to="/about" className="font-mono hover:text-bg">about</Link>
            <Link to="/contact" className="font-mono hover:text-bg">contact</Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="font-mono hover:text-bg">
              résumé
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none -mt-6 flex select-none justify-center overflow-hidden text-[22vw] leading-[0.85] font-semibold tracking-tighter text-bg/[0.06]"
      >
        koriigami
      </div>
    </footer>
  )
}
