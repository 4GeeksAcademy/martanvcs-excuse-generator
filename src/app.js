let who = ['El perro', 'Mi hermana', 'Mi gato', 'Mi vecino', 'Mi abuelo'];
let action = ['robó', 'se comió', 'rompió', 'manchó', 'aplastó'];
let what = ['mi ventana', 'mi ordenador', 'mi comida', 'mi trabajo', 'mi teclado'];
let when = ['después de clase', 'cuando dormía', 'mientras comía', 'mientras leía', 'cuando trabajaba'];


function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function excuseGenerator() {
    return `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}`;
}

window.onload = function () {
    document.getElementById('excuse').innerHTML = excuseGenerator();
};
