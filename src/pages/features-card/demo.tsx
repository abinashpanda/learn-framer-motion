import { motion } from 'framer-motion'

export function FeatureCardDemo() {
  const COLORS = ['#b6d7ff', '#c4e8d6', '#d3c9ed', '#f8d1cc', '#b6d7ff', '#c4e8d6']

  return (
    <motion.div
      className="relative aspect-square overflow-hidden bg-muted transition-colors hover:bg-background"
      variants={{
        initial: {},
        hover: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {COLORS.map((backgroundColor, index) => {
        const variants = {
          initial: {
            x: '-50%',
            y: '-50%',
            rotate: (COLORS.length - 1 - index) * -5,
          },
          hover: {
            rotate: 0,
            opacity: index !== COLORS.length - 1 ? 0 : 1,
            x: index !== COLORS.length - 1 ? (index % 2 === 0 ? '-100%' : '100%') : '-50%',
          },
        }
        return (
          <motion.div
            key={index}
            className="pointer-events-none absolute left-1/2 top-1/2 grid aspect-video w-[80%] grid-cols-2 gap-2 rounded-md border border-background p-2 text-background/50"
            variants={variants}
            style={{
              zIndex: COLORS.length - index,
              backgroundColor,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            <div>
              <div className="mb-2 h-2 rounded-md bg-current" />
              <div className="h-[60%] rounded-md bg-current" />
            </div>
            <div className="rounded-md bg-current" />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
