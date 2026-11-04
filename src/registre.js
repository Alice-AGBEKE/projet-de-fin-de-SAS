// Ajouter et lister les opérations.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { estDateValide, versNombre } from './outils.js';

// Liste fermée des opérations culturales acceptées, fournie par le coach agronomie.
export const OPERATIONS = ['semis', 'arrosage', 'désherbage', 'repiquage', 'récolte'];

// Renvoie une ligne de texte qui décrit l'opération.
// Exemple : 'O03 | 2026-10-21 | P1 | tomate | arrosage | 2000 FCFA'
export function formaterOperation(operation) {
  return `${operation.id} | ${operation.date} | ${operation.parcelle} | ${operation.culture} | ${operation.operation} | ${operation.coutFCFA} FCFA`;
}
