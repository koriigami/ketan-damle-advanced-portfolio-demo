import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import Reveal from '../components/motion/Reveal'
import { haptic } from '../store/settings'
import { siteConfig, socialLinks, lookingFor } from '../data/site-config'

const EMAIL = socialLinks.email

const socials = [
  { l: 'LinkedIn', h: socialLinks.linkedin },
  { l: 'Dribbble', h: socialLinks.dribbble },
  { l: 'Medium', h: socialLinks.medium },
  { l: 'Figma', h: socialLinks.figma },
  { l: 'GitHub', h: socialLinks.github },
  { l: 'Twitter / X', h: socialLinks.twitter },
  { l: 'Instagram', h: socialLinks.instagram },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      haptic(12)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-16 md:px-8 md:pt-44">
        <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Contact</p>
        <h1 className="display mt-5 max-w-4xl text-ink" style={{ fontSize: 'clamp(2.75rem, 8vw, 7.5rem)' }}>
          Let's write a short{' '}
          <em className="display-italic text-accent">first email</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-2">
          {siteConfig.availability}. The best briefs start with what you're trying
          to change and who you're trying to change it for. Two paragraphs is plenty.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 md:grid-cols-12 md:gap-16 md:px-8 md:pb-32">
        <Reveal className="md:col-span-7">
          <div className="rounded-3xl border border-line bg-card p-8 md:p-10">
            <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Email</p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                onClick={() => haptic(14)}
                className="text-3xl font-semibold tracking-tight underline decoration-accent decoration-2 underline-offset-8 md:text-5xl"
              >
                {EMAIL}
              </a>
              <button
                onClick={copy}
                aria-label="Copy email"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 font-mono text-xs text-ink-3 transition-all hover:text-ink"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-accent" /> copied
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" /> copy
                  </>
                )}
              </button>
            </div>
            <p className="mt-6 text-ink-2">
              I read every one, and reply within two working days — often the same
              day if it's short.
            </p>

            <div className="mt-10 space-y-4">
              <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Elsewhere</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {socials.map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-accent"
                  >
                    <span className="font-medium">{s.l}</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={0.1}>
          <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Good fits</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {lookingFor.opportunities.map((op, i) => (
              <li key={op} className="flex items-baseline gap-4 py-4">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <span className="text-lg font-medium text-ink">{op}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-8 rounded-3xl border border-line p-6"
            style={{ background: 'color-mix(in oklch, var(--accent) 10%, var(--card))' }}
          >
            <p className="font-serif text-xl italic text-ink md:text-2xl">
              "{lookingFor.description}"
            </p>
            <p className="mt-3 font-mono text-xs tracking-widest text-ink-3 uppercase">
              — what I'm looking for
            </p>
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs tracking-widest text-ink-3 uppercase">Résumé</p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm text-bg transition-transform hover:-translate-y-0.5"
            >
              Download PDF
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
