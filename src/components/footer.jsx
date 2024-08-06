
import common from 'assets/img/common';
export default function Footer({component}){
    return (
        <div className = {`footer ${component}`}>
            <div className="footer__logo" href="../index.html">
                <a href="/">
                <img
                        src={common.Skala_texto}
                        className="footer__logo-img" 
                        alt="skala-logo"
                />
                </a>
            </div>
            <h3 className="footer__texto">CONTÁCTANOS</h3>
            <div className ="footer__redes">
            {/*Facebook*/} 
                <div className="red">
                    <a className="red__enlace" href="https://www.facebook.com/studioskala">
                    <img loading="lazy" className="red__icono" src={common.facebook_icon} alt="facebook"/>
                    <p className="red__texto">/StudioSkala</p>
                    </a>
                </div>
                {/*Instagram*/}
                <div className="red">
                    <a className="red__enlace" href="https://www.instagram.com/skalastudio_arquitectura/">
                    <img loading="lazy" className="red__icono" src={common.instagran_icon} alt="instagram"/> 
                    <p className="red__texto">/SkalaStudio</p>
                    </a>
                </div>
                {/* WhatsApp */}
                <div className="red" >
                <a className="red__enlace" href="https://wa.link/f2iyke">
                    <img loading="lazy" className="red__icono" src={common.whatsapp_icon} alt="whatsapp"/>
                    <p className="red__texto">942 732 102</p>
                </a>
                </div>
            </div>
            <p className="footer__copy">Copyright © 2021 Skala Studio</p>
        </div>
    )
}