const anio = Number(prompt("¿En que año naciste?"));

confirm("A continuación te voy a decir a que generación correspondes")

if (anio >= 1930 && anio <= 1948) {
    alert("Eres Niño de la Postguerra");
} else if (anio >= 1949 && anio <= 1968) {
    alert("Eres Baby boom");
} else if (anio >= 1969 && anio <= 1980) {
    alert("Eres Generación X");
} else if (anio >= 1981 && anio <= 1993) {
    alert("Eres Millenial");
} else {
    alert("Eres Generación Z");
}
