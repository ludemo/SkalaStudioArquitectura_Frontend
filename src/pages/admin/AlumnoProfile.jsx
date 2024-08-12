import { useParams, Outlet } from 'react-router-dom'
import { studentAdapter } from '@/adapters/student-adapter'
import { useEffect, useState } from 'react'
import styles from './AlumnoProfile.module.scss'
import common from '@/assets/img/common/index'
import foto from '@/assets/img/suficiencia.webp'
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
    <div className ={styles.container}>
      <div className = {styles.perfilContainer}>
        <h2 style = {{ textAlign: 'center' }} >Perfil del estudiante</h2>
        <div className = {styles.perfilContainer__datos}>
            <img className ={styles.datos__photo} src={foto} alt="Foto del estudiante" />
            <div className = {styles.datos__texto}>
              <p> Nombres : {student.firstName}</p>
              <p> Apellidos : {student.lastName}</p>
              <p> Nacimiento : {student.birthdate}</p>
              <p> Celular : {student.contact.phone} </p>
              <p> Dni : {student.dni}</p>
              <p> Status : {student.status} </p>
            </div>
        </div>
        <button className = {styles.edit}style = {{ backgroundColor: 'transparent', border: 'none' }}>
          <img src = {common.editar}></img>
        </button>
      </div>
      <div className={styles.outlet}>
        <Outlet context ={student} />
      </div>
    </div>
  )
}
