'use strict';
/* 
TODO: Сделать с помощью Set уникализацию массива объектов
? Подсказка может понадобиться map и find
*/
let users = [
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 3, name: 'Данил' },
	{ id: 4, name: 'Сергей' },
];
let uniqueUsers = [...new Set(users.map(user => user.id))].map(id => {
	return users.find(user => user.id === id);
});

console.log(uniqueUsers);
