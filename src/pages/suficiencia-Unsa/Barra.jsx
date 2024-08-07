import PropTypes from 'prop-types'
import formulario from '../../assets/img/formulario/index'
import { useState, useEffect } from 'react'
export default function Barra ({ section }) {
  const [estadoForm, setEstadoForm] = useState([
    'actual',
    'paso',
    'paso',
    'paso'
  ])
  const [estadoImg, setEstadoImg] = useState(['actual-img', '', '', ''])
  const [displayLoader, setDisplayLoader] = useState([
    'block',
    'none',
    'none',
    'none'
  ])
  const [displayCheck, setDisplayCheck] = useState([
    'none',
    'none',
    'none',
    'none'
  ])
  const [widthBarra, setWidthBarra] = useState(['0%', '0%', '0%', '0%'])
  const [colorBarra, setColorBarra] = useState([
    'linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)',
    'linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)',
    'linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)',
    'linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)'
  ])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Cambiar ancho de barra
    setWidthBarra((prevWidthBarra) =>
      prevWidthBarra.map((_, index) => (index < section ? '100%' : '0%'))
    )

    // Cambiar background barra
    setColorBarra((prevColorBarra) =>
      prevColorBarra.map((_, index) =>
        index < section - 1
          ? '#006D77'
          : 'linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)'
      )
    )

    // Aparecer y desaparecer check
    setDisplayCheck((prevDisplayCheck) =>
      prevDisplayCheck.map((_, index) => (index < section ? 'block' : 'none'))
    )

    // Aparecer y desaparecer loader
    setDisplayLoader((prevDisplayLoader) =>
      prevDisplayLoader.map((_, index) =>
        index === section ? 'block' : 'none'
      )
    )

    // Cambiar colores imágenes
    setEstadoImg((prevEstadoImg) =>
      prevEstadoImg.map((_, index) =>
        index < section ? 'paso-img' : index === section ? 'actual-img' : ''
      )
    )

    // Cambiar estado círculos
    setEstadoForm((prevEstadoForm) =>
      prevEstadoForm.map((_, index) =>
        index < section ? 'paso' : index === section ? 'actual' : 'noPaso'
      )
    )

    // Revisión del viewport
    const checkViewport = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches)
    }
    // Check initially
    checkViewport()
    // Add event listener
    window.addEventListener('resize', checkViewport)
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkViewport)
  }, [section])

  return (
    <div className='barrita' id='barrita'>
      <div className='iconos-conteiner'>
        <img
          className={`estado-img ${estadoImg[0]}`}
          src={formulario.pago}
          alt='pago'
        />
        <img
          className={`estado-img ${estadoImg[1]}`}
          src={formulario.datos}
          alt='datos'
        />
        <img
          className={`estado-img ${estadoImg[2]}`}
          src={formulario.mapa}
          alt='mapa'
        />
        <img
          className={`estado-img ${estadoImg[3]}`}
          src={formulario.final}
          alt='final'
          id='listo'
        />
      </div>
      <div className='barra-conteiner' id='barra'>
        {estadoForm.map((estado, index) => (
          <div key={index} className='barras-conteiner'>
            <div
              className={`barra barra__${index + 1}`}
              style={{
                background: colorBarra[index],
                width: widthBarra[index]
              }}
            >
              <div className={`estado ${estado}`}>
                <img
                  className='listo'
                  src={formulario.listo}
                  alt='listo'
                  style={{ display: displayCheck[index] }}
                />
                <img
                  className='proceso'
                  src={formulario.proceso}
                  alt='proceso'
                  style={{ display: displayLoader[index] }}
                />
              </div>
            </div>
            {index < 3 && <div className='barra-gris' />}
          </div>
        ))}
      </div>
      {/* if(sectino 1 == display block */}
      {/* if(sectino 1 == display block */}
      <div className='textos-conteiner'>
        <h4
          id='form__text__facturacion'
          style={{
            display:
              (isMobile && section === 0) || !isMobile ? 'block' : 'none'
          }}
        >
          Datos de <br />
          facturación
        </h4>
        <h4
          id='form__text__datosPersonales'
          style={{
            display:
              (isMobile && section === 1) || !isMobile ? 'block' : 'none'
          }}
        >
          Datos del <br />
          alumno
        </h4>
        <h4
          id='form__text__datosUbicacion'
          style={{
            display:
              (isMobile && section === 2) || !isMobile ? 'block' : 'none'
          }}
        >
          Datos de <br />
          ubicación
        </h4>
        <h4
          id='form__text__ultimo'
          style={{
            display:
              (isMobile && section === 3) || !isMobile ? 'block' : 'none'
          }}
        >
          Último <br /> paso
        </h4>
      </div>
    </div>
  )
}

Barra.propTypes = {
  section: PropTypes.number.isRequired
}
