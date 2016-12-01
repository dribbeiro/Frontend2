var promise = new Promise(function(resolve, reject){

	console.log('Codigo Assincrono iniciado');

	window.setTimeout(function(){
		nome = 'Daniel';
		resolve('Promise Cumprida');

	}, 2000);

});

promise.then(function(result){

	console.log(result);
	console.log(nome);

});

window.setInterval(function(){

	console.log('Set Interval');

}, 10000);