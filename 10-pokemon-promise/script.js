'use strict';
// const request = new XMLHttpRequest();
// request.open('GET', 'https://poke2api.co/api/v2/pokemon/ditto');
// request.send();
// request.addEventListener('load', function () {
// 	const { abilities } = JSON.parse(this.responseText);
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `${abilities[1].ability.url}`);
// 	request.send();
// 	request.addEventListener('load', function () {
// 		const { effect_entries } = JSON.parse(this.responseText);
// 		console.log(effect_entries[1].effect);
// 	});
// });
// request.addEventListener('error', function () {
// 	console.log('Ошибка при получении данных');
// });

function getData(url, errorMessage) {
	return fetch(url).then(res => {
		if (!res.ok) {
			throw new Error(`${errorMessage} ${res.status}`);
		}
		return res.json();
	});
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Can not get pokemon')
	.then(({ abilities }) => {
		return getData(`${abilities[1].ability.url}`, 'Can not get ability');
	})
	.then(({ effect_entries }) => console.log(effect_entries[1].effect))
	.catch(error => console.log(error.message));
