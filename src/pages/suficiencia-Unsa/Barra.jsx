import PropTypes from 'prop-types';
import formulario from 'assets/img/formulario'
import { useState , useEffect} from 'react';
export default function Barra( {section} ){
    const [estadoForm, setEstadoForm] = useState(["actual", "paso", "paso", "paso"]);
    const [estadoImg, setEstadoImg] = useState(["actual-img", "", "", ""]);
    const [displayLoader, setDisplayLoader] = useState(["block","none","none","none"]);
    const [displayCheck,setDisplayCheck] = useState(["none","none","none","none"]);
    const [widthBarra, setWidthBarra] = useState(["0%","0%","0%","0%"]);
    const [colorBarra,setColorBarra]= useState(["linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)","linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)","linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)","linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)"]);
    useEffect(() => {
        //Cambiar ancho de barra
        const updateWidthBarra = widthBarra.map((_, index) => {
            if(index < section){
                return "100%";  }
            else{
                return "0%";
            }
        });
        setWidthBarra(updateWidthBarra);
        //cambiar background barra
        const updateColorBarra = colorBarra.map((_, index) => {
            if(index < section-1){
                return "#006D77";
            }else{
                return "linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)";
            }
        });
        setColorBarra(updateColorBarra);
        //Aparecer y desaparecer check
        const updateDisplayCheck = displayCheck.map((_, index) => {
            if(index < section){
                return 'block';
            }else{
              return 'none';
            }
        });
        setDisplayCheck(updateDisplayCheck);

        //Aparecer y desaparecer loader
        const updateDisplayLoader = displayLoader.map((_, index) => {
            if (index === section) {
              return 'block';
            } else {
              return 'none';
            }
        });
        setDisplayLoader(updateDisplayLoader);

        //Cambiar colores imagenes
        const updateEstadoImg = estadoImg.map((_, index) => {
            if (index < section) {
              return 'paso-img';
            } else if (index === section) {
              return 'actual-img';
            } else {
              return '';
            }
          });
        setEstadoImg(updateEstadoImg);
        //Cambiar estado circulos
        const updatedEstadoForm = estadoForm.map((_, index) => {
            if (index < section) {
              return 'paso';
            } else if (index === section) {
              return 'actual';
            } else {
              return 'noPaso';
            }
          });
          setEstadoForm(updatedEstadoForm);

    }, [section, estadoImg, estadoForm, displayLoader, displayCheck, widthBarra, colorBarra]);

    return (
        <div className="barrita" id="barrita">
            <div className="iconos-conteiner">
                <img className = {`estado-img ${estadoImg[0]}`} src={formulario.pago} alt="pago"/>
                <img className = {`estado-img ${estadoImg[1]}`} src={formulario.datos} alt="datos"/>
                <img className = {`estado-img ${estadoImg[2]}`} src={formulario.mapa} alt="mapa"/>
                <img className = {`estado-img ${estadoImg[3]}`} src={formulario.final} alt="final" id="listo"/>
            </div>
            <div className="barra-conteiner" id="barra">
               {estadoForm.map((estado, index) => (
                    <div key={index}  className="barras-conteiner"> 
                        <div className={`barra barra__${index+1}`} style ={{ background : colorBarra[index], width : widthBarra[index]}}>
                            <div className = {`estado ${estado}`}>
                                <img className = "listo"  src={formulario.listo} alt="listo" style = {{display : displayCheck[index] }}/>
                                <img className = "proceso" src={formulario.proceso} alt="proceso" style = {{display : displayLoader[index] }}/>
                            </div>
                        </div>
                        {index < 3 && <div className="barra-gris"></div>}
                    </div>
                ))}
            </div>
            <div className="textos-conteiner">
                <h4 id = "form__text__facturacion">Datos de <br/>facturación</h4>
                <h4 id = "form__text__datosPersonales">Datos del <br/>alumno</h4>
                <h4 id = "form__text__datosUbicacion">Datos de <br/>ubicación</h4>
                <h4 id = "form__text__ultimo">Último <br/> paso</h4>
            </div>
        </div>
    )
}

Barra.propTypes = {
    section: PropTypes.number.isRequired,
};