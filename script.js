'use strict';

const container = document.querySelector('.container');

// let square = document.createElement('div');
// square.classList.add('square');
// container.append(square);

// square = document.createElement('div');
// square.classList.add('square');
// container.append(square);

let containerSize = 256; // or .value

for (let i = 0; i < containerSize; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}

