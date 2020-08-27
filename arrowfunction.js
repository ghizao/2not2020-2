// Expressão de função " tradicional"
// caracteristicas desta função
// - seu corpo tem apenas uma linha de código com return

let quadrado =  function(n) {
    return n*n
}


// a função normal pode ser transformada em uma arrow function
//desaparece a palavra funcition
//o argumento não precisa de parenteses
// aopos o argumento há flecha (arrrow) =>
//as chaves e a palavra return são omitidas
 
let quadrado2 = n => n*n
console.log(quadrado(6))
console.log(quadrado2(6))

// Situaçção alternativa 1 : função sem argumento
//retorna  um numeor aleatorio entre 0 e 99

let aleatorio = function(){
    return Math.floor(Math.random() * 100)
}

console.log(aleatorio())

let aleatorio2 = () => Math.floor(Math.random() * 100)
}
