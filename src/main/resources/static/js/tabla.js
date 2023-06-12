$(document).ready(function () {
    cargarAlumnos();
});

async function cargarAlumnos() {
    //peticion get post
    const request = await fetch('/listar', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    const alumnos = await request.json();
    console.log(alumnos);


    let listadoHTML = "";

    for (let alumno of alumnos) {
        let fila = '<td>' + alumno.id + '</td><td>' + alumno.nombre + '</td><td>' + alumno.calificacion + '</td></tr>';
        listadoHTML = listadoHTML + fila;
    }
    document.querySelector('#tablaAlumnos tbody').outerHTML = listadoHTML;
}



