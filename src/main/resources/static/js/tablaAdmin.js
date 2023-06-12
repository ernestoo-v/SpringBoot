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
        let fila = '<td>' + alumno.id + '</td><td>' + alumno.nombre + '</td><td>' + alumno.calificacion + '</td><td><button onclick="eliminar(' + alumno.id + ')">Eliminar</td><td><button onclick="mostrarEdit(' + alumno.id + ')">Editar</td><td><button onclick="mostrarEdit2(' + alumno.id + ')">Editar</td></tr>';
        listadoHTML = listadoHTML + fila;
    }
    document.querySelector('#tablaAlumnos tbody').outerHTML = listadoHTML;
}

async function cargarAlumnosPorNombre() {
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
        if (alumno.nombre.includes(document.getElementById('buscador').value)){
            let fila = '<td>' + alumno.id + '</td><td>' + alumno.nombre + '</td><td>' + alumno.calificacion + '</td><td><button onclick="eliminar(' + alumno.id + ')">Eliminar</td><td><button onclick="mostrarEdit(' + alumno.id + ')">Editar</td><td><button onclick="mostrarEdit2(' + alumno.id + ')">Editar</td></tr>';
            listadoHTML = listadoHTML + fila;
        }
    }
    document.querySelector('#tablaAlumnos tbody').outerHTML = listadoHTML;
}


async function cargarAlumnosPorCalificacion() {
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
        if ( alumno.calificacion.toString() === (document.getElementById('buscador').value)){
            let fila = '<td>' + alumno.id + '</td><td>' + alumno.nombre + '</td><td>' + alumno.calificacion + '</td><td><button onclick="eliminar(' + alumno.id + ')">Eliminar</td><td><button onclick="mostrarEdit(' + alumno.id + ')">Editar</td><td><button onclick="mostrarEdit2(' + alumno.id + ')">Editar</td></tr>';
            listadoHTML = listadoHTML + fila;
        }
    }
    document.querySelector('#tablaAlumnos tbody').outerHTML = listadoHTML;
}

async function checkEmptySearch(){

    if (document.getElementById('buscador').value.trim() === ""){
        // cargarAlumnos();
        location.reload();
    }
}
async function mostrarEdit(id) {

    document.getElementById('editarCalificacion').style.display = 'flex';
    document.getElementById('idAlumno').value = id;

}

async function mostrarEdit2(id) {
    document.getElementById('editarNombre').style.display = 'flex';
    document.getElementById('idAlumno').value = id;
}

async function eliminar(id) {
    const request = await fetch('/eliminar/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    location.reload();
}

async function add() {
    let datos = {};
    datos.nombre = document.getElementById('txtAlumno').value;

    datos.calificacion = document.getElementById('txtCalificacion').value;

    if (document.getElementById('txtAlumno').value.trim() === "" || document.getElementById('txtCalificacion').value.trim() === "") {

        alert("Campos vacíos");

    } else {
        const request = await fetch('/add/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        location.reload();
    }
}

function cambiarValor() {
    document.getElementById('idAlumno').value = id;
    //cambio valor del input por id
}

async function edit() {
    let datos = {};
    datos.id = document.getElementById('idAlumno').value;
    datos.calificacion = document.getElementById('txtNuevaNota').value;

    if (document.getElementById('idAlumno').value.trim() === "" || document.getElementById('txtNuevaNota').value.trim() === "") {

        alert("Campos vacíos");

    } else {
        const request = await fetch('/edit/' + datos.id + '/' + datos.calificacion, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(datos)
        });
        location.reload();
    }
    document.getElementById('editarCalificacion').style.display = 'none';
}

async function edit2() {
    let datos = {};
    datos.id = document.getElementById('idAlumno2').value;
    datos.nombre = document.getElementById('txtNuevoAlumno').value;

    if (document.getElementById('idAlumno2').value.trim() === "" || document.getElementById('txtNuevoAlumno').value.trim() === "") {

        alert("Campos vacíos");

    } else {
        const request = await fetch('/edit2/' + datos.id + '/' + datos.nombre, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(datos)
        });
        location.reload();
    }
    document.getElementById('editarNombre').style.display = 'none';
}

