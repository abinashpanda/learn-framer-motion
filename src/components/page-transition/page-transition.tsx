import { motion } from 'framer-motion'

export default function PageTransition({ children }: React.PropsWithChildren<{}>) {
  return (
    <motion.div
      className="relative origin-top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
