import React, { useEffect } from 'react';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

export default function HomePage() {
  //Función para el desplazamiento suave
  const miFuncion = () => {

    let container = document.getElementById('container');
    const handleWheel = (event) => {
      container.scrollBy({ top: event.deltaY / 3, behavior: 'smooth' });
    };
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  };
  //Función para el IntersectionObserver - Desvanecimiento y aparición textos
  const initIntersectionObserver = () => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
        }
      });
    }, { root: null,threshold: 0.1 });

    const targets = document.querySelectorAll('.caja');
    targets.forEach(target => {
      observer.observe(target);
    });

    return observer; 
  };

    useEffect(() => {
      const cleanupScroll = miFuncion(); // Ejecuta la función de desplazamiento suave y obtiene la función de limpieza
      const observer = initIntersectionObserver(); // Inicializa el IntersectionObserver
  
      return () => {
        cleanupScroll(); // Elimina el event listener de desplazamiento suave
        observer.disconnect(); // Desconecta el IntersectionObserver
      };
    }, []);


      return (
        <div className="container-scroll" id="container" >
          <section className="section bloque1 data-scroll-section" id="b1">
            <div className="preloader">
              Desplaza o use el cursor
            </div>
            <img loading="lazy" src="/img/portada-movil.webp" className="bloque1__imagen" alt="" />
          </section>
          <section className="section bloque2 data-scroll-section" id="b2">
            <div className="servicio" id="servicio" >
              <Link to="/suficiencia-Unsa" className="servicio__enlace">
                <div className="servicio__textos">
                  <div className="caja">
                    <h2 className="caja__subtitulo1">Suficiencia</h2>
                    <div className="caja__division"></div>
                    <h2 className="caja__subtitulo2">Unsa</h2>
                  </div>
                </div>
              </Link>
              <img loading="lazy" className="fondo fondo--web" src={require('./../assets/img/suficiencia.webp')} alt="suficiencia" />
              <img loading="lazy" className="fondo fondo--movil" src={require('./../assets/img/suficiencia-cel.webp')} alt="suficiencia" />
            </div>
              <div className="servicio" id="servicio">
                <a className="servicio__enlace" href="talleres">
                  <div className="servicio__textos">
                    <div className="caja">
                      <h2 className="caja__subtitulo1">Nuestros</h2>
                      <div className="caja__division"></div>
                      <h2 className="caja__subtitulo2">Talleres</h2>
                    </div>
                  </div>
                </a>
                <img loading="lazy" className="fondo fondo--web" src={require('./../assets/img/talleres.webp')} alt="talleres" />
                <img loading="lazy" className="fondo fondo--movil" src={require('./../assets/img/talleres-cel.webp')} alt="suficiencia" />
              </div>
              <div className="servicio" id="servicio" >
                <a className="servicio__enlace" href="arquitectura">
                  <div className="servicio__textos">
                    <div className="caja">
                      <h2 className="caja__subtitulo1">estudio <del></del></h2>
                      <div className="caja__division"></div>
                      <h2 className="caja__subtitulo2">arquitectura</h2>
                    </div>
                  </div>
                </a>
                <img className="fondo fondo--web" src={require('./../assets/img/estudio.webp')} alt="estudio" />
                <img className="fondo fondo--movil" src={require('./../assets/img/estudio-cel.webp')} alt="suficiencia" />
              </div>
          </section>
          <section  className="section bloque4 data-scroll-section"
            style={{ height: "100vh" }}
            id="b3">
            <a className="mapa" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5484055893735!2d-71.53645078255616!3d-16.396951299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a50e73f2303%3A0x2b8fea53e563e8c6!2sJos%C3%A9%20L.%20Valdivia%20Herrera!5e0!3m2!1ses!2spe!4v1661832904787!5m2!1ses!2spe">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5484055893735!2d-71.53645078255616!3d-16.396951299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a50e73f2303%3A0x2b8fea53e563e8c6!2sJos%C3%A9%20L.%20Valdivia%20Herrera!5e0!3m2!1ses!2spe!4v1661832904787!5m2!1ses!2spe" width="100%" height="100%" style={{ border: "0" }} loading="lazy" title="video" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </a>
            <Footer />
          </section>
        </div>
      );
}

