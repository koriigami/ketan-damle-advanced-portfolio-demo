import { useEffect, useRef, useState } from 'react'
import { haptic } from '../../store/settings'

/**
 * Drag-to-compare slider. Pass two image URLs and labels.
 * Uses clip-path on the top image so it only ever renders one <img> layer.
 */
export default function CompareSlider({
  a,
  b,
  aLabel = 'Wireframe',
  bLabel = 'Hi-fi',
  aspect = 16 / 10,
  caption,
}) {
  const wrapRef = useRef(null)
  const [pct, setPct] = useState(52)
  const dragging = useRef(false)

  useEffect(() => {
    const onMove = (clientX) => {
      const wrap = wrapRef.current
      if (!wrap) return
      const rect = wrap.getBoundingClientRect()
      const next = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      setPct(next)
    }
    const mouseMove = (e) => dragging.current && onMove(e.clientX)
    const touchMove = (e) => dragging.current && onMove(e.touches[0].clientX)
    const stop = () => {
      if (dragging.current) haptic(6)
      dragging.current = false
    }
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseup', stop)
    window.addEventListener('touchmove', touchMove, { passive: true })
    window.addEventListener('touchend', stop)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseup', stop)
      window.removeEventListener('touchmove', touchMove)
      window.removeEventListener('touchend', stop)
    }
  }, [])

  const startDrag = (clientX) => {
    dragging.current = true
    haptic(8)
    const wrap = wrapRef.current
    if (!wrap) return
    const rect = wrap.getBoundingClientRect()
    setPct(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)))
  }

  return (
    <figure className="not-prose">
      <div
        ref={wrapRef}
        className="relative w-full cursor-ew-resize overflow-hidden rounded-2xl border border-line bg-bg-2 select-none"
        style={{ aspectRatio: aspect }}
        onMouseDown={(e) => startDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      >
        <img
          src={b}
          alt={bLabel}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={a}
          alt={aLabel}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        />
        {/* Labels */}
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/50 px-3 py-1 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
          {aLabel}
        </span>
        <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-black/50 px-3 py-1 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
          {bLabel}
        </span>
        {/* Handle */}
        <div
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          aria-label="Compare wireframe and high-fidelity"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPct((p) => Math.max(0, p - 4))
            if (e.key === 'ArrowRight') setPct((p) => Math.min(100, p + 4))
          }}
          className="compare-handle"
          style={{ left: `${pct}%` }}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs text-ink-3">{caption}</figcaption>
      )}
    </figure>
  )
}
