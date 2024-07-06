import common from 'assets/img/common'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import Barra from './Barra'
import Section1 from './formulario_section1';
import Section2 from './formulario_section2';
import Section3 from './formulario_section3';
import Section4 from './formulario_section4';
export default function Formulario() {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previene el envío del formulario
        }
    };
    //Variables para definir las secciones  
    const [currentSection, setCurrentSection] = useState(0);
    //Funciones para cambiar de sección
    const Next = (event) => {
        event.preventDefault();
        setCurrentSection(currentSection +1);
      };
      const Previous = (event) => {
        event.preventDefault();
        setCurrentSection(currentSection-1);
      };
    return (
    <>
        <Link to="/suficiencia-Unsa" className="flecha-atras__link">
            <img className="talleres__flecha-atras" src={common.flecha} alt="atras"/>Suficiencia Unsa
        </Link>
    <h1 className="seccion__titulo">Formulario de matrícula</h1>
    <Barra section = { currentSection } />
    <form onKeyDown={handleKeyDown} id = "form" action="">
        <div className="form">
            {/*DATOS BOLETA*/}
                <Section1 section = { currentSection }/>
            {/*DATOS PERSONALES*/}
                <Section2 section = { currentSection }/>
            {/*Datos de ubicación*/}
                <Section3 section = { currentSection } />
            {/*Datos de plan*/}
                <Section4 section = { currentSection }/>
        </div>
        <div className={`botones ${ currentSection === 0 ? 'justify-right' : 'justify-space-between' }`} id="botones">
            {currentSection > 0 && <button className= {`form__boton boton--left ${ currentSection === 3 ? 'position-absolute' : ''}`} onClick = {Previous}> Anterior</button>}
            { currentSection < 3 && <button className='form__boton boton--right' onClick = {Next}> Siguiente</button>}
            { currentSection ===3 && <button type="submit" id="enviar" className="inscripcion__boton boton--enviar boton--form" value="Enviar">Enviar</button>}
        </div>
    </form>
    {/*Loader de formulario final final final final ya me canse, tengo sueño*/}
    <div id = "carga" className = "carga">
        <div className="carga__img">
            <img id = "img__carga" className = "img__carga" src={common.lampara_icon} alt=""/>
            <div id = "carga__efecto" className="carga__efecto"></div>
        </div>
        <br/>
        <div className = "carga__info">
            {/*Regresar al principio*/}
            {/*Descargar tu comprobate*/}
            <p id = "texto__carga">Registrando</p>
            <div id = "opciones__form" className="opciones__form">
                <a href ="www.skalastudioarquitectura.com" className="container__boton--link">
                    <div className="boton__link" id="open">regresar al inicio</div>
                </a>
               {/*  <a className="boton__descarga--a" onClick="generarPDF()"> 
                      <div className="boton__descarga">
                          Descargar constancia<img loading="lazy" className="boton__icono" src={common.descarga} alt="descarga"/>
                      </div>
                </a>  */}
            </div>
        </div>
    </div>
    {/*Final del loader porque me llega, weno toy cansadito xd*/}
    </>
  );
}   