'use strict';
class Character {
	name;
	language;
	#race;
	constructor(race, name, language) {
		this.#race = race;
		this.name = name;
		this.language = language;
	}
	get race() {
		return this.#race;
	}
	speak() {
		console.log(`Моё имя - ${this.name}! Мой язык - ${this.language}`);
	}
}

class Orc extends Character {
	#weapon;
	constructor(race, name, language, weapon) {
		super(race, name, language);
		this.#weapon = weapon;
	}
	hitWeapon() {
		console.log(`Лок’тар огар! Вы нанесли удар оружием - ${this.#weapon}`);
	}
	speak() {
		console.log(`Тром-ка! Мое имя - ${this.name}! Мой язык - ${this.language}`);
	}
}

class Elf extends Character {
	#spellType;
	constructor(race, name, language, spellType) {
		super(race, name, language);
		this.#spellType = spellType;
	}
	spellCast() {
		console.log(`Каст заклинания - ${this.#spellType}`);
	}
	speak() {
		console.log(`Elen sila lumenn omentilmo! Мое имя - ${this.name}! Мой язык - ${this.language}`);
	}
}

const orc = new Orc('Орк', 'Трал', 'Оркский', 'Молот Рока');
console.log(orc);
orc.hitWeapon();
orc.speak();

const elf = new Elf('Эльф', 'Галадриэль', 'Синдарин', 'Нэнья');
console.log(elf);
elf.speak();
elf.spellCast();
