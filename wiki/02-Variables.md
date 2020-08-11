# Variables

*  🔖 **Déclarations**
*  🔖 **Types**
*  🔖 **Object**
*  🔖 **Tableaux**
*  🔖 **Import/Export**

___

## 📑 Déclarations

Il existe 3 mot clef permettant de déclarer une variable.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/variable.jpeg)

### 🏷️ **Var**

🔗[var](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/var)

```js
var foo;
```

Par défaut sa valeur vaut `undefined`.

```js
var foo = true;
```


Il est possible de déclarer plusieurs variables en les séparent par une virgule.

```js
var foo = true, bar = false;
```

Une variable peut se télescoper de son bloc d’exécution.

```js
if (true) {
    var foo = true;
}
console.log(foo); // true
```

Une variable en dehors d'une fonction est dite "globale", elle est ajoutée en propriété au contexte d'exécution

### 🏷️ **✔️ Let**

🔗[let](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let)

```js
let foo = true;
```

La déclaration avec let est la même qu'avec var. Let appartient à la version es6 et empêche la collision de variables ou le télescopage.

```js
if (true) {
    let foo = true;
}
console.log(foo); // ReferenceError: foo is not defined
```

### 🏷️ **✔️ Const**

🔗[const](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const)

```js
const foo = true;
```

Une constante doit avoir une valeur assignée à la déclaration et ne permet pas de ré affectation.

```js
const foo = true;
foo = false; // Error: "foo" is read-only
```

___

## 📑 Types

🔗[types](https://developer.mozilla.org/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es)

### 🏷️ **Primitifs**

* Booléen

```js
console.log(true);
console.log(false);
```

* Null

```js
console.log(null);
```

* Undefined

```js
console.log(undefined);
```

* Nombre

```js
console.log(7);
console.log(7.77);
console.log(-Infinity);
console.log(+Infinity);
console.log(NaN);
```

* Chaîne de caractères

```js
console.log("Hello");
console.log('Hello');
```

A partir de la version es6 le **✔️ template literal** fait son apparition. Il permet l'**interpolation** et les **sauts de lignes**.

```js
const name = "John";
console.log(`Hello ${name}`); // Hello John
```

* Symbole

Introduit en es6, permet de créer des indexes sans collision.

```js
const foo = Symbol();
```

**Chaque type primitif possède de nombreuses méthodes pour effectuer des opérations courantes.**

### 🏷️ **Typeof**

Le type d'une opérande peut être retourné sous forme de chaine de caractères par l'opérateur typeof, les parenthèses de l'opérateur sont facultatives.

```js
console.log(typeof foo);
```

___

👨🏻‍💻 Manipulation

Rédiger succintement les `wireframes` de votre application à la main puis éclarez les variables qui vous sembles nécessaires pour le fonctionnement de votre programme en leur affectant des valeurs, portez un soin particulier sur leur nommage. 

___

## 📑 Object

Le reste des valeurs possible sont de type objet, que ce soit les tableaux, les fonctions, les classes etc.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/object.png)

Tous les objets possèdent une valeur qui est modifiée par référence: quand vous passerez un objet en argument et que vous le modifiez, vous ne modifiez pas une copie comme pour les types primitifs, il sera modifié dans le contexte d'appel.

### 🏷️ **Déclaration**

Il existe de nombreux objets intégrés et vous pouvez en définir également.

* Instancier un `constructeur`.

```js
function Foo () { }
const obj = new Foo();
```

```js
class Foo { }
const obj = new Foo();
```

* Obtenir un objet avec un `prototype` donné.

```js
const obj = Object.create(new Foo);
```

* ✔️ Obtenir un objet grâce a un initialisateur, c'est un objet `autoconstruit`, un `littéral`.

```js
const apple = {
    color: "Red",
    quantity: 1
};
```

Ce format est utilisée pour l'échange de données sur le web, on parle de `JSON`, la différence est qu'il faut délimiter le nom de ses propriétés au format string.

### 🏷️ **Manipulation**

L'accès aux propriétés d'un objet se fait avec le point. Des propriétés non existantes peuvent être ajoutées à la volée.

```js
console.log(obj.prop1); // true
```

#### Supprimer une propriété

Les propriétés d'un objet ou les éléments d'un tableau peuvent êtres supprimées en utilisant l'opérateur delete suivi de la propriété de l'objet ou de l'index du tableau.

```js
delete obj.prop1;
```

### 🏷️ **Instanceof**

L'opérateur instanceof s'utilise pour vérifier si le constructeur d'un objet utilise par lien de parenté le constructeur d'un autre objet.

```js
console.log(objinstanceof Object);
```
___

👨🏻‍💻 Manipulation

Déclarez un ou plusieurs objets littéraux pour réunir les valeurs appartenant à un sujet commun.

___

## 📑 Tableaux

Les tableaux des objets, ils ne sont pas dimensionnés et pas typés.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/array.png)

### 🏷️ **Déclaration**

Avec le constructeur `Array` il est possible d'obtenir un tableau dimensionné avec des valeurs undéfinies.

```js
const foo = new Array(5);
```

Il est possible de préremplir le tableau de valeurs.

```js
const foo = new Array('foo', 'bar', 'baz');
```

La déclaration littérale utilise les crochets.

```js
const foo = [];
```

Il n'est pas possible de spécifier les indexes du tableau.

```js
const foo = ['foo', 'bar', 'baz'];
```

### 🏷️ **Manipulation**

#### Accéder à un élément d'un tableau

Il faut se référer à ses indexes.

```js
console.log(foo[1]); // bar
```

#### Taille

```js
console.log(foo.length); // 3
```

#### Récupérer un index

La méthode `indexOf` renvoie la clef d'un élément dont la valeur passée en argument est présente dans le tableau et strictement identique ou renvoie -1. Un second argument optionnel correspond à la clef à partir de laquelle commence la recherche.

```js
console.log(foo.indexOf(bar)); // 1
```

#### Supprimer un élément

La méthode `shift` renvoie et supprime le premier élément du tableau puis réorganise les clefs du tableau. Si le tableau est vide la méthode retourne le type undefined.

```js
console.log(foo.shift()); // foo
```

La méthode `pop` renvoie et supprime le dernier élément du tableau. Si le tableau est vide la méthode renvoie le type undefined.

```js
console.log(foo.pop()); // baz
```

La méthode `splice` modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.

```js
console.log(foo.splice(index, 1)); // Array
```

#### Ajouter un élément

La méthode `unshift` renvoie et supprime le premier élément du tableau puis réorganise les clefs du tableau. Si le tableau est vide la méthode retourne le type undefined.

```js
console.log(foo.unshift('qux')); // 4
```

La méthode `push` renvoie la longueur du tableau après avoir inséré les valeurs passées en paramètre en fin de tableau.

```js
console.log(foo.push('qux')); // 4
```

___

👨🏻‍💻 Manipulation


Déclarez un ou plusieurs tableaux pour réunir les valeurs appartenant à un thème commun.

Complétez sommairement votre document html afin de pouvoir le dynamiser dans une prochaine étape, coder les structures d'affichage avec des informations par défaut.

___

