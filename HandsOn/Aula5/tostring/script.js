function Animal(nome){

	var nome;

	this.getNome = function(){ 
		return nome;
	}
	this.setNome = function(novoNome){ nome = novoNome; }

}

Animal.prototype.toString = function(){
	return 'Este animal se chama: ' + this.getNome();
}

var beethoven = new Animal('Beethoven');

alert(beethoven);