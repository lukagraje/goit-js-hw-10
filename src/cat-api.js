import axios from "axios";

axios.defaults.headers.common["x-api-key"] = 'live_4UXiNWVEu2YnzCthXThxZN4YgxeLDEc8dSfXnBpotrRMu0Nl1GrczRGfa8xuHOjv';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    return axios
        .get(`/breeds`)
        .then(({ data }) => data)
        .catch(error => {
            throw new Error();
        });
}
    
export function fetchCatByBreed(breedId) {
    return axios
        .get(`/images/search?breed_ids=${breedId}`)
        .then(({ data }) => data)       
        .catch(error => {
            throw new Error();
        });
}

