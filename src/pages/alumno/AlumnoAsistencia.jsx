import { useParams, useOutletContext, NavLink } from 'react-router-dom'
export default function AlumnoAsistencia () {
  const student = useOutletContext()
  const { id } = useParams()
  return (
        <div>
            <h1>Asistencia del alumno</h1>
            <NavLink className='button' to ={`/alumnos/${id}/datos`}>Ver Datos </NavLink>
        </div>
  )
}
