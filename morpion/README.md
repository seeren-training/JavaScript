# Morpion Challenge

Les intégrateur ont bien travaillé sur l'affichage d'un jeu de morpion mais leur compétence s'arrête là: ils emettent le souhaite suivant pour l'interface:

* Entant que `timer` je peux être started, paused ou resumed afin qu'un joueur et un CPU s'affrontent.

* Entant que `scorer` je peux comptabiliser les victoires du joueur et CPU afin que les résultats soient clairs.

* Entant que `grille` le joueur et CPU peuvent choisir une case afin de remplire une ligne et remporter la victoire.

* Entant que `grille` je posède un CPU qui souhaite gagner afin de challenger le joueur.

---

## Info techniques

* En ajoutant la classe `circle` sur un élément possédant la classe `case` il aura un background avec un cercle bleu.

* En ajoutant la classe `cross` sur un élément possédant la classe `case` il aura un background avec une croix rouge.

* En ajoutant la classe `d-none` sur un élément il ne sera plus affiché.

Les identifiants suivants sont disponibles:

* timerTime
* timerStart
* timerPause
* timerResume
* scorePlayer
* scoreCPU
* case1
* case2
* case3
* case4
* case5
* case6
* case7
* case8
* case9

___

## Objectif

Découvrons les bases du langage JavaScript et utilisons le paradigme fonctionnel pour résoudre ce problème.