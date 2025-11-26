import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import faviconUrl from './three/favicon.svg'

const existingFavicon = document.querySelector("link[rel='icon']")
const favicon = existingFavicon || document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/svg+xml'
favicon.sizes = 'any'
favicon.href = faviconUrl

if (!existingFavicon) {
  document.head.appendChild(favicon)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
