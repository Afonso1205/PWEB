const nome = prompt("Nome:");

const nota1 = prompt("Nota 1:");
const nota2 = prompt("Nota 2:");
const nota3 = prompt("Nota 3:");

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3.0;

alert("Média: " + media.toFixed(2));
