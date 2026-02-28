import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Dynamic import so it doesn't block React rendering
import GuideAgent from 'guideagent'

setTimeout(() => {
  GuideAgent.initFromUrl('/guide.json')
  GuideAgent.setLang('en')
}, 800)