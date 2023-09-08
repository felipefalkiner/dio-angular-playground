// interfaces -> type VS interface
type robot = {
    readonly id:number | string,
    name:string
}

interface robot2 {
    readonly id:number | string,
    name:string
    sayHello(): string
}

const bot1: robot ={
    id: "5",
    name: "Falkobo"
}

const bot2: robot2 ={
    id: 3,
    name: "Falkobo",
    sayHello: function (): string {
        throw new Error("Function not implemented.")
    }
}

bot1.name = "Falkobo v2"

console.log(bot1)
// Não posso mudar o ID pois ele é read only
// console.log(bot2.id = 2)
console.log(bot2)

console.log("----------")

// usar o Type mais para Variaveis
// interface usar para Classes (pensar que são contratos)

class Robozao implements robot2{
    id: string | number
    name: string

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `salveee ${this.name}`
    }
    
}

const Robozin = new Robozao(1, "FALKZORD")
console.log(Robozin)
console.log(Robozin.sayHello())

// O TypeScript tem que ser mais semantico para você do que para o compilador