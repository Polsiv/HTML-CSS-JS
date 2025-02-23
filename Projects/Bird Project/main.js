const reservarBtn = document.getElementById('reservar-btn');

reservarBtn.addEventListener('click', () => {
  const checkInDate = document.getElementById('check-in-date').value;
  const checkOutDate = document.getElementById('check-out-date').value;
  const numGuests = document.getElementById('num-guests').value;
  const roomType = document.getElementById('room-type').value;
  const success = document.getElementById("completed");
  const llegada = document.getElementById("llegada");
  const salida = document.getElementById("salida");
  const canPersonas = document.getElementById("can-personas");
  const tipoHabitacion = document.getElementById("tipo-habitacion");


  if (checkInDate && checkOutDate && numGuests && roomType) {
    alert('Reserva completada con Ã©xito');
    success.style.display = "flex";
    llegada.textContent = checkInDate;
    salida.textContent = checkOutDate;
    canPersonas.textContent = numGuests;
    tipoHabitacion.textContent = roomType;
    
  } else {
    alert('Por favor, completa todos los campos antes de reservar');
  }
});