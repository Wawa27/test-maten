# Assignation de Game Masters aux Rooms

Ce projet présente trois solutions pour affecter des Game Masters (GM) aux rooms en fonction de leurs formations, en respectant les contraintes suivantes :

Chaque GM ne peut être assigné qu'à une seule room.
Un GM ne peut être assigné qu’à une room pour laquelle il est formé.

## Solutions
1. Solution Naïve
   Sélection aléatoire des Game Masters pour chaque room.

2. Solution Itérative
   Cette approche réitère l'affection X nombre de fois tant qu'un résultat n'est pas trouvé.

3. Solution Optimisée
   Cette approche commence par assigner en priorité les GMs formés pour une seule room.
