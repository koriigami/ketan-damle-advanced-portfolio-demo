import { useEffect, useRef } from 'react'

export default function useMagnetic({ strength = 0.28, radius = 80 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rect = el.getBoundingClientRect()
    const onResize = () => (rect = el.getBoundingClientRect())
    window.addEventListener('resize', onResize)

    const onMove = (e) => {
      rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist < rect.width / 2 + radius) {
        el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`
      } else {
        el.style.transform = ''
      }
    }
    const onLeave = () => (el.style.transform = '')

    window.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength, radius])

  return ref
}
