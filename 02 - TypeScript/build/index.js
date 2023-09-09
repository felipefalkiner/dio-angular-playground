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
const char1 = new Character("Falkzin", 10, 99);
console.log(char1);
char1.setName("Falk");
console.log("---- NAME SET ----");
console.log(char1);
char1.doAttack();
