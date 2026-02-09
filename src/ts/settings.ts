export const settings = {
    suggestionListSelector: '.suggestions',
    inputElementID: 'search',
    liHTML(city) {
        return `<li>
        <span class="name">${city.city} - ${city.state}</span>
        <span class="population">${city.population}</span></li>`;
    }
}