import { useParams } from 'react-router-dom'
import { studentAdapter } from '@/adapters/student-adapter'
import { useEffect, useState } from 'react'
export default function AlumnoProfile () {
  const { id } = useParams()
  const [student, setStudent] = useState(null)

  useEffect(() => {
    const fetchStudent = async () => {
      const studentData = await studentAdapter.getTransformedStudentById(id)
      if (!studentData) {
        console.log('Alumno no existe')
        throw new Error('Alumno no encontrado')
      }
      setStudent(studentData)
    }
    fetchStudent()
  }, [id])
  if (!student) {
    return <p>Cargando...</p>
  }
  return (
    <div>
      <div>{student.fullName}</div>
    </div>
  )
}
