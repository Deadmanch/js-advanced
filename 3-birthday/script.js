'use strict';

/*
* Сделать ф-ю валидации возраста. 
* На вход передается строка даты рождения вида: '2022-01-01'
TODO: Необходимо вывести true если > 14 и false если < 14
*/

function ageValidation(dateOfBirthday) {
	const birthday = new Date(dateOfBirthday);
	const currentDay = new Date();
	const targetDay = new Date(currentDay.getFullYear() - 14, currentDay.getMonth(), currentDay.getDate());
	return birthday < targetDay;
}

const birthday = '2009-01-01';
const birthday2 = '2010-17-01';
console.log(ageValidation(birthday));
console.log(ageValidation(birthday2));
