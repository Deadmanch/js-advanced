'use strict';

/*
* Сделать ф-ю валидации возраста. 
* На вход передается строка даты рождения вида: '2022-01-01'
TODO: Необходимо вывести true если > 14 и false если < 14
*/

function ageValidation(dateOfBirthday) {
	const birthday = new Date(dateOfBirthday);
	const now = new Date();
	const age = now.getFullYear() - birthday.getFullYear();

	return age > 14
		? true
		: age === 14
		? now.getMonth() > birthday.getMonth() ||
		  (now.getMonth() === birthday.getMonth() && now.getDate() >= birthday.getDate())
		: false;
}

const birthday = '2009-01-01';
const birthday2 = '2010-01-01';
console.log(ageValidation(birthday));
