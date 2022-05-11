'use strict';

const container = document.querySelector('.container');
const getSize = document.querySelector('.prompt');
const randomColor = document.querySelector('.random-color')
let boxLength = 16;
let color = 'black'

const getColorCode = () => {
	const makeColorCode = '0123456789ABCDEF';
	let color = '#';
	for (var count = 0; count < 6; count++) {
		color = color + makeColorCode[Math.floor(Math.random() * 16)];
	};
	return color;
};

const displayBox = function () {
	for (let i = 0; i < boxLength ** 2; i++) {
		let createSquare = document.createElement('div');
		createSquare.classList.add('square');
		createSquare.style.width = `${600 / boxLength}px`;
		container.appendChild(createSquare);
	};
	let squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
			square.style.backgroundColor = color;  //getColorCode();  //This makes a rainbow
		});
	});
};

const removeBox = function () {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	};
};

displayBox();

getSize.addEventListener('click', () => {
	boxLength = Number(prompt('How many squares per side?'));
	if (!((boxLength >= 1) && (boxLength <= 100))) {
		boxLength = Number(prompt('Needs to be a number between 1 - 100'));
	};
	removeBox();
	displayBox();
});

randomColor.addEventListener('click', () => {
	let squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
			square.style.backgroundColor = getColorCode();  //getColorCode();  //This makes a rainbow
		});
	});
});