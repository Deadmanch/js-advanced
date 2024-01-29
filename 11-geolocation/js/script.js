'use strict';
const page = {
	locationLatitude: document.getElementById('location-latitude'),
	locationLongitude: document.getElementById('location-longitude'),
	locationError: document.getElementById('location-error'),
	getLocationBtn: document.querySelector('.location-btn'),
};

function getUserCoordinates() {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject('Geolocation is not supported by your browser');
		} else {
			navigator.geolocation.getCurrentPosition(
				position => {
					resolve({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				error => {
					reject(`Error occurred. Error code: ${error.code}. ${error.message}`);
				}
			);
		}
	});
}
addEventListener('click', () => {
	getUserCoordinates()
		.then(coordinates => {
			page.locationLatitude.innerHTML = `<span>Latitude:</span> ${coordinates.latitude}`;
			page.locationLongitude.innerHTML = `<span>Longitude:</span> ${coordinates.longitude}`;
			page.locationError.style.display = 'none';
		})
		.catch(error => {
			page.locationError.textContent = error;
			page.locationError.style.display = 'block';
		});
});
