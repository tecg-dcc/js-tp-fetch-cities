# ~~Asynchronous JavaScript + XML~~ - Fetch API

> A JS exercise use at HEPL for DCC.

* * *

**js-tp-fetch-cities** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a French-speaking school. From this point, the instruction will be in French. Sorry.

* * *



## Lectures

Avant de commencer, je vous encourage, très fortement, de lire la [documentation sur les promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises) , ensuite la  [documentation de fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) et enfin [cet article](https://wesbos.com/javascript/13-ajax-and-fetching-data/74-ajax-and-apis) de Wes Bos. 



## Fetch

L'[API Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API) fournit une interface JavaScript pour l'accès et la manipulation des parties du pipeline HTTP, comme les requêtes et les réponses. Cela fournit aussi une méthode globale [`fetch()`](https://developer.mozilla.org/fr/docs/Web/API/fetch) qui procure un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone.

Ce genre de fonctionnalité était auparavant réalisé avec [`XMLHttpRequest`](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest). Fetch fournit une meilleure alternative qui peut être utilisée facilement par d’autres technologies comme [`Service Workers` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). Fetch fournit aussi un endroit unique et logique pour la définition d'autres concepts liés à HTTP comme CORS et les extensions d'HTTP.

[Sources MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)



## Énoncé



1. Récupérer au format *json* [le tableau contenant 1000 villes et états américains](https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json). On vous demande de gérer deux types d'erreurs. Premièrement celles liées à l’utilisation de fetch ainsi que celles du protocole HTTP au travers de ses codes d’erreur. 

2. Écrivez une fonction qui retourne une copie du tableau des villes avec uniquement les entrées qui satisfont la recherche, qui peut être passée en paramètre.

3. Écrire une autre fonction qui produit, à partir du nouveau tableau, les items de liste en respectant la syntaxe suivante : 

   ```html
   <li>
           <span class="name"><span class="hl">new</span> York, <span class="hl">new</span> York</span>
           <span class="population">8,405,837</span>
   </li>
   ```

   Dans cet exemple, j'ai fait une recherche pour `York`. Il faut entourer le mot recherché par une `span.hl`.

4. À chaque fois qu'on entre une nouvelle lettre dans le champ de recherche, `#search` il faut filtrer les villes et/ou états qui satisfont la recherche. Bien sûr, la recherche peut se faire n'importe où dans le nom de la vile ou de l’état et elle n'est pas sensible à la casse.

5. Gérer la soumission du formulaire.



![Résultat](./readme.gif)



## Aide

Vous pouvez vous servir de [cette fonction](https://stackoverflow.com/a/2901298/5714898) pour améliorer la présentation du nombre d’habitants : 

```javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

L’idée étant de mieux séparer les milliers.

Mes vidéos explicatives se trouvent [ici](https://www.youtube.com/playlist?list=PLSiV84Gr8rVs2x5YOrJGBDLOWKc_Y3IZ5).



## Sources 

* [JavaScript30 by Wes Bos](https://javascript30.com)

