function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEL = document.querySelector('body');
const colorValueEl = document.querySelector('span.color');
const btnChangeColor = document.querySelector('button.change-color');

function changeColor() {
  const color = getRandomHexColor();
  bodyEL.style.backgroundColor = color;
  colorValueEl.textContent = color;
}

btnChangeColor.addEventListener('click', changeColor);
