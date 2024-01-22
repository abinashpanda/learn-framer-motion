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
      initial="initial"
      animate="enter"
    >
      {title.split('').map((char, index) => {
        return (
          <motion.span
            custom={index}
            key={`${char}-${index}`}
            variants={{
              initial: {
                opacity: 0,
                y: 40,
              },
              enter: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: i * 0.05,
                },
              }),
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
