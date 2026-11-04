// Rechercher et trier les opérations.
// Fiche : fiches/4-rechercher-trier.md · Vérifier : npm run test:recherche

// Renvoie un NOUVEAU tableau avec les opérations de cette parcelle (éventuellement vide).
export function filtrerParParcelle(operations, parcelle) {
  const resultat = [];
  for (const operation of operations) {
    if (operation.parcelle === parcelle) {
      resultat.push(operation);
    }
  }
  return resultat;
}
// Renvoie une COPIE triée par coût croissant, avec un comparateur numérique.
// Deux opérations de même coût gardent leur ordre d'origine. Le tableau reçu ne doit pas changer d'ordre.
export function trierParCout(operations) {
  return [...operations].sort((a, b) => a.coutFCFA - b.coutFCFA);
}
