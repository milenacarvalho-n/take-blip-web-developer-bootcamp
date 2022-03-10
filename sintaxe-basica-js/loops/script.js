// If / else
function numeroPositivo(num) {
  let resultado;

  if(num < 0) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}

numeroPositivo(2); // true
numeroPositivo(-2); // false

// if aninhado
function numeroPositivo0(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if(ehNegativo){
    return 'Esse número é negativo!';
  }else if (!ehNegativo && maiorQueDez) {
    return 'Esse número é positivo e maior que 10!'
  }
  return 'Esse número é positivo!'
}

console.log(numeroPositivo0(20))

//Obs: Javascript não tem elseif ( escrito juntos). Sempre há espaçamento.



//Utilizando o switch / case
function getAnimal(id){
  switch(id) {
    case 1:
      return 'cão';
      case 2:
        return 'gato';
        case 3:
          return 'pássaro';
          default:
            return 'peixe';
  }
}

console.log(getAnimal(2)); //gato
//obs: o switch compara o tipo e o valor.


