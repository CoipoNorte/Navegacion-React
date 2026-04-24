/*
  ¿QUÉ ES UNA RUTA PROTEGIDA?

  Es como un bouncer en un club nocturno.
  Si tienes credencial (estás logueado) → pasas
  Si no tienes credencial → te manda al login

  Este componente envuelve las rutas que necesitan autenticación.
*/

import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children }) {
  const { user } = useAuth()

  // Si no hay usuario logueado, redirigir al login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Si hay usuario, mostrar el contenido protegido
  return children
}

export default ProtectedRoute