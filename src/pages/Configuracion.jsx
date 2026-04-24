import { useState } from 'react'

function Configuracion() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('es')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <div className="mb-4">
        <h4 className="fw-bold mb-1">
          <i className="bi bi-gear text-secondary me-2"></i>Configuración
        </h4>
        <p className="text-muted mb-0">Personaliza tu experiencia</p>
      </div>

      {saved && (
        <div className="alert alert-success d-flex align-items-center">
          <i className="bi bi-check-circle me-2"></i>
          ¡Configuración guardada correctamente!
        </div>
      )}

      <div className="row g-4">
        {/* General */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-sliders me-2"></i>General
              </h6>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <label className="form-label fw-semibold">Idioma</label>
                <select
                  className="form-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="es">🇪🇸 Español</option>
                  <option value="en">🇬🇧 English</option>
                  <option value="pt">🇧🇷 Português</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Zona horaria</label>
                <select className="form-select">
                  <option>UTC-6 (Ciudad de México)</option>
                  <option>UTC-5 (Bogotá)</option>
                  <option>UTC+1 (Madrid)</option>
                  <option>UTC-3 (Buenos Aires)</option>
                </select>
              </div>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <label className="form-check-label">
                  <i className="bi bi-moon me-1"></i>Modo oscuro
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Notificaciones */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-bell me-2"></i>Notificaciones
              </h6>
            </div>
            <div className="card-body">
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
                <label className="form-check-label">Notificaciones por email</label>
              </div>

              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Recordatorios de eventos</label>
              </div>

              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Actualizaciones de proyectos</label>
              </div>

              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Newsletter semanal</label>
              </div>
            </div>
          </div>
        </div>

        {/* Seguridad */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-shield-lock me-2"></i>Seguridad
              </h6>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Contraseña actual</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Nueva contraseña</label>
                  <input type="password" className="form-control" placeholder="••••••••" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón guardar */}
      <div className="d-flex justify-content-end mt-4 gap-2">
        <button className="btn btn-outline-secondary">Cancelar</button>
        <button className="btn btn-primary" onClick={handleSave}>
          <i className="bi bi-check-lg me-1"></i>Guardar Cambios
        </button>
      </div>
    </div>
  )
}

export default Configuracion