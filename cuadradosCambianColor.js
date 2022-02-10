var body = document.getElementById("body")
var botonRojo = document.getElementById("rojo")
var botonAzul = document.getElementById("azul")
var botonVerde = document.getElementById("verde")

botonRojo.addEventListener("click",function(){
       body.style.backgroundColor = "red"
})

botonAzul.addEventListener("click",function(){
       body.style.backgroundColor = "blue"
})

botonVerde.addEventListener("click",function(){
       body.style.backgroundColor = "green"
})
