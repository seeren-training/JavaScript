# 🎓  TP - JavaScript functionnal

**You will be evaluated on your ability to meet the following 📝 functional goals.**

You can use `variable`, `conditionnal`, `loop`, `function`, `DOM`, `event` on a tematic you choose.

## 🐣 Previously

> You've work on the display of 3 frames we decide todo and start to work on their interaction.

## 🐥 Now

> You're gonna continue on the interaction tematic and start to learn about data persistence with api's.

___

### 👨🏻‍💻 Task list

📝 Onclick the 'add' button must display the task form display.

___

### 👨🏻‍💻 Task form

📝 The 'form' must use auto validation for each `input` and `textarea` because we need this feature for decide to create a task or not.

[@see text-inputs](https://materializecss.com/text-inputs.html)

📝 Onclick on the 'save' btn the app must create a task with the user filled informations and push it on the task list: you have to access each elements and retrieve the filled value.

> Learn how to access to an element attribute, like a `value` or a `class`...

[@see attributs](https://github.com/m2i-cyril/JavaScript/wiki/04#%EF%B8%8F-les-attributs)

📝 Onclick on the 'save' btn the app must create a task only when all inputs have the 'valid' class provided by the validation.

> You can access individually to each elements or try to retrieve the collection of elements for a selector with `querySelectorAll` then use iteration.

___

At this point, the array management is done then you can create, read and delete tasks.

___

## 🦆 Next

✔️ You make the choice to practice about data persistence instead of date formating date and will pratic empirism. With few words: the array or tasks is your data, you have to store it on a server each time you create, edit or delete a task, you have to read this data from the server at application initialisation.

#### How

There is an object that allow you to make request and send data on the network, to a `web service`. The `web service` will make the job: when he receive request with data he store it, when he receive request without data he provide it, so a web service is a data manager that use the network.

Web service for json storage: [@see jsonbin](https://jsonbin.io/)

* Login with google or `github` account
* Create a 'bin' (an adress for storage) with some data

```json
{
  "data": []
}
```
* Check what is you 'api key' for security access [@see api-keys](https://jsonbin.io/api-keys)

* Read the doc and use it [@see api-reference](https://jsonbin.io/api-reference)

**Read**

```js
const xhr = new XMLHttpRequest;
xhr.open("GET", "https://api.jsonbin.io/b/<BIN_ID>");
xhr.setRequestHeader("secret-key", "<SECRET_KEY>");
xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
}
xhr.send();
```

**Update**

```js
const data = { data: ["Hello"] };
const xhr = new XMLHttpRequest;
xhr.open("PUT", "https://api.jsonbin.io/b/<BIN_ID>");
xhr.setRequestHeader("secret-key", "<SECRET_KEY>");
xhr.setRequestHeader("versioning", "false");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = () => {
    console.log("Updated");
}
xhr.send(JSON.stringify(data));
```

For syntax detail, refer to the documentation in detail.

> XMLHttpRequest is the object able to make a request and provide a response, open is used to fill the `method` and the `url`, setRequestHeader is used to fill the `headers` required by the web service, `send` is used to send the request, `onload` is an event to execute instructions when the response is loaded. The `JSON` object is usefull to convert object into string and string into object.

### 👨🏻‍💻 Storage

📝 When you create or delete a task, update the data on the web service.

📝 When you display the task list you have to read the stored task list from the web service then display it.

[@see ajax](https://github.com/m2i-cyril/JavaScript/wiki/06#ajax)

> You really do all these task!? Think about user experience with a loading experience...

___
## 🕕 Manage your time

There is some logic coming to target your functional goal!

## 🎯 Let's focus
