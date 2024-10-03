import { useParams, useOutletContext, NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './student-data.module.scss'
import common from '@/assets/img/common/index'
export default function AlumnoDatos () {
  const student = useOutletContext()
  const [editableStudent, setEditableStudent] = useState(student)
  const [isEditingPersonalDate, setIsEditingPersonalDate] = useState(false)
  const [isEditingTechnicalDate, setIsEditingTechnicalDate] = useState(false)
  const { id } = useParams()
  /* Funciones para el envio de datos  */
  const SavePersonalData = () => {
  }
  const SaveTechnicalData = () => {
  }
  /* Funciones para editar los datos */
  const toggleEditPersonalDate = () => {
    setIsEditingPersonalDate(!isEditingPersonalDate)
  }
  const toggleEditTechnicalDate = () => {
    setIsEditingTechnicalDate(!isEditingTechnicalDate)
  }
  /* Datos personales */
  const handleInputChangeLocation = (e) => {
    const { name, value } = e.target
    setEditableStudent((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        [name]: value
      }
    }))
  }
  const handleInputChangeAcademic = (e) => {
    const { name, value } = e.target
    setEditableStudent((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleInputChangeRepresentative = (e) => {
    const { name, value } = e.target
    setEditableStudent((prevState) => ({
      ...prevState,
      representative: {
        ...prevState.representative,
        [name]: value
      }
    }))
  }
  /* Datos técnicos */
  const handleInputChangePlan = (e) => {
    const { name, value } = e.target
    setEditableStudent((prevState) => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        [name]: value
      }
    }))
  }
  const handleInputChangeBilling = (e) => {
    const { name, value } = e.target
    setEditableStudent((prevState) => ({
      ...prevState,
      billing: {
        ...prevState.billing,
        [name]: value
      }
    }))
  }
  return (
    <div className={styles.container}>
      <div className={styles.datosContainer}>
        <button onClick = { toggleEditPersonalDate }className = {styles.edit} style = {{ backgroundColor: 'transparent', border: 'none' }}>
          <img src = {common.editar} alt ='editar'></img>
        </button>
        <h2>Datos personales</h2>
        {!isEditingPersonalDate
          ? (
            <>
              <h5>Datos de ubicación</h5>
              <p>Lugar de nacimiento: {student.location.birthplace}</p>
              <p>Dirección: {student.location.address} </p>
              <p>Correo: {student.location.email}</p>
              <h5>Representantes</h5>
              <p>Nombre: {student.representative.firstName}</p>
              <p>Apellido: {student.representative.lastName} </p>
              <p>Telefono: {student.representative.phone}</p>
              <h5>Datos academicos</h5>
              <p>Institución: {student.institution}</p>
            </>
            )
          : (
            <>
              <h5>Datos de ubicación</h5>
              <label className = {styles.inputContent} >
                Lugar de nacimiento:<input
                  type = "text"
                  value = {editableStudent.location.birthplace}
                  name='birthplace'
                  onChange={handleInputChangeLocation}
              />
              </label>
              <label className = {styles.inputContent} >
                Dirección:<input
                  type = "text"
                  value = {editableStudent.location.address}
                  name='address'
                  onChange={handleInputChangeLocation}
              />
              </label>
              <label className = {styles.inputContent} >
                Correo:<input
                  type = "text"
                  value = {editableStudent.location.email}
                  name='email'
                  onChange={handleInputChangeLocation}
              />
              </label>
              <h5>Representantes</h5>
              <label className = {styles.inputContent} >
                Nombre:<input
                  type = "text"
                  value = {editableStudent.representative.firstName}
                  name='firstName'
                  onChange={handleInputChangeRepresentative}
              />
              </label>
              <label className = {styles.inputContent} >
                Apellido:<input
                  type = "text"
                  value = {editableStudent.representative.lastName}
                  name='lastName'
                  onChange={handleInputChangeRepresentative}
              />
              </label>
              <label className = {styles.inputContent} >
                Telefono:<input
                  type = "text"
                  value = {editableStudent.representative.phone}
                  name='phone'
                  onChange={handleInputChangeRepresentative}
              />
              </label>
              <h5>Datos academicos </h5>
              <label className = {styles.inputContent} >
                Institución:<input
                  type = "text"
                  value = {editableStudent.institution}
                  name='institution'
                  onChange={handleInputChangeAcademic}
                />
              </label>
              <button onClick = { SavePersonalData } className='button'>
                Guardar
              </button>
            </>
            )
        }

      </div>
      <div className={styles.datosContainer}>
        <button onClick = { toggleEditTechnicalDate } className = {styles.edit} style = {{ backgroundColor: 'transparent', border: 'none' }}>
          <img src = {common.editar} alt ='editar'></img>
        </button>
        <h2>Datos técnicos</h2>
        {!isEditingTechnicalDate
          ? (
            <>
              <h5>Plan</h5>
              <p>Modalidad : {student.plan.modality}</p>
              <p>Nivel: {student.plan.level} </p>
              <p>Horario: {student.plan.schedule}</p>
              <p>Fecha inicio: {student.plan.startDate} </p>
              <h5>Datos de factuación </h5>
              <p>Nombre de la boleta: {student.billing.invoiceName} </p>
              <p>Banco: {student.billing.bank} </p>
              <p>Numero operación: {student.billing.transactionNumber} </p>
              <p>DNI: {student.billing.dni} </p>
            </>
            )
          : (
            <>
              <h5>Plan</h5>
              <label className = {styles.inputContent} >
                Modalidad:<input
                  type = "text"
                  value = {editableStudent.plan.modality}
                  name='modality'
                  onChange={handleInputChangePlan}
                />
              </label>
              <label className = {styles.inputContent} >
                Nivel:<input
                  type = "text"
                  value = {editableStudent.plan.level}
                  name='level'
                  onChange={handleInputChangePlan}
                />
              </label>
              <label className = {styles.inputContent} >
                Horario:<input
                  type = "text"
                  value = {editableStudent.plan.schedule}
                  name='schedule'
                  onChange={handleInputChangePlan}
                />
              </label>
              <label className = {styles.inputContent} >
                Fecha inicio:<input
                  type = "text"
                  value = {editableStudent.plan.startDate}
                  name='startDate'
                  onChange={handleInputChangePlan}
                />
              </label>
              <h5>Datos de facturación</h5>
              <label className = {styles.inputContent} >
                Nombre de la boleta:<input
                  type = "text"
                  value = {editableStudent.billing.invoiceName}
                  name='invoiceName'
                  onChange={handleInputChangeBilling}
                />
              </label>
              <label className = {styles.inputContent} >
                Banco:<input
                  type = "text"
                  value = {editableStudent.billing.bank}
                  name='bank'
                  onChange={handleInputChangeBilling}
                />
              </label>
              <label className = {styles.inputContent} >
                Numero operación:<input
                  type = "text"
                  value = {editableStudent.billing.transactionNumber}
                  name='transactionNumber'
                  onChange={handleInputChangeBilling}
                />
              </label>
              <label className = {styles.inputContent} >
                DNI:<input
                  type = "text"
                  value = {editableStudent.billing.dni}
                  name='dni'
                  onChange={handleInputChangeBilling}
                />
              </label>
              <button onClick = { SaveTechnicalData }className='button'>
                Guardar
              </button>
            </>
            )
        }
      </div>
      <NavLink className ='center button ' to ={`/alumnos/${id}/asistencia`}>Ver asistencia </NavLink>
    </div>
  )
}
