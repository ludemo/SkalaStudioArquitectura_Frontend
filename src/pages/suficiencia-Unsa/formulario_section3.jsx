//Datos de ubicación
export default function Section3({section}){
    return(
        <div className="form__seccion"  style={{ height : section===2 ? '100%' : '0',transform: `translateX(-${section * 100}%)`}} >
        <div className="facturacion__form">
            <label htmlFor = "lugarNaciminetoEstudiante" className="form__label">Lugar de nacimiento</label>
            <input id = "lugarNacimientoEstudiante" type="text" className="form__input" enterKeyHint="done"/>
            <label htmlFor = "direccionEstudiante" className="form__label">Dirección domiciliaria</label>
            <input id = "direccionEstudiante" type="text" className="form__input" enterKeyHint="done"/>
            <label htmlFor = "correoEstudiante" className="form__label">Correo electrónico</label>
            <input id = "correoEstudiante" type="email" className="form__input" enterKeyHint="done"/>
        </div>
    </div>
    )
}