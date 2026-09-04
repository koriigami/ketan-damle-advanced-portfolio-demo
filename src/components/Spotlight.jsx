import { useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

/**
 * Cursor-following soft spotlight, scoped to a parent container.
 * Wrap: <div className="relative"><Spotlight /> …content… </div>
 */
export default function Spotlight({ size = 520, opacity = 0.35 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return

    let raf, tx = -9999, ty = -9999, cx = -9999, cy = -9999
    const onMove = (e) => {
      const r = parent.getBoundingClientRect()
      tx = e.clientX - r.left
      ty = e.clientY - r.top
    }
    const onLeave = () => {
      tx = -9999; ty = -9999
    }
    const loop = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      el.style.background = `radial-gradient(${size}px ${size}px at ${cx}px ${cy}px, color-mix(in oklch, var(--accent) ${
        opacity * 100
      }%, transparent), transparent 60%)`
      raf = requestAnimationFrame(loop)
    }
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [reduced, size, opacity])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{ mixBlendMode: 'plus-lighter' }}
    />
  )
}
