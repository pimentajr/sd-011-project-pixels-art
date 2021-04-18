const creationFirst = document.createElement('div');
const creationPalette = document.querySelector('#color-palette');
creationPalette.appendChild(creationFirst);

for (let index = 0; index < 4; index += 1) {
  const creationFirstTd = document.createElement('td');
  creationFirstTd.className = 'color';
  creationFirst.appendChild(creationFirstTd);
}
document.querySelector('.color').className += ' selected';

const counter = 5;

for (let index = 0; index < counter; index += 1) {
  const createTr = document.createElement('div');
  createTr.className = 'pixeld';
  const theTable = document.querySelector('#pixel-board');
  theTable.appendChild(createTr);
  for (let count = 0; count < counter; count += 1) {
    const createSecondTd = document.createElement('td');
    createSecondTd.className = 'pixel';
    createTr.appendChild(createSecondTd);
  }
}
const corPaleta = document.querySelectorAll('.color');

const selectedColor = (event) => {
  const corEscolhida = document.querySelector('.selected');
  corEscolhida.className = 'color';
  const evento = event;
  evento.target.className += ' selected';
};

let selectedPixel = (event) => {
  let evento = event;
  evento.target.className = 'pixel pselected';
  let colorSelected = document.querySelector('.selected');
  let style = getComputedStyle(colorSelected);
  let bgColorSelected = style.backgroundColor;
  evento.target.style.backgroundColor = bgColorSelected;
};

for (let index = 0; index < corPaleta.length; index += 1) {
  corPaleta[index].addEventListener('click', selectedColor);
}

let pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', selectedPixel);
}

let clearButton = document.querySelector('#Limpar');
let allPixel = document.querySelectorAll('.pixel');

clearButton.addEventListener('click', () => {
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
});