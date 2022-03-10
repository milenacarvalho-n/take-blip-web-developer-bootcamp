let firstName = "Milena";
let lastName = "Carvalho";

//template string
let fullName = `Nome completo: ${firstName} ${lastName}`;
console.log(fullName);

console.log(typeof firstName);

let concatenando = firstName.concat(lastName);
// console.log(concatenando); Output: MilenaCarvalho

let concatena = firstName + " " + lastName;
// console.log(concatenando); Output: Milena Carvalho
concatenando.length;
console.log(concatenando.length); // Output: 14

let frase = "Olá, tudo bem?";
console.log(frase.split(" ")); //output: [ 'Olá,', 'tudo', 'bem?' ]
console.log(frase.split("")); // [ 'O', 'l', 'á', ',', ' ', 't', 'u', 'd', 'o', ' ', 'b', 'e',  'm', '?']
console.log(frase.includes("tudo")); //output: true

// o método abaixo retorna outra frase. Não modifica a frase original.
console.log(frase.replace(",", "!")); // Output: "Olá! Tudo bem?"


//Metódo substring()
 // variavel.substring(start[, length])
  const phrase = "Life is not a problem to be solved.";
  const partial = phrase.substring(0, 10);
  const upper = partial.toUpperCase();
  console.log(upper);
  
 


 
  
