import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Calendario from './pages/Calendario'
import Clientes from './pages/Clientes'
import Trabajos from './pages/Trabajos'
import Analisis from './pages/Analisis'
import Configuracion from './pages/Configuracion'
import Perfil from './pages/Perfil'

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendario" element={<Calendario />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="trabajos" element={<Trabajos />} />
            <Route path="analisis" element={<Analisis />} />
            <Route path="configuracion" element={<Configuracion />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}

export default App