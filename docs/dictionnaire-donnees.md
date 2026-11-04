# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.


| Champ   | Signification                      |Type   | Règle de validation            | Unité | Exemple  |
| ---     | ---                                | ---   |             ---                | ---   | ---      |
| `id`    | Identifiant unique                 | texte | non vide absent des données    | ---   | O01      |
| Date    |Date de réalisation de l'opération  |texte  |date valide au format AAAA-MM-JJ| ---   |2026-10-20|
|parcelle |Identifiant de la parcelle concernée|texte  |non vide                        | ---   |P1        |
|culture  |                                    |texte  |valeur autorisée                | ---   | tomate   |
|operation|                                    |texte  |valeur autorisée                | ---   |semis     |
|coutFCFA |                                    |nombre |nombre positif ou nul           |FCFA   | 3000     |


**Listes de valeurs autorisées** : Culture: Tomate, Gombo, Aubergine.

**Sources** : SUJET.MD, operation.JSON.
