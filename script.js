// Palette parameters:
const FIXED_COLOR = 'black';
const COLORS = [
  'rgb(191, 97, 106)',
  'rgb(235, 203, 139)',
  'rgb(163, 190, 140)',
];
// Doesn't count the fixed color.
const NUM_OF_COLORS = COLORS.length;

// Pixel board parameters:
const BOARD_SIDE_SIZE = 5;

function setFixedColor() {
  const fixedColorBox = document.querySelector('.color.fixed');

  fixedColorBox.style.backgroundColor = FIXED_COLOR;
}

function setColors() {
  const colorBoxes = document.querySelectorAll('.color:not(.fixed)');

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBoxes[index].style.backgroundColor = COLORS[index];
  }
}

function initializePalette() {
  const colorPalette = document.getElementById('color-palette');
  const fixedColorBox = document.createElement('div');
  let colorBox;

  fixedColorBox.style.backgroundColor = FIXED_COLOR;
  fixedColorBox.classList.add('color', 'fixed', 'selected');
  colorPalette.appendChild(fixedColorBox);

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBox = document.createElement('div');
    colorBox.classList.add('color');
    colorBox.style.backgroundColor = COLORS[index];
    colorPalette.appendChild(colorBox);
  }

  setFixedColor();
  setColors();
}

function initializePixels() {
  const pixelRows = document.getElementsByClassName('pixel-row');
  let pixel;

  for (let rowIndex = 0; rowIndex < BOARD_SIDE_SIZE; rowIndex += 1) {
    for (let colIndex = 0; colIndex < BOARD_SIDE_SIZE; colIndex += 1) {
      pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelRows[rowIndex].appendChild(pixel);
    }
  }
}

function initializePixelBoard() {
  const pixelBoard = document.createElement('section');
  const contentContainer = document.querySelector('.content-container');
  let pixelRow;

  pixelBoard.id = 'pixel-board';
  for (let index = 0; index < BOARD_SIDE_SIZE; index += 1) {
    pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row');
    pixelBoard.appendChild(pixelRow);
  }
  contentContainer.appendChild(pixelBoard);

  initializePixels();
}

function selectColor(e) {
  const targetColorBox = e.target;
  const currentlySelectedColor = document.querySelector('.color.selected');

  if (targetColorBox !== currentlySelectedColor) {
    currentlySelectedColor.classList.remove('selected');
    targetColorBox.classList.add('selected');
  }
}

function initializePaletteListeners() {
  const colorBoxes = document.getElementsByClassName('color');

  for (let index = 0; index < NUM_OF_COLORS + 1; index += 1) {
    colorBoxes[index].addEventListener('click', selectColor);
  }
}

function fillPixel(e) {
  const clickedPixel = e.target;
  const selectedColor = document.querySelector('.color.selected').style.backgroundColor;

  if (clickedPixel.style.backgroundColor !== selectedColor) {
    clickedPixel.style.backgroundColor = selectedColor;
  } else {
    clickedPixel.style.backgroundColor = 'white';
  }
}

function initializeBoardListeners() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', fillPixel);
  }
}

window.onload = () => {
  initializePalette();
  initializePixelBoard();
  initializePaletteListeners();
  initializeBoardListeners();
};
