import {settings} from "./settings";
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const app = {
    init() {
        this.cities = null;
        this.fetchCities();
        this.searchInputElement = document.getElementById(settings.searchInputID);
        this.listContainerElement = document.querySelector(settings.listContainerSelector) as HTMLUListElement;

        this.searchInputElement.addEventListener('input', (evt) => {
            const text = evt.currentTarget.value;
            if (text === "") {
                this.clearItems();
            } else if (this.cities) {
                this.generateItems(this.cities.filter((obj) => {
                    return obj.city.toLowerCase().includes(text.toLowerCase())
                }));
            }
        });

    },
    clearItems() {
        this.listContainerElement.innerHTML = '';
    },
    fetchCities() {
        fetch(endpoint).then((response) => {
            if (response.ok && response.status === 200) {
                response.json().then((data) => {
                    this.cities = data;
                });
            } else {
                console.error(`Aie… ça n'a pas marché... que faire ?${response.status}`);
                // TODO
            }
        });
    },
    generateItems(cities) {
        this.clearItems();
        for (const city of cities) {
            this.listContainerElement.insertAdjacentHTML('beforeend', settings.listItemHTMl(city));

        }
    },
}

app.init();
