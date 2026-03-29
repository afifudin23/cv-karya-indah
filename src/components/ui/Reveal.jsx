import { useInView } from '../../lib/useInView'

export function Reveal({
  as: Component = 'div',
  className = '',
  style,
  delay = 0,
  duration,
  stagger,
  threshold,
  rootMargin,
  once = true,
  children,
  ...props
}) {
  const [ref, inView] = useInView({ threshold, rootMargin, once })

  const mergedStyle = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : null),
    ...(duration ? { '--reveal-duration': `${duration}ms` } : null),
  }

  return (
    <Component
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''} ${className}`}
      style={mergedStyle}
      {...props}
    >
      {children}
    </Component>
  )
}

export function RevealStagger({
  as: Component = 'div',
  className = '',
  style,
  delay = 0,
  duration,
  stagger = 85,
  threshold,
  rootMargin,
  once = true,
  children,
  ...props
}) {
  const [ref, inView] = useInView({ threshold, rootMargin, once })

  const mergedStyle = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : null),
    ...(duration ? { '--reveal-duration': `${duration}ms` } : null),
    ...(stagger ? { '--stagger-step': `${stagger}ms` } : null),
  }

  return (
    <Component
      ref={ref}
      className={`reveal-stagger ${inView ? 'reveal--in' : ''} ${className}`}
      style={mergedStyle}
      {...props}
    >
      {children}
    </Component>
  )
}
