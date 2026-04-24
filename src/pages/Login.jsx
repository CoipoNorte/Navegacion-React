/*
  PÁGINA DE LOGIN

  Conceptos:
  - useState: Para guardar lo que escribe el usuario en los inputs
  - useNavigate: Para redirigir al usuario después del login
  - Formulario controlado: React controla el valor de los inputs
*/

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  // Estados del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Hooks
  const { login } = useAuth()        // Función login del context
  const navigate = useNavigate()      // Para redirigir

  const handleSubmit = (e) => {
    e.preventDefault() // Evita que el form recargue la página
    setError('')
    setLoading(true)

    // Simulamos un pequeño delay como si fuera una API real
    setTimeout(() => {
      if (email && password) {
        login(email, password)
        navigate('/dashboard') // Redirige al dashboard
      } else {
        setError('Por favor completa todos los campos')
      }
      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-vh-100 d-flex">
      {/* Panel izquierdo - Decorativo */}
      <div
        className="d-none d-lg-flex flex-column justify-content-center align-items-center text-white p-5"
        style={{
          width: '45%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <img
          src="https://illustrations.popsy.co/violet/work-from-home.svg"
          alt="Welcome"
          style={{ maxWidth: '400px', width: '100%' }}
        />
        <h2 className="mt-4 fw-bold">¡Bienvenido de vuelta!</h2>
        <p className="text-center opacity-75 fs-5">
          Gestiona tus proyectos, clientes y equipo desde un solo lugar
        </p>
      </div>

      {/* Panel derecho - Formulario */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
        <div style={{ maxWidth: '420px', width: '100%' }}>
          {/* Logo */}
          <div className="text-center mb-4">
            <i className="bi bi-rocket-takeoff fs-1 text-primary"></i>
            <h3 className="fw-bold mt-2">MiApp</h3>
            <p className="text-muted">Inicia sesión en tu cuenta</p>
          </div>

          {/* Alerta de error */}
          {error && (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <i className="bi bi-exclamation-circle me-2"></i>
              {error}
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label small" htmlFor="remember">
                  Recordarme
                </label>
              </div>
              <a href="#" className="small text-decoration-none">¿Olvidaste tu contraseña?</a>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 mb-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Ingresando...
                </>
              ) : (
                <>
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Iniciar Sesión
                </>
              )}
            </button>
          </form>

          {/* Separador */}
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-3 text-muted small">o continúa con</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Social login */}
          <div className="d-flex gap-2 mb-4">
            <button className="btn btn-outline-secondary flex-grow-1">
              <i className="bi bi-google me-1"></i>Google
            </button>
            <button className="btn btn-outline-secondary flex-grow-1">
              <i className="bi bi-github me-1"></i>GitHub
            </button>
          </div>

          {/* Link a registro */}
          <p className="text-center text-muted">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-decoration-none fw-semibold">
              Regístrate aquí
            </Link>
          </p>

          {/* Tip educativo */}
          <div className="alert alert-info small mt-3">
            <i className="bi bi-info-circle me-1"></i>
            <strong>Tip:</strong> Escribe cualquier email y contraseña para entrar.
            Es una simulación para aprender cómo funciona la navegación.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login