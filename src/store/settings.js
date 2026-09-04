import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const THEMES = [
  { id: 'paper', name: 'Paper', hint: 'Warm cream, editorial' },
  { id: 'onyx', name: 'Onyx', hint: 'Deep dark, amber accent' },
  { id: 'editorial', name: 'Editorial', hint: 'High-contrast, red accent' },
  { id: 'aurora', name: 'Aurora', hint: 'Dark, gradient accent' },
]

export const useSettings = create(
  persist(
    (set, get) => ({
      theme: null, // null = follow system on first paint
      audioEnabled: false,
      hapticsEnabled: true,
      cursorEnabled: true,

      setTheme: (theme) => {
        set({ theme })
        if (typeof document !== 'undefined') {
          if (theme) document.documentElement.setAttribute('data-theme', theme)
          else document.documentElement.removeAttribute('data-theme')
        }
      },
      toggleTheme: () => {
        const current = get().theme || 'paper'
        const idx = THEMES.findIndex((t) => t.id === current)
        const next = THEMES[(idx + 1) % THEMES.length].id
        get().setTheme(next)
      },
      setAudio: (v) => set({ audioEnabled: v }),
      setHaptics: (v) => set({ hapticsEnabled: v }),
      setCursor: (v) => set({ cursorEnabled: v }),
    }),
    { name: 'kd-portfolio-settings' }
  )
)

export function initTheme() {
  if (typeof document === 'undefined') return
  const raw = localStorage.getItem('kd-portfolio-settings')
  try {
    const parsed = raw ? JSON.parse(raw) : null
    const theme = parsed?.state?.theme
    if (theme) document.documentElement.setAttribute('data-theme', theme)
  } catch {
    // ignore
  }
}

export function haptic(pattern = 12) {
  try {
    if (typeof navigator === 'undefined') return
    if (!useSettings.getState().hapticsEnabled) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    navigator.vibrate?.(pattern)
  } catch {}
}
