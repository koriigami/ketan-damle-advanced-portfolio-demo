import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Palette } from 'lucide-react'
import { THEMES, useSettings, haptic } from '../store/settings'

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const theme = useSettings((s) => s.theme) || 'paper'
  const setTheme = useSettings((s) => s.setTheme)

  return (
    <div className="relative">
      <button
        aria-label="Change theme"
        aria-expanded={open}
        onClick={() => {
          haptic(10)
          setOpen((o) => !o)
        }}
        className="grid size-9 place-items-center rounded-full border border-line bg-card/70 text-ink transition-all hover:-translate-y-0.5 hover:shadow-md"
      >
        <Palette className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 z-40 mt-2 w-64 overflow-hidden rounded-2xl border border-line bg-card p-1.5 shadow-2xl"
              role="menu"
            >
              <div className="px-3 pt-2 pb-1 font-mono text-[10px] tracking-widest text-ink-3 uppercase">
                Theme
              </div>
              {THEMES.map((t) => {
                const active = theme === t.id
                return (
                  <button
                    key={t.id}
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => {
                      haptic(8)
                      setTheme(t.id)
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-bg-2"
                  >
                    <span
                      className="grid size-6 shrink-0 place-items-center rounded-full border border-line"
                      style={{ background: previewBg(t.id) }}
                    >
                      {active && (
                        <Check
                          className="size-3.5"
                          style={{ color: previewInk(t.id) }}
                        />
                      )}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-ink">
                        {t.name}
                      </span>
                      <span className="block text-xs text-ink-3">{t.hint}</span>
                    </span>
                  </button>
                )
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

function previewBg(id) {
  return {
    paper: 'oklch(0.965 0.012 85)',
    onyx: 'oklch(0.16 0.008 260)',
    editorial: 'oklch(0.985 0 0)',
    aurora:
      'linear-gradient(135deg, oklch(0.78 0.22 155), oklch(0.72 0.2 305))',
  }[id]
}
function previewInk(id) {
  return {
    paper: 'oklch(0.68 0.19 40)',
    onyx: 'oklch(0.78 0.16 68)',
    editorial: 'oklch(0.55 0.24 22)',
    aurora: 'oklch(0.145 0.03 270)',
  }[id]
}
