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
// Renvoie un texte avec une opération par ligne (lignes séparées par '\n'),
// ou 'Aucune opération enregistrée.' si la liste est vide.
export function listerOperations(operations) {
  if (operations.length === 0) {
    return "Aucune opération enregistrée.";
  } else {
    return operations.map(formaterOperation).join('\n');
  }
}

// Renvoie l'opération qui a cet identifiant, ou undefined si elle n'existe pas.
export function trouverParId(operations, id) {
  for (const operation of operations){
    if (operation.id === id){
      return operation;
    }
  }
  return undefined;
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'O11', date: '2026-10-27', parcelle: 'P1', culture: 'tomate', operation: 'récolte', coutFCFA: '2500' }
// Renvoie un tableau de messages d'erreur, un message par règle non respectée ;
// un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · date réelle au format AAAA-MM-JJ · parcelle et culture
// obligatoires (n'importe quel texte non vide) · operation présente dans OPERATIONS
// · coutFCFA nombre positif ou nul.
export function verifierOperation(saisie, operations) {
  const erreurs = [];

  // 1. Identifiant obligatoire
  if (!saisie.id || saisie.id.trim() === '') {
    erreurs.push("L'identifiant est obligatoire.");
  }

  // 2. Identifiant unique
  if (
    saisie.id &&
    operations.some(op => op.id === saisie.id)
  ) {
    erreurs.push("Cet identifiant existe déjà.");
  }

  // 3. Date réelle au format AAAA-MM-JJ
  const date = saisie.date || '';
  const correspondance = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);

  if (correspondance) {
    const annee = Number(correspondance[1]);
    const mois = Number(correspondance[2]);
    const jour = Number(correspondance[3]);

    const dateVerifiee = new Date(Date.UTC(annee, mois - 1, jour));

    if (
      dateVerifiee.getUTCFullYear() !== annee ||
      dateVerifiee.getUTCMonth() !== mois - 1 ||
      dateVerifiee.getUTCDate() !== jour
    ) {
      erreurs.push("La date doit être réelle et au format AAAA-MM-JJ.");
    }
  } else {
    erreurs.push("La date doit être réelle et au format AAAA-MM-JJ.");
  }

  // 4. Parcelle obligatoire
  if (!saisie.parcelle || saisie.parcelle.trim() === '') {
    erreurs.push("La parcelle est obligatoire.");
  }

  // 5. Culture obligatoire
  if (!saisie.culture || saisie.culture.trim() === '') {
    erreurs.push("La culture est obligatoire.");
  }

  // 6. Opération autorisée
  if (!OPERATIONS.includes(saisie.operation)) {
    erreurs.push("L'opération n'est pas autorisée.");
  }

  // 7. Coût positif ou nul
  const cout = Number(saisie.coutFCFA);

  if (
    saisie.coutFCFA.trim() === '' ||
    !Number.isFinite(cout) ||
    cout < 0
  ) {
    erreurs.push("Le coût doit être un nombre positif ou nul.");
  }

  return erreurs;
}
// Fabrique l'opération à enregistrer à partir d'une saisie valide.
export function creerOperation(saisie) {
  return {
    id: saisie.id,
    date: saisie.date,
    parcelle: saisie.parcelle,
    culture: saisie.culture,
    operation: saisie.operation,
    coutFCFA: Number(saisie.coutFCFA)
  };
}


// Ajoute la saisie au registre si elle est valide (verifierOperation, puis creerOperation).
// Renvoie les erreurs : [] si l'opération a été ajoutée ; sinon les messages, et rien n'est ajouté.
export function ajouterOperation(operations, saisie) {
  // 1. Vérifier la saisie
  const erreurs = verifierOperation(saisie, operations);

  // 2. Si la saisie contient des erreurs, ne rien ajouter
  if (erreurs.length > 0) {
    return erreurs;
  }

  // 3. Transformer la saisie en opération
  const nouvelleOperation = creerOperation(saisie);

  // 4. Ajouter l'opération au registre
  operations.push(nouvelleOperation);

  // 5. Signaler que l'ajout a réussi
  return [];
}


