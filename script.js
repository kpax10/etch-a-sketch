'use strict';

const container = document.querySelector('.container');
let boxLength = 16;
const getSize = document.querySelector('.prompt');

const generateBox = function () {
    for (let i = 0; i < boxLength ** 2; i++) {
        let createSquare = document.createElement('div');
        createSquare.classList.add('square');
        createSquare.style.width = `${600 / boxLength}px`;
        container.appendChild(createSquare);
    };
};

const removeBox = function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);

        // DOES THE ELEMENT NEED TO BE WIPED OF ITS PROPERTIES COMPLETELY?
        // REMOVE EVENT LISTENER??
    };
};

generateBox();

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('black');
    });
});


getSize.addEventListener('click', () => {
    boxLength = prompt('How many squares per side?');
    boxLength = Number(boxLength);

    removeBox();
    generateBox();

});

