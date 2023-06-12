
let alertDivFields = document.getElementById("emptyFields");

let alertDivUser = document.getElementById("wrongUser");

let alertDivClass = document.getElementsByClassName("alert");


$(document).ready(function () {


    for (let i = 0; i < alertDivClass.length; i++) {
        // alertDivClass[i].classList.add("d-none");
    }

});
async function checkLoginButton() {
    let datos = {};
    datos.nombre = document.getElementById('loginUsername').value;
    datos.password = document.getElementById('loginPassword').value;
    console.log("S");
    if (document.getElementById('loginUsername').value.trim() === "" || document.getElementById('loginPassword').value.trim() === "") {
        // Emty Fields
        alertDivFields.classList.remove("hidden");
        alertDivUser.classList.add("hidden");

    }
    else {
        const request = await fetch('/buscar/' + datos.nombre + '/' + datos.password, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(datos)
        });
        const encontrado = await request.json();
        console.log(encontrado);

        if (encontrado) {

            const request = await fetch('/findType/' + datos.nombre, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(datos)
            });
            const encontrado = await request.json();

            if (encontrado) {
                location.href = "http://localhost:1717/index.html"
            } else {
                location.href = "http://localhost:1717/indexNotas.html"
            }
        }
        else {
            alertDivUser.classList.remove("hidden");
            alertDivFields.classList.add("hidden");

        }
    }
}

async function checkRegisterButton() {
    let datos = {};
    datos.nombre = document.getElementById('registerUsername').value;
    console.log(datos.nombre);
    datos.password = document.getElementById('registerPassword').value;
    console.log(datos.password);


    if (document.getElementById('registerUsername').value.trim() === "" || document.getElementById('registerPassword').value.trim() === "") {
        // Emty Fields
        alertDivUser.classList.add("hidden");

        alertDivFields.classList.remove("hidden");
    }

    else {
        const request = await fetch('/register/' + datos.nombre + '/' + datos.password, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(datos)
        });
        const encontrado = await request.json();
        console.log(encontrado);
        if (encontrado) {
            // alert("Usuario ya se encuentra registrado")
            alertDivUser.classList.remove("hidden");
            alertDivFields.classList.add("hidden");

            // alertDivFields.classList.remove("hidden");

        } else {

            let datos1 = {};
            datos1.nombre = document.getElementById('registerUsername').value;
            datos1.password = document.getElementById('registerPassword').value;
            datos1.tipo = 1;

            const request = await fetch('/addUser/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos1)
            });

            location.href = "http://localhost:1717/indexNotas.html"
        }
    }
}

async function closeAlertDiv(alert){
    if (alert===1){
        alertDivUser.classList.add("hidden");
    }
    else{
        alertDivFields.classList.add("hidden");
    }
}