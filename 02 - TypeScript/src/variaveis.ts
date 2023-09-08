//  Variaveis

//  Tipos primitivos: boolean, number, string
let ligado:boolean = false
let nome:string = "Falk"
let idade:number = 30
let altura:number = 1.90

// Tipos Especiais
// null
// undefined
let nulo:null = null
let indefinido:undefined = undefined;

// Tipos Abrangentes
// any
// void - vazio

let retornoView:any = false

function executaQuery(): void {
    console.log('executando query...')
    
}

// Objeto sem Previsibilidade
let produto:object = {
    name:"Falk",
    cidade:"SP",
    idade: 30,
}

// Tipagem
type ProdutoLoja = {
    nome:string
    preco:number
    unidades:number
}

// Objeto Tipado - Com previsibilidade
let meuProduto: ProdutoLoja = {
    nome:"XPTO",
    preco:50.7,
    unidades:0
}

// Arrays
let dados: string[] = ["Falk", "Teste", "XPTO"]
let dados2: Array<String> = ["Falk", "0", "não pode number aqui"]

// Arrays Multi-Types
let infos: (string | number)[] = ["Falk", 555, 30]

// Tuplas
let boleto:[string, number, number] = ["Falk", 22.50, 1337]

// Arrays Métodos (os mesmos do JS)
// dados.pop()

// Datas
let aniversario:Date = new Date("2022-12-01 08:07")
console.log(aniversario.toString())

console.log("Apenas anotações")