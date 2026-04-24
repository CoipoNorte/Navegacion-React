import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password) {
      setError('Completa todos los campos')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    setLoading(true)
    setTimeout(() => {
      register(name, email, password)
      navigate('/dashboard')
      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-vh-100 d-flex">
      {/* Panel derecho - Formulario (invertido respecto al login) */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
        <div style={{ maxWidth: '420px', width: '100%' }}>
          <div className="text-center mb-4">
            <i className="bi bi-rocket-takeoff fs-1 text-primary"></i>
            <h3 className="fw-bold mt-2">Crear Cuenta</h3>
            <p className="text-muted">Únete y empieza a gestionar</p>
          </div>

          {error && (
            <div className="alert alert-danger d-flex align-items-center">
              <i className="bi bi-exclamation-circle me-2"></i>{error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">
                <i className="bi bi-person me-1"></i>Nombre completo
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                <i className="bi bi-envelope me-1"></i>Correo electrónico
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                <i className="bi bi-lock me-1"></i>Contraseña
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                <i className="bi bi-lock-fill me-1"></i>Confirmar contraseña
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 mb-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Creando cuenta...
                </>
              ) : (
                <>
                  <i className="bi bi-person-plus me-2"></i>
                  Crear Cuenta
                </>
              )}
            </button>
          </form>

          <p className="text-center text-muted">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-decoration-none fw-semibold">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>

      {/* Panel decorativo */}
      <div
        className="d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5"
        style={{
          width: '45%',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        }}
      >
        <img
          src="https://illustrations.popsy.co/violet/team-collaboration.svg"
          alt="Register"
          style={{ maxWidth: '400px', width: '100%' }}
        />
        <h2 className="mt-4 fw-bold">Únete al equipo</h2>
        <p className="text-center opacity-75 fs-5">
          Miles de profesionales ya gestionan sus proyectos con nosotros
        </p>
      </div>
    </div>
  )
}

export default Register