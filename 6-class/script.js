'use strict';

/*
* Создайте класс Car у которого есть:
? -Марка
? -Модель
? -Пробег
! Все свойства приватные, задаются в constructor
Todo Сделайте для него возможность менять пробег через get и set
Todo Добавьте метод info, который выводит в консоль марку, модель и пробег
*/

class Car {
	#brand;
	#model;
	#_mileage;

	constructor(brand, model, mileage) {
		this.#brand = brand;
		this.#model = model;
		this.#_mileage = mileage;
	}
	get mileage() {
		return this.#_mileage;
	}
	set mileage(newMileage) {
		if (newMileage < 0) {
			return console.log(`Пробег не может быть меньше 0`);
		}
		this.#_mileage = newMileage;
	}
	info() {
		return console.log(`
		Марка: ${this.#brand}
		Модель: ${this.#model}
		Пробег: ${this.#_mileage}`);
	}
}

const bmw = new Car('Bmw', 'M5', 1000);

console.log(bmw);
bmw.mileage = 4000;
bmw.info();

const lada = new Car('Lada', 'Vesta', 2000);
lada.info();
