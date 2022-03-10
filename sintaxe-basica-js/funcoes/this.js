//Ao utilizar o this dentro de um método, ele se refere ao objeto pai. No caso abaixo {pessoa}.

const pessoa = {
  firstName: "Carlos",
  lastName: "Andrade",
  id: 0,
  //Obs: Sempre que uma função está dentro de um objeto é chamada de método.
  fullName: function () {
    // return this.firstName + " " + this.lastName;
    console.log(`${this.firstName} ${this.lastName}`);
  },
  getId: function () {
    return this.id;
  },
};

pessoa.fullName(); //Output: Carlos Andrade
console.log(pessoa.getId()); //Output:0

(function () {
  // console.log(this)
})();

// Obs: dentro de um evento o this é o elemento que recebeu o evento. Neste caso o Botão.
/* <button id="btn" onclick='console.log(this)'></button> */

//Manipulando valores
//Usando o método CALL
const person = {
  nome: "Milena",
};

const animal = {
  nome: "Lola",
};

function getSomething() {
  console.log(this.nome);
}
getSomething.call(animal); //Output: 'Lola'

const myObj = {
  num1: 2,
  num2: 4,
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 2); //Output: 9

// Usando o método APPLY
const animals = {
  especie1: "Cão",
  especie2: "Gato",
  especie3: "Cavalo",
};

function getSomething2() {
  console.log(this.especie3);
}
getSomething2.apply(animals); //Output: 'Cavalo'

const myObj2 = {
  num1: 2,
  num2: 4,
};

function soma2(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj2, [1, 3]); //Output: 10
// A diferença entre call e apply é que o parâmetro é passado dentro de um Array


//Utilizando o método Bind (clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.)
const retornaNomes = function() {
  return this.name;
};

let milena = retornaNomes.bind({ name: "Milena" });
console.log(milena());
