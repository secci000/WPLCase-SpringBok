import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage></HomePage>
  </StrictMode>,
)
