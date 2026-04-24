/*
  ¿QUÉ ES UN CONTEXT?
  
  Imagina que tienes una casa (tu app) con muchas habitaciones (componentes).
  Si quieres que TODAS las habitaciones tengan acceso a la luz (datos del usuario),
  en vez de pasar cables por cada puerta, simplemente conectas todo al 
  sistema eléctrico central. ESO es el Context.

  Sin Context: App -> Layout -> Sidebar -> Componente (pasando props uno por uno)
  Con Context: Cualquier componente accede directamente a los datos
*/

import { createContext, useContext, useState } from 'react'

// 1. Creamos el "sistema eléctrico central"
const AuthContext = createContext()

// 2. Creamos el proveedor (el que "da la luz" a todos)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Simula login (en un proyecto real, esto iría contra un API)
  const login = (email, password) => {
    // Simulamos que cualquier email/pass funciona
    setUser({
      name: 'Carlos García',
      email: email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos'
    })
    return true
  }

  // Simula registro
  const register = (name, email, password) => {
    setUser({
      name: name,
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    })
    return true
  }

  // Cerrar sesión
  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 3. Hook personalizado para usar el context fácilmente
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}