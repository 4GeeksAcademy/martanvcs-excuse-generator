let who = ['El perro', 'Mi hermana', 'Mi gato', 'Mi vecino', 'Mi abuelo'];
let action = ['robó', 'se comió', 'rompió', 'manchó', 'aplastó'];
let what = ['mi ventana', 'mi ordenador', 'mi comida', 'mi trabajo','mi teclado'];
let when = ['después de clase', 'cuando dormía', 'mientras comía', 'mientras leía', 'cuando trabajaba'];

function excuseGenerator(who, action, what, when) {
    let numWho = Math.floor(Math.random() * who.length);
    let numAction = Math.floor(Math.random() * action.length);
    let numWhat = Math.floor(Math.random() * what.length);
    let numWhen = Math.floor(Math.random() * when.length);
    return who[numWho] + " " + action[numAction] + " " + what[numWhat] + " " + when[numWhen];
}

function onLoad() {
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, action, what, when);
}

window.onload = onLoad;