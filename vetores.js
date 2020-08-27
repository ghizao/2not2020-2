let vetor1 = []  // Forma moderna
let vetor2 = Array()    // Forma "tradicional"

// Criação de vetor com valores iniciais

let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

// inserção de novos valores em um vetor

// forma 1? push() --> adiciona elementos no FINAL DO VETOR

vetor1.push('laranja')
vetor1.push('limao')

//FORMA 2 - unshift()
vetor1.unshift('maça')

console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

// Forma 3: splice()
//1° paramentor(nesse caso o "2" - indforma a posição de inserção)
//2° paramentro( nesse caso o "0" informa quantos elementos serão eliminados)
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

// remoção de elemntosa

// forma 1 - pop() -> retira o ULTIMO  elemento do vetor

let x1 = vetor1.pop()
console.log(vetor1, x1)

// Forma 2 > shift() -> retira o PIMEIRO elemento do vetor

let x2 = vetor1.shift()
console.log(vetor1, x2)

//forma 3> splice()
//1° paramento: a posição para remoção nesse caso (2)
//2° paramento: a quantidade de elementos a serem removidos
//obs. o retorno de splice() na remoção será o vetor contendo o(s)
// item(ns) removido(s)

let x3 = vetor1.splice(2,1)
console.log(vetor1, x3)

// O splice() tambem serve para fazer substituições
vetor1.splice(1, 1, 'pera', 'jaboticaba', 'pessego', 'uva', 'jaca')
console.log(vetor1)

// metodos de percurso 

//Forma 1: usando o for tradicional
// o início da váriavel é sempre na posição  ) e o seu incremento
// deve ir até uma posição ANTES do seu numero de elementos(length)
// i++ significa i = i+i
for(let i = 0; i < vetor1.length; i++) {
    console.log(vetor1[i])
}


console.log('-----------------------')

// Forma 2: for..of

for(let fruta of vetor1) {
    console.log(fruta)
}

