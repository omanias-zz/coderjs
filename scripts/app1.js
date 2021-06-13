const nombre = prompt("¿Cuál es tu nombre?")

alert(`¡Bienvenid@ ${nombre}! a continuación te voy a pedir que ingreses dos números para realizar operaciones básicas. No olvides abrir la consola para ver los resultados.`);

const numero1 = Number(prompt("Ingresa un número"));
const numero2 = Number(prompt("Ingresa otro número"));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;




console.log(`La SUMA de ${numero1} mas ${numero2} es: ${suma}`);
console.log(`La RESTA de ${numero1} menos ${numero2} es: ${resta}`);
console.log(`La MULTIPLICACION de ${numero1} por ${numero2} es: ${multiplicacion}`);
console.log(`La DIVISION de ${numero1} por ${numero2} es: ${division}`);