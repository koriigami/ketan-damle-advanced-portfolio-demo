import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Command } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
import { haptic } from '../store/settings'

const links = [
  { name: 'work', path: '/work' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
]

export default function Header({ onCommand }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/70 bg-bg/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          onClick={() => haptic(8)}
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="relative grid size-7 place-items-center rounded-full bg-ink text-bg transition-transform duration-500 group-hover:rotate-90">
            <span className="text-[10px] font-bold">K</span>
          </span>
          <span>ketan damle</span>
          <span className="hidden text-ink-3 sm:inline">— product designer</span>
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full border border-line bg-card/60 p-1 backdrop-blur-md md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => haptic(8)}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-1.5 font-mono text-[13px] lowercase tracking-tight transition-colors ${
                  isActive ? 'text-bg' : 'text-ink-3 hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              haptic(8)
              onCommand?.()
            }}
            aria-label="Open command menu (⌘K)"
            className="hidden items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-1.5 font-mono text-xs text-ink-3 transition-all hover:text-ink md:inline-flex"
          >
            <Command className="size-3.5" />
            <span>K</span>
          </button>
          <ThemeSwitcher />
          <a
            href="mailto:koriigami@gmail.com"
            onClick={() => haptic(10)}
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-[12px] text-bg transition-all hover:-translate-y-px hover:shadow-lg sm:inline-flex"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            available
          </a>
        </div>
      </div>
    </motion.header>
  )
}
