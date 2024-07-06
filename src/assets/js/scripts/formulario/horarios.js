
const nivel = document.getElementsByClassName("nivel");
desaparecer();
const modalidad = document.getElementById("modalidad");
modalidad.addEventListener("change", function(){
    console.log(modalidad.value);
    if(modalidad.value == "Virtual" || modalidad.value == "Virtual plus"){
        console.log("YEY");
        aparecer();
    }
    else{
        desaparecer();
    }
});
function aparecer(){
    nivel[0].style.display="flex";
    nivel[1].style.display="flex";
}
function desaparecer(){
    nivel[0].style.display="none";
    nivel[1].style.display="none";
}
//modalidad es virtual o virtual plus -> desaparecer