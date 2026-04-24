import { useState } from 'react'

function Clientes() {
  const [search, setSearch] = useState('')
  const [view, setView] = useState('grid') // grid o list

  const clients = [
    { id: 1, name: 'Ana Martínez', email: 'ana@email.com', phone: '+34 612 345 678', company: 'TechCorp', status: 'Activo', projects: 3 },
    { id: 2, name: 'Roberto López', email: 'roberto@email.com', phone: '+34 623 456 789', company: 'DesignPro', status: 'Activo', projects: 5 },
    { id: 3, name: 'María García', email: 'maria@email.com', phone: '+34 634 567 890', company: 'StartupXYZ', status: 'Inactivo', projects: 1 },
    { id: 4, name: 'Carlos Ruiz', email: 'carlos@email.com', phone: '+34 645 678 901', company: 'WebAgency', status: 'Activo', projects: 2 },
    { id: 5, name: 'Laura Sánchez', email: 'laura@email.com', phone: '+34 656 789 012', company: 'DataFlow', status: 'Activo', projects: 4 },
    { id: 6, name: 'Pedro Hernández', email: 'pedro@email.com', phone: '+34 667 890 123', company: 'CloudNet', status: 'Pendiente', projects: 0 },
  ]

  const filtered = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase())
  )

  const statusBadge = (status) => {
    const colors = { Activo: 'success', Inactivo: 'secondary', Pendiente: 'warning' }
    return <span className={`badge bg-${colors[status]}`}>{status}</span>
  }

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
        <div>
          <h4 className="fw-bold mb-1">
            <i className="bi bi-people text-success me-2"></i>Clientes
          </h4>
          <p className="text-muted mb-0">{filtered.length} clientes encontrados</p>
        </div>
        <button className="btn btn-success">
          <i className="bi bi-person-plus me-1"></i>Nuevo Cliente
        </button>
      </div>

      {/* Buscador y vista */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body d-flex flex-wrap gap-2 align-items-center">
          <div className="flex-grow-1">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre o empresa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="btn-group">
            <button
              className={`btn ${view === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setView('grid')}
            >
              <i className="bi bi-grid"></i>
            </button>
            <button
              className={`btn ${view === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setView('list')}
            >
              <i className="bi bi-list-ul"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Vista Grid */}
      {view === 'grid' ? (
        <div className="row g-3">
          {filtered.map(client => (
            <div key={client.id} className="col-sm-6 col-xl-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${client.name}`}
                    alt={client.name}
                    className="rounded-circle mb-3"
                    width={80}
                    height={80}
                  />
                  <h6 className="fw-bold">{client.name}</h6>
                  <p className="text-muted small mb-2">{client.company}</p>
                  {statusBadge(client.status)}

                  <hr />

                  <div className="row text-center g-0">
                    <div className="col-6 border-end">
                      <div className="fw-bold text-primary">{client.projects}</div>
                      <small className="text-muted">Proyectos</small>
                    </div>
                    <div className="col-6">
                      <div className="fw-bold text-success">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <small className="text-muted">Verificado</small>
                    </div>
                  </div>

                  <div className="d-flex gap-1 mt-3">
                    <button className="btn btn-outline-primary btn-sm flex-grow-1">
                      <i className="bi bi-eye me-1"></i>Ver
                    </button>
                    <button className="btn btn-outline-secondary btn-sm flex-grow-1">
                      <i className="bi bi-chat me-1"></i>Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Vista Lista */
        <div className="card border-0 shadow-sm">
          <div className="list-group list-group-flush">
            {filtered.map(client => (
              <div key={client.id} className="list-group-item d-flex align-items-center py-3">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${client.name}`}
                  alt={client.name}
                  className="rounded-circle me-3"
                  width={48}
                  height={48}
                />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{client.name}</div>
                  <small className="text-muted">{client.email} · {client.company}</small>
                </div>
                <div className="d-none d-md-block me-3">
                  {statusBadge(client.status)}
                </div>
                <button className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Clientes