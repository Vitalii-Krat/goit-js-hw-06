const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", onInputChangeText);

function onInputChangeText(event) {
    textSpan.style.fontSize = event.currentTarget.value + 'px'
}