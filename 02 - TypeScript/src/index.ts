// funcoes

// tudo tipado
function addNumber(x: number, y: number): number {
    return x + y
}

// o retorno de String vem de forma implicita
function addToHello(name: string){
    return `Hello ${name}`
}

// diversos modos de especificar a tipagem dessa função
// function callToPhone(phone: number | string): any{
// function callToPhone(phone: number | string): numer | string{
function callToPhone(phone: number | string){
    return phone
}

// funções async tem tipagem de Promise<tipo-esperado>
async function getDatabase(id: number): Promise<string> {
    return "Falk"
}

let soma:number = addNumber(4,7)
// O TS não vai deixar a linha de baixo acontecer, pq a
// variavel somaErro tem o tipo errado que é esperado pela função addNumber
// let somaErro: string = addNumber(4,7)

console.log(soma)
console.log(addToHello("Falk"))
console.log(callToPhone(551122222222))