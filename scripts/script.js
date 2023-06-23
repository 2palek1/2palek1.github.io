function randomСharacter() {
  const characters = [
    { name: 'Mark Zuckerberg', image: 'images/zuckerberg.jpg' },
    { name: 'Eduardo Saverin', image: 'images/saverin.jpeg' },
    { name: 'Sean Parker', image: 'images/parker.jpg' },
    { name: 'Sean Parker', image: 'images/parker.jpg' },
    { name: 'Tyler Winklevoss', image: 'images/tyler.jpg' },
    { name: 'Cameron Winklevoss', image: 'images/tyler.jpg' },
    { name: 'Divya Narendra', image: 'images/diy.webp' },
    { name: 'Erica Albright', image: 'images/ex.png' },
    {
      name: 'Chewing Capybara',
      image: 'https://media.tenor.com/hX9renH-K_YAAAAC/capibara.gif',
    },
  ];

  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];

  document.getElementById(
    'character',
  ).innerHTML = `You are ${randomCharacter.name}`;
  document.getElementById('character-image').src = randomCharacter.image;
}

function showLoadingCircle() {
  document.getElementById('loading-circle').style.display = 'block';
  document.getElementById('loading-text').style.display = 'block';
}

function hideLoadingCircle() {
  document.getElementById('loading-circle').style.display = 'none';
  document.getElementById('loading-text').style.display = 'none';
}
