//Atividade prática 1
//01
var dominio1 = ' mundojs';
var dominio2 = 'google';
var dominio01 = `Olá ${dominio1}! O site `;
var dominio02 = `www.${dominio2}.com te ajuda a achar muitos materiais de estudo.`;
console.log(dominio01.concat(dominio02));

//02
var valorA = 'casa';
var valorB = 'asa';
var letraMaiusculas = valorA.toUpperCase();
console.log(letraMaiusculas);
var letraMaiusculas01 = valorB.toUpperCase();
console.log(letraMaiusculas01);
var comparacao = valorA.localeCompare(valorB);
console.log(comparacao);

//03
var valorC =  "substring(): Aprenda a utilizar.";
var saberAposicao = valorC.indexOf('Aprenda');
console.log(saberAposicao);
console.log(valorC.substring(13, 31));

//Atividade prática 2
//01
function calcular(){
    var valor = 5;
    for(let i= 0; i<=10; i++){
      var resultado = `${valor} x ${i} = ${valor*i}`
      var array = [resultado];
      var string = array.toString();
      console.log(string);
    }
  }
  
  console.log(calcular());

//02
function temperatura(){
  var array = [54, 78, 56, 98, 0, 12, 11, 37];
  for (let i = 0; i < array.length; i++) {
    var resultado = parseInt((array[i] - 32)/1.8);
    console.log(`A temperatura em Celsius é: ${resultado} °C`); 
}
}

console.log(temperatura());