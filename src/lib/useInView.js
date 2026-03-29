import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  if (!window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useInView({
  threshold = 0.14,
  rootMargin = '0px 0px -12% 0px',
  once = true,
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Always show content if user prefers reduced motion.
    if (prefersReducedMotion()) {
      setInView(true)
      return
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    if (inView && once) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const isIntersecting =
          !!entry && (entry.isIntersecting || entry.intersectionRatio > 0)

        if (isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, inView])

  return [ref, inView]
}
