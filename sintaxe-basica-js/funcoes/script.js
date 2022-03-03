
function iniciar() {
  console.log(' Estamos aprendendo sobre função');
}
iniciar();

function soma(num1, num2){
 if(num1 !== num2){
   console.log(`Os números ${num1} e ${num1} são diferentes e a soma deles é igual a: ${num1 + num2}`);
 }
}
soma(3, 2)

// É possível utilizar return no lugar do else (em alguns casos)
function comparaNumeros (a, b) {
  const saoIguais = a === b;
  const soma = a + b;
  if(saoIguais){
    return "são Iguais"
  }
  return " Não são iguais"
}

// utilizando if ternário
function comparaNumeros (a, b) {
  const saoIguais = a === b;
  const soma = a + b;
  return saoIguais ? "São iguais" : "Não são iguais";
}

//utilizando o this
const carro = {
  modelo: "Ka",
  fabricante: "Ford",
  NomeCompleto: function () {
    return `${this.fabricante} ${this.modelo}`;
  },
};
console.log(carro.NomeCompleto());

//Output: "Ford Ka"