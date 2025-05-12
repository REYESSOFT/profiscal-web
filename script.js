document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío real
  const nombre = this.elements[0].value.trim();
  const correo = this.elements[1].value.trim();
  const mensaje = this.elements[2].value.trim();
  if (!nombre || !correo || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }
  alert("¡Gracias por tu mensaje, " + nombre + "! Pronto te responderemos.");
  this.reset(); // Limpia el formulario
});
