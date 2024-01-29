'use strict';

async function race(promises) {
	return new Promise(async (resolve, reject) => {
		let completed = 0;
		promises.forEach(async promise => {
			try {
				const res = await promise;
				if (completed === 0) {
					resolve(res);
				}
			} catch (e) {
				if (completed === 0) {
					completed = 1;
					reject(e);
				}
			}
		});
	});
}

// Пример использования
const promises = [
	new Promise(resolve => setTimeout(resolve, 1000, 'Promise 1 resolved')),
	new Promise(resolve => setTimeout(resolve, 500, 'Promise 2 resolved')),
	new Promise((resolve, reject) => setTimeout(reject, 100, 'Promise 3 rejected')),
];

console.log(race(promises));
