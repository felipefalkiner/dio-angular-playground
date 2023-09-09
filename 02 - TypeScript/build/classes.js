"use strict";
class Character {
    constructor(name, strength, skill) {
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
    doAttack() {
        console.log("doAttack is called");
        this.attack();
    }
    setName(name) {
        this.name = name;
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magic) {
        super(name, strength, skill);
        this.magic = magic;
    }
}
const char1 = new Character("Falkzin", 10, 99);
console.log(char1);
char1.setName("Falk");
console.log("---- NAME SET ----");
console.log(char1);
char1.doAttack();
const char2 = new Magician("Bill", 5, 99, 255);
