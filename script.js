$(document).ready(function(){

	var rodada = 1;
	var jogadorAtual = 'X';
	var fimDeJogo = false;

	var quads = ["","","","","","","","",""];


	$('.quadrante').click(function(){

		if(rodada % 2 == 0){
			if($(this).html() == ""){
				console.log(rodada);
				$(this).html('O');
				$('#proximo').text('X');
				jogadorAtual = 'O';
				rodada++;
			}else{
				alert('Opa, escolha um quadrante vazio para jogar!');
			}
		}else{
			if($(this).html() == ""){
				console.log(rodada);
				$(this).html('X');
				$('#proximo').text('O');
				jogadorAtual = 'X';
				rodada++;
			}else{
				alert('Opa, escolha um quadrante vazio para jogar!');
			}
		}

		setQuadsVal($(this).attr('quadpos'));

		window.setTimeout(function(){
			//horizontais
			testaPadroes(quads[0], quads[1], quads[2], jogadorAtual);
			testaPadroes(quads[3], quads[4], quads[5], jogadorAtual);
			testaPadroes(quads[6], quads[7], quads[8], jogadorAtual);

			//verticais
			testaPadroes(quads[0], quads[3], quads[6], jogadorAtual);
			testaPadroes(quads[1], quads[4], quads[7], jogadorAtual);
			testaPadroes(quads[2], quads[5], quads[8], jogadorAtual);

			//diagonais
			testaPadroes(quads[0], quads[4], quads[8], jogadorAtual);
			testaPadroes(quads[2], quads[4], quads[6], jogadorAtual);

			testaVelha(fimDeJogo);	
		}, 500);



	});

	$("#reiniciar").click(function(){
		reiniciar();
	});

	function testaVelha(){

		if(quads.indexOf("") < 0 && fimDeJogo == false){
			alert('Velha, tente novamente');			
		}
	}

	function reiniciar(){
		quads = ["","","","","","","","",""];
		$('.quadrante').each(function(){
			$(this).html("");
		});
		fimDeJogo = false;
	}

	function setQuadsVal(i){
		quads[i] = $('#quad'+i).html();
	}

	function testaPadroes(quad1, quad2, quad3, jogadorAtual){

		if((quad1 == quad2 && quad2 == quad3 && quad1 == quad3) && (quad1 != "" && quad2 != "" && quad3 != "")){
			alert('Parabens, o Jogador "' + jogadorAtual + '" venceu!');
			fimDeJogo = true;
		}

	}

});