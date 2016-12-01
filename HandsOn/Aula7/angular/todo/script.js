var app = angular.module("myApp", []);

app.controller('ToDoCtrl', function($scope){

	$scope.todos =
	[
		{texto: 'Aprender AngularJS', done: false},
		{texto: 'Primeira App com AngularJS', done: false}
	];

	$scope.getTodoTotal = function(){
		return $scope.todos.length;
	}

	$scope.addOne = function(){
		
		$scope.todos.push({texto: $scope.newTodo, done: false});
		$scope.newTodo = "";

	}

	$scope.limpar = function(){	
		for(var i = $scope.todos.length-1; i >= 0 ; i--){
			if($scope.todos[i].done){
				$scope.todos.splice(i, 1);
			}
		}
	}

});