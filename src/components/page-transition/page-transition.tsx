import { motion } from 'framer-motion'

export default function PageTransition({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="relative"
      >
        {children}
      </motion.div>
      <motion.div
        className="fixed bottom-0 top-0 z-50 h-screen w-full origin-bottom bg-primary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed bottom-0 top-0 z-50 h-screen w-full origin-top bg-background"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
      />
    </>
  )
}
