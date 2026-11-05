# Registre des opérations maraîchères

> Projet individuel du SAS DFS, brief 1 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Notre application est destinée aux producteurs de maraichers qui souhaitent suivre les activités et les depenses de leurs parcelles.
Elle leur permet d'enregistrer les activités réalisés telles que le semis, le repiquage, l'arrosage, le désherbage et la recolte.
Pour chaque activité, le producteur indique la parcelle, le type de travail, la date et le cout de production.
Le programme affiche les opérations enregistrées, leur nombre et le total des depenses. Il permet aussi de rechercher et de tirer les opérations.
Cependant, il ne prend pas en compte les revenus des ventes et ne calcule donc pas la la production la rentabilité et le revenu et la superficie.
Nous construrons notre application en Java Scrip sur Visual Studio code.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-1-registre-maraicher.git
cd brief-1-registre-maraicher
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [X] Données lues et enregistrées dans `donnees/operations.json`
- [X] Ajouter une opération, saisies invalides refusées sans arrêter le programme
- [X] Lister les opérations, message si le registre est vide
- [X] Rechercher par identifiant ou par parcelle ; filtrer par culture
- [X] Trier par coût ou par date
- [X] Synthèse : total, nombre et total par parcelle, coût minimum et maximum
- [X] Bonus : supprimer et modifier une opération (choix 6 et 7)
- [X] Bonus : tri par coût décroissant, parcelle la plus coûteuse

## Données

Fichier donnees/operations.JSON, 10 operations fictives au depart. Champs : id, date, parcelle, culture, operation, coutFCFA (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)),
Les coutFCFA cest une depense, pas un revenu. Les donnees sont fictives et servent uniquement à l'excercice; elles ne decrivent aucune exploitation reelle.

## Limites
- Le registre enregistre des depenses, pas les revenus: il ne mesure donc pas la rentabilité de l'exploitation.
- L'utilisation en terminal seulement, pas de representation graphique.
- Pas de synchronisation reseau: le fichier JSON est local.
- Le registre ne controle pas la coherence parcelle/culture: on peut enregistrer une culture aubergine sur la parcelle p1 alors que p1 est historiquement en gombo.
*Au moins trois. Par exemple : le registre enregistre des dépenses, pas les revenus, il ne mesure donc pas la rentabilité.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Alice AGBEKE, compte GitHub : Alice-AGBEKE. Entraide : VIEGNEKOU KOFFI BOGAR, sur quoi: tester l'application
