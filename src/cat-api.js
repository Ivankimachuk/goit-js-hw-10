
export const API_KEY = "live_M6UV2vFSAMJ9QGBGWKswSAzMFpr3cDC8Ddf5qYHPsCiUUHK1qSZiljL0xy19uYhC";

export function fetchBreeds() {
  const url = "https://api.thecatapi.com/v1/breeds";
  return fetch(url, {
    headers: {
      "x-api-key": API_KEY
    }
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return fetch(url, {
    headers: {
      "x-api-key": API_KEY
    }
  })
    .then((response) => response.json())
    .then((data) => data[0])
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

