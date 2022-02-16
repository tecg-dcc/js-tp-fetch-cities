if (window.fetch) {
    const App = {
        init() {
            this.searchInput = document.getElementById('search');
            this.searchForm = document.querySelector('.search-form');
            this.suggestions = document.querySelector('.suggestions');
            this.endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
            this.cities = [];
            fetch(this.endpoint).then(response => {
                if (response.status === 200) {
                    response.json().then(jsonResponse => {
                            this.cities.push(...jsonResponse);
                        }
                    );
                } else {
                    console.error("Nous ne parvenons pas à récupérer la ressource...");
                }
            }).catch(error => {
                console.error("Un problème de réseau est survenu. Vérifier votre connexion internet.");
                console.error(error);
            });
            this.searchInput.addEventListener("keyup", (event) => {
                console.log(event.currentTarget.value);
            });
            this.searchForm.addEventListener("submit", event => {
                event.preventDefault();
            })
            this.searchInput.addEventListener("keyup", (event) => {
                this.displayMatches(event.currentTarget.value);
            });

        },
        findMatches(wordToMatch) {
            return this.cities.filter(item => {
                const regex = new RegExp(wordToMatch, 'gi');
                return item.city.match(regex) || item.state.match(regex);
            });
        },
        numberWithSpace(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },

        displayMatches(wordToMatch) {
            this.suggestions.innerHTML = this.findMatches(wordToMatch).map(place => {
                const regex = new RegExp(wordToMatch, 'gi');
                const cName = place.city.replace(regex, `<span class="hl">${wordToMatch}</span>`);
                const sName = place.state.replace(regex, `<span class="hl">${wordToMatch}</span>`);
                return `<li>
        <span class="name">${cName}, ${sName}</span>
        <span class="population">${this.numberWithSpace(place.population)}</span>
        </li>`;
            }).join('');
        },


    };
    App.init();
}

