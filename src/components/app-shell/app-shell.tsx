import { motion } from 'framer-motion'
import { FramerIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeSwitch from './components/theme-switch'

export default function AppShell({ children }: React.PropsWithChildren<{}>) {
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
          <Link to="/" className="flex items-center gap-2 rounded-md p-0.5">
            <div className="rounded-md bg-primary p-2 text-primary-foreground">
              <FramerIcon fill="currentColor" stroke="none" />
            </div>
            <div className="leading-none">
              Learn <br />
              Framer Motion
            </div>
          </Link>
          <div className="flex-1" />
          <ThemeSwitch />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-border/30"
          initial={{ opacity: 0.01 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
      <div className="px-4 py-20">{children}</div>
    </>
  )
}
