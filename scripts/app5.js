const producto = {
    nombre: "Monitor",
    marca: "LG",
    precio: 17000,
    disponible: true
}


// Sintaxis de punto. Es utilizado para acceder a una de las propiedades del objeto. 

// Para acceder a la propiedad MARCA
// console.log(producto.marca);

// Agregar propiedades al objeto

producto.imagen = "imagen.jpg"

//Eliminar una propiedad del objeto

delete producto.imagen

// console.log(producto);


// OBJECT CONSTRUCTOR

function Producto(nombre, marca, precio, disponible) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.disponible = true;
}

const teclado = new Producto("Teclado mecánico", "Logitech", 6000, true);
const mouse = new Producto("Mouse óptico", "Logitech", 1500, true);

console.log(teclado);
console.log(mouse);