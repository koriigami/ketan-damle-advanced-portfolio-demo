import { useEffect, useRef } from 'react'
import { useSettings } from '../store/settings'

export default function CursorHalo() {
  const ref = useRef(null)
  const enabled = useSettings((s) => s.cursorEnabled)

  useEffect(() => {
    if (!enabled) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = ref.current
    if (!el) return
    let tx = -100, ty = -100, cx = -100, cy = -100
    let raf

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    const onOver = (e) => {
      const target = e.target
      const hovering = target?.closest?.('a, button, [data-magnetic], [data-cursor="hover"]')
      el.classList.toggle('is-hovering', !!hovering)
    }
    const loop = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled])

  if (!enabled) return null
  return <div ref={ref} className="cursor-halo" aria-hidden="true" />
}
