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

