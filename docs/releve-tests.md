# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.
Calculs à la main (à refaire de tête avant la soutenance, puis comparer) :
•	Total : 3000 + 4500 + 2000 + 5000 + 1500 + 8000 + 4000 + 3500 + 2500 + 6000 = 40 000 FCFA ✔ (programme : 40000).
•	P1 (O01, O03, O06, O09) : 3000 + 2000 + 8000 + 2500 = 15 500 FCFA, 4 opérations ✔.
•	P2 (O02, O05, O08) : 4500 + 1500 + 3500 = 9 500 FCFA, 3 opérations ✔.
•	P3 (O04, O07, O10) : 5000 + 4000 + 6000 = 15 000 FCFA, 3 opérations ✔.
•	Minimum 1 500 (O05), maximum 8 000 (O06) ✔.

Tests automatiques : npm run test → 39 tests verts


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.


RELEVE DES TESTS

| Action                                        | Attendu                                           | Obtenu                                          | Testeur                      |
| ---                                           | ---                                               | ---                                             | ---                          |
| Ajouter O12 (004, 2026-11-05, p7, Gombo, semis, 2500) | « Opération 004 ajoutée. Le registre compte 12 opération(s). » ; encore là après redémarrage|Confirmé| VIEGNEKOU Koffi Bogar        |                              | Ajouter avec coût -500, vide, abc, 500 FCFA   |Le cout doit etre positif ou null                  |  Confirmé                                       | VIEGNEKOU Koffi Bogar        |
|  Ajouter avec O01 (doublon)                   |refusé : identifiant déjà utilisé                  |cet identifiant existe déjà                      | VIEGNEKOU Koffi Bogar        |
| Date 27/10/2026 ou 2026-02-30                 | refusée                                           |La date doit etre sur le format AAAA-MM-JJ        | VIEGNEKOU Koffi Bogar        |
| Opération fertilisation                       | refusée, liste des opérations affichée            |L'oppération n'est pas autorisé                  | VIEGNEKOU Koffi Bogar        |
|  Saisie avec six erreurs à la fois            |  six lignes d'erreur                              |Juste 03 n'ont pas été acceptées                 | VIEGNEKOU Koffi Bogar        |
| Rechercher O03 / O98                          | ligne O03 / « Opération O98 introuvable. »        |Choix inconnu retourner au menu                  | VIEGNEKOU Koffi Bogar        |
|  Rechercher parcelle P2 / culture aubergine   | 3 opérations / 3 opérations                       |04 opérations sur la parcelle P2                 | VIEGNEKOU Koffi Bogar        |
| Tri par coût, puis par date, puis lister      | tri correct ; la liste (choix 2) revient dans l'ordre d'origine|  Confirmé                          | VIEGNEKOU Koffi Bogar        |
| Synthèse (données de départ)                  | 40000 ; P1 4/15500 ; P2 3/9500 ; P3 3/15000 ; min 1500, max 8000  |   Confirmé                      | VIEGNEKOU Koffi Bogar        |
| Choix 9, Entrée sans rien taper               |  « Choix inconnu : … » puis le menu               |Confirmé                                         |VIEGNEKOU Koffi Bogar         |
| Registre vide ([]) : lister, synthèse         |« Aucune opération enregistrée. » ; total 0, « aucune donnée »|  Choix inconnu entrez un chiffre du menu|VIEGNEKOU Koffi Bogar      |
| Fichier de données absent                     | message « Impossible de lire … Le registre démarre vide. » |Choix inconnu : « fichier de données absent ». Tapez un chiffre du menu|VIEGNEKOU Koffi Bogar|
| Bonus : supprimer O03, O99 ; modifier coût, id, valeur invalide | messages imposés, fichier mis à jour |Opération 003 introuvable.|VIEGNEKOU Koffi Bogar|

