import { motion } from 'framer-motion'
import { FramerIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function AppShell({ children }: React.PropsWithChildren<{}>) {
  const horizontal = Math.random() > 0.5

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 h-16 bg-muted/20 backdrop-blur-md">
        <motion.div
          className="mx-auto flex h-full max-w-screen-lg items-center"
          initial={{ x: -20, opacity: 0.01 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-md border bg-primary p-2 text-primary-foreground">
              <FramerIcon fill="currentColor" stroke="none" />
            </div>
            <div className="leading-none">
              Learn <br />
              Framer Motion
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-border"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
      <motion.div
        className="relative py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
      <motion.div
        className={cn(
          'fixed bottom-0 top-0 z-50 h-screen w-full bg-primary',
          horizontal ? 'origin-left' : 'origin-bottom',
        )}
        initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
        animate={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
        exit={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.div
        className={cn(
          'fixed bottom-0 top-0 z-50 h-screen w-full origin-top bg-background',
          horizontal ? 'origin-right' : 'origin-top',
        )}
        initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
        animate={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
        exit={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
      />
    </>
  )
}
