module fourLinux {

	export class Aula {

		alunos: number;

		constructor (inscritos:number){
			this.alunos = inscritos;
		}

		mensagem(){
			return "Seja bem-vindo, temos " +this.alunos+ " alunos na turma";
		}

	}

}

var turma = new fourLinux.Aula(7);