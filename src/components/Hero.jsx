import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import DappledLight from './DappledLight'
import Spotlight from './Spotlight'
import Magnetic from './motion/Magnetic'
import SplitText from './motion/SplitText'
import { haptic } from '../store/settings'
import { siteConfig } from '../data/site-config'

const VERBS = ['ships', 'researches', 'writes', 'codes', 'listens']

export default function Hero() {
  const [verbIndex, setVerbIndex] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 120])
  const y2 = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15])

  useEffect(() => {
    const t = setInterval(() => setVerbIndex((v) => (v + 1) % VERBS.length), 2400)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-svh overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      <Spotlight />
      <motion.div style={{ opacity }} className="absolute inset-0">
        <DappledLight />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-6 hidden select-none font-mono text-[10px] tracking-[0.4em] text-ink-3 uppercase md:block"
      >
        no. 001 · portfolio · 2026
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-4 px-6 md:px-10">
        {/* Left rail: eyebrow + marginalia */}
        <div className="col-span-12 md:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="marginalia flex items-center gap-2"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            <span>{siteConfig.name}</span>
          </motion.p>
          <p className="marginalia mt-2 md:mt-6">{siteConfig.location}</p>
          <p className="marginalia mt-1">{siteConfig.timezone}</p>
        </div>

        {/* Centre: editorial headline */}
        <motion.div style={{ y: y2 }} className="col-span-12 md:col-span-8">
          <h1 className="display text-ink" style={{ fontSize: 'clamp(3rem, 9.5vw, 8.5rem)' }}>
            <span className="block">
              A{' '}
              <em className="display-italic text-accent">product designer</em>{' '}
              who
            </span>
            <span className="block">
              <span className="rot-slot align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={VERBS[verbIndex]}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block will-change-transform"
                    style={{ color: 'var(--accent)' }}
                  >
                    {VERBS[verbIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              0-to-1 products
            </span>
            <span className="block">
              from research to{' '}
              <span className="display-italic text-ink-2">deployed</span>{' '}
              code.
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 grid grid-cols-12 gap-6"
          >
            <p className="col-span-12 max-w-xl text-lg leading-relaxed text-ink-2 md:col-span-7">
              <SplitText
                text={siteConfig.bio}
                stagger={0.015}
                delay={0.4}
              />
            </p>
            <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-5">
              <Magnetic>
                <Link
                  to="/work"
                  onClick={() => haptic(14)}
                  data-magnetic
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-bg transition-all hover:shadow-xl"
                >
                  Selected work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => haptic(10)}
                  data-magnetic
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-card/60 px-6 text-sm font-medium text-ink backdrop-blur transition-all hover:bg-card"
                >
                  Download résumé
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-16 flex items-center gap-3 font-mono text-xs text-ink-3"
          >
            <ArrowDown className="size-3 animate-bounce" />
            <span>scroll · eight selected projects</span>
          </motion.div>
        </motion.div>

        {/* Right rail: tilted portrait card */}
        <motion.aside style={{ y: y1 }} className="col-span-12 md:col-span-2 md:pt-6">
          <motion.figure
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="mx-auto max-w-[220px] overflow-hidden rounded-3xl border border-line bg-card shadow-2xl md:mx-0"
            style={{ transformOrigin: '50% 100%' }}
          >
            <img
              src="/personal/headshot.jpg"
              alt="Ketan Damle"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <figcaption className="flex items-center justify-between border-t border-line px-3 py-2 font-mono text-[10px] tracking-widest text-ink-3 uppercase">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3 text-accent" /> IN · IST
              </span>
              <span>k.d.</span>
            </figcaption>
          </motion.figure>

          <div className="mt-6 hidden text-right md:block">
            <p className="marginalia">Founding designer @ Qwark</p>
            <p className="marginalia mt-1">50+ user interviews</p>
            <p className="marginalia mt-1">Available for work</p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
