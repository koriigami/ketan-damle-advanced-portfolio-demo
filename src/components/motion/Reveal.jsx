import { motion } from 'framer-motion'

export default function Reveal({
  children,
  y = 28,
  delay = 0,
  duration = 0.7,
  once = true,
  className,
  as: Tag = motion.div,
}) {
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  )
}
