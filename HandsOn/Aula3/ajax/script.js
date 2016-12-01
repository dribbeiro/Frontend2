$.ajax({

	url: 'http://viacep.com.br/ws/04101300/json/',
	type: 'GET',
	success: function(retorno){
		$('#inputCep').val(retorno.cep);
		console.log(retorno.bairro);
		console.log(retorno.logradouro);
		console.log(retorno.localidade);
	}

});