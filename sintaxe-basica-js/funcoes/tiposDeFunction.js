(function () {
  let name = "Função autoinvocável";
  return name;
})();

// Output: Função autoinvocável;

(function (a, b) {
  return a + b;
})(1, 2);

// Output: 3. Ou seja, ela pode ser utilizada com parâmetros.

const soma = (function (a, b) {
  return a + b;
})(1, 2);

console.log(soma); //Output: 3. A mesma pode ser armazenada em uma variável.


// Funções Callbacks: são passadas como argumento para outra

const calc = function(operacao, num1, num2){
  return operacao(num1, num2);
}

const soma1 = function(num1, num2) {
  return num1 + num2;
}

const sub = function(num1, num2) {
  return num1 - num2;
}

const resultSoma = calc(soma1, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSoma); //Output: 3
console.log(resultSub); //Output: -1


// Valores padrão de um parâmetro

function exponecial(array, num = 1){
  const result = [];

  for(let i = 0; i < array.length; i++){
    result.push(array[i] ** num);
  }
  return result;
}

console.log(exponecial([1, 2, 3, 4])); // valor padrão 1, Output: [1, 2, 3, 4]
console.log(exponecial([1, 2, 3, 4], 4)); //Output: [1, 16, 81, 256]


//Utilizando o objeto arguments

function findMax() {
  let max = -Infinity; // (-) aceita números negativos

  for(let i = 0; i < arguments.length; i++){
    if (arguments[i] > max){
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(1, 24, 15, 6, 110, 13)) //Output: 110
