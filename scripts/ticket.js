function getPrice() {
    let count = document.getElementById("count").value;
    let type = document.getElementById("ticket-type").value;
    let time = document.getElementById("time").value;
    displayPrice(count, time, type);
}

function displayPrice(count, time, type) {
    let ticketContainer = document.getElementById("ticket-container");
    ticketContainer.innerHTML = "<h3>Ticket count: " + count + " - " + type + "</h3>";
    ticketContainer.innerHTML += "<h3>Time: " + time + "</h3>";
    ticketContainer.innerHTML += "<h3>Price: " + calculatePrice(count, type) + "</h3>";
}

function calculatePrice(count, type) {
    if (type.toLowerCase() == "standard") {
        return count * 800;
    } else if (type.toLowerCase() == "premium") {
        return count * 1500;
    } else {
        return count * 3000;
    }
}
