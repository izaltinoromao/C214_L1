const Calculadora = require('./src/operacoes');

let soma = Calculadora.soma(7);
let sub = Calculadora.subtraction(3);
let mult = Calculadora.multiplication(5);
let div = Calculadora.division("4");
let pot = Calculadora.power(8);

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(pot);
