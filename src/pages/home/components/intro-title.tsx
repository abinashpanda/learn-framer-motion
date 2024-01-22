import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type IntroTitleProps = {
  title: string
  className?: string
  style?: React.CSSProperties
}

export default function IntroTitle({ title, className, style }: IntroTitleProps) {
  return (
    <motion.div
      className={cn('overflow-hidden text-6xl font-semibold [perspective:300px]', className)}
      style={style}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {title.split('').map((char, index) => {
        return (
          <motion.span
            key={`${char}-${index}`}
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
