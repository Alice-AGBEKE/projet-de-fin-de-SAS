// Synthèse des dépenses enregistrées.
// Fiche : fiches/5-synthese.md · Vérifier : npm run test:synthese

// Renvoie la somme des coûts, en FCFA. Liste vide : 0.
export function totalCouts(operations) {
  let total = 0;
  for (const operation of operations) {
    total += operation.coutFCFA;
  }
  return total;
}
