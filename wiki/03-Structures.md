# Structures

*  🔖 **Opérateurs**
*  🔖 **Conditions**
*  🔖 **Exception**
*  🔖 **Itérations**
*  🔖 **Fonctions**

> Cette fiche est importante, vous devrez souvent revenir à cette référence.

___

## 📑 Opérateurs

### 🏷️ **Arithmétiques**

Les opérateurs arithmétiques effectuent une opération entre deux opérandes. Le type attendu des opérandes est un nombre à l’exception du traitement des chaines de caractères par l'opérateur +.

|Opération|Syntaxe|Exemple|
|---|---|---|
|Addition|+|a = a + x|
|Soustraction|-|a = a - x|
|Multiplication|*|a = a * x|
|Division|/|a = a / x|
|Modulo|%|a = a % x|
|Incrément préfixé|++|++a|
|Incrément suffixé|++|a++|
|Décrément préfixé|--|--a|
|Décrément suffixé|--|a--|

#### Incrément

L'incrément convertira les types qui ne sont pas des nombres en nombre ayant comme valeur NaN. La chaine de caractères ne sera pas incrémentée dans l'ordre de valeur Unicode, seul le boolean, le null et le tableau seront convertis en nombres entiers ou décimaux.

### 🏷️ **Affectation**

Les opérateurs d'affectation affectent une valeur après avoir effectué un calcul, ils simplifient l'écriture d'opérations. Ils réunissent l'opérateur = et les opérateurs arithmétiques, les opérateurs binaires peuvent aussi êtres simplifiés par un opérateur d'affectation mais nous les aborderons plus tard.

|Opération|Syntaxe|Exemple|
|---|---|---|
|Affectation|=|a = x|
|Addition puis affectation|+=|a += x|
|Soustraction puis affectation|-=|a -= x|
|Multiplication puis affectation|*=|a *= x|
|Division puis affectation|/=|a /= x|
|Modulo puis affectation|%=|a %= x|

#### Conversion

Pendant une opération JavaScript tente de convertir les valeurs si elles ne correspondent pas au type attendu. Dans le cas de l'opérateur += la conversion n'est pas effectuée quand il s'agit d'une chaine de caractères car l'opérateur + est aussi utilisé pour la concaténation de chaines de caractères.

### 🏷️ **Comparaison**

Les opérateurs de comparaison effectuent une comparaison portant sur la valeur ou sur le type et la valeur, soit une comparaison stricte. Ils renvoient un boolean, true si les éléments sont égaux pour la comparaison ou false s'ils ne le sont pas.

|Opération|Syntaxe|Exemple|
|---|---|---|
|Supérieur|>|a > x|
|Supérieur ou égal|>=|a >= x|
|Inférieur|<|a < x|
|Inférieur ou égal|<=|a <= x|
|Égalité|==|a == x|
|Égalité Stricte|===|a === x|
|Inégalité|!=|a != x|
|Inégalité stricte|!==|a !== x|

#### Égalité

Pour comparer une égalité non stricte, les valeurs seront converties. Un type peut être égal à un autre type si sa valeur convertie lui est égale. False peut être égal à une chaine vide, à une chaine qui contient 0, au nombre 0, à un tableau vide ou à un tableau contenant 0 en unique élément.

### 🏷️ **Logiques**

Les opérateurs logiques en JavaScript ne renvoient pas uniquement des valeurs booléennes contrairement à d'autres langages.

#### &&

Utilisé avec des opérandes boolean, l'opérateur && renvoie true si les deux opérandes valent true, sinon il renvoie false. Utilisé avec des opérandes non boolean l'opérateur renvoie la première opérande si elle peut être convertie à false, sinon il renvoie la deuxième.

#### ||

Utilisé avec des opérandes boolean, l'opérateur || renvoie true si l'une des deux opérandes vaut true, sinon il renvoie false. Utilisé avec des opérandes non boolean l'opérateur renvoie la première opérande si elle peut être convertie à true, sinon il renvoie la deuxième.

#### !

L'opérateur ! renvoie true si son opérande peut être convertie à false, sinon il renvoie false.

___

## 📑 Conditions

Le flux d'instructions peut être encapsulé dans des blocs qui s’exécutent si certaines conditions sont remplies. Les structures conditionnelles contrôlent les flux d'instructions et mettent en place la logique, l’algorithmique du programme.

### 🏷️ **if else**

La structure if vérifie une condition dans ses parenthèses puis exécute les instructions dans le bloc délimité par ses accolades si la condition vaut true.

> Si la condition vaut false le code ne sera pas exécuté. Dans le cas d’absence d'opérateurs, les valeurs chaine de caractères vide, 0, false, null, undefined ou NaN sont équivalentes à false.

```js
if (true == 1) {
    console.log('true');
}
```

La structure if possède une clause else qui est optionnelle. Le bloc délimité par else sera exécuté dans le cas où la condition précédente ne vaut pas true.

```js
if (true === 1) {
} else {
    console.log('false');
}
```

La clause else peut aussi posséder une condition pour que son bloc soit exécuté et ainsi continuer de tester différentes conditions pour contrôler le flux d'instructions plus précisément.

```js
if (true === 1) {
} else if (true == '1') {
        console.log('true');
} else {
}
```

### 🏷️ **Ternaire**

L'opérateur ternaire est pratique pour vérifier une condition avant affectation mais pour ce faire il utilise trois opérandes. Le ? interroge la première opérande, si sa valeur peut être convertie à true alors la seconde opérande sera utilisée, sinon ce sera la troisième opérande.

```js
let foo = operande1 ? operande2 : operande3;
```

### 🏷️ **switch**

La structure switch n'évalue pas une condition mais la valeur de retour d'une expression afin d'exécuter les instructions suivant l'étiquette correspondant à son égalité stricte.

```js
switch (2 + 3) {
    case 10:
        console.log(10);
        break;
    default:
        console.log('default');
}
```

## 📑 Exception

### 🏷️ **try catch**

L'instruction try catch est composée de deux blocs. Le premier bloc essaie d'exécuter une série d'instructions, si une exception est levée alors les instructions suivantes de ce bloc ne seront pas exécutées. Le bloc catch attrape l'exception dans son unique argument avant de le transmettre à son bloc contenant lui aussi des instructions destinées à traiter l'exception.

```js
try {
    console.log('try'); // try
} catch (e) {
    console.log('catch');
}
```

Si une erreur est levée dans le try, l'exécution continue dans le bloc du catch.

```js
try {
    'Hello World'.pop(); 
    console.log('try');
} catch (e) {
    console.log('catch'); // catch
}
```

Le bloc finally s'utilise pour exécuter des instructions après avoir essayé d'exécuter des instructions ou après avoir attrapé une erreur. Il est utile pour effectuer un traitement qu'il y ait eu des erreurs ou non.

```js
try {
    'Hello World'.pop();
    console.log('try');
} catch (e) {
    console.log('catch'); // catch
} finally {
    console.log('finally'); // finally
}
```

### 🏷️ **throw**

L'instruction throw lève une exception.

```js
throw 'Hello World'; 
```

Bien que l'on puisse lever n'importe quel type d'exception, l'instruction try catch est là pour attraper des erreurs. Nous avons observé différents objets représentant des erreurs, ils héritent tous de l'objet Error.

#### Error

```js
throw new Error('Some error');
```
___

## 📑 Itérations

Une itération sert à répéter l'exécution d'instructions, pour parcourir un tableau ou un objet en peu de lignes il existe des structures itératives.

### 🏷️ **for**

La boucle for s'appuie sur une expression initiale, une condition et une expression d'incrément pour effectuer une itération. Les expressions et la condition sont optionnelles, mais sans elles il faudra vérifier la condition d'itération à l'intérieur du bloc d'instruction.

```js
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
```

### 🏷️ **for in**

Il boucle sur l'objet ou le tableau en s'appuyant sur ses propriétés ou clefs en peuplant la première opérande du in par la propriété ou la clef rencontrée pendant l'itération.

```js
for (const key in objet) {
    console.log(key);
}
```

La bonne pratique correspond à vérifier que la propriété appartient bien au prototype du sujet d'itération et pas à un prototype hérité.

### 🏷️ **for of**

La boucle for peut itérer tous les objets itérables selon leurs mécanismes d'itération. Il parcourt la seconde opérande sur la valeur de ses propriétés qu'il affecte à la première opérande.

```js
for (const value of object) {
    console.log(value);
}
```

### 🏷️ **Contrôle de l'itération**

#### break

L'instruction break permet d’arrêter l'exécution d'une boucle.

```js
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // 0 1 2
}
```

#### continue

L'instruction continue permet d’arrêter l'itération en cours d'une boucle.

```js
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // 0 1 2 4
}
```

### 🏷️ **forEach**

Les instances de Array possèdent des méthodes pour parcourir le sujet, forEach est l'une d'elles.

```js
const foo = ['a', 'b', 'c'];

foo.forEach((value, key) => {
    console.log(value);
});
```

Ce n'est pas une structure du langage donc `break` et `continue` ne peuvent pas être utilisés.

___

## 📑 Fonctions

Les fonctions sont des objets Function qui permettent d'encapsuler des instructions dans un bloc afin d'y faire appel. Les fonctions peuvent posséder des arguments afin de leur transmettre des valeurs et peuvent également retourner une valeur de fin d'instruction.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/instrution-bloc.png)


### 🏷️ **Déclaration**

Une fonction peut être une expression ou une instruction, dans les deux cas elles sont un objet Function, elle peut aussi utiliser le constructeur Function pour obtenir une instance de cet objet.

En utilisant une instruction de fonction nommée, l'objet sera créé au runtime et sera accessible avant sa déclaration dans le programme.

```js
maFonction(); // Hello
function maFonction() {
    console.log("Hello");
}
```

#### return

L'instruction return renvoie la valeur de l'expression qui lui succède et met fin à l'exécution des instructions d'une fonction. L'expression de retour est optionnelle et sa valeur par défaut est undefined.

```js
function maFontion() {
    return true;
}
console.log(maFontion()); // true
```

#### Les arguments

La signature d'une fonction peut comporter des arguments ou paramètres, ce sont des valeurs ou des objets qui seront transmis sous forme de variables locales à la fonction. Les objets sont passés par référence ce qui signifie qu'ils ne sont pas copiés et que leurs modifications au sein de la fonction impactent l'objet en dehors de la fonction. Par défaut un argument vaut undefined.

```js
function maFontion(argument) {
    console.log(argument); // undefined
}
maFontion();
```

Il est possible de déclarer plusieurs arguments dans la signature d'une fonction.

```js
function division(dividende, diviseur) {
    return dividende / diviseur;
}
console.log(division(10, 2)); // 5
```

Les arguments peuvent être optionnels en leur affectant une valeur dans la signature.

```js
function division(dividende, diviseur = 1) {
    return dividende / diviseur;
} 
```

### 🏷️ **Expression**

En affectant une fonction, l'objet sera créé après le parsetime et ne sera pas accessible avant sa déclaration.

```js
const maFonction = function () {
    console.log("Hello");
}
maFonction(); // Hello
```

### 🏷️ **Arrow function**

Les fonctions fléchées ne peuvent pas être utilisée comme constructeur. On ne peut plus utiliser les fonctions pour les instancier et les invoquer: cela clarifie les choses. L'avantage est également la préservation du contexte d’exécution, il ne peut plus être modifié.

```js
const maFonction = () => true;

console.log(maFonction()); // true
```

Sans bloc d'instructions, la valeur de retour correspond à celle de la seule instruction.

```js
const maFonction = () => {
    return true;
}

console.log(maFonction()); // true
```

Avec un argument, les parenthèses sont optionnelles.

```js
const maFonction = foo => foo;

console.log(maFonction(true)); // true
```

Avec plusieurs arguments, les parenthèses ne sont pas optionnelles.

```js
const maFonction = (foo, bar) => foo;

console.log(maFonction(true, false)); // true
```

___

👨🏻‍💻 Manipulation

Créez des fonctions sans instructions qui vous permettrons d'atteindre vos objectifs fonctionnels. Discutons-en!.