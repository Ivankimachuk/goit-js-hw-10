const API_KEY = 'live_M6UV2vFSAMJ9QGBGWKswSAzMFpr3cDC8Ddf5qYHPsCiUUHK1qSZiljL0xy19uYhC';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url, {
    headers: {
      "x-api-key": API_KEY
    }
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json();
  })
}






export function fetchCatByBreed(breedId) {
  const urlId = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return fetch(urlId, {
    headers: {
      "x-api-key": API_KEY
    }
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json();
  })
  
}

