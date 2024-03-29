export default class Character {
  constructor(name, type) {
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Передано некорректное значение имени персонажа');
    }
    if (!types.includes(type)) {
      throw new Error('Передано некорректное значение типа персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}