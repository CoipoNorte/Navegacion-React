/*
  DASHBOARD - Página principal

  Esta es la primera vista que ves al loguearte.
  Muestra un resumen general usando cards reutilizables.
*/

import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import StatCard from '../components/StatCard'

function Dashboard() {
  const { user } = useAuth()

  // Datos simulados para los atajos
  const shortcuts = [
    {
      path: '/calendario',
      icon: 'bi-calendar3',
      title: 'Calendario',
      desc: 'Ver eventos del mes',
      color: 'primary',
      img: 'https://illustrations.popsy.co/violet/calendar.svg'
    },
    {
      path: '/clientes',
      icon: 'bi-people',
      title: 'Clientes',
      desc: '24 clientes activos',
      color: 'success',
      img: 'https://illustrations.popsy.co/violet/man-and-woman-talking.svg'
    },
    {
      path: '/trabajos',
      icon: 'bi-briefcase',
      title: 'Trabajos',
      desc: '8 en progreso',
      color: 'warning',
      img: 'https://illustrations.popsy.co/violet/work-party.svg'
    },
    {
      path: '/analisis',
      icon: 'bi-graph-up',
      title: 'Análisis',
      desc: 'Ver reportes',
      color: 'info',
      img: 'https://illustrations.popsy.co/violet/bar-chart.svg'
    },
    {
      path: '/configuracion',
      icon: 'bi-gear',
      title: 'Configuración',
      desc: 'Ajustes de la app',
      color: 'secondary',
      img: 'https://illustrations.popsy.co/violet/app-development.svg'
    },
    {
      path: '/perfil',
      icon: 'bi-person-circle',
      title: 'Mi Perfil',
      desc: 'Editar información',
      color: 'danger',
      img: 'https://illustrations.popsy.co/violet/selfie.svg'
    },
  ]

  return (
    <div>
      {/* Saludo */}
      <div className="card border-0 shadow-sm mb-4"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="card-body p-4 text-white">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3 className="fw-bold mb-1">
                ¡Hola, {user?.name}! <span className="ms-1">👋</span>
              </h3>
              <p className="mb-0 opacity-75">
                Aquí tienes un resumen de tu actividad. Navega entre las secciones usando el menú lateral.
              </p>
            </div>
            <div className="col-md-4 text-end d-none d-md-block">
              <img
                src="https://illustrations.popsy.co/violet/success.svg"
                alt="Welcome"
                style={{ maxHeight: '120px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats rápidos */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <StatCard title="Clientes" value="24" icon="bi-people-fill" color="primary" subtitle="+3 este mes" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Trabajos" value="18" icon="bi-briefcase-fill" color="success" subtitle="8 activos" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Eventos" value="5" icon="bi-calendar-event" color="warning" subtitle="Esta semana" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Ingresos" value="$12.4k" icon="bi-cash-stack" color="info" subtitle="+12% vs anterior" />
        </div>
      </div>

      {/* Accesos directos con cards e imágenes */}
      <h5 className="fw-bold mb-3">
        <i className="bi bi-grid me-2"></i>Accesos Rápidos
      </h5>
      <div className="row g-3">
        {shortcuts.map((item) => (
          <div key={item.path} className="col-6 col-md-4 col-xl-4">
            <Link to={item.path} className="text-decoration-none">
              <div className="card border-0 shadow-sm h-100 hover-shadow">
                <div className="card-body text-center p-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ height: '100px', objectFit: 'contain' }}
                    className="mb-3"
                  />
                  <h6 className="fw-bold text-dark">
                    <i className={`bi ${item.icon} text-${item.color} me-2`}></i>
                    {item.title}
                  </h6>
                  <small className="text-muted">{item.desc}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Nota educativa */}
      <div className="alert alert-primary mt-4 d-flex align-items-start">
        <i className="bi bi-lightbulb fs-4 me-3 mt-1"></i>
        <div>
          <strong>¿Cómo funciona la navegación?</strong>
          <p className="mb-0 small mt-1">
            Cada card de arriba usa <code>&lt;Link to="/ruta"&gt;</code> de React Router.
            Al hacer clic, React cambia el componente mostrado en el <code>&lt;Outlet /&gt;</code>
            del Layout SIN recargar la página. El sidebar y navbar se mantienen fijos.
            ¡Prueba hacer clic en cualquier sección!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard