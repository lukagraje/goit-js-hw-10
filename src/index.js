import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';


const breeds = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

error.style.display = "none";

fetchBreeds()
    .then(data => {
        const option = data.map(breed => `<option value="${breed.id}">"${breed.name}"</option>`
        )
        breeds.innerHTML = option;
        breeds.style.display = "block";
        loader.style.display = "none";
    })    
    .catch(error => Notiflix.Notify.failure("Error loading breeds"));

breeds.addEventListener('change', event => {
    const breedId = event.target.value;
    catInfo.style.display = "none";
    loader.style.display = "block";
    fetchCatByBreed(breedId)
        .then(cat => {
            catInfo.innerHTML = `<div class="wrapper">
            <div>
                <img width="300px" src="${cat[0].url}" />
            </div>
                <div>
                    <h2 class="name">Name: ${cat[0].breeds[0].name}</h2>
                    <p class="cat-info"><span class="span">Description:</span><br> ${cat[0].breeds[0].description}</p>
                    <p class="cat-info"><span class="span">Temperament:</span><br> ${cat[0].breeds[0].temperament}</p>
                </div>
            </div>`
            catInfo.style.display = "flex";
            loader.style.display = "none";        
        })
        .catch(error => Notiflix.Notify.failure("Error loading cat info"));
})

