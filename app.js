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
// Choix 3 : rechercher par identifiant, parcelle ou culture.
async function rechercher(operations) {
  console.log('--- Rechercher ---');
  console.log('1. Par identifiant');
  console.log('2. Par parcelle');
  console.log('3. Les opérations d\'une culture');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    const id = await demander('Identifiant : ');
    if (id === null) return;
    const identifiant = id.toUpperCase();
    const operation = trouverParId(operations, identifiant);
    console.log(operation === undefined ? `Opération ${identifiant} introuvable.` : formaterOperation(operation));
  } else if (sousChoix === '2') {
    const saisie = await demander('Parcelle : ');
    if (saisie === null) return;
    const parcelle = saisie.toUpperCase();
    const trouvees = filtrerParParcelle(operations, parcelle);
    console.log(`${trouvees.length} opération(s) sur la parcelle ${parcelle} :`);
    console.log(listerOperations(trouvees));
  } else if (sousChoix === '3') {
    const saisie = await demander('Culture : ');
    if (saisie === null) return;
    const culture = saisie.toLowerCase();
    const trouvees = filtrerParCulture(operations, culture);
    console.log(`${trouvees.length} opération(s) pour la culture ${culture} :`);
    console.log(listerOperations(trouvees));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}
// Choix 4 : trier par coût ou par date (le registre lui-même ne change pas).
async function trier(operations) {
  console.log('--- Trier ---');
  console.log('1. Par coût croissant');
  console.log('2. Par date, de la plus ancienne à la plus récente');
  console.log('3. Par coût décroissant');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    console.log(listerOperations(trierParCout(operations)));
  } else if (sousChoix === '2') {
    console.log(listerOperations(trierParDate(operations)));
  } else if (sousChoix === '3') {
    console.log(listerOperations(trierParCoutDecroissant(operations)));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}

// Choix 5 : synthèse des dépenses enregistrées.
function synthese(operations) {
  console.log('--- Synthèse des dépenses enregistrées ---');
  console.log(`Nombre d'opérations : ${operations.length}`);
  console.log(`Total des coûts : ${totalCouts(operations)} FCFA`);
  console.log('Par parcelle :');
  for (const [parcelle, valeurs] of Object.entries(syntheseParParcelle(operations))) {
    console.log(`  ${parcelle} : ${valeurs.nombre} opération(s), ${valeurs.total} FCFA`);
  }
  const extremes = coutMinMax(operations);
  if (extremes === null) {
    console.log('Coût minimum et maximum : aucune donnée');
  } else {
    console.log(`Coût minimum : ${extremes.min} FCFA · Coût maximum : ${extremes.max} FCFA`);
  }
  const plusCouteuse = parcelleLaPlusCouteuse(operations);
  if (plusCouteuse !== null) {
    console.log(`Parcelle la plus coûteuse : ${plusCouteuse.parcelle} (${plusCouteuse.total} FCFA)`);
  }
  console.log('Rappel : ce sont des dépenses. Sans les revenus, elles ne mesurent pas la rentabilité.');
}
// Choix 6 (bonus) : supprimer une opération et enregistrer.
async function supprimer(operations) {
  const saisie = await demander('Identifiant : ');
  if (saisie === null) return;
  const id = saisie.toUpperCase();
  const supprimee = supprimerOperation(operations, id);
  if (supprimee === undefined) {
    console.log(`Opération ${id} introuvable.`);
    return;
  }
  await enregistrerJson(FICHIER_DONNEES, operations);
  console.log(`Opération ${id} supprimée. Le registre compte ${operations.length} opération(s).`);
}


// Choix 7 (bonus) : modifier un champ d'une opération et enregistrer.
async function modifier(operations) {
  const saisieId = await demander('Identifiant : ');
  if (saisieId === null) return;
  const id = saisieId.toUpperCase();
  const champ = await demander('Champ à modifier (date, parcelle, culture, operation, coutFCFA) : ');
  if (champ === null) return;
  const valeur = await demander('Nouvelle valeur : ');
  if (valeur === null) return;
}

async function main() {
  ouvrirSaisie();
  afficherAccueil();
  const operations = await chargerRegistre();

  let continuer = true;
  while (continuer) {
    afficherMenu();
    const choix = await demander('Votre choix : ');
    if (choix === null) {
  console.log('Au revoir !');
  break;
    }
    try {
      switch (choix) {
        case '1':
          await ajouter(operations);
          break;
        case '2':
          lister(operations);
          break;
          case '0':
          console.log('Au revoir !');
          continuer = false;
          break;
        default:
          console.log(`Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`);
      }
    } catch (erreur) {
      if (erreur.message.startsWith('TODO')) {
        console.log(`À compléter : ${erreur.message}`);
      } else {
        console.log(`Erreur inattendue : ${erreur.message}`);
      }
    }
  }

  fermerSaisie();
}

main();

