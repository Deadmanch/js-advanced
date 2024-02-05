'use strict';

async function race(promises) {
	return new Promise((resolve, reject) => {
		for (const promise of promises) {
			promise.then(resolve, reject);
		}
	});
}

// Пример использования
const promises = [
	new Promise(resolve => setTimeout(resolve, 1000, 'Promise 1 resolved')),
	new Promise(resolve => setTimeout(resolve, 500, 'Promise 2 resolved')),
	new Promise((resolve, reject) => setTimeout(reject, 5000, 'Promise 3 rejected')),
];

race(promises).then(data => console.log(data));
