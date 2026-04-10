import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import InstallAppProvider from './contact/InstallAppProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallAppProvider>
      <RouterProvider router={router} />
    </InstallAppProvider>
  </StrictMode>,
)
