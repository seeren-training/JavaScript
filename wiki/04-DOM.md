# DOM

*  🔖 **DOM**
*  🔖 **Accéder aux éléments**
*  🔖 **Modifier/Créer des éléments**
*  🔖 **Supprimer des éléments**
*  🔖 **Modifier les styles**

___

## 📑 DOM

Le `Document Object Model` est une convention pour représenter un document HTML, XHTML ou XML et pour pouvoir interagir avec. Il est le lien entre un document et un langage pouvant le manipuler.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/dom.jpg)

Le Document Object Model est une propriété de l'objet **window**.

```js
console.log(window.document);
```

Comme toute variable globale **il n'est pas utile de manipuler window** à part si vous souhaitez réaliser vos tests dans un environnement qui ne définit pas de variable window de façon globale.

```js
console.log(document);
```

La première propriété que nous allons étudier est l'objet **document** qui fournit donc un modèle pour interagir avec des pages en s’appuyant sur son balisage. Avant de pouvoir interagir avec une page il est indispensable de connaitre quels éléments elle possède.

### 🏷️ **Les éléments**

Un document se structure avec des `nœuds` de type `éléments` qui représentent des balises.

### 🏷️ **Les nœuds**

Il existe `7 types de noeuds` qui ne sont pas dépréciés, le dom n'est pas constitué uniquement d'éléments.

|Constante|Valeur|Représentation|
|---|---|---|
|ELEMENT_NODE|1|Une balise|
|TEXT_NODE|3|Du texte|
|PROCESSING_INSTRUCTION_NODE|7|Une instruction XML|
|COMMENT_NODE|8|Un commentaire|
|DOCUMENT_NODE|9|Un document|
|DOCUMENT_TYPE_NODE|10|Un doctype|
|DOCUMENT_FRAGMENT_NODE|11|Un fragment|

___

## 📑 Accéder aux éléments

L'objet **document** et ses éléments nous offrent des méthodes pour accéder à leurs nœuds. Ce chapitre expose des méthodes pour cibler un élément particulier, puis une collection d'éléments avant de voir les méthodes pour naviguer entre les nœuds.

### 🏷️ **Accéder à un élément**

#### body

Le corps du document peut s'atteindre en utilisant `la propriété body du document`. Que la balise body soit présente ou non cette propriété renvoie la représentation du corps du document.

```js
const body = document.body; 
```

#### getElementById

La méthode getElementById renvoie soit `l'élément unique` identifié par son attribut id transmis en paramètre soit null.

```js
const node = document.getElementById("foo")); 
```

#### querySelector

La méthode querySelector renvoie soit `l'élément identifié par un selector` soit null.

```js
const node = document.querySelector(".foo")); 
```

___

👨🏻‍💻 Manipulation

Récupérez les éléments dont vous souhaitez dynamiser le contenu.

___

### 🏷️ **Accéder à une collection**

Des méthodes de l'objet document renvoient une collection d'éléments.

#### getElementsByTagName

La méthode getElementsByTagName renvoie soit une `collection d'éléments correspondants au tag` spécifié en paramètre pour l'élément parent utilisé soit un tableau vide.

```js
const elems = document.getElementsByTagName("li")); 
```

#### getElementsByClassName

La méthode getElementsByClassName renvoie soit `une collection d'éléments correspondants à la classe` spécifiée en paramètre pour l'élément parent utilisé soit un tableau vide.

```js
const elems = document.getElementsByClassName("foo")); 
```

#### querySelectorAll

La méthode querySelectorAll renvoie soit une `collection d'éléments correspondants aux sélecteurs` spécifiés en paramètre pour l'élément parent utilisé soit un tableau vide.

```js
const nodes = document.querySelectorAll(".foo")); 
```

___

## 📑 Modifier/Créer des éléments

Après avoir étudié les propriétés et méthodes pour accéder à des éléments du DOM il est envisageable de les modifier.

### 🏷️ **Modifier des éléments**

#### innerHTML

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/innerHTML.png)

La propriété innerHTML contient la représentation du contenu HTML d'un élément sous forme de chaine de caractères, il est possible d'affecter à cette propriété du contenu brut et d'**injecter** du contenu HTML **sans passer par la gestion des nœuds**.

```js
document.body.innerHTML = `<h1>
    Unsafe innerHTML injection
</h1>`; 
```

___

👨🏻‍💻 Manipulation

Utiliser les fonctions et innerHTML pour dynamiser le document

___


### 🏷️ **Créer un élément**

#### createElement

La méthode createElement de document `crée un nœud de type élément vide`, il renvoie l'élément créé pour le tag précisé en paramètre ou lance une erreur de type InvalidCharacterError si le tag n'est pas valide.

```js
const elem = document.createElement("h1");
```

*Il faudra insérer l'élément dans un parent.*

#### createTextNode

La méthode createTextNode de document `crée un nœud de type texte`, il renvoie l'élément créé pour le texte fourni en paramètre ou lance une erreur de type TypeError si aucun paramètre n'est fourni ou ne peut être converti en chaine.

```js
const node = document.createTextNode("Safe"); 
```

*Il faudra insérer le noeud dans un parent.*

### 🏷️ **Insérer un élément**

#### appendChild

La méthode appendChild de document ou d'un élément `intègre le nœud passé en paramètre à l'élément` dont la méthode est invoquée et renvoie l'élément ajouté. Le nœud est ajouté à la fin de la liste des nœuds de l'élément. Si le paramètre fourni n'est pas un nœud une erreur de type TypeError sera levée.

```js
const node = elem.appendChild(node); 
```

Il est possible d'insérer un noeud textuel ou un élément dans un parent.

```js
const elem = elem.appendChild(elem); 
```

#### insertBefore

La méthode insertBefore de document ou d'un élément `intègre le nœud passé en paramètre avant l'élément passé en second paramètre` et renvoie l'élément ajouté. Si le paramètre fourni n'est pas un nœud une erreur de type TypeError sera levée. Si le nœud n'est pas trouvé une erreur de type NotFoundError sera levée.

```js
const node = elem.insertBefore(node, child); 
```

___

👨🏻‍💻 Manipulation

Utilisez la création de noeuds et l'insertion pour dynamiser des éléments ciblés dans le cas ou vous avez besoin de **valeurs safe**.

___


### 🏷️ **Les attributs**

#### getAttribute

La méthode getAttribute d'un élément `renvoie la valeur de l'attribut` spécifié en paramètre ou null si l'attribut n'est pas défini.

```js
const id = elem.getAttribute("id"); 
```

Le point permet d’accéder directement à une propriété, **certains mots étant réservés le nom d'une propriété peut ne pas correspondre au nom de l'attribut**, il faudra pour l'attribut class utiliser la propriété className par exemple.

```js
const id = elem.id; 
```

#### setAttribute

La méthode setAttribute `affecte à un élément l'attribut` dont le nom est passé en premier paramètre la valeur passée en second paramètre et renvoie undefined.

```js
elem.setAttribute("id", "foo"); 
```

```js
elem.id = "foo"; 
```

#### removeAttribute

La méthode removeAttribute `supprime l'attribut` dont le nom est passé en paramètre et renvoie undefined.

```js
elem.removeAttribute("id"); 
```

```js
delete elem.id; 
```

___

👨🏻‍💻 Manipulation

Ajouter des attributs aux éléments ayant été insérés avec la création de nœuds.

___

## 📑 Supprimer des éléments

#### removeChild

La méthode removeChild d'un nœud `supprime un enfant passé en paramètre` et renvoie cet enfant. Si le paramètre n'est pas un nœud enfant, une erreur de type NotFoundError sera levée.

```js
const child = elem.removeChild(child); 
```

#### replaceChild

La méthode replaceChild d'un nœud `remplace un enfant passé en second paramètre par le nœud passé en premier paramètre` et renvoie l'enfant remplacé. Si le premier paramètre n'est pas un nœud ou le second paramètre n'est pas un enfant, une erreur de type NotFoundError sera levée.

```js
const child = elem.replaceChild(node, child); 
```

___

## 📑 Modifier les styles

#### 🏷️ **Propriété style**

La propriété style d'un élément correspond à la valeur de son attribut mais ne correspond pas aux propriétés CSS qui lui sont définies dans une feuille de style.

```js
elem.style.color = "red";  
```

Le nommage des propriétés de la propriété style d'un élément HTML doit se faire en camelCase, ainsi background-color doit s’écrire backgroundColor, z-index devient zIndex etc.

### 🏷️ **classList**

Les classes d'un élément sont disponibles sur sa propriété classList de type Array. Une bonne pratique pour styliser un élément correspond à enlever et ajouter de classes.

```js
elem.classList.add("foo");  
```

```js
elem.classList.remove("foo");  
```

```js
elem.classList.replace("foo", "bar");  
```

Attention cette propriété n'existe qu'à partir d'internet explorer 10.

___

👨🏻‍💻 Manipulation

Modifier les styles d'un élément si besoin, en utilisant les attributs vous pouvez également modifier sa classe.

___

> Le DOM est une thématique essentielle mais qu'il faut essayer de minimiser verbeusement, les différents frameworks vous permettent de l'éviter.
___

👨🏻‍💻 Manipulation

Utilisez **les fonctions** pour pouvoir dynamiser votre document en fonction de vos besoins.