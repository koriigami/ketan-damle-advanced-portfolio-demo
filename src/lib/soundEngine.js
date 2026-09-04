/**
 * Procedural soundscapes — one per theme. Everything synthesised in WebAudio;
 * no external audio files. Designed to be quiet, non-nature-cliché, and safe
 * to leave running behind a portfolio.
 *
 * Public API:
 *   const engine = makeEngine()
 *   await engine.start()
 *   engine.setScape('paper' | 'onyx' | 'editorial' | 'aurora')
 *   engine.setVolume(0.15)     // 0..1
 *   await engine.stop()        // fades out and suspends
 *   engine.destroy()
 *   engine.analyser             // AnalyserNode for visualisers
 */

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))
const rand = (lo, hi) => lo + Math.random() * (hi - lo)
const irand = (lo, hi) => Math.floor(rand(lo, hi + 1))

// ─────────────────────────────────────────────────────────────
// Noise buffer generators
// ─────────────────────────────────────────────────────────────
function makeNoiseBuffer(ctx, seconds = 2, color = 'pink') {
  const length = Math.floor(ctx.sampleRate * seconds)
  const buf = ctx.createBuffer(1, length, ctx.sampleRate)
  const data = buf.getChannelData(0)
  if (color === 'white') {
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1
  } else if (color === 'brown') {
    let last = 0
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1
      last = (last + 0.02 * white) / 1.02
      data[i] = last * 3.5
    }
  } else {
    // Voss-McCartney pink
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1
      b0 = 0.99886 * b0 + white * 0.0555179
      b1 = 0.99332 * b1 + white * 0.0750759
      b2 = 0.96900 * b2 + white * 0.1538520
      b3 = 0.86650 * b3 + white * 0.3104856
      b4 = 0.55000 * b4 + white * 0.5329522
      b5 = -0.7616 * b5 - white * 0.0168980
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
      b6 = white * 0.115926
    }
  }
  return buf
}

function noiseSource(ctx, color = 'pink', seconds = 2) {
  const src = ctx.createBufferSource()
  src.buffer = makeNoiseBuffer(ctx, seconds, color)
  src.loop = true
  src.start()
  return src
}

// A short bird-chirp: sine sweep with a fast attack + decay envelope
function chirp(ctx, dest, when, { start = 1800, mid = 2800, end = 2000, dur = 0.09, gain = 0.05 } = {}) {
  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(start, when)
  osc.frequency.exponentialRampToValueAtTime(mid, when + dur * 0.35)
  osc.frequency.exponentialRampToValueAtTime(end, when + dur)
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, when)
  g.gain.exponentialRampToValueAtTime(gain, when + 0.005)
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur)
  osc.connect(g)
  g.connect(dest)
  osc.start(when)
  osc.stop(when + dur + 0.05)
}

// A single "raindrop" — very short bandpass noise burst
function drop(ctx, dest, when, { freq = 2200, dur = 0.045, gain = 0.06 } = {}) {
  const src = ctx.createBufferSource()
  src.buffer = makeNoiseBuffer(ctx, 0.2, 'white')
  const bp = ctx.createBiquadFilter()
  bp.type = 'bandpass'
  bp.frequency.value = freq
  bp.Q.value = 8
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, when)
  g.gain.exponentialRampToValueAtTime(gain, when + 0.003)
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur)
  src.connect(bp)
  bp.connect(g)
  g.connect(dest)
  src.start(when)
  src.stop(when + dur + 0.05)
}

// A short chime tone — A pentatonic
const PENTA = [220, 261.63, 329.63, 392, 440, 523.25, 659.25]
function chime(ctx, dest, when, { freq, dur = 2.4, gain = 0.05 } = {}) {
  const f = freq ?? PENTA[irand(0, PENTA.length - 1)]
  const osc = ctx.createOscillator()
  osc.type = 'triangle'
  osc.frequency.value = f
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, when)
  g.gain.exponentialRampToValueAtTime(gain, when + 0.03)
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur)
  const lp = ctx.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = 2400
  osc.connect(lp)
  lp.connect(g)
  g.connect(dest)
  osc.start(when)
  osc.stop(when + dur + 0.05)
}

// Faint typewriter "click"
function click(ctx, dest, when, { gain = 0.05 } = {}) {
  const src = ctx.createBufferSource()
  src.buffer = makeNoiseBuffer(ctx, 0.05, 'white')
  const bp = ctx.createBiquadFilter()
  bp.type = 'bandpass'
  bp.frequency.value = 3200
  bp.Q.value = 14
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, when)
  g.gain.exponentialRampToValueAtTime(gain, when + 0.001)
  g.gain.exponentialRampToValueAtTime(0.0001, when + 0.03)
  src.connect(bp)
  bp.connect(g)
  g.connect(dest)
  src.start(when)
  src.stop(when + 0.06)
}

// ─────────────────────────────────────────────────────────────
// Scapes
// ─────────────────────────────────────────────────────────────
function paperScape(ctx, dest) {
  // Morning chirps: two "birds" with different registers.
  let disposed = false
  const scheduleBird = (baseDelay, freqBias) => {
    if (disposed) return
    const when = ctx.currentTime + baseDelay + rand(0, 0.4)
    // 60% chance: a chirp
    if (Math.random() < 0.75) {
      const start = rand(1600, 2400) + freqBias
      const mid = start * rand(1.15, 1.35)
      chirp(ctx, dest, when, { start, mid, end: start * 0.9, dur: rand(0.06, 0.13), gain: 0.045 })
      // sometimes a trill (2-4 quick chirps)
      if (Math.random() < 0.35) {
        const n = irand(2, 4)
        for (let i = 1; i < n; i++) {
          const w2 = when + 0.11 + i * 0.06
          chirp(ctx, dest, w2, { start: start * 0.98, mid: mid * 0.95, end: start * 0.88, dur: 0.06, gain: 0.035 })
        }
      }
    }
    setTimeout(() => scheduleBird(baseDelay, freqBias), rand(1600, 4200))
  }
  scheduleBird(0, 0)
  scheduleBird(1.2, -400)

  // Warm bed: very quiet pink noise low-passed to "morning air"
  const noise = noiseSource(ctx, 'pink')
  const lp = ctx.createBiquadFilter()
  lp.type = 'lowpass'; lp.frequency.value = 700
  const bedGain = ctx.createGain()
  bedGain.gain.value = 0.03
  noise.connect(lp); lp.connect(bedGain); bedGain.connect(dest)

  return {
    destroy() {
      disposed = true
      try { noise.stop() } catch {}
    },
  }
}

function onyxScape(ctx, dest) {
  // Steady rain: brown noise base + varying drops
  let disposed = false
  const noise = noiseSource(ctx, 'brown')
  const lp = ctx.createBiquadFilter()
  lp.type = 'lowpass'; lp.frequency.value = 1200
  const bedGain = ctx.createGain()
  bedGain.gain.value = 0.16
  noise.connect(lp); lp.connect(bedGain); bedGain.connect(dest)

  // Subtle LFO on lowpass — occasional gust
  const lfo = ctx.createOscillator()
  const lfoGain = ctx.createGain()
  lfo.frequency.value = 0.11
  lfoGain.gain.value = 400
  lfo.connect(lfoGain); lfoGain.connect(lp.frequency)
  lfo.start()

  const scheduleDrops = () => {
    if (disposed) return
    const count = irand(1, 3)
    for (let i = 0; i < count; i++) {
      const when = ctx.currentTime + rand(0, 0.35)
      drop(ctx, dest, when, {
        freq: rand(1400, 3200),
        dur: rand(0.03, 0.08),
        gain: rand(0.02, 0.05),
      })
    }
    setTimeout(scheduleDrops, rand(90, 220))
  }
  scheduleDrops()

  return {
    destroy() {
      disposed = true
      try { noise.stop(); lfo.stop() } catch {}
    },
  }
}

function editorialScape(ctx, dest) {
  // Coffee-shop murmur: dim pink noise + slow AM + occasional typewriter clicks
  let disposed = false
  const noise = noiseSource(ctx, 'pink')
  const bp = ctx.createBiquadFilter()
  bp.type = 'bandpass'; bp.frequency.value = 320; bp.Q.value = 0.6
  const bedGain = ctx.createGain()
  bedGain.gain.value = 0.14
  noise.connect(bp); bp.connect(bedGain); bedGain.connect(dest)

  const lfo = ctx.createOscillator()
  const lfoGain = ctx.createGain()
  lfo.frequency.value = 0.13
  lfoGain.gain.value = 0.06
  lfo.connect(lfoGain); lfoGain.connect(bedGain.gain)
  lfo.start()

  const scheduleClicks = () => {
    if (disposed) return
    if (Math.random() < 0.7) {
      // small burst of key clicks
      const n = irand(3, 8)
      const start = ctx.currentTime + rand(0, 0.2)
      for (let i = 0; i < n; i++) {
        click(ctx, dest, start + i * rand(0.06, 0.13), { gain: rand(0.02, 0.045) })
      }
    }
    setTimeout(scheduleClicks, rand(2400, 6000))
  }
  scheduleClicks()

  return {
    destroy() {
      disposed = true
      try { noise.stop(); lfo.stop() } catch {}
    },
  }
}

function auroraScape(ctx, dest) {
  // Wind + occasional pentatonic chimes
  let disposed = false
  const noise = noiseSource(ctx, 'pink')
  const lp = ctx.createBiquadFilter()
  lp.type = 'lowpass'; lp.frequency.value = 500
  const bedGain = ctx.createGain()
  bedGain.gain.value = 0.11
  noise.connect(lp); lp.connect(bedGain); bedGain.connect(dest)

  // Two LFOs sweeping the wind's colour
  const lfo1 = ctx.createOscillator()
  const g1 = ctx.createGain()
  lfo1.frequency.value = 0.09; g1.gain.value = 300
  lfo1.connect(g1); g1.connect(lp.frequency); lfo1.start()

  const lfo2 = ctx.createOscillator()
  const g2 = ctx.createGain()
  lfo2.frequency.value = 0.05; g2.gain.value = 0.05
  lfo2.connect(g2); g2.connect(bedGain.gain); lfo2.start()

  const scheduleChime = () => {
    if (disposed) return
    if (Math.random() < 0.75) {
      chime(ctx, dest, ctx.currentTime + rand(0, 0.4), { gain: rand(0.03, 0.06), dur: rand(2.0, 3.4) })
    }
    setTimeout(scheduleChime, rand(4200, 9000))
  }
  scheduleChime()

  return {
    destroy() {
      disposed = true
      try { noise.stop(); lfo1.stop(); lfo2.stop() } catch {}
    },
  }
}

const SCAPES = {
  paper: paperScape,
  onyx: onyxScape,
  editorial: editorialScape,
  aurora: auroraScape,
}

export const SCAPE_LABELS = {
  paper: 'morning chirps',
  onyx: 'gentle rain',
  editorial: 'cafe & keys',
  aurora: 'wind & chimes',
}

// ─────────────────────────────────────────────────────────────
// Engine
// ─────────────────────────────────────────────────────────────
export function makeEngine() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)()

  // Master fader → gentle limiter (WaveShaper for soft clip) → analyser → out
  const master = ctx.createGain()
  master.gain.value = 0
  const limiter = ctx.createDynamicsCompressor()
  limiter.threshold.value = -12
  limiter.knee.value = 20
  limiter.ratio.value = 6
  limiter.attack.value = 0.005
  limiter.release.value = 0.15
  const analyser = ctx.createAnalyser()
  analyser.fftSize = 128

  master.connect(limiter)
  limiter.connect(analyser)
  analyser.connect(ctx.destination)

  let scape = null
  let currentName = null
  let targetVolume = 0.16

  const fade = (param, target, seconds) => {
    const t = ctx.currentTime
    param.cancelScheduledValues(t)
    param.setValueAtTime(param.value, t)
    param.linearRampToValueAtTime(clamp(target, 0, 1), t + seconds)
  }

  const setScape = (name) => {
    if (!SCAPES[name] || name === currentName) return
    // fade out old
    if (scape) {
      fade(master.gain, 0, 0.6)
      const old = scape
      setTimeout(() => old.destroy?.(), 700)
    }
    scape = SCAPES[name](ctx, master)
    currentName = name
    // fade in
    setTimeout(() => fade(master.gain, targetVolume, 1.8), scape ? 700 : 0)
  }

  return {
    ctx,
    analyser,
    get scapeName() { return currentName },
    async start(name = 'paper') {
      if (ctx.state === 'suspended') await ctx.resume()
      if (!scape || currentName !== name) setScape(name)
      else fade(master.gain, targetVolume, 1.8)
    },
    async stop() {
      fade(master.gain, 0, 1.2)
      await new Promise((r) => setTimeout(r, 1300))
      if (ctx.state === 'running') await ctx.suspend()
    },
    setScape,
    setVolume(v) {
      targetVolume = clamp(v, 0, 1)
      fade(master.gain, targetVolume, 0.4)
    },
    destroy() {
      try { scape?.destroy?.() } catch {}
      try { ctx.close() } catch {}
    },
  }
}
