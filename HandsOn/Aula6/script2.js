var fourLinux = {
	appName: "4Linux JS",
	version: "0.3",
	MyApp: {
		Modulo: {}
	}
};

(function(classe){

	var cpf;
	classe.nome = 'Nome do Aluno';

	classe.getCpf = function(){
		return cpf;
	}

	classe.setCpf = function(novoCpf){
		cpf = novoCpf;
	}

})(fourLinux.MyApp.Modulo.Aluno = {});

aln = Object.create(fourLinux.MyApp.Modulo.Aluno);
aln.nome = 'Daniel';
aln.setCpf('999.999.999-00');
console.log(aln.nome);
console.log(aln.getCpf());