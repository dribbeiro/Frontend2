var app = angular.module("myApp", []);

app.controller('controllerName', function($scope){
	$scope.nome = 'World';
});

app.controller('segundaCtrl', function($scope){
	$scope.user = {};
	$scope.user.name = 'Robson';
});

app.controller('contadorCtrl', function($scope){
	
	$scope.contador = 0;

	$scope.addOne = function(){
		$scope.contador++;
	}

});