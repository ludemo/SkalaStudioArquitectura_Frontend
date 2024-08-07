import common from "../../assets/img/common/index";
import Loader from "../../components/loader";
import { useState } from "react";
import { Link } from "react-router-dom";
import Barra from "./Barra";
import Section1 from "./formulario_section1";
import Section2 from "./formulario_section2";
import Section3 from "./formulario_section3";
import Section4 from "./formulario_section4";
import { jsPDF } from "jspdf";
import { imgData } from "../../assets/js/imgData";
export default function Formulario() {
  const [datosPDF, setDatosPdf] = useState({
    nombre: "",
    fechaInicio: "",
    horario: "8:30 a 10:30pm L a V",
    modalidad: "virtual",
    nivel: "basico",
  });
  const [loading, setLoading] = useState(false);
  const [envioDatos, setEnvioDatos] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Previene el envío del formulario
    }
  };
  //Variables para definir las secciones
  const [currentSection, setCurrentSection] = useState(0);
  //Funciones para cambiar de sección
  const Next = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection + 1);
  };
  const Previous = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection - 1);
  };
  const generarPdf = (e) => {
    e.preventDefault();
    const pdf = new jsPDF({
      orientation: "landscape",
    });
    pdf.addImage(imgData, "JPEG", 0, 0, 300, 210);
    //pdf.setFont("PoiretOne");
    pdf.setFontSize(25);
    pdf.text(105, 107, datosPDF.nombre);
    pdf.setFontSize(16);
    pdf.text(90, 119, datosPDF.fechaInicio);
    pdf.text(75, 127, datosPDF.horario);
    pdf.text(190, 119, datosPDF.modalidad);
    pdf.text(190, 127, datosPDF.nivel);
    pdf.save("Constancia.pdf");
  };
  //Función para envio de datos
  const enviarDatos = (e) => {
    e.preventDefault();
    setEnvioDatos(true);
  };
  return (
    <>
      <Link to="/suficiencia-Unsa" className="flecha-atras__link">
        <img
          className="talleres__flecha-atras"
          src={common.flecha}
          alt="atras"
        />
        Suficiencia Unsa
      </Link>
      <h1 className="seccion__titulo">Formulario de matrícula</h1>
      <Barra section={currentSection} />
      <form onKeyDown={handleKeyDown} id="form" action="">
        <div className="form">
          {/*DATOS BOLETA*/}
          <Section1 section={currentSection} />
          {/*DATOS PERSONALES*/}
          <Section2 section={currentSection} setDatosPdf={setDatosPdf} />
          {/*Datos de ubicación*/}
          <Section3 section={currentSection} />
          {/*Datos de plan*/}
          <Section4 section={currentSection} setDatosPdf={setDatosPdf} />
        </div>
        <div
          className={`botones ${
            currentSection === 0 ? "justify-right" : "justify-space-between"
          }`}
          id="botones"
        >
          {currentSection > 0 && (
            <button
              className={`form__boton boton--left ${
                currentSection === 3 ? "position-absolute" : ""
              }`}
              onClick={Previous}
            >
              {" "}
              Anterior
            </button>
          )}
          {currentSection < 3 && (
            <button className="form__boton boton--right" onClick={Next}>
              {" "}
              Siguiente
            </button>
          )}
          {currentSection === 3 && (
            <button
              onKeyDown={handleKeyDown}
              type="submit"
              onClick={enviarDatos}
              id="enviar"
              className="inscripcion__boton boton--enviar boton--form"
              value="Enviar"
            >
              Enviar
            </button>
          )}
        </div>
      </form>
      {/*Loader de formulario final final final final ya me canse, tengo sueño*/}
      {loading && <Loader />}
      {envioDatos && (
        <div id="carga" className="fixed carga">
          <div className="carga__img">
            <img
              id="img__carga"
              className="img__carga"
              src={common.lampara_icon}
              alt=""
            />
          </div>
          <br />
          <div className="carga__info">
            <p>
              Gracias por registrarte, se te estara enviando una notificación a
              un correo con la confirmación de tu matricula cualquier duda no
              dudes en escribirnos😉
            </p>
            <div id="opciones__form" className="opciones__form">
              <Link to="/" className="container__boton--link">
                <div className="boton__link" id="open">
                  regresar al inicio
                </div>
              </Link>
              <button onClick={generarPdf} className="boton__descarga">
                Descargar constancia
                <img
                  loading="lazy"
                  className="boton__icono"
                  src={common.descarga}
                  alt="descarga"
                />
              </button>
            </div>
          </div>
        </div>
      )}
      {/*Final del loader porque me llega, weno toy cansadito xd*/}
    </>
  );
}
