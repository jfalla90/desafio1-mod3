var fotoPerfil = document.querySelector("#foto-aguila");

fotoPerfil.style.borderRadius = prompt("ingresa un valor en %");

fotoPerfil.style.rotate = prompt("ingresa un valor en grados (del 0 al 180) y agrega la palabra deg junto al número valor elegido");

fotoPerfil.style.filter = prompt("ingresa uno de los siguientes valores : grayscale(1) , sepia(1) , saturate(1), invert(1)");

nombre = prompt("ingresa tu nombre")

alert( nombre + ", ahora mira como quedó la foto del Sr. Águila")

const precioBase = 6500;
let cantidad = 0;
let valorTotal = 0;

document.querySelector('#precioBase').innerHTML = precioBase;
document.querySelector('#cantidad').innerHTML = cantidad;
document.querySelector('#valorTotal').innerHTML = valorTotal;