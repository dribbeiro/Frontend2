var a = 10;
var b = 15;

//IFs
if(a == b){
	console.log('A é igual a B');
}else if(a > b){
	console.log('A maior que B');
}else{
	console.log('A menor que B');
}

if(a == b && a > b){
	console.log('A igual e maior que B') //>=
} else {
	console.log('A menor que B');
}

(a == b) ? console.log('A = B') : ((a > b) ? console.log('A > B') : console.log('A < B'));

//SWITCH
b = 5; //parseInt(prompt('Digite um numero: '));
switch(b){
	case 5:
		console.log('Case 5');
	break;
	case 10:
		console.log('Case 10');
	break;
	case 15:
		console.log('Case 15');
	break;
	default:
		console.log('Default');
	break;
}

//WHILE
var i = 0;
while(i < 3){
	console.log(++i);
}

j = 100;
do{
	console.log(++j);
}while(j < 3);

//FOR
arr = [5,10,15,20,25];
console.log(arr.length);
for(var z = 0; z < arr.length; z++){
	console.log(arr[z]);// arr[0], arr[1]...
}

for( var z in arr ){
	console.log(arr[z]);
}

//Funcao

function somar(n1,n2){
	var soma = n1 + n2;
	return soma;
}

var soma1 = somar(3,7);
console.log(soma1);