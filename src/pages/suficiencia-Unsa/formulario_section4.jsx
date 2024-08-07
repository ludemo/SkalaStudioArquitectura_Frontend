import PropTypes from 'prop-types'
import { useState } from 'react'
// Datos de plan
export default function Section4 ({ section, setDatosPdf }) {
  const [modalidad, setModalidad] = useState('Virtual')
  const onChangeValue = (event) => {
    const { name, value } = event.target
    if (name === 'modalidad') {
      setModalidad(value)
    }
    setDatosPdf(prevState => ({
      ...prevState,
      [name]: value // Usar el valor directamente del evento
    }))
  }

  return (
    <div className='form__seccion' style={{ height: section === 3 ? '100%' : '0', transform: `translateX(-${section * 100}%)` }}>
      <div className='facturacion__form'>
        <h3 className='form__subs'>Elige tu plan skala studio</h3>
        <label htmlFor='modalidad' className='form__label'>Modalidad</label>
        <select name='modalidad' value={modalidad} id='modalidad' onChange={onChangeValue} className='form__input'>
          <option className='form__opcion'>Virtual</option>
          <option className='form__opcion'>Virtual plus</option>
          <option className='form__opcion'>Semipresencial</option>
          <option className='form__opcion'>Presencial</option>
          <option className='form__opcion'>Presencial plus</option>
        </select>
        {(modalidad === 'Virtual' || modalidad === 'Virtual plus') && (
          <>
            <label htmlFor='nivel' id='nivel__label' className='form__label'>Nivel</label>
            <select name='nivel' onChange={onChangeValue} id='nivel' className='form__input'>
              <option className='form__opcion'>Básico</option>
              <option className='form__opcion'>Intermedio</option>
              <option className='form__opcion'>Avanzado</option>
            </select>
          </>
        )}
        <label htmlFor='horario' className='form__label'>Horario</label>
        <select name='Horario' onChange={onChangeValue} id='horario' className='form__input'>
          {/* Prescencial Plus */}
          {modalidad === 'Presencial' && (<>
            <option className='form__opcion'>2:00 - 4:00pm L a S</option>
            <option className='form__opcion'>4:00 - 6:00pm L a V y de 2:00 a 4:00pm el S</option>
                                          </>)}
          {/* Prescencial */}
          {modalidad === 'Presencial plus' && (<>
            <option className='form__opcion'>2:00 - 4:00 pm L a V</option>
            <option className='form__opcion'>4:00 - 6:00 pm L a V</option>
                                               </>)}
          {/* Semipresencial */}
          {modalidad === 'Semipresencial' &&
            <option className='form__opcion'>8:00 - 1:00 pm - S virtual/D presencial</option>}
          {/* Virtual */}
          {modalidad === 'Virtual' &&
            <option className='form__opcion'>8:30 a 10:30pm L a V</option>}
          {/* Virtual Plus */}
          {modalidad === 'Virtual plus' &&
            <option className='form__opcion'> 8:30 a 10:30pm L a V y de 2:00 a 4:00pm</option>}
        </select>
        <label htmlFor='fechaInicio' className='form__label'>Fecha de inicio</label>
        <input name='fechaInicio' onChange={onChangeValue} id='fechaInicio' type='date' className='form__input' />
      </div>
      {/* Datos academicos y del familiar apoderado */}
      <div className='facturacion__imagen'>
        <h3>Datos académicos</h3>
        <label htmlFor='institucion' className='form__label label--margin'>Institución de procedencia</label>
        <input type='text' id='institucion' className='form__input input--margin' enterKeyHint='done' />
        <h3>Datos del familiar apoderado</h3>
        <label htmlFor='apellidoRepresentante' className='form__label label--margin'>Nombre y apellido del representante</label>
        <input type='text' id='apellidoRepresentante' className='form__input input--margin' placeholder='Apellidos' enterKeyHint='done' />
        <input type='text' id='nombreRepresentante' className='form__input input--margin' placeholder='Nombres' enterKeyHint='done' />
        <label htmlFor='numeroRepresentante' className='form__label label--margin'>Número del apoderado</label>
        <input type='number' id='numeroRepresentante' className='form__input input--margin' placeholder='Número' enterKeyHint='done' />
      </div>
    </div>
  )
}

Section4.propTypes = {
  section: PropTypes.number.isRequired
}
