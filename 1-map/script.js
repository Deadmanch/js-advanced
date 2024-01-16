'use strict';
/* 
TODO: Сделать с помощью Set уникализацию массива объектов
? Подсказка может понадобиться map и find
*/
const users = [
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 3, name: 'Данил' },
	{ id: 4, name: 'Сергей' },
];
const uniqueUsers = [...new Set(users.map(user => users.find(u => u.id === user.id)))];

console.log(uniqueUsers);
