// Generics

// o T faz a mágia aqui
// assim você evita de usar o any e delimita a tipagem

function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}

// coloquei os "OU" pois se não o push só aceitava array de strings
// ai adicionava uma array dentro da array
const numArray = concatArray<number[] | number>([1,5], [3])
const stringArray = concatArray<string[] | string>(["teste", "banana"], ["falk"])

stringArray.push("hello")

console.log(numArray)
console.log(stringArray)