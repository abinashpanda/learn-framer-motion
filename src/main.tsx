import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import { ToastProvider } from './components/ui/toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
