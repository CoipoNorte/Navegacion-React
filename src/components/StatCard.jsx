/*
  COMPONENTE REUTILIZABLE - StatCard
  
  ¿POR QUÉ crear componentes reutilizables?
  
  En vez de repetir el mismo HTML 10 veces, 
  creamos UN componente y lo usamos con diferentes props.
  
  Props = los "parámetros" que le pasas al componente
  Es como una función: StatCard(titulo, valor, icono, color)
*/

function StatCard({ title, value, icon, color = 'primary', subtitle }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body d-flex align-items-center">
        <div className={`rounded-3 bg-${color} bg-opacity-10 p-3 me-3`}>
          <i className={`bi ${icon} fs-3 text-${color}`}></i>
        </div>
        <div>
          <div className="text-muted small text-uppercase">{title}</div>
          <div className="fs-4 fw-bold">{value}</div>
          {subtitle && <div className="text-muted small">{subtitle}</div>}
        </div>
      </div>
    </div>
  )
}

export default StatCard