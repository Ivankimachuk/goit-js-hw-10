import {fetchBreeds, fetchCatByBreed} from './cat-api';
import SlimSelect from 'slim-select'

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

new SlimSelect({
  select: breedSelect
})

function idCatBreedSelect(breeds) {
  const optionsHTML = breeds
  .map((bread) => ` <select id="single">
                      <option value='${bread.id}'>${bread.name}</option>
                    // </<select>` ) 
  .join('');
  breedSelect.innerHTML = optionsHTML;
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}
function hideError() {
  error.style.display = 'none';
}

function showCatInfo(cat) {
  if(cat.breeds.length > 0) {
    const infoHTML = `
          <img  src="${cat.url}" class="cat-image" width="700" height="400" />
          <p class="cat-text">${cat.breeds[0].name}</p>
          <p class='cat-info-text'>${cat.breeds[0].description}</p>
          <p class='cat-info-text'>${cat.breeds[0].temperament}</p>
    `;
    catInfo.innerHTML = infoHTML;
  }else {
    showError();
  }
}

function onBreedSelectChange() {
  const breedId = breedSelect.value;
  showLoader();
  hideError();

  fetchCatByBreed(breedId)
  .then((cat) => {
    hideLoader();
    showCatInfo(cat)
  })
  .catch((error) => {
    hideLoader();
    showError();
  });
}

breedSelect.addEventListener('change' , onBreedSelectChange);

showLoader();
hideError();

fetchBreeds()
.then((breeds) => {
  hideLoader();
  idCatBreedSelect(breeds) 
})
.catch((error) => {
  hideLoader();
  showError();
})