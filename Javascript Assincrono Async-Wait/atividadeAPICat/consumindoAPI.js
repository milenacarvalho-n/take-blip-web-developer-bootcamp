//outra forma de resolver a atividade CAT API.
const BASE_URL = 'https://thatcopy.pw/catapi/rest';
const catBtn = document.getElementById('change-cat');

const getCats = async() => {
  const dados = await fetch(BASE_URL)
  .then((res) => res.json())
  .catch((erro) => console.log(erro));

  return dados.webpurl;
};

const loadImg = async () => {
  const catImg = document.getElementById('cat');
  catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);
loadImg(); 



