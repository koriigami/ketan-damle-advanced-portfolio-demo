import { motion } from 'framer-motion'
import { Fragment } from 'react'

// Word-by-word reveal with per-word y and opacity stagger.
// Keeps whitespace between words visible; safe with mixed markup like <em>.
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  from = { y: '110%', opacity: 0 },
  to = { y: '0%', opacity: 1 },
}) {
  const words = text.split(' ')
  return (
    <span className={`inline-block ${className || ''}`} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-baseline">
            <motion.span
              className="inline-block will-change-transform"
              initial={from}
              animate={to}
              transition={{
                duration: 0.7,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </span>
  )
}
