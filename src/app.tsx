import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home'
import FeaturesCard from './pages/features-card'
import AppShell from './components/app-shell'
import PageTransition from './components/page-transition'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  })

  const location = useLocation()

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/features-card"
            element={
              <PageTransition>
                <FeaturesCard />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </AppShell>
  )
}
