function Livro(titulo, ano){

	this.titulo = titulo; 	//Attr Publico
	this.ano = ano; 		//Attr Publico
	var genero;				//Attr Privado

	this.getGenero = function(){ return genero; } //Metodo Publico
	this.setGenero = function(novoGenero){ 		  //Metodo Publico
		genero = novoGenero;
	}

}

Livro.prototype.autor = "Sdasda";
Livro.prototype.lancamento = "Data Lancamento";

var lotr = new Livro('Lord of The Rings', '29/07/1954');
lotr.autor = "J. R. R. Tolkien";
lotr.setGenero('medieval'); //Acessa e Setta um valor a Variavel Privada genero

console.log(lotr.autor);
console.log(lotr.getGenero()); //Acessa e Retorna o valor da Variavel Privada genero
console.log(lotr.titulo);
console.log(lotr.ano);

var hp = new Livro('Harry Potter', '30/10/1990');
console.log(hp.autor);
console.log(hp.lancamento);