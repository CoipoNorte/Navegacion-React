import StatCard from '../components/StatCard'

function Analisis() {
  // Datos simulados para las "barras"
  const monthlyData = [
    { month: 'Jul', value: 45 },
    { month: 'Ago', value: 62 },
    { month: 'Sep', value: 55 },
    { month: 'Oct', value: 78 },
    { month: 'Nov', value: 85 },
    { month: 'Dic', value: 92 },
    { month: 'Ene', value: 70 },
  ]

  const topClients = [
    { name: 'Ana Martínez', revenue: '$4,200', percentage: 85 },
    { name: 'Roberto López', revenue: '$3,800', percentage: 76 },
    { name: 'Laura Sánchez', revenue: '$2,900', percentage: 58 },
    { name: 'Carlos Ruiz', revenue: '$2,100', percentage: 42 },
    { name: 'María García', revenue: '$1,500', percentage: 30 },
  ]

  return (
    <div>
      <div className="mb-4">
        <h4 className="fw-bold mb-1">
          <i className="bi bi-graph-up text-info me-2"></i>Análisis
        </h4>
        <p className="text-muted mb-0">Resumen de rendimiento</p>
      </div>

      {/* Stats principales */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3">
          <StatCard title="Ingresos Totales" value="$14.5k" icon="bi-currency-dollar" color="success" subtitle="+18% vs mes anterior" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Proyectos" value="18" icon="bi-folder2-open" color="primary" subtitle="6 completados" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Horas Trabajadas" value="342h" icon="bi-clock-history" color="warning" subtitle="Este mes" />
        </div>
        <div className="col-6 col-lg-3">
          <StatCard title="Satisfacción" value="4.8/5" icon="bi-star-fill" color="danger" subtitle="24 reseñas" />
        </div>
      </div>

      <div className="row g-3">
        {/* Gráfico de barras simulado con Bootstrap */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-bar-chart me-2"></i>Ingresos Mensuales
              </h6>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-end justify-content-around" style={{ height: '250px' }}>
                {monthlyData.map((item, index) => (
                  <div key={index} className="text-center flex-grow-1 px-1">
                    <div className="d-flex flex-column align-items-center justify-content-end h-100">
                      <small className="fw-bold text-primary mb-1">{item.value}%</small>
                      <div
                        className="bg-primary bg-opacity-75 rounded-top w-100"
                        style={{
                          height: `${item.value * 2}px`,
                          maxWidth: '50px',
                          transition: 'height 0.5s ease'
                        }}
                      ></div>
                    </div>
                    <small className="text-muted mt-1 d-block">{item.month}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top clientes */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-trophy me-2"></i>Top Clientes
              </h6>
            </div>
            <div className="card-body">
              {topClients.map((client, i) => (
                <div key={i} className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="d-flex align-items-center">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${client.name}`}
                        alt={client.name}
                        className="rounded-circle me-2"
                        width={28}
                        height={28}
                      />
                      <small className="fw-semibold">{client.name}</small>
                    </div>
                    <small className="fw-bold text-success">{client.revenue}</small>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: `${client.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Imagen decorativa */}
      <div className="text-center mt-4">
        <img
          src="https://illustrations.popsy.co/violet/data-analysis.svg"
          alt="Analytics"
          style={{ maxHeight: '200px' }}
          className="opacity-50"
        />
      </div>
    </div>
  )
}

export default Analisis