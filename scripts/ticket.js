function getPrice() {
  const count = document.getElementById('count').value;
  const type = document.getElementById('ticket-type').value;
  const time = document.getElementById('time').value;
  displayPrice(count, time, type);
}

function displayPrice(count, time, type) {
  const ticketContainer = document.getElementById('ticket-container');
  ticketContainer.innerHTML = `<h3>Ticket count: ${count} - ${type}</h3>`;
  ticketContainer.innerHTML += `<h3>Time: ${time}</h3>`;
  ticketContainer.innerHTML += `<h3>Price: ${calculatePrice(count, type)}</h3>`;
}

function calculatePrice(count, type) {
  if (type.toLowerCase() === 'standard') {
    return count * 800;
  } if (type.toLowerCase() === 'premium') {
    return count * 1500;
  }
  return count * 3000;
}
