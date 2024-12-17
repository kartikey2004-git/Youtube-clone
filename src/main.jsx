import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UtilisContextProvider } from './context/UtilisContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <UtilisContextProvider>
    <App />
    </UtilisContextProvider>
  </AuthProvider>
  </BrowserRouter>,
)
