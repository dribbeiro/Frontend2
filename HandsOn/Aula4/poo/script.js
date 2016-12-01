var obj = { nome: 'Daniel',
			curso: 'FrontEnd2' };

console.log(obj);

function Pet(){
	this.cor = 'Bege';

	this.beber = function(){
		alert('Leite');
	};
}

function Cachorro(nm, ps){
	this.nome = nm;
	this.peso = ps;

	this.getNome = function(){
		return this.nome;
	}

	this.setNome = function(nm){
		this.nome = nm;
	}

	this.latir = function(){
		alert('AuAu!');
	};

	this.beber = function(){
		alert('Agua');
	};
}

function Gato(nm,ps){
	this.nome = nm;
	this.peso = ps;
}

Cachorro.prototype = new Pet();
Gato.prototype = new Pet();

var cao = new Cachorro('Bob', '30Kg');
cao.cor = "Preto";
cao.setNome('Lessy');
cao.beber();
console.log(cao);

var gato = new Gato('Garlfield', '100gk');
gato.beber();
console.log(gato);