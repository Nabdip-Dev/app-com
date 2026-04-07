import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/home/Home'
import Apps from './pages/apps/Apps'
import InstallApp from './pages/installapp/installapp'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/app',
        element: <Apps />
      },
      {
        path: '/install',
        element: <InstallApp/>
      }
    ],
    errorElement: <NotFoundPage/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
