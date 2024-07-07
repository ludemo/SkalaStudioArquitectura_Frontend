//Envio para hacer pruebas y no gastar solicitudes :" 
//Envio hacia whatsapp
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}
const formulario = document.getElementById('form');
//selectores para el loader
var buttonSubmit = document.getElementById('enviar');
var loader = document.getElementById("carga");
var cargaEfecto = document.getElementById("carga__efecto")
var logo = document.getElementById("img__carga");
var texto__carga = document.getElementById("texto__carga");
var opciones_form = document.getElementById("opciones__form");
//hasta aquí noma

formulario.addEventListener('submit', async (event) => {
        //se envian los datos y carga
        buttonSubmit.disabled = false; 
        loader.style.display = "flex";
        //pa ponerle al centro
        var html = document.getElementById("html");
        window.scrollTo(0, 0);
        html.style.overflow = "hidden";
        confirm == true;
        //Desactivación del boton enviar porque ya envio y que actualice la página
        event.preventDefault()
        buttonSubmit.disabled = true
        //Si paso las validaciones de los datos puede ejecutar todo esto
        try{
            //Link para pruebas :https://sheet.best/api/sheets/ccbce7ee-c532-4a77-8a92-233ea4dc8671
            await fetch('https://sheet.best/api/sheets/6d93adc1-1678-4695-abc5-dcd0fc459ce1',{
                method : 'POST',
                headers : {
                'Content-Type' : 'application/json'
            },
            //al poner un objeto js, y esta cosa lo transforma a JSON   
            body : JSON.stringify({
                //Datos de boleta
                "NombreBoleta" : nombreBoleta.value,
                "Banco" : modalidadPago.value,
                "NumeroOperacion" :  numeroOperacion.value,
                "TipoDocumentoBoleta" : TipoDocumentoBoleta.value,
                "DocumentoBoleta" : documentoBoleta.value,
                //Datos personales
                "ApellidoEstudiante" : apellidoEstudiante.value,
                "NombreEstudiante" : nombreEstudiante.value,
                "NacimientoEstudiante" : nacimientoEstudiante.value,
                "CelularEstudiante" : celularEstudiante.value,
                "TipoDocumentoEstudiante" : tipoDocumentoEstudiante.value,
                "DocumentoEstudiante" : documentoEstudiante.value,
                //Datos de ubicación
                "LugarNacimientoEstudiante" : lugarNacimientoEstudiante.value,
                "DireccionEstudiante" : direccionEstudiante.value,
                "CorreoEstudiante" : correoEstudiante.value,
                //Plan
                "Modalidad" : modalidad.value,
                "Nivel" : nivel.value,
                "Horario" : horario.value,
                "FechaInicio" : fechaInicio.value,
                //Datos academicos
                "Institucion" : institucion.value,
                //Datos del apoderado
                "NombreRepresentante" : nombreRepresentante.value,
                "ApellidoRepresentante" : apellidoRepresentante.value,
                "telefonoRepresentante" : telefonoRepresentante.value,
            })  
        });
        console.log("Terminoo de enviar todooo")
        }
        catch(error){
            console.log(error);
        }        
    }
); 