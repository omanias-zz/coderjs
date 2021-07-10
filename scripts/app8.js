//Contenido del contenedor
const img1 = document.createElement('img');
img1.src = '../images/monitor.jpg';
img1.classList.add('img-thumbnail');

const producto = document.createElement('p');
producto.textContent = 'Monitor';

const marca = document.createElement('p');
marca.textContent = 'ASUS';

const precio = document.createElement('p');
precio.textContent = '$16.900';

//----------------------------------------------------

const img2 = document.createElement('img');
img2.src = '../images/webcam.jpg';
img2.classList.add('img-thumbnail');

const producto2 = document.createElement('p');
producto2.textContent = 'Web Cam';

const marca2 = document.createElement('p');
marca2.textContent = 'Logitech';

const precio2 = document.createElement('p');
precio2.textContent = '$4.800';

//-----------------------------------------------------

const img3 = document.createElement('img');
img3.src = '../images/teclado.jpg';
img3.classList.add('img-thumbnail');

const producto3 = document.createElement('p');
producto3.textContent = 'Teclado';

const marca3 = document.createElement('p');
marca3.textContent = 'Logitech';

const precio3 = document.createElement('p');
precio3.textContent = '$3.937';


//Creamos los div

const card = document.createElement('div');
card.classList.add('col');
card.appendChild(img1);
card.appendChild(producto);
card.appendChild(marca);
card.appendChild(precio);

const card2 = document.createElement('div');
card2.classList.add('col');
card2.appendChild(img2);
card2.appendChild(producto2);
card2.appendChild(marca2);
card2.appendChild(precio2);

const card3 = document.createElement('div');
card3.classList.add('col');
card3.appendChild(img3);
card3.appendChild(producto3);
card3.appendChild(marca3);
card3.appendChild(precio3);

const divRow = document.createElement('div');
divRow.classList.add('row');
divRow.appendChild(card);
divRow.appendChild(card2);
divRow.appendChild(card3);


//Agregamos al contenedor
const contenedor = document.querySelector('.container');
contenedor.appendChild(divRow);
;
