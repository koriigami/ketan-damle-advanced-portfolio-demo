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

const VERBS = ['ships', 'thinks', 'writes', 'edits', 'listens']

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

      {/* Massive corner sig — decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-6 hidden select-none font-mono text-[10px] tracking-[0.4em] text-ink-3 uppercase md:block"
      >
        no. 001 · portfolio · 2026
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-4 px-6 md:px-10">
        {/* Left rail: eyebrow, marginalia */}
        <div className="col-span-12 md:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="marginalia flex items-center gap-2"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            <span>Ketan Damle</span>
          </motion.p>
          <p className="marginalia mt-2 md:mt-6">Bengaluru · Remote</p>
        </div>

        {/* Center: editorial headline */}
        <motion.div style={{ y: y2 }} className="col-span-12 md:col-span-8">
          <h1 className="display text-ink" style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}>
            <span className="block">
              A product{' '}
              <em className="display-italic text-accent">designer</em>{' '}
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
              second releases,
            </span>
            <span className="block">
              not{' '}
              <span className="display-italic text-ink-2">just</span>{' '}
              first ones.
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
                text="Six years across fintech, wellness, and B2B SaaS. Research-heavy, systems-minded, and quietly obsessed with the sentence a component chooses to say."
                stagger={0.02}
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
                <Link
                  to="/about"
                  onClick={() => haptic(10)}
                  data-magnetic
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-card/60 px-6 text-sm font-medium text-ink backdrop-blur transition-all hover:bg-card"
                >
                  About me
                </Link>
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
            <span>scroll · three case studies</span>
          </motion.div>
        </motion.div>

        {/* Right rail: tilted portrait card */}
        <motion.aside
          style={{ y: y1 }}
          className="col-span-12 md:col-span-2 md:pt-6"
        >
          <motion.figure
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="mx-auto max-w-[220px] overflow-hidden rounded-3xl border border-line bg-card shadow-2xl md:mx-0"
            style={{ transformOrigin: '50% 100%' }}
          >
            <img
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=600&q=80"
              alt="Ketan Damle"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <figcaption className="flex items-center justify-between border-t border-line px-3 py-2 font-mono text-[10px] tracking-widest text-ink-3 uppercase">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3 text-accent" /> IN · IST
              </span>
              <span>k.d. — 26</span>
            </figcaption>
          </motion.figure>

          <div className="mt-6 hidden text-right md:block">
            <p className="marginalia">6 yrs practice</p>
            <p className="marginalia mt-1">3 case studies</p>
            <p className="marginalia mt-1">2 talks / yr</p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
