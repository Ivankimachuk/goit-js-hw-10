import { fetchBreeds, fetchCatByBreed } from './cat-api';



const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function populateBreedSelect(breeds) {
  breeds.forEach((breed) => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
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
}

function hideError() {
  error.style.display = 'none';
}

function showCatInfo(cat) {
    if (cat.length > 0) {
      const image = document.createElement('img');
      image.src = cat[0].url;
  
      const name = document.createElement('p');
      name.textContent = cat[0].breeds[0].name;
  
      const description = document.createElement('p');
      description.textContent = cat[0].breeds[0].description;
  
      const temperament = document.createElement('p');
      temperament.textContent = cat[0].breeds[0].temperament;
  
      catInfo.innerHTML = '';
      catInfo.appendChild(image);
      catInfo.appendChild(name);
      catInfo.appendChild(description);
      catInfo.appendChild(temperament);
    } else {
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
      showCatInfo(cat);
    })
    .catch((error) => {
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
    populateBreedSelect(breeds);
  })
  .catch((error) => {
    hideLoader();
    showError();
  });

