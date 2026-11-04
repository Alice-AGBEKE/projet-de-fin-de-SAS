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
