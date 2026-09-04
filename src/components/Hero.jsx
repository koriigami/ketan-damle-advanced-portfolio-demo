import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import HeroBlob from './three/HeroBlob'
import SplitText from './motion/SplitText'
import Magnetic from './motion/Magnetic'
import { haptic } from '../store/settings'

export default function Hero() {
  const { scrollY } = useScroll()
  const blobY = useTransform(scrollY, [0, 800], [0, 220])
  const textY = useTransform(scrollY, [0, 800], [0, -80])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2])

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      <motion.div
        style={{ y: blobY, opacity }}
        className="pointer-events-none absolute inset-0 md:right-[-8%] md:left-1/2"
      >
        <HeroBlob />
      </motion.div>

      {/* soft radial fade to keep text legible on top of the blob */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 22% 45%, color-mix(in oklch, var(--bg) 92%, transparent) 0%, transparent 65%)',
        }}
      />

      <motion.div
        style={{ y: textY }}
        className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-8"
      >
        <div className="relative z-10 flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1 font-mono text-xs text-ink-3 backdrop-blur"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            Portfolio · 2026 · Session 02 demo
          </motion.p>

          <h1 className="text-[clamp(2.6rem,7.4vw,5.8rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-ink">
            <SplitText text="Product design that" />
            <br />
            <SplitText text="reads like a" delay={0.25} />{' '}
            <span className="inline-block overflow-hidden align-baseline">
              <motion.em
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block font-serif text-[1.08em] font-normal italic text-accent"
              >
                conversation
              </motion.em>
            </span>
            <SplitText text=", not a specification." delay={0.85} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="max-w-lg text-lg leading-relaxed text-ink-2"
          >
            I'm Ketan — a product designer working at the seam of research,
            systems, and taste. Six years shipping calm, useful software across
            fintech, wellness, and B2B SaaS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Magnetic>
              <Link
                to="/work"
                onClick={() => haptic(14)}
                data-magnetic
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-bg transition-all hover:shadow-xl"
              >
                See selected work
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-6 flex items-center gap-2 font-mono text-xs text-ink-3"
          >
            <ArrowDown className="size-3 animate-bounce" />
            <span>scroll for selected work</span>
          </motion.div>
        </div>

        <div className="hidden h-[520px] md:block" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
