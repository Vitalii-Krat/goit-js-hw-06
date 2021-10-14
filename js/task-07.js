const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.value = Number.parseInt(
  window.getComputedStyle(textSpan).fontSize,
);

console.log(fontSizeControl.value);

fontSizeControl.addEventListener('input', onInputChangeText);
function onInputChangeText(event) {
  textSpan.style.fontSize = event.currentTarget.value + 'px';
}