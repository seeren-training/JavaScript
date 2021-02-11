# Évènements

*  🔖 **Définition**
*  🔖 **Syntaxe**
*  🔖 **Event**

Les évènements sont une des deux étapes manquantes pour pouvoir modifier pertinemment un document. La partie précédente a détaillé le DOM et la modification de ses nœuds, les évènements vont nous permettre d'effectuer ces modifications suite à un évènement, une action de l'utilisateur ou du navigateur.

___

## 📑 Définition

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/event.png)

> Un évènement est toujours déclenché, il survient suite à une action souris ou clavier de l'utilisateur, soit suite à un changement d'état du document ou d'objets. 

Les évènements sur le document ou ses nœuds décrivent principalement des actions de l'utilisateur, ou le chargement du document et des nœuds. Les évènements de window et ses éléments décrivent principalement un changement d'état comme le redimensionnement de la fenêtre ou sa fermeture.

### 🏷️ **MouseEvent**

Les évènements souris sont déclenchés lors d'un déplacement de la souris, une pression sur un des clics ou toute autre manipulation du périphérique.

|Handler|Description|
|---|---|
|click|Le bouton de la souris a été pressé puis relâché|
|dblclick|Le bouton de la souris a été pressé puis relâché deux fois|
|mousedown|Le bouton de la souris est pressé|
|mouseenter|Le curseur de la souris est au dessus de l'élément|
|mouseleave|Le curseur de la souris n'est plus au dessus de l'élément|
|mousemove|Le curseur de la souris bouge au dessus de l'élément|
|mouseout|Le curseur de la souris n'est plus au dessus de l'élément ou d'un de ses enfants|
|mouseover|Le curseur de la souris est au dessus de l'élément ou d'un de ses enfants|
|mouseup|Le curseur de la souris est relâché au dessus de l'élément|

### 🏷️ **MouseEvent**

Les évènements clavier sont déclenchés lors d'un action sur une touche.

|Handler|Description|
|--|--|
|keydown|Une touche du clavier est pressée|
|keypress|Une touche de caractère du clavier est pressée|
|keyup|Une touche du clavier est relâchée|

### 🏷️ **ProgressEvent**

Les évènements de progression sont déclenchés lors d'une changement d'état d'une requête ou réponse HTTP.

|Handler|Description|
|---|---|
|abort|La progression est terminée avec ou sans erreur|
|error|La progression a échoué|
|load|La progression est terminée sans erreur|
|loadend|La progression est terminée|
|loadstart|La progression a commencé|
|progress|La progression progresse|
|timeout|La progression dépasse le délai d'attente|

### 🏷️ **Autres**

Il existe bien d'autres types d'évènement possible. Il faudra effectuer une recherche pour les cibler en fonction du besoin, nous pouvons en lister des indispensables pour les formulaires.

|Handler|Description|
|---|---|
|focus|La zone de saisie est activée|
|blur|La zone de saisie est quittée|
|submit|Le formulaire est validé et la page va être dirigée|

___

## 📑 Syntaxe

Il est possible d'utiliser plusieurs syntaxe pour ajouter/retirer une fonction à activer pour un type d'évènement.

### 🏷️ **Handler**

Les objets possèdent un attribut évènementiel pour un type d'évènement, par exemple `onclick`. Par défaut cet attribut vaut `null` et en lui assignat une fonction, elle sera invoquée quand l'évènement est émit.

```js
elem.onclick = () => {
    console.log(this);
}
```

Nous étudierons le mot `this` quand nous utiliserons la programmation objet.

Pour retirer l'évènement il faut que la valeur de l'attribut ne sois plus celle de la fonction.

```js
elem.onclick = null;
```

### 🏷️ **Listener**

L'avantage de passer par les écouteurs est la possibilité d'en ajouter plusieurs sur un élément pour un type d'évènement.

#### addEventListener

La méthode addEventListener permet d'assigner un écouteur pour un élément possédant la propriété fournie en premier paramètre sans son suffixe, le second paramètre est la fonction de rappel, le troisième paramètre est un boolean pour initier la capture ou non.

* element.addEventListener(type, listener[, capture]);

En passant une fonction pour un type d'évènement, **le contexte d’exécution de la fonction sera l'objet en cours de manipulation** et donc l'élément sur lequel nous avons ajouté un écouteur évènementiel.

```js
const callback = {
    console.log(this);
};

elem.addEventListener("click", callback);
```

**Il est conseillé d'utiliser les fonctions fléchés pour maîtriser le contexte d’exécution.**

#### removeEventListener

La méthode removeEventListener permet de détacher un écouteur.

* element.removeEventListener(type, listener[, capture]);

Attention, pour détacher un écouteur, il faut que l'argument 2 ait été attaché au préalable.

```js
elem.removeEventListener("click", callback);
```

Dans le cas de l'utilisation d'une fonction fléchée, ne perdez pas sa référence entre l'ajout et sa suppression.

___

## 📑 Event

Pour chaque méthode de rappel, un argument implicite peut être déclaré dans sa signature, il contient l'évènement qui transite jusqu'à la fonction.

```js
const callback = (e) => {
    console.log(e);
};

elem.onclick = onclick;
```

Event possède des propriétés intéressantes pour connaitre la cible de l'évènement ou bien les coordonnées d'un click par exemple. Il possède également des méthodes indispensables pour annuler **l'évènement par défaut**.

### 🏷️ **preventDefault**

La méthode preventDefault annule l'évènement initié. Dans le cas d'un lien, il annule l'action de suivre le lien ou dans le cas d'un formulaire il annule son envoi.

```js
const callback = (event) => {
    event.preventDefault();
};
```

___

👨🏻‍💻 Manipulation

Ajouter des écouteurs sur les éléments permettant une interaction et modifier le document en conséquence. Produisez une partie de votre logique d'affichage.