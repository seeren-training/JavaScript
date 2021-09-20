const navbar = $(".navbar");
let id = null;
let i = 0;

const sayHello = () => {
    console.log("Hello World");
    i++
    if (5 === i) {
        clearInterval(id);
        console.log("Stop");
    }
};

// Une fonction peut recevoir un ou plusieurs arguments séparés par une virgule
const sayHelloTo = (firstName) => {
    console.log("Hello " + firstName);
};

// 1 - Je l'invoque programmatiquement
sayHello();
sayHelloTo("John");
sayHelloTo("Bob");

// 2 - Je l'invoque evenementiellement
navbar.on("click", sayHello);

// 3 - Je l'invoque récursivement via les timers
id = setInterval(sayHello, 2000);

// Une fonction peut renvoyer une valeur
const getTTC = (priceHT) => {
    return priceHT + (priceHT * .2);
};

const priceTTC = getTTC(100);