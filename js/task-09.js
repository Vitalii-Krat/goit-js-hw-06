
const randomColorWidget = document.querySelector('.widget');
console.log(randomColorWidget);
randomColorWidget.addEventListener("click", onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = getRandomHexColor();

function onButtonClick(event){
  if (event.target.classList.contains("change-color"))
    document.body.style.background = color
};