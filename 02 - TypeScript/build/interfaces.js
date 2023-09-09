"use strict";
const bot1 = {
    id: "5",
    name: "Falkobo"
};
const bot2 = {
    id: 3,
    name: "Falkobo",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
bot1.name = "Falkobo v2";
console.log(bot1);
console.log(bot2);
console.log("----------");
class Robozao {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `salveee ${this.name}`;
    }
}
const Robozin = new Robozao(1, "FALKZORD");
console.log(Robozin);
console.log(Robozin.sayHello());
