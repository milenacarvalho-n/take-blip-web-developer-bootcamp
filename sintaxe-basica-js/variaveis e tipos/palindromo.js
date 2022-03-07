function verificaPalindromo(string) {
  // abaixo verifica se é uma string e o return faz com que saia da função se for diferente de true
  if (!string) return;

 return string.split("").reverse().join("") === string;
}
// console.log(verificaPalindromo("abba"));


// o split (vazio) "" vai separar as letras e retorna um array
// o reverse vai inverter todos os caracteres
// o join vai unir todos os caracteres


function verificaPalindromo2 (string) {
  if (!string) return "string inexistente";

  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]){
      return false;
    }
    return true;
  }
}

console.log(verificaPalindromo2("abba"));

// string.length - 1 - i está apenas checando indíce. Para verificar o caractere: string[string.length - 1 - i]