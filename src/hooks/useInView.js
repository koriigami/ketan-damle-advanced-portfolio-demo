import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element is near the viewport, so callers can lazy-mount
 * (and unmount) expensive children — e.g. a WebGL scene. This matters
 * specifically for ThreeUI's iframe-based scenes: running more than one of
 * them mounted at once on the same page has been observed to starve both
 * of resources and leave them stuck loading indefinitely. Only ever mount
 * one at a time by gating each on its own useInView().
 */
export default function useInView({ rootMargin = '200px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return [ref, inView]
}
