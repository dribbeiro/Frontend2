var texto = "Sou uma String";
console.log(typeof(texto));

var numero = 30;
console.log(typeof(numero));

var decimal = 1.5;
console.log(typeof(decimal));

var bool = true;
console.log(typeof(bool));

var nulo = null;
console.log(typeof(nulo));

var array = [];
console.log(typeof(array));

var obj = {};
console.log(typeof(obj));

var funcao = function(){};
console.log(typeof(funcao));

const curso = "FrontEnd Javascript";
console.log(typeof(curso));

//Operadores Calculo

var num1 = 5;
var num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Operados Comparacao
var a = 5;
var b = "5";

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//Operadores Logicos ou Booleanos
console.log((a == b) && (a > b)); //AND
console.log((a == b) || (a > b)); //OR
console.log(!((a == b) && (a >= b))); //NOT

//Operadoes de Associacao
var z = 10;
var y = 3;
var s1 = 'Java';
var s2 = 'Script';
s1 += s2; //s1 = s1 + s2;
console.log(z += y);
console.log(z -= y);
console.log(z /= y);
console.log(z *= y);
console.log(z %= y);
console.log(s1);

console.log(z++); //Incrementador
console.log(++z);
console.log(z--); //Decrementador
console.log(--z);