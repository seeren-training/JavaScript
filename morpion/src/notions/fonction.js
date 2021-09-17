
const sayHello = () => {
    console.log("Hello World");
};

const sayHelloTo = (firstName) => {
    console.log("Hello " + firstName);
};

// sayHello();
// sayHelloTo("John");
// sayHelloTo("Bob");


// Executer une fonction suite à l'émission d'un évènement
const navbar = $(".navbar");
navbar.on("click", sayHello);


// La même sans jQuery
const navbarNative = document.querySelector(".navbar");
navbarNative.addEventListener("click", sayHello);