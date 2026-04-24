import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Sidebar({ collapsed, toggleSidebar }) {
  const { user, logout } = useAuth()
  const location = useLocation()

  // Estado que se actualiza en TIEMPO REAL al cambiar tamaño de ventana
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992)
    }

    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize)

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Cuando cambia de móvil a desktop, forzar estado correcto
  useEffect(() => {
    if (!isMobile && !collapsed) {
      // Si pasamos a desktop con sidebar abierto, lo dejamos expandido
    }
    if (isMobile && !collapsed) {
      // Si pasamos a móvil con sidebar abierto, lo cerramos
      toggleSidebar()
    }
  }, [isMobile])

  const menuItems = [
    { path: '/dashboard', icon: 'bi-speedometer2', label: 'Dashboard' },
    { path: '/calendario', icon: 'bi-calendar3', label: 'Calendario' },
    { path: '/clientes', icon: 'bi-people', label: 'Clientes' },
    { path: '/trabajos', icon: 'bi-briefcase', label: 'Trabajos' },
    { path: '/analisis', icon: 'bi-graph-up', label: 'Análisis' },
    { path: '/configuracion', icon: 'bi-gear', label: 'Configuración' },
    { path: '/perfil', icon: 'bi-person-circle', label: 'Perfil' },
  ]

  const getTitle = () => {
    const found = menuItems.find(item => item.path === location.pathname)
    return found ? found.label : 'Dashboard'
  }

  // Mostrar textos cuando está expandido (desktop) o abierto (móvil)
  const showText = isMobile ? !collapsed : !collapsed
  const isCompact = !isMobile && collapsed

  const handleNavClick = () => {
    if (isMobile) toggleSidebar()
  }

  // Clases del sidebar según estado
  const getSidebarClass = () => {
    let classes = 'sidebar d-flex flex-column text-white'
    if (isMobile) {
      classes += collapsed ? '' : ' open'
    } else {
      classes += collapsed ? ' collapsed' : ' expanded'
    }
    return classes
  }

  return (
    <>
      {/* Overlay móvil */}
      {!collapsed && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={getSidebarClass()}>

        {/* Header con logo */}
        <div
          className="d-flex align-items-center p-3 border-bottom border-secondary"
          style={{
            justifyContent: isCompact ? 'center' : 'space-between',
            minHeight: '64px'
          }}
        >
          {isCompact ? (
            <button
              className="btn p-0 border-0"
              onClick={toggleSidebar}
              title="Abrir menú"
            >
              <img
                src="/coiponorteSinFondo.png"
                alt="Coiponorte"
                width={36}
                height={36}
                style={{ objectFit: 'contain' }}
              />
            </button>
          ) : (
            <>
              <div className="d-flex align-items-center">
                <img
                  src="/coiponorteSinFondo.png"
                  alt="Coiponorte"
                  width={36}
                  height={36}
                  className="me-2"
                  style={{ objectFit: 'contain' }}
                />
                <span className="fw-bold">Coiponorte</span>
              </div>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={toggleSidebar}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </>
          )}
        </div>

        {/* Sección actual */}
        {showText && (
          <div className="px-3 py-2" style={{ background: 'rgba(13,110,253,0.1)' }}>
            <small className="text-secondary text-uppercase" style={{ fontSize: '0.7rem' }}>
              Sección actual
            </small>
            <div className="fw-bold text-info small">{getTitle()}</div>
          </div>
        )}

        {/* Perfil */}
        <div className="border-bottom border-secondary py-3 d-flex flex-column align-items-center">
          <img
            src={user?.avatar}
            alt="Avatar"
            className="rounded-circle"
            width={isCompact ? 36 : 56}
            height={isCompact ? 36 : 56}
          />
          {showText && (
            <div className="text-center mt-2">
              <div className="fw-semibold small">{user?.name}</div>
              <div className="text-secondary" style={{ fontSize: '0.7rem' }}>
                {user?.email}
              </div>
            </div>
          )}
        </div>

        {/* Menú */}
        <nav className="flex-grow-1 overflow-auto py-2 px-2">
          {showText && (
            <small
              className="text-secondary text-uppercase px-2 mb-1 d-block"
              style={{ fontSize: '0.65rem', letterSpacing: '1px' }}
            >
              Menú
            </small>
          )}
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              title={isCompact ? item.label : ''}
              className={({ isActive }) =>
                `sidebar-link d-flex align-items-center text-decoration-none rounded mb-1 text-light
                ${isActive ? 'active' : ''}`
              }
              style={{
                padding: isCompact ? '10px 0' : '10px 12px',
                justifyContent: isCompact ? 'center' : 'flex-start'
              }}
            >
              <i
                className={item.icon}
                style={{
                  fontSize: isCompact ? '1.25rem' : '1rem',
                  width: isCompact ? 'auto' : '20px',
                  textAlign: 'center'
                }}
              ></i>
              {showText && <span className="ms-3 small">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Cerrar sesión */}
        <div className="p-2 border-top border-secondary">
          <button
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center rounded"
            onClick={logout}
            title={isCompact ? 'Cerrar Sesión' : ''}
            style={{ padding: '8px' }}
          >
            <i className="bi bi-box-arrow-left" style={{ fontSize: '1.1rem' }}></i>
            {showText && <span className="ms-2 small">Cerrar Sesión</span>}
          </button>
        </div>
      </div>

      {/* Botón flotante solo en móvil */}
      {collapsed && isMobile && (
        <button
          className="fab-menu btn btn-dark"
          onClick={toggleSidebar}
        >
          <i className="bi bi-list fs-5"></i>
        </button>
      )}
    </>
  )
}

export default Sidebar