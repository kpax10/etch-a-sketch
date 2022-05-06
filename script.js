'use strict';

const container = document.querySelector('.container');
let boxLength = 16;
const getSize = document.querySelector('.prompt');

const generateBox = function () {
    for (let i = 0; i < boxLength ** 2; i++) {
        const square = document.createElement('div');

        square.classList.add('square');
        square.style.width = `${600 / boxLength}px`;
        // square.style.height = `${600 / boxLength}px`;
        container.append(square);
    };
};

const removeBox = function () {
    for (let i = 0; i < boxLength ** 2; i++) {

        square.classList.remove('square');

        container.remove(square);
    };
};

generateBox();

const squares = document.querySelectorAll('.square');
// forEach square, add event listener hover to change color to black
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('black');
    });
});

getSize.addEventListener('click', () => {
    boxLength = prompt('How many squares per side?');
    boxLength = Number(boxLength);

    squares.forEach((square) => {
        square.classList.remove('black');
    });
    // removeBox();
    generateBox();
});

