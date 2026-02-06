const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

try {
    const request = await fetch(endpoint);
    if (request.status === 200) {
        const data = await request.json();
        for (const city of data) {
            document.body.insertAdjacentHTML('beforeend', `<div>${city.city} - ${city.population}</div>`);
        }
    }
} catch (e) {
    console.log(e.message);
}

fetch(endpoint).then((request) => {
    if (request.status === 200) {
        request.json().then((data) => {
            for (const city of data) {
                document.body.insertAdjacentHTML('beforeend', `<div>${city.city} - ${city.population}</div>`);
            }
        });
    }
}).catch((e) => {
    console.log(e.message);
});





