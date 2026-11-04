// Registre des opérations maraîchères — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { OPERATIONS, ajouterOperation, formaterOperation, listerOperations, trouverParId } from './src/registre.js';
import { filtrerParCulture, filtrerParParcelle, trierParCout, trierParDate } from './src/recherche.js';
import { coutMinMax, syntheseParParcelle, totalCouts } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/operations.json';

function afficherAccueil() {
  console.log('==================================================');
  console.log('   REGISTRE DES OPÉRATIONS MARAÎCHÈRES');
  console.log('   Exploitation maraîchère pédagogique');
  console.log('==================================================');
}
function afficherMenu() {
  console.log('');
  console.log('--------------------- MENU ---------------------');
  console.log('1. Ajouter une opération');
  console.log('2. Lister les opérations');
  console.log('3. Rechercher (identifiant, parcelle, culture)');
  console.log('4. Trier (coût, date)');
  console.log('5. Synthèse des dépenses');
  console.log('0. Quitter');
}
// Charge les données ; en cas d'échec, le registre démarre vide.
async function chargerRegistre() {
  try {
    const operations = await chargerJson(FICHIER_DONNEES);
    console.log(`${operations.length} opération(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
    return operations;
  } catch (erreur) {
    console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. Le registre démarre vide.`);
    return [];
  }
}


// Choix 1 : poser les six questions, vérifier, ajouter, enregistrer.
async function ajouter(operations) {
  console.log('--- Ajouter une opération ---');
  const id = await demander('Identifiant (ex. O11) : ');
  if (id === null) return;
  const date = await demander('Date (AAAA-MM-JJ) : ');
  if (date === null) return;
  const parcelle = await demander('Parcelle (ex. P1) : ');
  if (parcelle === null) return;
  const culture = await demander('Culture (ex. tomate) : ');
  if (culture === null) return;
  const operation = await demander(`Opération (${OPERATIONS.join(', ')}) : `);
  if (operation === null) return;
  const cout = await demander('Coût en FCFA : ');
  if (cout === null) return;

  const saisie = {
    id: id.toUpperCase(),
    date,
    parcelle: parcelle.toUpperCase(),
    culture: culture.toLowerCase(),
    operation: operation.toLowerCase(),
    coutFCFA: cout,
  };

  const erreurs = ajouterOperation(operations, saisie);
  if (erreurs.length === 0) {
    await enregistrerJson(FICHIER_DONNEES, operations);
    console.log(`Opération ${saisie.id} ajoutée. Le registre compte ${operations.length} opération(s).`);
  } else {
    console.log('Opération refusée :');
    for (const erreur of erreurs) {
      console.log(`  - ${erreur}`);
    }
    console.log(`Le registre compte toujours ${operations.length} opération(s).`);
  }
}

// Choix 2 : afficher toutes les opérations.
function lister(operations) {
  console.log(`--- Liste des opérations (${operations.length}) ---`);
  console.log(listerOperations(operations));
}

async function main() {
  ouvrirSaisie();
  afficherAccueil();
  const operations = await chargerRegistre();
}