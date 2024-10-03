const rgbDisplay = document.querySelector(".rgb");
const colorDiv = document.querySelector(".color");
const inputRange = document.querySelectorAll("input[type='range']");
const inputValue = document.querySelectorAll(".input-box span");
const randomButton = document.querySelector(".randomButton");

updateColor();

function updateColor() {
  const red = inputRange[0].value;
  const green = inputRange[1].value;
  const blue = inputRange[2].value;

  updateInput(red, green, blue)

  colorDiv.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;

  rgbDisplay.textContent = `RGBA(${red}, ${green}, ${blue})`;
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

  updateInput(randomRed, randomGreen, randomBlue)

  updateColor();
}

function updateInput(red, green, blue) {
  inputRange[0].value = red;
  inputRange[1].value = green;
  inputRange[2].value = blue;

  inputValue[0].textContent = red;
  inputValue[1].textContent = green;
  inputValue[2].textContent = blue;
}
