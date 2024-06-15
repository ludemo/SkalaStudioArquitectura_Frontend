import Footer from "./components/footer"
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './styles/styles.scss';
import './styles/locomotive-scroll.css';
function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
        });
        return () => {
          if (scroll) scroll.destroy();
        };
      } 
    }, []);
    
  return (
    <div className="data-scroll-container" >
      <script src="./assets/js/loco.js" />
      <section className="section bloque1 data-scroll-section" id="b1">
        <div className="preloader">
          Desplaza o use el cursor
        </div>
        <img loading="lazy" src="/img/portada-movil.webp" className="bloque1__imagen" alt="" />
      </section>
      <section className="section bloque2 data-scroll-section" id="b2">
        <div className="servicio" id="servicio" >
          <a href="suficiencia-Unsa" className="servicio__enlace">
            <div className="servicio__textos">
              <div className="caja">
                <h2 className="caja__subtitulo1">Suficiencia</h2>
                <div className="caja__division"></div>
                <h2 className="caja__subtitulo2">Unsa</h2>
              </div>
            </div>
          </a>
          <img loading="lazy" className="fondo fondo--web" src={require('./assets/img/suficiencia.webp')} alt="suficiencia" />
          <img loading="lazy" className="fondo fondo--movil" src={require('./assets/img/suficiencia-cel.webp')} alt="suficiencia" />
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
          <img loading="lazy" className="fondo fondo--web" src={require('./assets/img/talleres.webp')} alt="talleres" />
          <img loading="lazy" className="fondo fondo--movil" src={require('./assets/img/talleres-cel.webp')} alt="suficiencia" />
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
          <img className="fondo fondo--web" src={require('./assets/img/estudio.webp')} alt="estudio" />
          <img className="fondo fondo--movil" src={require('./assets/img/estudio-cel.webp')} alt="suficiencia" />
        </div>
      </section>
      <section
        style={{ height: "100vh" }}
        className="section bloque4 data-scroll-section"
        id="b3">
        <a className="mapa" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5484055893735!2d-71.53645078255616!3d-16.396951299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a50e73f2303%3A0x2b8fea53e563e8c6!2sJos%C3%A9%20L.%20Valdivia%20Herrera!5e0!3m2!1ses!2spe!4v1661832904787!5m2!1ses!2spe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5484055893735!2d-71.53645078255616!3d-16.396951299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a50e73f2303%3A0x2b8fea53e563e8c6!2sJos%C3%A9%20L.%20Valdivia%20Herrera!5e0!3m2!1ses!2spe!4v1661832904787!5m2!1ses!2spe" width="100%" height="100%" style={{ border: "0" }} loading="lazy" title="video" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </a>
        <Footer />
      </section>
    </div>
  );
}

export default App;
