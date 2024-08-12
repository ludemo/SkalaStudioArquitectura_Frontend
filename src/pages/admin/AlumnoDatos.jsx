import { useOutletContext } from 'react-router-dom'
import styles from './AlumnoDatos.module.scss'
export default function AlumnoDatos () {
  const student = useOutletContext()
  return (
    <>
    <div className={styles.datosContainer}>
      <h1 className={styles.datosContainer}>Datos del alumno</h1>
      <p>Nombres: {student.firstName}</p>
      <p>Apellidos: {student.lastName}</p>
    </div>
    <div>
      <h1 className={styles.datosContainer}>Datos técnicos</h1>
    </div>
    </>
  )
}
