import { useParams } from 'react-router-dom'
import { studentAdapter } from '@/adapters/student-adapter'
import { useEffect, useState } from 'react'
import styles from './AlumnoProfile.module.scss'
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
    <div className = {styles.container}>
      <h2 >Perfil del estudiante</h2>
      <p> Nombres : {student.firstName}</p>
      <p> Apellidos : {student.lastName}</p>
      <p> Nacimiento : {student.birthdate}</p>
      <p> Celular :{student.contact.phone} </p>
      <p> Dni : {student.dni}</p>
      <p> Status :{student.status} </p>
    </div>
  )
}
