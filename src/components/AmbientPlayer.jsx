import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useSettings, haptic } from '../store/settings'
import { makeEngine, SCAPE_LABELS } from '../lib/soundEngine'

export default function AmbientPlayer() {
  const enabled = useSettings((s) => s.audioEnabled)
  const setEnabled = useSettings((s) => s.setAudio)
  const theme = useSettings((s) => s.theme) || 'paper'
  const engineRef = useRef(null)
  const barsRef = useRef([])
  const rafRef = useRef(0)
  const [running, setRunning] = useState(false)

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      engineRef.current?.destroy()
      engineRef.current = null
    }
  }, [])

  const ensureEngine = () => {
    if (!engineRef.current) engineRef.current = makeEngine()
    return engineRef.current
  }

  // When the theme changes, swap the scape live (only if playing)
  useEffect(() => {
    if (!running) return
    const e = engineRef.current
    if (!e) return
    e.setScape(theme)
  }, [theme, running])

  const start = async () => {
    const e = ensureEngine()
    await e.start(theme)
    setRunning(true)
    // Analyser loop → 5-bar visualiser
    const data = new Uint8Array(e.analyser.frequencyBinCount)
    const tick = () => {
      const bars = barsRef.current
      e.analyser.getByteFrequencyData(data)
      const step = Math.max(1, Math.floor(data.length / bars.length))
      bars.forEach((el, i) => {
        if (!el) return
        const v = data[i * step] / 255
        el.style.transform = `scaleY(${0.15 + v * 0.9})`
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  const stop = async () => {
    await engineRef.current?.stop()
    setRunning(false)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }

  const toggle = async () => {
    haptic(10)
    const next = !enabled
    setEnabled(next)
    if (next) await start()
    else await stop()
  }

  return (
    <div className="pointer-events-auto fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-2 shadow-lg backdrop-blur-md md:bottom-6 md:left-6">
      <button
        onClick={toggle}
        aria-label={enabled ? 'Mute ambient sound' : 'Play ambient sound'}
        className="grid size-8 place-items-center rounded-full bg-ink text-bg transition-transform hover:scale-105 active:scale-95"
      >
        {enabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
      </button>
      <div className="flex items-end gap-[3px] px-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            ref={(el) => (barsRef.current[i] = el)}
            className="block h-4 w-[3px] origin-bottom rounded-sm bg-ink/60 transition-transform duration-100"
            style={{ transform: 'scaleY(0.15)' }}
          />
        ))}
      </div>
      <span className="hidden font-mono text-[10px] tracking-widest text-ink-3 uppercase sm:inline">
        {enabled
          ? `${SCAPE_LABELS[theme] || 'ambient'}`
          : 'ambient · off'}
      </span>
    </div>
  )
}
