const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkCountSymbol);

function checkCountSymbol() {
  if (Number(this.dataset.length) === this.value.length) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
