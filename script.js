
let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
 
  event.preventDefault();

  
  let nombre = form.nombre.value;
  let correo = form.correo.value;
  let mensaje = form.mensaje.value;

  
  let nombreRegex = /^[a-zA-Z\s]+$/;
  if (!nombreRegex.test(nombre)) {
    alert("Por favor, ingresa un nombre válido");
    
    return;
  }

  
  let correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!correoRegex.test(correo)) {
    
    alert("Por favor, ingresa un correo electrónico válido");
  
    return;
  }

  
  let mensajeRegex = /^.{10,}$/;
  if (!mensajeRegex.test(mensaje)) {
   
    alert("Por favor, ingresa un mensaje de al menos 10 caracteres");
   
    return;
  }

  fetch("/action_page.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre,
      correo: correo,
      mensaje: mensaje
    })
  })
  .then(response => response.text())
  .then(data => {
    alert("Tu mensaje ha sido enviado");
    form.reset();
  })
  .catch(error => {
    alert("Ha ocurrido un error al enviar tu mensaje");
  });
});
