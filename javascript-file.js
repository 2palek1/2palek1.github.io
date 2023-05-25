function random_character() {
    let characters = ["Mark Zuckerberg", "Eduardo Saverin", "Sean Parker"]
    let random = characters[Math.floor(Math.random() * 3)]
    document.getElementById("character").innerHTML = "You are " + random;
}