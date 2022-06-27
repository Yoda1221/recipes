import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import './sass/style.scss'

createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
