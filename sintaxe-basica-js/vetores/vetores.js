//criando um array

let pessoas= ['Nathalia', 'Bruna', 'Luiza', 'Karen'];
console.log(pessoas.length) // 4

// iterando um Array
pessoas.forEach(function (indice, item, array) {
  console.log(item, indice);
});
// 0 Nathalia, 1 Bruna, 2 Luiza, 3 Karen

//adiciona item ao final do array
let adicionar = pessoas.push('Larissa');
// ['Nathalia', 'Bruna', 'Luiza', 'Karen', 'Larissa']

//remove item do final
let ultimo = pessoas.pop(); // remove Larissa
// ['Nathalia', 'Bruna', 'Luiza', 'Karen']

//remove do item no início
let primeiro = pessoas.shift(); // remove Nathalia do início
// ['Bruna', 'Luiza', 'Karen']

//adiciona item no início
let adiciona = pessoas.unshift('Milena') 
// ['Milena','Bruna', 'Luiza', 'Karen']

//procura o índice de um item
// ['Milena','Bruna', 'Luiza', 'Karen']
let pos = pessoas.indexOf('Luiza'); // retorna 2

// remove um item pela posição do índice
let removedItem = pessoas.splice(pos, 1); 
// ['Milena','Bruna', 'Luiza', 'Karen'] -> remove 'Bruna'

//remover vários itens
// ['Milena', 'Luiza', 'Karen'] 
let posi = 0, n = 1; //pos seria a posição que se inicia a remoção e n representa o total de itens a serem excluídos
let removerVariosItens = pessoas.splice(posi, n);
// ['Karen'] 


// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
var citricos = frutas.slice(1, 3);
console.log(citricos);

// citricos contem ['Laranja','Limao']


