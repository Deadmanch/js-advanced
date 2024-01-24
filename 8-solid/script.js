'use strict';
/*
* Спроектируйте класс Billing со свойством 
* amount и методом calculateTotal для расчета счета. 
* Сделайте разный calculateTotal для разных типов:
? - fixBilling = нужно вернуть amount как результат
? - hourBilling = считает amount * число часов(Передаем в конструктор hourBilling)
? - itemBilling = amount * число элементов.

! Соблюдайте принцип открытости / закрытости
*/

class Billing {
	amount;
	constructor(amount) {
		this.amount = amount;
	}
	calculateTotal() {
		// default
	}
}

class FixBilling extends Billing {
	constructor(amount) {
		super(amount);
	}
	calculateTotal() {
		return this.amount;
	}
}

class HourBilling extends Billing {
	constructor(amount, hors) {
		super(amount);
		this.hors = hors;
	}
	calculateTotal() {
		return this.amount * this.hors;
	}
}

class ItemBilling extends Billing {
	constructor(amount, items) {
		super(amount);
		this.items = items;
	}
	calculateTotal() {
		return this.amount * this.items;
	}
}

const fixBilling = new FixBilling(100);
console.log(fixBilling.calculateTotal());
const hourBilling = new HourBilling(50, 5);
console.log(hourBilling.calculateTotal());
const itemBilling = new ItemBilling(100, 20);
console.log(itemBilling.calculateTotal());
