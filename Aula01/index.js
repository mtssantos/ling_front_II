var alturas = [];
var sexos = [];

let media = 0;
let altura_homem = 0;
let cont = 0;

for(let index = 0; index < 5;index++){
  var altura = prompt("Informe a altura da pessoa: ");
  var sexo = prompt("Informe o sexo: ");
  alturas.push(parseFloat(altura));
  sexos.push(sexo);

  if(sexo === "M"){
    altura_homem = altura_homem + parseFloat(altura);
  } else if (sexo === "F") {
    cont = cont + 1;
  }
}

media = altura_homem / 5;

console.log("A maior altura do grupo é: " + Math.max(...alturas));
console.log("A menor altura do grupo é: " + Math.min(...alturas));
console.log("A média de altura de todos os homens é: " + altura);
console.log("O número de mulheres é: " + cont);