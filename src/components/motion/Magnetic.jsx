import useMagnetic from '../../hooks/useMagnetic'

export default function Magnetic({ children, className, strength = 0.28, radius = 80 }) {
  const ref = useMagnetic({ strength, radius })
  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${
        className || ''
      }`}
    >
      {children}
    </span>
  )
}
