'use strict';
/*
TODO Создать базовый класс Персонажа с параметрами:
* 1. Раса
* 2. Имя
* 3. Язык 
* 4. Метод - говорить( Выводит язык и имя в консоль)

TODO Создать класс Орка, который наследуется от Персонажа, у которого есть:
* 1. Оружие 
* 2. Метод удар (Выводит в консоль - вы нанесли удар)

TODO Создать класс Эльф, который наследуется от Персонажа, у которого есть:
* 1. Тип заклинаний 
* 2. Метод - создать заклинание( Выводит в консоль - каст заклинания - имя заклинания)

! Использовать прототипное наследование. Все методы простые и выводят что-то в консоль
*/

// Создаем базовый класс Персонажа
const Character = function (race, name, language) {
	this.name = name;
	this.language = language;
	this.race = race;
};

Character.prototype.speak = function () {
	console.log(`Мое имя - ${this.name}! Мой язык - ${this.language}`);
};
// Орк
const orc = new Character('Орк', 'Трал', 'Оркский');
orc.weapon = 'DoomHammer';
orc.hitWeapon = function () {
	console.log(`Вы нанесли удар оружием - ${this.weapon}`);
};
orc.speak();
orc.hitWeapon();

// Эльф

const elf = new Character('Эльф', 'Галадриэль', 'Синдарин');
elf.spellType = 'Нэнья';
elf.spellCast = function () {
	console.log(`Каст заклинания - ${this.spellType}`);
};
elf.speak();
elf.spellCast();
