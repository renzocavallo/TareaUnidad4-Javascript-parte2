var alumnos = [
    {nombre: 'Juan Gomez',nota: 7},
    {nombre: 'Pedro Rodriguez',nota: 4}, 
    {nombre: 'Roxana García',nota: 8},
    {nombre: 'Luciano Lopez',nota: 5},
    {nombre: 'Fernanda Gimenez',nota: 6}, 
    {nombre: 'Florencia Martinez',nota: 10},
    {nombre: 'Raul Sanchez',nota: 7},
    {nombre: 'Sandra Figueroa',nota: 8}
];

var divAlumnos = document.getElementById("contenedorAlumnos")

function agregarDivAlumnos(i){
    var newDiv = document.createElement("div")
        newDiv.style.width = "250px"
        newDiv.style.height = "50px"
        newDiv.style.marginRight = "10px"
        newDiv.style.color = "white"
        newDiv.style.backgroundColor = "cadetblue"
        newDiv.style.border = "1px black solid"
        newDiv.style.display = "flex"
        newDiv.style.alignItems = "center"
        newDiv.style.paddingLeft = "5px"
        newDiv.innerText = `${alumnos[i].nombre} \n Nota: ${alumnos[i].nota}`
        divAlumnos.appendChild(newDiv)
}

var alumnosAprobados = alumnos.filter( alumno => alumno.nota >= 7)

var divAprobados = document.getElementById("contenedorAprobados")

function agregarDivAprobados(i){
    var newDiv = document.createElement("div")
    newDiv.style.width = "250px"
    newDiv.style.height = "50px"
    newDiv.style.marginRight = "10px"
    newDiv.style.color = "white"
    newDiv.style.backgroundColor = "goldenrod"
    newDiv.style.border = "1px black solid"
    newDiv.style.display = "flex"
    newDiv.style.alignItems = "center"
    newDiv.style.paddingLeft = "5px"
    newDiv.innerText = `${alumnosAprobados[i].nombre}`
    divAprobados.appendChild(newDiv)
}

var mostrarAlumnos = document.getElementById("mostrarAlumnos")

mostrarAlumnos.addEventListener("click",function(){
    for(var i = 0; i < alumnos.length; i++){
        agregarDivAlumnos(i)
    }
})

var mostrarAprobados = document.getElementById("mostrarAprobados")

mostrarAprobados.addEventListener("click",function(){
    for(var i = 0; i < alumnos.length; i++){
        agregarDivAprobados(i)
    }
})

var eliminar = document.getElementById("eliminar")

eliminar.addEventListener("click",function(){
    divAlumnos.remove()
    divAprobados.remove()
    alert("Los alumnos se borraron correctamente!")

})