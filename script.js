const form = document.getElementById('appointmentForm');
const list = document.getElementById('list');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const specialty = document.getElementById('specialty').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    
    const listItem = document.createElement('li');
    listItem.textContent = "Nombre: " + name + ", Correo: " + email + ", Especialidad: " + specialty + ", Fecha: " + date + ", Hora: " + time;
    
    list.appendChild(listItem);

    
    form.reset();
});