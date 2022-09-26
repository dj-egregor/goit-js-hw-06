const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkCountSymbol);

function changeStyles(element, remove, add) {
  element.classList.remove(remove);
  element.classList.add(add);
}

function checkCountSymbol() {
  if (Number(this.dataset.length) === this.value.length) {
    changeStyles(inputEl, 'invalid', 'valid');
  } else {
    changeStyles(inputEl, 'valid', 'invalid');
  }
}
