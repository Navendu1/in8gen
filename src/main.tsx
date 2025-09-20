import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import EbookStandalone from './EbookStandalone'

const isEbookRoute = window.location.pathname.startsWith('/ebook');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isEbookRoute ? <EbookStandalone /> : <App />}
  </StrictMode>,
)
