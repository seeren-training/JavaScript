# Ajax

*  🔖 **Définition**
*  🔖 **Request**
*  🔖 **Response**

___

## 📑 Définition

Asynchronous JavaScript And XML.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/ajax.png)

> La client envoie une requête au serveur en définissant les propriétés de la requête soit **url, méthode, headers et body** et reçoit une réponse du serveur, **un status code et texte, des entêtes et un body.**

___

## 📑 Request

Il existe plusieurs objets pour effectuer une requête en JavaScript. Le premier est disponible de façon stable et compatible sur l'ensemble des navigateurs et l'autre plus récent n'est pas implémenté par internet explorer. Nous observerons l'objet `XMLHTTPRequest`.

### 🏷️ **Instanciation**

L'objet `XMLHttpRequest` et anciennement l'objet `ActiveXObject` pour Internet Explorer est un handle de requête et de réponse HTTP servant à effectuer des requêtes `synchrones` et `asynchrones` pour dynamiser un document.

```js
const xhr = new XMLHttpRequest();
```

### 🏷️ **URL/Méthode**

La méthode open spécifie la méthode, la cible et le mode de communication de la requête. Le premier argument correspond à une **méthode** HTTP comme GET, POST, PUT, DELETE, OPTIONS, HEAD ou une autre méthode. Le deuxième paramètre indique la cible de la requête soit l'**URL** distante, les paramètres suivants sont optionnels.

🔗 [Méthode](https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol#M%C3%A9thodes)

```js
xhr.open(
    'GET', 
    'https://packagist.org/packages/symfony/symfony.json'
); 
```

### 🏷️ **Évènement**

L'interface XMLHttpRequestEventTarget décrit les **écouteurs d'évènement** disponibles pour les objets XMLHttpRequest.

|Nom|Description|
|---|---|
|onabort|Quand la requête est annulée|
|onerror|Quand la requête rencontre une erreur|
|onload|Quand la réponse est réceptionnée sans erreur|
|onloadend|Quand la réponse est réceptionnée même avec des erreurs|
|onloadstart|Quand la réponse commence à être réceptionnée|
|onprogress|Quand la réception de la réponse progresse|
|ontimeout|Quand la valeur de timeout est atteinte après l'envoie|
|onuploadprogress|Quand l'envoie de la requête progresse|

Avant d'envoyer votre requête vous devez spécifier une fonction de rappel si vous souhaitez exploiter la réponse.

```js
xhr.onload = () => {
    console.log('Response reçue');
};
```

### 🏷️ **Body**

La méthode **send** possède un **argument optionnel** qui correspond au corps de la requête. Pour envoyer des données interprétables par le serveur il faut quelles soient correctement représentées en utilisant une méthode et un header adapté.

```js
xhr.send();
```

#### Json

Pour pousser de la donnée vous devez utiliser la méthode appropriée avec la méthode `open` et dans la majorité des cas vous envoyez la représentation JSON d'un objet.

La méthode JSON.stringify renvoie la représentation au format chaine de caractère d'un objet.

```js
const json = JSON.stringify(object);
xhr.send(json);
```

## 📑 Response

### 🏷️ **Status**

La réponse possède un code qui vous renseigne sur le traitement de la requête. **Elle ne peut être peuplée d'information que dans les écouteurs relatifs à sa récéption!**

[Status code](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)

```js
const status = xhr.status;

if (200 === status || 304 === status) {
    console.log('Success');
}
```

### 🏷️ **Body**

La propriété response contient le corps de la réponse, par défaut sous forme de chaine de caractères, sinon au format spécifié par la propriété responseType.

La plupart du temps vous récupérez une réponse au format JSON.

```js
const model = JSON.parse(xhr.response);
```

___

👨🏻‍💻 Manipulation

En fonction de votre problématique, il faut effectuer des lectures/écritures vers une source de donnée externe. Vous pouvez utiliser un service de stockage en ligne gratuit qui accepte lecture et mise à jour. Formulez une requête pour lire de la donnée, exploitez la réponse pour mettre à jour la valeur de vos variables et le DOM qui le exploite. Pensez expérience de l'utilisateur et utilisez des indicateurs de chargement. Gérez les erreurs!

🔗 [JsonBin](https://jsonbin.io)

> L'objectif de JavaScript est atteint, vous devez répéter l'actualisation de l'interface après manipulation de données externes pour fournir les objectifs utilisateurs attendus.