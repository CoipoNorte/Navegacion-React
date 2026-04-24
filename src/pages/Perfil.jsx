import { useAuth } from '../context/AuthContext'

function Perfil() {
  const { user } = useAuth()

  const skills = ['React', 'JavaScript', 'Bootstrap', 'Node.js', 'Figma', 'Git']

  const activity = [
    { action: 'Completó el proyecto "Rediseño Web"', time: 'Hace 2 horas', icon: 'bi-check-circle', color: 'success' },
    { action: 'Añadió nuevo cliente: Pedro Hernández', time: 'Hace 5 horas', icon: 'bi-person-plus', color: 'primary' },
    { action: 'Creó evento en el calendario', time: 'Ayer', icon: 'bi-calendar-plus', color: 'warning' },
    { action: 'Actualizó configuración del perfil', time: 'Hace 2 días', icon: 'bi-gear', color: 'secondary' },
  ]

  return (
    <div>
      <div className="mb-4">
        <h4 className="fw-bold mb-1">
          <i className="bi bi-person-circle text-danger me-2"></i>Mi Perfil
        </h4>
        <p className="text-muted mb-0">Tu información personal</p>
      </div>

      <div className="row g-4">
        {/* Card de perfil */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm text-center">
            <div
              className="rounded-top"
              style={{
                height: '100px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}
            ></div>
            <div className="card-body" style={{ marginTop: '-50px' }}>
              <img
                src={user?.avatar}
                alt="Avatar"
                className="rounded-circle border border-4 border-white shadow"
                width={100}
                height={100}
              />
              <h5 className="fw-bold mt-2 mb-0">{user?.name}</h5>
              <p className="text-muted">{user?.email}</p>

              <div className="d-flex justify-content-center gap-3 mb-3">
                <div className="text-center">
                  <div className="fw-bold text-primary fs-5">24</div>
                  <small className="text-muted">Clientes</small>
                </div>
                <div className="vr"></div>
                <div className="text-center">
                  <div className="fw-bold text-success fs-5">18</div>
                  <small className="text-muted">Proyectos</small>
                </div>
                <div className="vr"></div>
                <div className="text-center">
                  <div className="fw-bold text-warning fs-5">4.8</div>
                  <small className="text-muted">Rating</small>
                </div>
              </div>

              <button className="btn btn-primary btn-sm w-100">
                <i className="bi bi-pencil me-1"></i>Editar Perfil
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="card border-0 shadow-sm mt-3">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-code-slash me-2"></i>Habilidades
              </h6>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info y actividad */}
        <div className="col-lg-8">
          {/* Formulario de información */}
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-info-circle me-2"></i>Información Personal
              </h6>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Nombre</label>
                  <input type="text" className="form-control" defaultValue={user?.name} />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Email</label>
                  <input type="email" className="form-control" defaultValue={user?.email} />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Teléfono</label>
                  <input type="tel" className="form-control" defaultValue="+34 612 345 678" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Ubicación</label>
                  <input type="text" className="form-control" defaultValue="Madrid, España" />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-semibold">Bio</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue="Desarrollador apasionado por crear experiencias web increíbles."
                  />
                </div>
              </div>
              <button className="btn btn-primary mt-3">
                <i className="bi bi-check-lg me-1"></i>Guardar
              </button>
            </div>
          </div>

          {/* Actividad reciente */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-activity me-2"></i>Actividad Reciente
              </h6>
            </div>
            <div className="card-body">
              {activity.map((item, i) => (
                <div key={i} className={`d-flex align-items-start ${i < activity.length - 1 ? 'mb-3 pb-3 border-bottom' : ''}`}>
                  <div className={`rounded-circle bg-${item.color} bg-opacity-10 p-2 me-3`}>
                    <i className={`bi ${item.icon} text-${item.color}`}></i>
                  </div>
                  <div>
                    <div className="small fw-semibold">{item.action}</div>
                    <small className="text-muted">{item.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil