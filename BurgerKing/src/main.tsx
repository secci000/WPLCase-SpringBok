import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavbarFooter from './navbarFooter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavbarFooter />
  </StrictMode>,
)
