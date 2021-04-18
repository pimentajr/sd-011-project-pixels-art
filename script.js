const title = document.getElementById('title');
const colorsPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const buttonClearBoard = document.getElementById('clear-board');
const inputBoardSize = document.getElementById('board-size');
const buttonGenerateBoard = document.getElementById('generate-board');

title.innerText = 'Paleta de Cores';
buttonClearBoard.innerText = 'Limpar';
buttonGenerateBoard.innerText = 'VQV';

// Gera um número aleatório de 0 a 255
function randomNumber() {
  return Math.round(Math.random() * 255);
}

// Gera uma cor aleatória
function generateColor() {
  return `RGB(${randomNumber()},${randomNumber()},${randomNumber()}`
}

// Cria paleta de cores
function createPalette() {
  const listOfColors = ['black', generateColor(), generateColor(), generateColor()];
  for (let index = 0; index < listOfColors.length; index += 1) {
    const randomColor = document.createElement('div');
    randomColor.className = 'color';
    randomColor.style.background = listOfColors[index];
    randomColor.style.width = '40px';
    colorsPalette.appendChild(randomColor);
  }
  document.getElementsByClassName('color')[0].classList.add('selected');
}

// Recupera e corrige valor da dimensão do pixel board
function dimensionPixelBoard() {
  const checkValueBoardSize = Number(inputBoardSize.value);
  let valueBoardSize = 0;

  if ((checkValueBoardSize) <= 5 && (checkValueBoardSize) > 0) {
    valueBoardSize = 5;
  } else if ((checkValueBoardSize) >= 50) {
    valueBoardSize = 50;
  } else if ((checkValueBoardSize) < 50 && (checkValueBoardSize) > 5) {
    valueBoardSize = (checkValueBoardSize);
  } else {
    alert('Board inválido!');
    valueBoardSize = 5;
  }
  return valueBoardSize;
}

// Apaga pixel board
function erasePixelBoard() {
  const linesPixelBoard = document.getElementsByClassName('line');

  for (let index = linesPixelBoard.length - 1; index >= 0; index -= 1) {
    linesPixelBoard[index].remove();
  }
}

// Preenche as linhas do pixel board
function createColumnsPixelBoard(divLine, valueBoardSize) {
  for (let index = 0; index < valueBoardSize; index += 1) {
    const pixelSquare = document.createElement('div');
    pixelSquare.classList.add('pixel');
    pixelSquare.style.width = '40px';
    divLine.appendChild(pixelSquare);
  }
}

// Cria pixel board padrão 5x5
function createStandarPixelBoard() {
  const valueBoardSize = 5;

  for (let index = 0; index < valueBoardSize; index += 1) {
    const lineBoard = document.createElement('div');
    lineBoard.classList.add('line');
    pixelBoard.appendChild(lineBoard);
    createColumnsPixelBoard(lineBoard, valueBoardSize);
  }
}

// Cria linhas para o pixel board, tendo como parâmetro a dimensão do mesmo
function createPixelBoardVQV() {
  erasePixelBoard();
  const valueBoardSize = dimensionPixelBoard();

  for (let index = 0; index < valueBoardSize; index += 1) {
    const lineBoard = document.createElement('div');
    lineBoard.classList.add('line');
    pixelBoard.appendChild(lineBoard);
    createColumnsPixelBoard(lineBoard, valueBoardSize);
  }
}

function getColor(colorX) {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  colorX.target.classList.add('selected');
}

function colorPixel(pixelX) {
  const pixelBeColored = pixelX.target;
  const newColor = document.getElementsByClassName('selected')[0].style.background;
  if (pixelBeColored.classList.contains('pixel')) {
    pixelBeColored.style.background = newColor;
  }
}

function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

window.onload = function () {
  createPalette();
  createStandarPixelBoard();
};

colorsPalette.addEventListener('click', getColor);
pixelBoard.addEventListener('click', colorPixel);
buttonClearBoard.addEventListener('click', clearBoard);
buttonGenerateBoard.addEventListener('click', createPixelBoardVQV);
