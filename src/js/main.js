const section = document.querySelector('.section');
let backgroundImages = section.dataset.backgroundImage.split(' ');

function changeBg() {
  section.style.background = `url(../images/${backgroundImages[Math.floor(Math.random() * 3)]}.jpg) center no-repeat`;
};

setInterval(changeBg, 5000);
