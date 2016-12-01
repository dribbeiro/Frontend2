function Livro(titulo, autor){
	this.titulo = titulo;
	this.autor = autor;

	this.Capitulos = {};
}

function Capitulo(titulo, autor){
	this.titulo = titulo;
	this.autor = autor;
}

Livro.prototype.getInfo = function(){
	return this.titulo + " - " + this.autor;
}

var lotr = new Livro('Lord of The Rings', 'J. R. R. Tolkien');
	lotr.Capitulos = {
		cap1: new Capitulo('Capitulo1 LotR', 'Autor1'),
		cap2: new Capitulo('Capitulo2 LotR', 'Autor2')
	}

var tresMosq = new Livro('Os Tres Mosqueteiros', 'Alexandre Dumas');
	tresMosq.Capitulos = {
		cap1: new Capitulo('Capitulo1 3Mosq', 'Autor1'),
		cap2: new Capitulo('Capitulo2 3Mosq', 'Autor2')
	}

	console.log(lotr.getInfo());
	console.log(lotr.Capitulos.cap1.titulo);
	console.log(lotr.Capitulos.cap1.autor);
	console.log(tresMosq.getInfo());
	console.log(tresMosq.Capitulos.cap2.titulo);
	console.log(tresMosq.Capitulos.cap2.autor);

var lotr = {
	titulo: 'Os Tres Mosqueteiros',
	autor: 'Alexandre Dumas',

	Capitulos: {

		cap1: {
			titulo: "Capitulo 1",
			paginas: 30
		},
		cap2: {
			titulo: "Capitulo2",
			paginas: 15
		}

	}

	getInfo: function(){}
}