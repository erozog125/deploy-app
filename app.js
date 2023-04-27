const URL = "https://dog.ceo/api/breeds/image/random";

const btnGetData = document.getElementById('btn-get-dogs');
const imgDog = document.getElementById('imgDog');

const createCard = ( dog ) => {
    imgDog.src = dog;
}

const getDogs = async () => {
  const response = await fetch(URL);
  const data = await response.json();  
  createCard(data.message);
}

btnGetData.addEventListener('click', getDogs );

