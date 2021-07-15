
class Usuario {
    constructor(nombre, apellido, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
    }
}

const Lista = [];


function crearUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const mail = document.getElementById("mail").value;

    const nuevoUsuario = new Usuario(nombre, apellido, mail);
    Lista.push(nuevoUsuario);

    console.log(Lista);
}


function imprimirUsuario() {

    const listado = document.getElementById("listado")

    Lista.forEach(element => {

        listado.innerHTML += `
        <p> Bienvenido ${element.nombre} ${element.apellido}, quedarás registrado con el email ${element.mail}</p>`


    });
}

const btnGuardar = document.getElementById("guardar");
btnGuardar.addEventListener("click", crearUsuario);

const btnImprimir = document.getElementById("imprimir");
btnImprimir.addEventListener("click", imprimirUsuario);