// main.js

import {fetchBreeds, fetchCatByBreed} from './cat-api';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const notifyWarning = {
  width: '500px',
  fontSize: '25px',
  position: 'center-top',
  opacity: 0.7,
  timeout: 1500,
};

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function idCatBreedSelect(breeds) {
  const optionsHTML = breeds
    .map((breed) => `
      <option value='${breed.id}'>${breed.name}</option>
    `)
    .join('');
  breedSelect.innerHTML = optionsHTML;
  new SlimSelect({
    select: breedSelect
  });
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}

function hideError() {
  error.style.display = 'none';
  
}

function showCatInfo(cat) {
  if (cat[0].breeds.length > 0) {
    const infoHTML = `
      <img src="${cat[0].url}" class="cat-image" width="700" height="400" />
      <p class="cat-text">${cat[0].breeds[0].name}</p>
      <p class='cat-info-text'>${cat[0].breeds[0].description}</p>
      <p class='cat-info-text'>${cat[0].breeds[0].temperament}</p>
    `;
    catInfo.innerHTML = infoHTML;
  } else {
    showError();
    catInfo.innerHTML = '';
  }
}

function onBreedSelectChange() {
  const breedId = breedSelect.value;
  showLoader();
  hideError();

  fetchCatByBreed(breedId)
    .then((cat) => {
      console.log(cat)
      hideLoader();
      showCatInfo(cat);
      
    })
    .catch((error) => {
      console.log(error)
      hideLoader();
      showError();
    });
}

breedSelect.addEventListener('change', onBreedSelectChange);

showLoader();
hideError();

fetchBreeds()
  .then((breeds) => {
    hideLoader();
    idCatBreedSelect(breeds);
  })
  .catch((error) => {
    console.log(error)
    hideLoader();
    showError();
  });
