window.onload = function () {
  const pixelBoard = document.querySelector('#pixel-board').children;
  let black = document.querySelector('#black');

  black.classList.add('selected');  
  
  const quant = 5;
  
  for (let index = 0; index < quant; index += 1) {
    for (let index2 = 0; index2 < quant; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard[index].appendChild(pixel);
    }
  }
};
