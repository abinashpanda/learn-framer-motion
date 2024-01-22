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
      className="relative h-6 w-6 overflow-hidden rounded-md"
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="light"
            className="absolute inset-0"
            initial={{ y: 20, opacity: 0.02 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0.02 }}
          >
            <SunIcon />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            className="absolute inset-0"
            initial={{ y: 20, opacity: 0.02 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0.02 }}
          >
            <MoonIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </Toggle>
  )
}
