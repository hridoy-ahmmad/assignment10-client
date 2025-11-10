import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Layouts/Routes/Route.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
  </StrictMode>,
)
