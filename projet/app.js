const rgbDisplay = document.querySelector(".rgba");
const colorDiv = document.querySelector(".color");
const inputRange = document.querySelectorAll("input[type='range']");
const inputValue = document.querySelectorAll(".input-box span");
const randomButton = document.querySelector(".randomButton");
const copyButton = document.querySelector(".copyButton");
const textarea = document.querySelector("textarea")

function emptyTextarea(){
  setTimeout(() => {
    textarea.value = ''
  }, 1000);
}
textarea.addEventListener("blur", emptyTextarea);

//updateColor();

function updateColor() {
  const red = inputRange[0].value;
  const green = inputRange[1].value;
  const blue = inputRange[2].value;
  const opacity = inputRange[3].value;

  updateInput(red, green, blue,opacity)

  colorDiv.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

  rgbDisplay.textContent = `RGBA(${red}, ${green}, ${blue}, ${opacity})`;
}

inputRange.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    inputValue[index].textContent = e.target.value;
    updateColor();
  });
});

randomButton.addEventListener("click", randomColor);

function randomColor() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const randomOpacity = Math.random(); 

  updateInput(randomRed, randomGreen, randomBlue, randomOpacity)

  updateColor();
}

function updateInput(red, green, blue,opacity) {
  inputRange[0].value = red;
  inputRange[1].value = green;
  inputRange[2].value = blue;
  inputRange[3].value = opacity;

  inputValue[0].textContent = red;
  inputValue[1].textContent = green;
  inputValue[2].textContent = blue;
  inputValue[3].textContent = opacity;
}

copyButton.addEventListener("click", copyColor)

function copyColor() {
  const colorText = rgbDisplay.textContent;
  navigator.clipboard.writeText(colorText.toLowerCase()).then(() => {
    alert(`La couleur ${colorText.toLowerCase()} a été copiée dans le presse-papiers !`);
  }).catch(err => {
    console.error('Échec de la copie : ', err);
  });

}