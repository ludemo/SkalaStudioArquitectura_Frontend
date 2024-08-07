import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import suficiencia from "../../assets/img/Suficiencia/index";
import common from "../../assets/img/common/index";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Suficiencia() {
  useEffect(() => {
    let glide;

    const initializeGlide = () => {
      glide = new Glide(".glide", {
        type: "carousel",
        perView: 3.15,
        gap: 40,
        autoplay: 2500,
        focusAt: "center",
        breakpoints: {
          1680: {
            perView: 2.8,
          },
          1450: {
            perView: 2.4,
          },
          1280: {
            perView: 2.1,
          },
          1030: {
            perView: 2,
          },
          560: {
            focusAt: 0,
            perView: 1,
            gap: 10,
          },
        },
      });
      glide.mount();
    };

    const images = document.querySelectorAll(".glide__slide img");
    let imagesLoaded = 0;

    images.forEach((img) => {
      img.onload = () => {
        imagesLoaded += 1;
        if (imagesLoaded === images.length) {
          initializeGlide();
        }
      };

      // If images are cached, they may already be loaded
      if (img.complete) {
        imagesLoaded += 1;
        if (imagesLoaded === images.length) {
          initializeGlide();
        }
      }
    });

    // Cleanup function to destroy the Glide instance on component unmount
    return () => {
      if (glide) {
        glide.destroy();
      }
    };
  }, []);
  return (
    <>
      <Link to="/">
        <img className="home" src={common.casa} alt="casa" />
      </Link>
      <div className="titulo">
        <div className="titulo__texto">
          <h1 className="titulo__subtitulo1">Suficiencia</h1>
          <div className="titulo__division"></div>
          <h1 className="titulo__subtitulo2">Unsa</h1>
        </div>
        <img
          className="titulo__img--web"
          loading="lazy"
          src={suficiencia.portadaDesktop}
          alt="portada-suficiencia"
        />
        <img
          className="titulo__img--movil"
          loading="lazy"
          src={suficiencia.portadaMobil}
          alt="portada-suficiencia-movil"
        />
      </div>
      <div className="descripcion">
        <div className="descripcion__titulo">
          <div className="descripcion__subtitulo1">
            <img
              className="subtitulo1__img"
              loading="lazy"
              src={suficiencia.preguntaAbre}
              alt="quienes"
            />
            <h2 className="subtitulo1">Quiénes</h2>
          </div>
          <div className="descripcion__subtitulo2">
            <h2 className="subtitulo2">Somos</h2>
            <img
              className="subtitulo2__img"
              loading="lazy"
              src={suficiencia.preguntaCierra}
              alt="quienes"
            />
          </div>
        </div>
        <p className="descripcion__texto">
          “Iniciada hace 10 años, <strong>Skala Studio</strong> promueve la
          formación especializada de estudiantes próximos a rendir el examen
          suficiencia tomado por la Facultad de Arquitectura de la UNSA."
          <br />
          <br />
          Nos preocupamos con compromiso y vocación, en el desarrollo del
          potencial del alumno valorando sus aspiraciones. Ello nos ha permitido
          ganar la confianza de aquellos que incluso no nos conocen
          directamente, y a todos nuestros antiguos alumnos: Gracias por sus
          referencias.{" "}
        </p>
      </div>
      <div className="video">
        <div className="video__contenedor">
          <iframe
            className="video__frame"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/gPzuld1g5QQ?controls=0&amp;start=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/*Logros*/}
      <div className="logros">
        <div className="logros__titulo ">
          <h2 className="seccion__titulo">
            nuestros <span className="subtitulo--grande">logros</span>
            <br />
            10 años creciendo contigo
          </h2>
        </div>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante1}
                  alt=""
                />
              </li>
              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante2}
                  alt=""
                />
              </li>

              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante3}
                  alt=""
                />
              </li>

              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante4}
                  alt=""
                />
              </li>

              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante5}
                  alt=""
                />
              </li>

              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante6}
                  alt=""
                />
              </li>

              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante7}
                  alt=""
                />
              </li>

              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante8}
                  alt=""
                />
              </li>
              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante9}
                  alt=""
                />
              </li>
              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante10}
                  alt=""
                />
              </li>
              <li className="glide__slide">
                <img
                  className="glide__slide-img"
                  src={suficiencia.ingresantes.ingresante11}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Próximo inicio*/}
      <div className="inicio">
        <h2 className="seccion__titulo">Próximo inicio</h2>
        <div className="inicio__contenedor">
          <div className="inicio__imagen">
            <img
              loading="lazy"
              className="inicio__img"
              src={suficiencia.flayerActual}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="modalidades">
        <h2 className="seccion__titulo">Nuestras modalidades</h2>
        <div className="modalidades__contenedor">
          <div className="modalidad__clasica">
            <h3 className="modalidad__subtitulo">Clásica</h3>
            <ul className="modalidad__lista">
              <li className="modalidad__item">
                <i className="far fa-check-square"></i>
                <p className="item__texto">4 semanas por nivel</p>
              </li>
              <li className="modalidad__item">
                <i className="far fa-check-square"></i>
                <p className="item__texto">40 h - lunes a viernes</p>
              </li>
              <li className="modalidad__item">
                <i className="far fa-check-square"></i>
                <p className="item__texto">100% virtual</p>
              </li>
              <li className="modalidad__item">
                <i className="far fa-check-square"></i>
                <p className="item__texto">Prácticas cada sesión</p>
              </li>
              <li className="modalidad__item">
                <i className="far fa-check-square"></i>
                <p className="item__texto">Asesoría 24 h - lunes a viernes</p>
              </li>
              <li className="modalidad__item">
                <i className="far fa-check-square"></i>
                <p className="item__texto negrita">Virtual : S/.180</p>
              </li>
              <li className="modalidad__item">
                <i className="far fa-check-square"></i>
                <p className="item__texto negrita">Presencial : S/.250</p>
              </li>
            </ul>
          </div>
          <div className="modalidades__raya"></div>
          <div className="modalidad__plus">
            <h3 className="modalidad__subtitulo">Plus</h3>
            <ul className="modalidad__lista">
              <li className="modalidad__item">
                <i className="fas fa-check-square"></i>
                <p className="item__texto">4 semanas por nivel</p>
              </li>
              <li className="modalidad__item">
                <i className="fas fa-check-square"></i>
                <p className="item__texto">48 h - lunes a sábado</p>
              </li>
              <li className="modalidad__item">
                <i className="fas fa-check-square"></i>
                <p className="item__texto">100% virtual</p>
              </li>
              <li className="modalidad__item">
                <i className="fas fa-check-square"></i>
                <p className="item__texto">Prácticas cada sesión</p>
              </li>
              <li className="modalidad__item">
                <i className="fas fa-check-square"></i>
                <p className="item__texto">Asesoría 24 h - lunes a sábado</p>
              </li>
              <li className="modalidad__item">
                <i className="fas fa-check-square"></i>
                <p className="item__texto negrita">Virtual: S/.210</p>
              </li>
              <li className="modalidad__item">
                <i className="fas fa-check-square"></i>
                <p className="item__texto negrita">Presencial: S/.280</p>
              </li>
            </ul>
          </div>
          <img
            loading="lazy"
            className="modalidades__img"
            src={suficiencia.chicaModalidades}
            alt="chica-modalidades"
          />
        </div>
      </div>

      <div className="brochure">
        <div className="brochure__contenedor">
          <p className="brochure__texto">
            Descarga nuestro folleto informativo para conocer todos los detalles
            del curso
          </p>
          <a className="boton__enlace" href={suficiencia.brochure}>
            <div className="boton">
              Descargar brochure
              <img
                loading="lazy"
                className="boton__icono"
                src={common.descarga}
                alt="descarga"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="horarios">
        <h2 className="seccion__titulo">Nuestros horarios</h2>
        <div className="horarios__tabla">
          <div className="horarios__nivel">Presencial</div>
          <div className="horarios__nivel">Semi Presencial</div>
          <div className="horarios__nivel">Virtual</div>
          <p className="center horarios__hora">
            2:00 pm a 4:00 pm
            <br /> Lunes a Viernes
          </p>
          <p className="center horarios__hora">
            8:00 am a 1:00 pm
            <br />
            Sábado a Domingo
          </p>
          <p className="center horarios__hora">
            8:30 pm a 10:30 pm
            <br />
            Lunes a Viernes
          </p>
        </div>
      </div>
      <div className="matriculas">
        <img
          loading="lazy"
          className="matricula__img"
          src={suficiencia.chicoMatricula}
          alt="matriculas"
        />
        <div className="matricula__barra">
          <Link
            className="matricula__boton"
            id="open"
            to="/suficiencia-Unsa/formulario"
          >
            Quiero matricularme
          </Link>
        </div>
      </div>
      <Footer component="footer--suficiencia" />
    </>
  );
}
