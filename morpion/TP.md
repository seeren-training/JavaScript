# 🎓  TP - JavaScript

**Vous allez être évalués sur votre capacité à atteindre les objectifs fonctionnels 📝 suivants.**

Vous pouvez utiliser les `variables`, `conditionnelles`, `boucles`, `fonctions`, `évènements`, `intervals`, `création`, `modification`, `insertion` d'éléments, dans une structure de projet directement interprété en natif.

### 🐥 Précédement

Vous avez travaillé sur le dynamisme d'un affichage présentant un morpion. Le timer, le compteur de points et la grille sont partiellement fonctionnels.

### 🦆 Maintenant

Vous allez procéder à de la logique métier sur ce jeu ainsi que fixer les points non atteints.

___

## 👨🏻‍💻 Prérequis

> Avant de s'attaquer au CPU je vous invite à fixer les points non terminées s'ils demeurent.

### Timer

* 📝 Le timer doit formater la durée du jeu au format `mm:ss`, exemple 03:32.
* 📝 Quand la partie est terminée suite à une victoire, le timer doit reprendre à `00:00`

### Score

* 📝 Quand la partie est terminée suite à une victoire, le score `doit être incrémenté`

### Grille

* 📝 Quand la partie est terminée suite à une victoire, les cases ne doivent `plus être cliquables`.
* 📝 Quand la partie est redémarée, la grille doit `être nettoyée`.

___

## 👨🏻‍💻 CPU

> Actuellement vous avez la logique permettant de calculer une victoire et interagissez avec la grille du morpion, il est temps de proposer un adversaire au joueur.


### Stratégie

* Il joue une case au hasard
* Il tente d'alligner 3 cases
* Il tente de bloquer le joueur
* Il tente de bloquer le joueur et d'aligner 3 cases

Il vous faut proposer ou choisir un scénario pour la logique de jeu du CPU.

* 📝 `Déterminez un scénario` de comportement pour le CPU
* 📝 Le CPU joue `2 secondes` après le joueur
* 📝 Le CPU joue avec une croix en ajoutant la classe "`cross`" sur une case
* 📝 La `victoire du CPU` incrémente le score du CPU

___

## 🕕 Gérez votre temps