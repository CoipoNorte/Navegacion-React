import { useState } from 'react'

function Calendario() {
  const [selectedDay, setSelectedDay] = useState(null)

  // Eventos simulados
  const events = [
    { id: 1, day: 5, title: 'Reunión con cliente', time: '10:00', color: 'primary', icon: 'bi-camera-video' },
    { id: 2, day: 5, title: 'Entrega de proyecto', time: '14:00', color: 'danger', icon: 'bi-box-seam' },
    { id: 3, day: 12, title: 'Revisión de diseño', time: '09:00', color: 'warning', icon: 'bi-palette' },
    { id: 4, day: 18, title: 'Demo al equipo', time: '16:00', color: 'success', icon: 'bi-people' },
    { id: 5, day: 22, title: 'Planning semanal', time: '11:00', color: 'info', icon: 'bi-clipboard-check' },
    { id: 6, day: 28, title: 'Cierre de mes', time: '17:00', color: 'secondary', icon: 'bi-flag' },
  ]

  const daysInMonth = 31
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

  const getEventsForDay = (day) => events.filter(e => e.day === day)

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">
            <i className="bi bi-calendar3 text-primary me-2"></i>Calendario
          </h4>
          <p className="text-muted mb-0">Enero 2025</p>
        </div>
        <button className="btn btn-primary">
          <i className="bi bi-plus-lg me-1"></i>Nuevo Evento
        </button>
      </div>

      <div className="row g-3">
        {/* Calendario */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              {/* Encabezados días */}
              <div className="row g-1 mb-2">
                {dayNames.map(d => (
                  <div key={d} className="col text-center">
                    <small className="fw-bold text-muted">{d}</small>
                  </div>
                ))}
              </div>
              {/* Días del mes */}
              <div className="row g-1">
                {/* Espacios vacíos para alinear (ej: Enero 2025 empieza en Miércoles) */}
                {[1, 2].map(i => (
                  <div key={`empty-${i}`} className="col p-2"></div>
                ))}
                {days.map(day => {
                  const dayEvents = getEventsForDay(day)
                  const isToday = day === 15
                  const isSelected = selectedDay === day
                  return (
                    <div key={day} className="col p-1" style={{ minHeight: '60px' }}>
                      <div
                        className={`rounded p-1 text-center h-100 cursor-pointer
                          ${isToday ? 'bg-primary text-white' : ''}
                          ${isSelected && !isToday ? 'bg-primary bg-opacity-10 border border-primary' : ''}
                          ${!isToday && !isSelected ? 'hover-bg-light' : ''}
                        `}
                        style={{ cursor: 'pointer', minHeight: '50px' }}
                        onClick={() => setSelectedDay(day)}
                      >
                        <div className="small fw-semibold">{day}</div>
                        {dayEvents.map(ev => (
                          <div key={ev.id} className={`badge bg-${ev.color} rounded-pill mt-1`}
                            style={{ fontSize: '0.6rem' }}>
                            •
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Eventos del día */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">
                <i className="bi bi-list-check me-2"></i>
                {selectedDay ? `Eventos del día ${selectedDay}` : 'Próximos eventos'}
              </h6>
            </div>
            <div className="card-body">
              {(selectedDay ? getEventsForDay(selectedDay) : events).length === 0 ? (
                <div className="text-center py-4">
                  <img
                    src="https://illustrations.popsy.co/violet/vacation.svg"
                    alt="Sin eventos"
                    style={{ height: '120px' }}
                  />
                  <p className="text-muted mt-3">Sin eventos este día</p>
                </div>
              ) : (
                (selectedDay ? getEventsForDay(selectedDay) : events).map(event => (
                  <div key={event.id} className="d-flex align-items-start mb-3 p-2 rounded bg-light">
                    <div className={`rounded-circle bg-${event.color} bg-opacity-10 p-2 me-3`}>
                      <i className={`bi ${event.icon} text-${event.color}`}></i>
                    </div>
                    <div>
                      <div className="fw-semibold small">{event.title}</div>
                      <small className="text-muted">
                        <i className="bi bi-clock me-1"></i>{event.time} · Día {event.day}
                      </small>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendario