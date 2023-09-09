// Classes

// Data Modifiers (Modificadores de Acesso)
// public
// private - ninguém acessa a propriedade, nem as subclasses
// protected - estudar outros exemplos || se você tem uma subclasse, ela consegue acessar o protected

class Character {
    protected name?:string // o ? é que esse valor é opcional
    private strength: number
    skill: number

    constructor(name: string, strength:number, skill:number){
        // this.name = name
        this.strength = strength
        this.skill = skill
    }

    private attack(): void{
        console.log(`Attack with ${this.strength} points`)
    }

    doAttack():void {
        console.log("doAttack is called")
        this.attack()
    }

    setName(name:string): void{
        this.name = name
    }
}

//Character: superclass
//Magician: subclass
class Magician extends Character{
    magic: number
    constructor(name: string, strength:number, skill:number, magic:number){
        super(name, strength, skill)
        this.magic = magic
        
    }
}

const char1 = new Character("Falkzin", 10, 99)
console.log(char1)
char1.setName("Falk")
console.log("---- NAME SET ----")
console.log(char1)
char1.doAttack()

// char 2

const char2 = new Magician("Bill", 5, 99, 255)