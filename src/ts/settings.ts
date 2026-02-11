function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const settings = {
    searchInputID: 'search',
    listContainerSelector: '.suggestions',
    listItemHTMl(city) {
        return `<li>
           <span class="name">${city.city}</span>
           <span class="population">${numberWithCommas(city.population)}</span>
           </li>`;
    }
}