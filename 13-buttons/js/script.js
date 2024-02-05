'use strict';

/*
Сделать 5 кнопок с текстом "Нажми меня" и div, где отображается  
число нажатий(По умолчанию 0)
todo При нажатии кнопки, текст на ней меняется на "Нажата!". У всех остальных - "Нажми меня"
todo С нажатием любой кнопки счётчик увеличивается на 1
*/

const page = {
	counter: document.querySelector('.counter'),
	wrapper: document.querySelector('.wrapper'),
};
let buttons = [...page.wrapper.children];
buttons.forEach((button, i) => {
	if (button.classList.contains('btn')) {
		button.setAttribute('data-button', i);
	}
});
page.wrapper.addEventListener('click', function (event) {
	const target = event.target;
	const atr = target.getAttribute('data-button');
	if (target.classList.contains('btn')) {
		target.textContent = 'Нажата!';
		page.counter.textContent++;
		buttons.forEach(button => {
			if (button.getAttribute('data-button') !== atr && button.classList.contains('btn')) {
				button.textContent = 'Нажми меня';
			}
		});
	}
});
