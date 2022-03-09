let person = {};

//incluindo dados no objeto.
person.name = "Milena Carvalho";
person.age = 24;
person.sign = "Scorpion";
console.log(person); //Output: { name: 'Milena Carvalho', age: 24, sign: 'Scorpion' }
console.log(Object.values(person)); // Output: [ 'Milena Carvalho', 24, 'Scorpion' ]
console.log(Object.keys(person)); // Output: [ 'name', 'age', 'sign' ]

// já declarando chave e valor
let person2 = {
  name: "Nathalia",
  age: 24,
  sign: "Lion"
}

//retornando um valor
person.name;
person.name['name'];

//incluindo o valor armazenado em uma variável
let mom = 'nameOfMom';
person2[mom] = 'Maria';
console.log(person2) //Output: { name: 'Nathalia', age: 24, sign: 'Lion', nameOfMom: 'Maria' }


//Object Destructuring

const user = {
  id: 42,
  displayName: 'jinx',
  fullName: {
    firstName: 'Powder',
    lastName: 'Arcane'
  }
};

function userId({id}) {
  return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
  return `${first} ${last}`;
}

userId(user); //Output: 42
getFullName(user) // Powder Arcane;