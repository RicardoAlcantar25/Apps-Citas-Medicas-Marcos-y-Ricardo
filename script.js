// Referencias a elementos del DOM
const form = document.getElementById('appointmentForm');
const list = document.getElementById('list');

// Manejar el envío del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const specialty = document.getElementById('specialty').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Crear un elemento de lista con los datos
    const listItem = document.createElement('li');
    listItem.textContent = "Nombre: " + name + ", Correo: " + email + ", Especialidad: " + specialty + ", Fecha: " + date + ", Hora: " + time;
    // Agregar el elemento a la lista de citas
    list.appendChild(listItem);

    // Reiniciar el formulario
    form.reset();
});