const inputEL = document.querySelector('input#name-input');
const spanEL = document.querySelector('span#name-output');

function changeText(message) {
  console.log(message.data, message);
  if (this.value.length > 0) {
    spanEL.textContent = this.value;
  } else {
    spanEL.textContent = 'Anonymous';
  }
}

inputEL.addEventListener('input', changeText);
