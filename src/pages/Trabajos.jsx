import { useState } from 'react'

function Trabajos() {
  const [filter, setFilter] = useState('todos')

  const jobs = [
    { id: 1, title: 'Rediseño Web', client: 'Ana Martínez', status: 'En progreso', progress: 65, priority: 'Alta', deadline: '15 Feb', img: 'https://illustrations.popsy.co/violet/web-design.svg' },
    { id: 2, title: 'App Móvil', client: 'Roberto López', status: 'En progreso', progress: 30, priority: 'Alta', deadline: '28 Feb', img: 'https://illustrations.popsy.co/violet/app-development.svg' },
    { id: 3, title: 'Logo Corporativo', client: 'María García', status: 'Completado', progress: 100, priority: 'Media', deadline: '10 Ene', img: 'https://illustrations.popsy.co/violet/graphic-design.svg' },
    { id: 4, title: 'SEO & Marketing', client: 'Carlos Ruiz', status: 'Pendiente', progress: 0, priority: 'Baja', deadline: '20 Mar', img: 'https://illustrations.popsy.co/violet/marketing.svg' },
    { id: 5, title: 'E-commerce', client: 'Laura Sánchez', status: 'En progreso', progress: 85, priority: 'Alta', deadline: '5 Feb', img: 'https://illustrations.popsy.co/violet/online-shopping.svg' },
    { id: 6, title: 'Dashboard Analytics', client: 'Pedro Hernández', status: 'Pendiente', progress: 0, priority: 'Media', deadline: '1 Abr', img: 'https://illustrations.popsy.co/violet/bar-chart.svg' },
  ]

  const filtered = filter === 'todos' ? jobs : jobs.filter(j => j.status === filter)

  const priorityBadge = (p) => {
    const c = { Alta: 'danger', Media: 'warning', Baja: 'info' }
    return <span className={`badge bg-${c[p]}`}>{p}</span>
  }

  const progressColor = (p) => {
    if (p >= 80) return 'success'
    if (p >= 40) return 'primary'
    if (p > 0) return 'warning'
    return 'secondary'
  }

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
        <div>
          <h4 className="fw-bold mb-1">
            <i className="bi bi-briefcase text-warning me-2"></i>Trabajos
          </h4>
          <p className="text-muted mb-0">{filtered.length} trabajos</p>
        </div>
        <button className="btn btn-warning text-dark">
          <i className="bi bi-plus-lg me-1"></i>Nuevo Trabajo
        </button>
      </div>

      {/* Filtros */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {['todos', 'En progreso', 'Completado', 'Pendiente'].map(f => (
          <button
            key={f}
            className={`btn btn-sm ${filter === f ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setFilter(f)}
          >
            {f === 'todos' ? 'Todos' : f}
          </button>
        ))}
      </div>

      {/* Cards de trabajos */}
      <div className="row g-3">
        {filtered.map(job => (
          <div key={job.id} className="col-md-6 col-xl-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="text-center mb-3">
                  <img
                    src={job.img}
                    alt={job.title}
                    style={{ height: '100px', objectFit: 'contain' }}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6 className="fw-bold mb-0">{job.title}</h6>
                  {priorityBadge(job.priority)}
                </div>

                <p className="text-muted small mb-3">
                  <i className="bi bi-person me-1"></i>{job.client}
                  <span className="mx-2">·</span>
                  <i className="bi bi-calendar me-1"></i>{job.deadline}
                </p>

                {/* Barra de progreso */}
                <div className="mb-2">
                  <div className="d-flex justify-content-between small mb-1">
                    <span>Progreso</span>
                    <span className="fw-bold">{job.progress}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div
                      className={`progress-bar bg-${progressColor(job.progress)}`}
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="d-flex gap-1 mt-3">
                  <button className="btn btn-outline-primary btn-sm flex-grow-1">
                    <i className="bi bi-eye me-1"></i>Detalles
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trabajos