import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from './pages/home'
import FeaturesCard from './pages/features-card'

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

  return <RouterProvider router={router} />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/features-card',
    element: <FeaturesCard />,
  },
])
