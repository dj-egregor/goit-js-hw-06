const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');
// первоначальная установка шрифта по положению слайдера
textEl.style.fontSize = `${inputEl.value}px`;

function changeFontSize() {
  textEl.style.fontSize = `${this.value}px`;
}
inputEl.addEventListener('input', changeFontSize);
