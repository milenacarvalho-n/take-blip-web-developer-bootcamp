const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async() => {
  try {
    const dados = await fetch(BASE_URL);
    const json = await dados.json();

    return json.webpurl;
  } catch(erro){
    console.log(erro.message);
  }
};

const loadImg = async () => {
  catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg(); //já inicializa com uma imagem