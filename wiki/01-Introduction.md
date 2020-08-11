# Introduction

*  🔖 **Historique**
*  🔖 **Paradigme**
*  🔖 **Data types**
*  🔖 **Package Manager**
*  🔖 **Hello World**

___

## 📑 Historique

🔗 [The Birth and Death of Javascript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/the-birth-and-death-of-javascript.poster.png)

___

👨🏻‍💻 Manipulation

Regardez la vidéo présente en lien jusqu'à la minute 9 et discutons en.

___

## 📑 Paradigme

JavaScript possède plusieurs paradigmes possible et la forme de son utilisation à beaucoup évolués tout comme son contexte d’exécution.


### 🏷️ **Impératif**

* Séquence d'instructions
* Assignation ou affectation
* Instruction conditionnelle
* Boucle
* Branchements

### 🏷️ **Fonctionnel**

* Fonctions

### 🏷️ **Objet**

* Objets

> JavaScript est un langage orienté objet à prototype

#### es < 6

```js
function Eleve() {
    this.name = "John Doe";
}
var eleveDefaut = new Eleve();
alert(eleveDefaut.name); // affiche "John Doe"
Eleve.prototype.name = "J.Doe";
alert(eleveDefaut.name); // affiche "J.Doe"
```

**L'héritage se met en place en étendant la chaine de prototype d'un constructeur**. Si l'instance ne possède pas la propriété ou la méthode recherchée, la recherche se poursuit dans le prototype de l'instance. Ce mécanisme de recherche parcourt ce qu'on appelle la **chaîne de prototypes**.

#### es >= 6

Une fonction peut s'invoquer ou s'instancier, avec une valeur du contexte d’exécution valant le contexte en cours ou l'instance créée. Depuis la version 6 **le mot class permet d'avoir un sucre syntaxique caractérisant l'utilisation d'un constructeur**.

```js
class MonConstructeur {
    constructor() {
        this.maPropriete1 = 3;
    }
}
```

**Les classes soufrent toujours d'un problème de compatibilité dans les navigateurs** au niveau de leur import/export et depuis quelques années **l'on n'exécute plus le JavaScript que l'on écrit**. **Un compileur ou plutot transpileur comme Babel est utilisé afin de convertir la syntaxe moderne du langage en syntaxe es5** afin d'avoir une interprétation correcte par le navigateur.

___

## 📑 Data types

JavaScript est un langage au typage faible et dynamique.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/data-types.png)

___

## 📑 Node Package manager

🔗[npm](https://www.npmjs.com/)

NPM est le `package manager` du langage, il sert notamment à **déclarer un projet**, **ses dépendances** en mode production ou développement, **exécuter des scripts** et bien d'autres choses...

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/npm.png)

🔗[node](https://nodejs.org/en/)

 Il a besoin de la plateforme `NodeJS` pour exécuter ses instructions.

___

👨🏻‍💻 Manipulation

Installez NodeJS qui inclu npm en option à l'installation. Vérifiez votre installation en tappant `npm` dans un terminal. La commande ne doit pas être "not found".

___

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/node.png)

### 🏷️ **Initialisation**

La commande init créé un fichier `package.json` décrivant le projet.

```
npm init
```

___

👨🏻‍💻 Manipulation

**Votons pour une thématique de projet** qui nous motive puis initialisez votre projet.

___

### 🏷️ **Dépendance**

La commande install télécharge un package dans un dossier node_modules et l'ajoute à la liste des dépendances.

```
npm install some-package
```

___

👨🏻‍💻 Manipulation

Installez un autre `Framework CSS` qui vous plait. Listons-en au préalable!

___

## 📑 Hello World

___

👨🏻‍💻 Manipulation

Reliez un fichier JavaScript à une page HTML.

___

### 🏷️ **Console**

Dans votre navigateur web vous pouvez ouvrir les outils pour développeurs avec la touche `F12`. Un onglet console est disponible et affiche les arguments donné aux méthodes de l'objet console en JavaScript:

```
console.log('Hello World');
```
___

👨🏻‍💻 Manipulation

Afficher 'Hello World' dans la console.

Après recherche documentative reliez le Framework CSS à votre fichier HTML, son CSS et son JavaScript: attention il ne faut pas d'erreurs du Framework dans la console, il faudra éventuellement faire des installations supplémentaires...
