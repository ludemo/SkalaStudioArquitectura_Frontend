import { useNavigate } from 'react-router-dom'
import { teacherService } from '@/services/api/teacher-service'
import styles from './add-teacher.module.scss'

export default function AgregarProfesor () {
  const nagivate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nombres = data.get('nombres')
    const apellidos = data.get('apellidos')
    const fechaNacimiento = data.get('fechaNacimiento')
    const codigo = data.get('codigo')
    const dni = data.get('dni')
    const curso = data.get('curso')
    console.log('Agregar docente:', { nombres, apellidos, fechaNacimiento, codigo, dni, curso })
    const response = await teacherService.addTeacher({ nombres, apellidos, fechaNacimiento, codigo, dni, curso })
    nagivate('/profesores')
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        administracion de docentes
      </h2>
      <div>
        <div>
          <p className={styles.subtitle}>agregar docente</p>
        </div>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__container}>
            <div className={styles.form__item}>
              <label htmlFor="nombres">Nombres</label>
              <input type="text" name="nombres" id="nombres" />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" name="apellidos" id="apellidos" />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="fechaNacimiento">Nacimiento</label>
              <input type="date" name="fechaNacimiento" id="fechaNacimiento" />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="codigo">Codigo</label>
              <input type="text" name="codigo" id="codigo" />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="dni">DNI</label>
              <input type="text" name="dni" id="dni" />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="curso">Curso</label>
              <input type="text" name="curso" id="curso" />
            </div>
          </div>
          <div className={styles.form__actions}>
            <button type="submit" className={styles.form__submit}>Agregar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
