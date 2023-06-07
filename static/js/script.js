$(document).ready(function () {

  // console.log("El DOM ha sido cargado");

});

// Función que se ejecutará cuando la pestaña se vuelva visible
function handleVisibilityChange() {
  if (document.visibilityState === 'visible') {
    console.log('se ejcuta')
    cerrarVentana()
    // Coloca aquí el código que deseas ejecutar cada vez que se ingrese a la pestaña
  }
}

// Agregar el evento visibilitychange al documento
document.addEventListener('visibilitychange', handleVisibilityChange);


// Realizar una petición AJAX a la función Python
function llamarFuncionPython() {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var respuesta = xhr.responseText;
        console.log(respuesta);
      } else {
        console.log('Error en la solicitud: ' + xhr.status);
      }
    }
  };
  xhr.open('GET', '/ruta-de-tu-funcion-python', true);
  xhr.send();
}

var ventanas = {};
abrirVentana = (get_str)=>{
  var url;

  switch (get_str) {
    case 'p':
      url = "https://www.paramountplus.com";
      break;
    case 'n':
      url = "https://www.netflix.com";
      break;
    case 'g':
      url = "https://www.google.com";
      break;
    case 'y':
      url = "https://www.youtube.com";
      break;
    case 'h':
      url = "https://www.hbomax.com";
      break;
    default:
      console.log("Opción inválida");
      return;
  }

  var ventana = window.open(url, '_blank');
  console.log('Esto es mas ',ventana);
  ventanas[get_str] = ventana;
  ventanas['name_wind'] = get_str
}

cerrarVentana = (a) =>{
  console.log(ventanas['name_wind']);
  console.log(ventanas[ventanas['name_wind']]);
  ventanas[ventanas['name_wind']].close()
}


let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"29\" height=\"23\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Apagar";

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Apagar") {
    buttonText.innerHTML = "Apagar";
  } else if (buttonText.innerHTML === "Apagar") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('button__circle');
});

