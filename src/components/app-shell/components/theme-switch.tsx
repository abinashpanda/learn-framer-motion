import { useEffect } from 'react'
import { Toggle } from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '@/stores'

export default function ThemeSwitch() {
  const theme = useStore((store) => store.theme)
  const setTheme = useStore((store) => store.setTheme)

  useEffect(
    function updateTheme() {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    [theme],
  )

  return (
    <Toggle
      pressed={theme === 'dark'}
      onPressedChange={(value) => {
        setTheme(value ? 'dark' : 'light')
      }}
      className="relative h-8 w-8 overflow-hidden rounded-md"
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="light"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 20, opacity: 0.02, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0.02, rotate: 90 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <SunIcon className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 20, opacity: 0.02, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0.02, rotate: 90 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <MoonIcon fill="currentColor" className="h-5 w-5 text-muted-foreground" stroke="none" />
          </motion.div>
        )}
      </AnimatePresence>
    </Toggle>
  )
}
