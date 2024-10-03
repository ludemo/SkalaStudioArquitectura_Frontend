import { useParams, useOutletContext, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { scheduleAdapter } from '@/adapters/schedule-adapter'
export default function AlumnoAsistencia () {
  const student = useOutletContext()
  const [schedule, setSchedule] = useState([])
  const [cycle, setCycle] = useState(1)
  const { id } = useParams()
  const totalDays = 34
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  useEffect(() => {
    const fetchStudent = async () => {
      const scheduleData = await scheduleAdapter.getTransformedSchedules(id, cycle)
      if (!scheduleData) {
        console.log('Chvr')
        throw new Error('No horario no never')
      }
      setSchedule(scheduleData)
    }
    fetchStudent()
  }, [id, cycle])

  const generateCalendar = () => {
    const rows = []
    let cells = []

    // Empezamos en lunes, así que el primer día del mes debería estar en la primera posición.
    // Si el primer día del mes no es lunes, dejamos celdas vacías.
    for (let i = 0; i < daysOfWeek.length; i++) {
      if (i < 1) {
        cells.push(<td key={`empty-${i}`}></td>)
      } else {
        break
      }
    }

    for (let day = 1; day <= totalDays; day++) {
      cells.push(<td key={day}>{day}</td>)

      // Si es domingo o el último día del mes, terminamos la fila
      if (cells.length === 7 || day === totalDays) {
        rows.push(<tr key={day}>{cells}</tr>)
        cells = []
      }
    }

    return rows
  }
  return (
        <div>
            <h1>Asistencia del alumno</h1>
            actualizar
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  {daysOfWeek.map((day, index) => (
                    <th key={index}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generateCalendar()}
              </tbody>
            </table>
            <NavLink className='button' to ={`/alumnos/${id}/datos`}>Ver Datos </NavLink>
        </div>
  )
}
