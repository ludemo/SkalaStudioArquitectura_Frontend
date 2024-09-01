import { useParams, Outlet } from 'react-router-dom'
import { studentAdapter } from '@/adapters/student-adapter'
import { useEffect, useState } from 'react'
import styles from './AlumnoProfile.module.scss'
import common from '@/assets/img/common/index'
import foto from '@/assets/img/suficiencia.webp'
export default function AlumnoProfile () {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [isEditingPerfilDate, setIsEditingPerfilDate] = useState(false)
  const saveEditPerfil = () => {
  }
  const toggleEditPerfil = () => {
    setIsEditingPerfilDate(!isEditingPerfilDate)
  }
  const handleInputChangePerfil = (e) => {
    const { name, value } = e.target
    setStudent((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
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
        <button onClick = { toggleEditPerfil}className = {styles.edit}style = {{ backgroundColor: 'transparent', border: 'none' }}>
          <img src = {common.editar} alt ='editar'></img>
        </button>
        <div className = {styles.perfilContainer__datos}>
            <img className ={styles.datos__photo} src={foto} alt="Foto del estudiante" />
            {isEditingPerfilDate
              ? (
                  <div className = {styles.datos__texto}>
                        <p> Nombres : {student.firstName}</p>
                        <p> Apellidos : {student.lastName}</p>
                        <p> Nacimiento : {student.birthdate}</p>
                        <p> Celular : {student.phone} </p>
                        <p> Dni : {student.dni}</p>
                        <p> Status : {student.status} </p>
                  </div>
                )
              : (
                  <>
                    <div className = {styles.datos__texto}>
                      <label className = {styles.inputContent}>
                        Nombres:<input
                          type='text'
                          name='firstName'
                          value={student.firstName}
                          onChange={handleInputChangePerfil}
                        />
                      </label>
                      <label className = {styles.inputContent}>
                        Apellidos:<input
                        type='text'
                        name='lastName'
                        value={student.lastName}
                        onChange={handleInputChangePerfil}
                        />
                      </label>
                      <label className = {styles.inputContent}>
                        Nacimiento:<input
                        type='date'
                        name='birthdate'
                        value={student.birthdate}
                        onChange={handleInputChangePerfil}
                        />
                      </label>
                      <label className = {styles.inputContent}>
                        Celular:<input
                        type='text'
                        name='phone'
                        value={student.phone}
                        onChange={handleInputChangePerfil}
                      />
                      </label>
                      <label className = {styles.inputContent}>
                        Dni:<input
                        type='text'
                        name='dni'
                        value={student.dni}
                        onChange={handleInputChangePerfil}
                      />
                      </label>
                      <label className = {styles.inputContent}>
                        Status:<input
                        type='text'
                        name='status'
                        value={student.status}
                        onChange={handleInputChangePerfil}
                      />
                      </label>
                    </div>
                    <button onClick = { saveEditPerfil } className='button'>Guardar </button>
                  </>
                )}
        </div>

      </div>
      <div className={styles.outlet}>
        <Outlet context ={student} />
      </div>
    </div>
  )
}
