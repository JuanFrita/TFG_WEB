/**
 * Fichero js de la página home
 */

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Evento para la subida de imágenes y mostrar en canva
   */
  document
    .getElementById("i-imagen")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const canvas = document.getElementById("c-imagen");
          const ctx = canvas.getContext("2d");
          const image = new Image();
          image.src = e.target.result;
          image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            canvas.style.display = "block";
          };
        };
        reader.readAsDataURL(file);
      }
    });
  /**
   * permitir pintar en el canva
   */
  const canvas = document.getElementById("c-imagen");
  const ctx = canvas.getContext("2d");

  let pintando = false;

  // Funciones para manejar el pintado
  function comenzarPintado(e) {
    pintando = true;
    dibujar(e); // Para que comience a pintar inmediatamente al hacer clic
  }

  function terminarPintado() {
    pintando = false;
    ctx.beginPath(); // Reinicia el camino para evitar conectar líneas no deseadas
  }

  function dibujar(e) {
    if (!pintando) return; // Solo dibuja si el mouse está presionado

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath(); // Reinicia el camino
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  // Eventos del mouse
  canvas.addEventListener("mousedown", comenzarPintado);
  canvas.addEventListener("mouseup", terminarPintado);
  canvas.addEventListener("mousemove", dibujar);

  // Evita menú contextual en el canvas para permitir dibujar con el botón derecho
  canvas.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
});
