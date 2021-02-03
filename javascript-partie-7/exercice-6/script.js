//Traduire cette fonction fléchée en fonction nommée.

// (name) => {
//   `Bonjour, ${name} ! Comment vas-tu ?`;
// }

document.onclick = function(name) {
    return `Bonjour, ${name} ! Comment vas-tu ?`;
}