export default function Section2({section}){
    return(
        <div className="form__seccion"  style={{ transform: `translateX(-${section * 100}%)`}} >
        <div className="personales__form">
            <label htmlFor='apellidoEstudiante' className="form__label">Nombres y Apellidos</label>
            <input id = "apellidoEstudiante" type="text" className="form__input" placeholder="Apellidos" enterKeyHint="done" />
            <input id = "nombreEstudiante" type="text" className="form__input input3" placeholder="Nombres" enterKeyHint="done"/>
            <label htmlFor = "nacimientoEstudiante" className="form__label">Fecha de nacimiento</label>
            <input id = "nacimientoEstudiante" type="date" className="form__input" enterKeyHint="done"/>
            <label htmlFor = " celularEstudiante" className="form__label">Celular</label>
            <input id = "celularEstudiante" type="number" minLength = "6"    maxLength="9" className="form__input" enterKeyHint="done"/>
            <label  htmlFor = "tipoDocumentoEstudiante" className="form__label">Documentos</label>
            <select id = "tipoDocumentoEstudiante" className="form__input">
                <option className="form__opcion">D.N.I.</option> 
                <option className="form__opcion">Carné de extranjería</option>
            </select>
            <input id = "documentoEstudiante" type="number" maxLength="8" className="form__input input3" enterKeyHint="done"/>
        </div>
    </div>
    );
}