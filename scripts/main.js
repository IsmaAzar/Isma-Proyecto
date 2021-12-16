let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/letras.jfif') {
      miImage.setAttribute('src','images/letras2.jfif');
    } else {
      miImage.setAttribute('src', 'images/letras.jfif');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
 
function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.textContent = 'Leer es genial,' + miNombre;
    }
  }
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Leer es genial,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
