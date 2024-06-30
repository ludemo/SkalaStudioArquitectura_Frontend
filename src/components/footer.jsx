import skalaLogo from 'assets/img/SkalaLetras.webp';
import whatsAppLogo from 'assets/img/whatsapp-logo.webp';
import instagramLogo from 'assets/img/Instagram.webp';
import facebookLogo from 'assets/img/Facebook.webp';
export default function Footer(){
    return (
        <div className="footer footer--index">
            <div className="footer__logo" href="../index.html">
                <a href="/">
                <img
                        src={skalaLogo}
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
                    <img loading="lazy" className="red__icono" src={facebookLogo} alt="facebook"/>
                    <p className="red__texto">/StudioSkala</p>
                    </a>
                </div>
                {/*Instagram*/}
                <div className="red">
                    <a className="red__enlace" href="https://www.instagram.com/skalastudio_arquitectura/">
                    <img loading="lazy" className="red__icono" src={instagramLogo} alt="instagram"/> 
                    <p className="red__texto">/SkalaStudio</p>
                    </a>
                </div>
                {/* WhatsApp */}
                <div className="red" >
                <a className="red__enlace" href="https://wa.link/f2iyke">
                    <img loading="lazy" className="red__icono" src={whatsAppLogo} alt="whatsapp"/>
                    <p className="red__texto">942 732 102</p>
                </a>
                </div>
            </div>
            <p className="footer__copy">Copyright © 2021 Skala Studio</p>
        </div>
    )
}