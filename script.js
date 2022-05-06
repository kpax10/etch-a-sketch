'use strict';

const container = document.querySelector('.container');

let containerSize = 16; // or prompt * 4?

for (let i = 0; i < containerSize ** 2; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${600 / containerSize}px`;
    container.append(square);
};