import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import FeaturesCard from './pages/features-card'

export default function App() {
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
