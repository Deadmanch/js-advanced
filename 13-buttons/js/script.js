'use strict';

/*
Сделать 5 кнопок с текстом "Нажми меня" и div, где отображается  
число нажатий(По умолчанию 0)
todo При нажатии кнопки, текст на ней меняется на "Нажата!". У всех остальных - "Нажми меня"
todo С нажатием любой кнопки счётчик увеличивается на 1
*/

const page = {
	counter: document.querySelector('.counter'),
	btn: document.querySelectorAll('.btn'),
	wrapper: document.querySelector('.wrapper'),
};

page.btn.forEach((button, i) => {
	button.setAttribute('data-button', i);
});

page.wrapper.addEventListener('click', function (event) {
	const target = event.target;
	const atr = target.getAttribute('data-button');
	if (target.classList.contains('btn')) {
		target.textContent = 'Нажата!';
		page.counter.textContent++;
		page.btn.forEach(button => {
			if (button.getAttribute('data-button') !== atr) {
				button.textContent = 'Нажми меня';
			}
		});
	}
});
