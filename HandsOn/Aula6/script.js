var aluno = { nome: 'Aluno', idade: '' };

function digaOi(dados){

	this.nome = dados[0];
	this.idade = dados[1];

	console.log('Olá meu nome é '+this.nome+' e tenho '+this.idade+' anos!');
}

digaOi.call(aluno, ['Daniel', '23']);
digaOi.call(aluno, ['Maria', '23']);

console.log(aluno);


var obj = {
	valor: 7,

	get getValor() { return this.valor +1; },

	set setValor(novoValor) { this.valor = novoValor / 2; }

};

console.log(obj.valor);
console.log(obj.getValor);
obj.setValor = 10;
console.log(obj.valor);