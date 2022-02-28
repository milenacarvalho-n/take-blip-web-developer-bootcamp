function compareNumbers(a, b) {
  if (!a || !b) return "Preencha os números!"
  const firstSentence = creatingFirstSentence(a, b);
  const secondSentence = creatingSecondSentence(a, b);

  return `${firstSentence} ${secondSentence}`;
}

function creatingFirstSentence(a, b) {
  let equalNumbers = "";
  if (a !== b) {
    equalNumbers = "não";
  }
  return `Os números ${a} e ${b} ${equalNumbers} são iguais.`;
}

function creatingSecondSentence(a, b) {
  const soma = a + b;

  let result10 = "menor";
  let result20 = "menor";

  const compare10 = soma > 10;
  const compare20 = soma > 20;

  if (compare10) {
    result10 = "maior";
  }
  if (compare20) {
    result20 = "maior";
  }
  return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`;
}

console.log(compareNumbers(2, 3));
