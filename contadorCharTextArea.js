var botonEnviar = document.getElementById("botonEnviar")
var textTarea = document.getElementById("textArea")

botonEnviar.addEventListener("click",function(){
alert(`La cantidad de caracteres de su comentario es: ${textTarea.value.length}`)
textTarea.value = ""
})