
const button = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick(event) {
  const color = getRandomHexColor();
  spanRef.textContent = color;
  document.body.style.background = color;
}
button.addEventListener('click', onButtonClick);