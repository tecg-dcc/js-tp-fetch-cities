import {settings} from "./settings";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const app = {
    init() {
        this.cities = null;

        this.fetchCities();
        this.citiesContainerElement = document.querySelector(settings.citiesContainerSelector);
        this.searchInputElement = document.getElementById(settings.searchInputID);

        this.searchInputElement.addEventListener('input', (evt) => {
            if (this.cities) {
                const userText = evt.currentTarget.value.toLowerCase();

                this.generateCitiesItems(this.cities.filter((city) => {
                    return city.city.toLowerCase().includes(userText);
                }));
            }

        });

    },
    fetchCities() {
        fetch(endpoint).then((response) => {
            if (response.ok && response.status === 200) {
                response.json().then((data) => {
                    this.cities = data;
                });
            } else {
                // Aie ici ce n’est pas bon...
                console.log(`response.status... ${response.status}`)
            }

        }).catch((reason) => {
            console.log(reason)
        });
    },
    generateCitiesItems(cities) {
        this.citiesContainerElement.innerHTML = '';

        for (const city of cities) {
            this.citiesContainerElement.insertAdjacentHTML('beforeend', `<li>
           <span class="name">${city.city}</span>
           <span class="population">${city.population}</span>
   </li>`)
        }
    },

}


app.init();

