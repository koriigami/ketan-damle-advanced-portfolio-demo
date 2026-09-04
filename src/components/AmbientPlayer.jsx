import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Sparkles } from 'lucide-react'
import { useSettings, haptic } from '../store/settings'

// In-browser ambient synth: three overlapping detuned oscillators through a
// low-pass filter + gentle LFO for movement, into an AnalyserNode we sample
// for a tiny bar visualizer. No external assets.
function buildEngine() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)()

  const master = ctx.createGain()
  master.gain.value = 0
  const filter = ctx.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = 900
  filter.Q.value = 0.7
  const analyser = ctx.createAnalyser()
  analyser.fftSize = 128

  master.connect(filter)
  filter.connect(analyser)
  analyser.connect(ctx.destination)

  // Root chord — Amin7 (A2, C3, E3, G3) — calm and open
  const freqs = [110, 130.81, 164.81, 196.0]
  const oscs = freqs.map((f, i) => {
    const o = ctx.createOscillator()
    o.type = i === 0 ? 'sine' : 'triangle'
    o.frequency.value = f
    o.detune.value = (i - 1.5) * 6
    const g = ctx.createGain()
    g.gain.value = 0.25 - i * 0.03
    o.connect(g)
    g.connect(master)
    o.start()
    return o
  })

  // LFO on filter cutoff for gentle "breathing"
  const lfo = ctx.createOscillator()
  const lfoGain = ctx.createGain()
  lfo.frequency.value = 0.08
  lfoGain.gain.value = 260
  lfo.connect(lfoGain)
  lfoGain.connect(filter.frequency)
  lfo.start()

  const fadeIn = (seconds = 3, target = 0.16) => {
    const t = ctx.currentTime
    master.gain.cancelScheduledValues(t)
    master.gain.setValueAtTime(master.gain.value, t)
    master.gain.linearRampToValueAtTime(target, t + seconds)
  }
  const fadeOut = (seconds = 1.4) => {
    const t = ctx.currentTime
    master.gain.cancelScheduledValues(t)
    master.gain.setValueAtTime(master.gain.value, t)
    master.gain.linearRampToValueAtTime(0, t + seconds)
  }

  return {
    ctx,
    analyser,
    fadeIn,
    fadeOut,
    async resume() {
      if (ctx.state === 'suspended') await ctx.resume()
    },
    async suspend() {
      if (ctx.state === 'running') await ctx.suspend()
    },
    destroy() {
      try { oscs.forEach((o) => o.stop()) } catch {}
      try { lfo.stop() } catch {}
      try { ctx.close() } catch {}
    },
  }
}

export default function AmbientPlayer() {
  const enabled = useSettings((s) => s.audioEnabled)
  const setEnabled = useSettings((s) => s.setAudio)
  const [ready, setReady] = useState(false)
  const engineRef = useRef(null)
  const barsRef = useRef([])
  const rafRef = useRef(0)

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      engineRef.current?.destroy()
      engineRef.current = null
    }
  }, [])

  const start = async () => {
    if (!engineRef.current) engineRef.current = buildEngine()
    await engineRef.current.resume()
    engineRef.current.fadeIn(3)
    setReady(true)
    const data = new Uint8Array(engineRef.current.analyser.frequencyBinCount)
    const tick = () => {
      if (!engineRef.current) return
      engineRef.current.analyser.getByteFrequencyData(data)
      // 5 bars sampled evenly
      const bars = barsRef.current
      const step = Math.floor(data.length / bars.length)
      bars.forEach((el, i) => {
        if (!el) return
        const v = data[i * step] / 255
        el.style.transform = `scaleY(${0.15 + v * 0.85})`
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  const stop = async () => {
    if (!engineRef.current) return
    engineRef.current.fadeOut(1.2)
    setTimeout(async () => {
      await engineRef.current?.suspend()
      setReady(false)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }, 1400)
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
            style={{
              transform: enabled ? 'scaleY(0.4)' : 'scaleY(0.15)',
            }}
          />
        ))}
      </div>
      <span className="hidden font-mono text-[10px] tracking-widest text-ink-3 uppercase sm:inline">
        {enabled ? (ready ? 'ambient · on' : 'starting') : 'ambient · off'}
      </span>
      {!enabled && (
        <Sparkles className="size-3 text-accent/70" aria-hidden="true" />
      )}
    </div>
  )
}
