import common from "../../assets/img/common/index";
import { Link } from "react-router-dom";
export default function Talleres() {
  return (
    <>
      <section className="portada">
        <div className="portada--limitador limitador">
          <Link to="/">
            <img className="home" src={common.casa} alt="casa" />
          </Link>
          <div className="titulo titulo--talleres">
            <div className="titulo__texto titulo__texto--talleres">
              <h1 className="titulo__subtitulo1 titulo__subtitulo1--talleres">
                Nuestros
              </h1>
              <h1 className="titulo__subtitulo2">Talleres</h1>
            </div>
            <div className="navegacion--talleres">
              <div className="navegacion__elemento">
                <a href="#maqueteria">
                  <div className="simbolo simbolo--maqueteria"></div>
                </a>
                <h4 className="navegacion__elemento__text">Maquetería</h4>
              </div>
              <div className="navegacion__elemento">
                <a href="#geometria">
                  <div className="simbolo simbolo--geometria"></div>
                </a>
                <h4 className="navegacion__elemento__text">
                  Geometría <br />
                  Descriptiva
                </h4>
              </div>
              <div className="navegacion__elemento">
                <a href="#dibujo">
                  <div className="simbolo simbolo--dibujo"></div>
                </a>
                <h4 className="navegacion__elemento__text">
                  Dibujo <br />
                  Técnico
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contenido">
        <div className="limitador">
          <div className="talleres__información">
            <p className="talleres__texto">
              Los Talleres Skala se aperturan cada verano, por lo que en estos
              meses no se ofertan. Aún así existe la siguiente modalidad para el
              resto del año:
            </p>
            <h5 className="subtitulo-curso">
              Si aún no llegó el verano forma tu grupo:
            </h5>
            <div className="temas-contenedor">
              <div className="temas">
                <div className="opcion">
                  <div className="opcion__numero">01</div>
                  <p className="opcion__texto">Modalidad Virtual</p>
                </div>
                <div className="opcion">
                  <div className="opcion__numero">02</div>
                  <p className="opcion__texto">
                    Tu grupo debe tener 5 personas
                  </p>
                </div>
                <div className="opcion">
                  <div className="opcion__numero">03</div>
                  <p className="opcion__texto">Tú decides el horario</p>
                </div>
              </div>
              <div className="redes-talleres">
                <div className="redes-talleres__escribenos">
                  <p>Escríbenos</p>
                  <div className="talleres-flecha"></div>
                </div>
                <div className="redes-talleres_logos">
                  <a href="https://wa.link/f2iyke">
                    <img
                      loading="lazy"
                      className="redes-talleres__icono"
                      src={common.whatsapp_icon}
                      alt="whatsapp"
                    />
                  </a>
                  <a href="https://www.facebook.com/studioskala">
                    <img
                      loading="lazy"
                      className="redes-talleres__icono"
                      src={common.facebook_icon}
                      alt="facebook"
                    />
                  </a>
                  <a href="https://www.instagram.com/skalastudio_arquitectura/">
                    <img
                      loading="lazy"
                      className="redes-talleres__icono"
                      src={common.instagran_icon}
                      alt="instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div id="maqueteria" className="contenido__curso maqueteria">
            <div className="titulo-curso">
              <div className="titulo-curso__texto">
                <h2 className="titulo-curso__subtitulo2 title2__curso">
                  Maque
                </h2>
                <h2 className="titulo-curso__subtitulo1 title1__curso">
                  Tería
                </h2>
              </div>
              <div className="titulo-curso__texto2">
                <div className="titulo-curso__texto2__imagen titulo-curso__texto2__imagen--first simbolo simbolo--maqueteria"></div>
                <p>
                  Para estudiantes y <br />
                  profesionales
                </p>
              </div>
            </div>
            <p className="info">
              Aprende los instrumentos, habilidades y técnicas para la
              elaboración de maquetas arquitectónicas
            </p>
            <h5 className="subtitulo-curso">Algunos temas generales</h5>
            <div className="temas">
              <div className="opcion">
                <div className="opcion__numero">01</div>
                <p className="opcion__texto">Maquetas Volumétricas</p>
              </div>
              <div className="opcion">
                <div className="opcion__numero">02</div>
                <p className="opcion__texto">Maquetas Tipográficas</p>
              </div>
              <div className="opcion">
                <div className="opcion__numero">03</div>
                <p className="opcion__texto">Maqueta Arquitectónicas</p>
              </div>
            </div>
          </div>
          <hr />
          <div id="geometria" className="contenido__curso geometria">
            <div className="titulo-curso ">
              <div className="titulo-curso__texto">
                <h2 className="titulo-curso__subtitulo2 title2__curso">
                  Geome
                </h2>
                <h2 className="titulo-curso__subtitulo1 title1__curso">
                  <div className="">
                    tría<span>Descriptiva</span>
                  </div>
                </h2>
              </div>
              <div className="titulo-curso__texto2">
                <div className="titulo-curso__texto2__imagen simbolo simbolo--geometria"></div>
                <p>
                  Para estudiantes y <br />
                  profesionales
                </p>
              </div>
            </div>
            <p className="info">
              Te proporcionamos las herramientas necesarias para que puedas
              dominar la representación geométrica de objetos en el espacio.
            </p>
            <h4 className="subtitulo-curso">Algunos temas generales</h4>
            <div className="temas">
              <div className="opcion">
                <div className="opcion__numero">01</div>
                <p className="opcion__texto">Sistemas de Proyección</p>
              </div>
              <div className="opcion">
                <div className="opcion__numero">02</div>
                <p className="opcion__texto">Proyeccción de volúmenes</p>
              </div>
              <div className="opcion">
                <div className="opcion__numero">03</div>
                <p className="opcion__texto">
                  Intersección entre Formas compuestas
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div id="dibujo" className="contenido__curso dibujo">
            <div className="titulo-curso ">
              <div className="titulo-curso__texto ">
                <h2 className="titulo-curso__subtitulo2 title2__curso">
                  dibujo
                </h2>
                <h2 className="titulo-curso__subtitulo1 title1__curso">
                  ténico
                </h2>
              </div>
              <div className="titulo-curso__texto2">
                <div className="titulo-curso__texto2__imagen simbolo simbolo--dibujo"></div>
                <p>
                  Para estudiantes y <br />
                  profesionales
                </p>
              </div>
            </div>
            <div className="info">
              Aprenderás técnicas esenciales de dibujo, para representar
              proyectos en forma detallada con un enfoque en la precisión y la
              escala.
            </div>
            <h4 className="subtitulo-curso">Algunos temas generales</h4>
            <div className="temas">
              <div className="opcion">
                <div className="opcion__numero">01</div>
                <p className="opcion__texto">Técnicas e instrumentos</p>
              </div>
              <div className="opcion">
                <div className="opcion__numero">02</div>
                <p className="opcion__texto">Simbología y escalas</p>
              </div>
              <div className="opcion">
                <div className="opcion__numero">03</div>
                <p className="opcion__texto">
                  Planos de planta, cortes y elevaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
