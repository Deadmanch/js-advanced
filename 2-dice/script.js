'use strict';

function rollDice(diceName) {
	const dice = [
		{ name: 'd4', min: 1, max: 4 },
		{ name: 'd6', min: 1, max: 6 },
		{ name: 'd8', min: 1, max: 8 },
		{ name: 'd10', min: 1, max: 10 },
		{ name: 'd12', min: 1, max: 12 },
		{ name: 'd16', min: 1, max: 16 },
		{ name: 'd20', min: 1, max: 20 },
	];
	const initialDice = dice.find(dice => dice.name === diceName.toLowerCase());
	if (!initialDice) {
		return `Такого dice не найдено. Попробуйте ещё раз!`;
	}
	return Math.floor(Math.random() * (initialDice.max - initialDice.min + 1) + initialDice.min);
}

console.log(rollDice('d20'));
