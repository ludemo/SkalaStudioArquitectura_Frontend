import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import portadaMovilImg from "../assets/img/portada-movil.webp";
import suficienciaImg from "../assets/img/suficiencia.webp";
import suficienciaCelImg from "../assets/img/suficiencia-cel.webp";
import talleresImg from "../assets/img/talleres.webp";
import talleresCelImg from "../assets/img/talleres-cel.webp";
import estudioImg from "../assets/img/estudio.webp";
import estudioCelImg from "../assets/img/estudio-cel.webp";

export default function HomePage() {
  //Función para el desplazamiento suave
  const miFuncion = () => {
    let container = document.getElementById("container");
    const handleWheel = (event) => {
      container.scrollBy({ top: event.deltaY / 4, behavior: "smooth" });
    };
    container.addEventListener("wheel", handleWheel);
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  };
  //Función para el IntersectionObserver - Desvanecimiento y aparición textos
  const initIntersectionObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".caja");
    targets.forEach((target) => {
      observer.observe(target);
    });

    return observer;
  };
  //Función para el bloque url de mobile que ocupa campo:
  const setVH = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  //Responsive para dividir los div o no  :
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  //USE EFECT
  useEffect(() => {
    const cleanupScroll = miFuncion(); // Ejecuta la función de desplazamiento suave y obtiene la función de limpieza
    const observer = initIntersectionObserver(); // Inicializa el IntersectionObserver
    setVH();
    window.addEventListener("resize", setVH);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      cleanupScroll(); // Elimina el event listener de desplazamiento suave
      observer.disconnect(); // Desconecta el IntersectionObserver
      window.removeEventListener("resize", setVH);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-scroll" id="container">
      <section className="section bloque1" id="b1">
        <div className="preloader">Desplaza o use el cursor</div>
        <img
          loading="lazy"
          src={portadaMovilImg}
          className="bloque1__imagen"
          alt=""
        />
      </section>

      {!isMobile ? (
        <section className="section bloque2" id="b2">
          <div className="servicio" id="servicio1">
            <Link to="/suficiencia-Unsa" className="servicio__enlace">
              <div className="servicio__textos">
                <div className="caja">
                  <h2 className="caja__subtitulo1">Suficiencia</h2>
                  <div className="caja__division"></div>
                  <h2 className="caja__subtitulo2">Unsa</h2>
                </div>
              </div>
            </Link>
            <img
              loading="lazy"
              className="fondo fondo--web"
              src={suficienciaImg}
              alt="suficiencia"
            />
            <img
              loading="lazy"
              className="fondo fondo--movil"
              src={suficienciaCelImg}
              alt="suficiencia"
            />
          </div>
          <div className="servicio" id="servicio2">
            <a className="servicio__enlace" href="talleres">
              <div className="servicio__textos">
                <div className="caja">
                  <h2 className="caja__subtitulo1">Nuestros</h2>
                  <div className="caja__division"></div>
                  <h2 className="caja__subtitulo2">Talleres</h2>
                </div>
              </div>
            </a>
            <img
              loading="lazy"
              className="fondo fondo--web"
              src={talleresImg}
              alt="talleres"
            />
            <img
              loading="lazy"
              className="fondo fondo--movil"
              src={talleresCelImg}
              alt="talleres"
            />
          </div>
          <div className="servicio" id="servicio3">
            <Link className="servicio__enlace" to="/estudio-Arquitectura">
              <div className="servicio__textos">
                <div className="caja">
                  <h2 className="caja__subtitulo1">
                    estudio <del></del>
                  </h2>
                  <div className="caja__division"></div>
                  <h2 className="caja__subtitulo2">arquitectura</h2>
                </div>
              </div>
            </Link>
            <img className="fondo fondo--web" src={estudioImg} alt="estudio" />
            <img
              className="fondo fondo--movil"
              src={estudioCelImg}
              alt="estudio"
            />
          </div>
        </section>
      ) : (
        <>
          <div className="section servicio" id="servicio1">
            <Link to="/suficiencia-Unsa" className="servicio__enlace">
              <div className="servicio__textos">
                <div className="caja">
                  <h2 className="caja__subtitulo1">Suficiencia</h2>
                  <div className="caja__division"></div>
                  <h2 className="caja__subtitulo2">Unsa</h2>
                </div>
              </div>
            </Link>
            <img
              loading="lazy"
              className="fondo fondo--web"
              src={suficienciaImg}
              alt="suficiencia"
            />
            <img
              loading="lazy"
              className="fondo fondo--movil"
              src={suficienciaCelImg}
              alt="suficiencia"
            />
          </div>
          <div className="section servicio" id="servicio2">
            <a className="servicio__enlace" href="talleres">
              <div className="servicio__textos">
                <div className="caja">
                  <h2 className="caja__subtitulo1">Nuestros</h2>
                  <div className="caja__division"></div>
                  <h2 className="caja__subtitulo2">Talleres</h2>
                </div>
              </div>
            </a>
            <img
              loading="lazy"
              className="fondo fondo--web"
              src={talleresImg}
              alt="talleres"
            />
            <img
              loading="lazy"
              className="fondo fondo--movil"
              src={talleresCelImg}
              alt="talleres"
            />
          </div>
          <div className="section servicio" id="servicio3">
            <a className="servicio__enlace" href="arquitectura">
              <div className="servicio__textos">
                <div className="caja">
                  <h2 className="caja__subtitulo1">
                    estudio <del></del>
                  </h2>
                  <div className="caja__division"></div>
                  <h2 className="caja__subtitulo2">arquitectura</h2>
                </div>
              </div>
            </a>
            <img className="fondo fondo--web" src={estudioImg} alt="estudio" />
            <img
              className="fondo fondo--movil"
              src={estudioCelImg}
              alt="estudio"
            />
          </div>
        </>
      )}
      <section className="section bloque4" style={{ height: "100vh" }} id="b3">
        <a
          className="mapa"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5484055893735!2d-71.53645078255616!3d-16.396951299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a50e73f2303%3A0x2b8fea53e563e8c6!2sJos%C3%A9%20L.%20Valdivia%20Herrera!5e0!3m2!1ses!2spe!4v1661832904787!5m2!1ses!2spe"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5484055893735!2d-71.53645078255616!3d-16.396951299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a50e73f2303%3A0x2b8fea53e563e8c6!2sJos%C3%A9%20L.%20Valdivia%20Herrera!5e0!3m2!1ses!2spe!4v1661832904787!5m2!1ses!2spe"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            title="video"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
        <Footer component="footer--index" />
      </section>
    </div>
  );
}
