function geraSomador(numero){
	return function(x){ return x + numero };
}

var soma5 = geraSomador(5);

/*
	
	soma5 = function(x){
		x + 5;
	}

*/


console.log(typeof(soma5));

soma4e5 = soma5(4);

console.log(soma4e5);
/*
	
	soma5 = function(4){
		4 + 5;
	}

*/