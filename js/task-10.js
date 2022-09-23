function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const blockBoxesEl = document.querySelector('#boxes');
const buttonlCreateEl = document.querySelector('[data-create]');
const buttonlDeleteEl = document.querySelector('[data-destroy]');
const countElToCreate = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  const arrElements = [];
  let startSizeBlock = 30;
  for (let i = 0; i < amount; i += 1) {
    const newBlock = document.createElement('div');
    newBlock.style.backgroundColor = getRandomHexColor();
    newBlock.style.width = `${startSizeBlock}px`;
    newBlock.style.height = `${startSizeBlock}px`;
    startSizeBlock += 10;
    arrElements.push(newBlock);
  }

  blockBoxesEl.append(...arrElements);
}

function createDivs() {
  createBoxes(Number(countElToCreate.value));
}

function deleteDivs() {
  blockBoxesEl.innerHTML = '';
}

buttonlCreateEl.addEventListener('click', createDivs);
buttonlDeleteEl.addEventListener('click', deleteDivs);
