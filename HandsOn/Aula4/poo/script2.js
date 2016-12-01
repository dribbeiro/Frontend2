var Pessoa = function(){
	this.cumprimentar = function(){
		console.log('Olá, me chamo ' + this.nome);
	}
}

var Empregado = function(nome, cargo){
	this.nome = nome;
	this.cargo = cargo;

	this.cumprimentar = function(){
		console.log('Olá, me chamo ' + this.nome + ' e sou ' + this.cargo);
	}
}

var Desempregado = function(nome){
	this. nome = nome;
}

Empregado.prototype = new Pessoa();
Desempregado.prototype = new Pessoa();

var engenheiro = new Empregado('Bob', 'O Construtor');
var contador = new Empregado('Bob2', 'Contador')
var desemp = new Desempregado('Nome');

console.log(engenheiro);

engenheiro.cumprimentar();
contador.cumprimentar();
desemp.cumprimentar();