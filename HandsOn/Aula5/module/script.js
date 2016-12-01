var Module = (function(){

	var privateMethod = function(){
		return 'privado';
	};

	return {
		valor: 'publico',
		publicMethod: function(){
			console.log('Metódo '+ this.valor + ' e ' + privateMethod());
		}
	};

})();

Module.publicMethod();