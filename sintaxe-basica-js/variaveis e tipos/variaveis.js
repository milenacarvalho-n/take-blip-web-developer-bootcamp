// tipos primitivos

// retorna o tipo boolean
let maiorIdade = true;
console.log(typeof(maiorIdade))  

// retorna o tipo number
let numero = 12;
console.log(typeof(numero));

//retorna o tipo string
let nome0 = 'Milena';
console.log(typeof(nome));

//
let soma = function(a,b) {
  return a + b;
}
console.log(typeof(soma));

// declarando variáveis

//var possui escopo global e local
var nome = 'Carol';

//let possui escopo local de bloco
let nome1 = 'Carlos';

//const possui escopo local de bloco e seu valor inicial não pode ser alterado.
const pi = 3.14;


//comparação
let comparacao = 0 === '0'; // estritamente igual (checa tipo e valor)
// retorna false 

let comparacao2 = 0 == '0'; // igual (checa somente valor)
//retorna true

//Operadores lógicos
// && todas as consições precisam ser true
// || apenas uma das condições precisa ser true
// ! inverte o valor

