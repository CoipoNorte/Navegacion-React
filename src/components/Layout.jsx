import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleSidebar = () => setCollapsed(!collapsed)

  return (
    <div className="min-vh-100 bg-light">
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

      {/* 
        Contenido principal
        Las clases CSS manejan el margin-left según el estado
        En móvil SIEMPRE margin-left: 0 gracias al CSS
      */}
      <div
        className={`main-content d-flex flex-column min-vh-100
          ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}
      >
        <main className="flex-grow-1 p-3 p-md-4">
          <Outlet />
        </main>

        <footer className="text-center py-3 text-muted small border-top bg-white">
          <i className="bi bi-heart-fill text-danger"></i> Hecho para aprender React · 2024
        </footer>
      </div>
    </div>
  )
}

export default Layout