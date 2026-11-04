# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.



| Champ   | Signification                      |Type   | Règle de validation                   | Unité       | Exemple  |
| ---     | ---                                | ---   |             ---                       | Pas d'unité | ---      |
| `id`    | Identifiant unique                 | texte | non vide absent des données           | Pas d'unité | O01      |
| Date    |Date de réalisation de l'opération  |texte  |date valide au format AAAA-MM-JJ       | Pas d'unité |2026-10-20|
|parcelle |Identifiant de la parcelle concernée|texte  |non vide                               | Pas d'unité |P1        |
|culture  | Culture suivi sur la parcelle      |texte  |valeur autorisée                       |Pas d'unité  | tomate   |
|operation| Nature du geste technique          |texte  |Present dant la liste fermé operation  |Pas d'unité  |semis     |
|coutFCFA |Depense enregistrée pour l'operation|nombre |nombre positif ou nul                  |FCFA         | 3000     |


**Listes de valeurs autorisées** : Culture: Tomate, Gombo, Aubergine.
- `Operation:` `semis`, `repiquage`, ` arrosage`, `desherbage`, ` recolte` liste des operations `src/registre.js`
- coutFCFA: un nombre positif ou nul en FCFA, cest une depense pas un revenu, on ne peut pas calculer de rentabilité.
- id : Format O suivi de deux chiffres, unique dans tout le registre.
**Sources** : `SUJET.MD`, `operation.JSON`
