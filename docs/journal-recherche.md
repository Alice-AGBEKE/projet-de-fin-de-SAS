# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

Ce que je cherchais	ou	Ce que j’ai trouvé	Utilisé dans
Comprendre les asynchrones et les promesses	OpenClassroom	Async et await permettent d'attendre une promesse comme (readFile) sans bloquer le programme	chargerJSON & enregistrerJSON
Comprendre le format JSON	MDN (JSON.stringify), chat gpt	`JSON.parse()` transforme un texte en objet,  `JSON.stringify(…, null, 2)`, fait l'inverse avec une identation de 2 espaces	enregistrerJson
Trier avec un comparateur numérique	MDN (Array.prototype.sort), chat gpt	Comparateur, sort trie en texte ([8000, 15000, 2000] → [15000, 2000, 8000]) ; a - b donne l'ordre croissant ; le tri est stable	trierParCout, trierParCoutDecroissant
Ne pas modifier le tableau d'origine en triant	MDN (opérateur de décomposition ...), chat gpt	[...operations] fait une copie ; sort modifie le tableau sur lequel on l'appelle	tris
Comparer deux dates AAAA-MM-JJ	Chat gpt	l'ordre alphabétique est l'ordre du calendrier ; on compare avec < et >, pas avec -	trierParDate
Boucle du menu, choix multiple, erreurs	cours, MDN (while, switch, try/catch),	while répète tant que la condition est vraie ; switch choisit selon la valeur ; catch empêche le programme de s'arrêter	App.js
Parcourir clés et valeurs d'un objet	MDN (Object.entries), chat gpt	Object.entries(obj) donne des paires [clé, valeur] ; obj[cle] ≠ obj.cle	choix 5
Retirer un élément d'un tableau à une position	MDN (findIndex, splice)	findIndex donne la position (ou -1) ; splice(position, 1) retire et renvoie l'élément	supprimerOperation
Ce que je cherchais	ou	Ce que j’ai trouvé	Utilisé dans
Comprendre les asynchrones et les promesses	OpenClassroom	Async et await permettent d'attendre une promesse comme (readFile) sans bloquer le programme	chargerJSON & enregistrerJSON
Comprendre le format JSON	MDN (JSON.stringify), chat gpt	`JSON.parse()` transforme un texte en objet,  `JSON.stringify(…, null, 2)`, fait l'inverse avec une identation de 2 espaces	enregistrerJson
Trier avec un comparateur numérique	MDN (Array.prototype.sort), chat gpt	Comparateur, sort trie en texte ([8000, 15000, 2000] → [15000, 2000, 8000]) ; a - b donne l'ordre croissant ; le tri est stable	trierParCout, trierParCoutDecroissant
Ne pas modifier le tableau d'origine en triant	MDN (opérateur de décomposition ...), chat gpt	[...operations] fait une copie ; sort modifie le tableau sur lequel on l'appelle	tris
Comparer deux dates AAAA-MM-JJ	Chat gpt	l'ordre alphabétique est l'ordre du calendrier ; on compare avec < et >, pas avec -	trierParDate
Boucle du menu, choix multiple, erreurs	cours, MDN (while, switch, try/catch),	while répète tant que la condition est vraie ; switch choisit selon la valeur ; catch empêche le programme de s'arrêter	App.js
Parcourir clés et valeurs d'un objet	MDN (Object.entries), chat gpt	Object.entries(obj) donne des paires [clé, valeur] ; obj[cle] ≠ obj.cle	choix 5
Retirer un élément d'un tableau à une position	MDN (findIndex, splice)	findIndex donne la position (ou -1) ; splice(position, 1) retire et renvoie l'élément	supprimerOperation
