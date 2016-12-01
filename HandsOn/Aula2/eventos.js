$(document).ready(function(){

	document.getElementById('box').addEventListener("mousedown", function(e){
		alert('mouseX=' + e.screenX + ', mouseY=' + e.screenY);
	});

	/*document.getElementById('carros').addEventListener('change', function(){
		alert('Selecionei: ' + this.value);
	});*/

	/*var arrVeiculos = document.getElementsByClassName('veiculos');
	for(var i = 0; i < arrVeiculos.length; i++){
		arrVeiculos[i].addEventListener('change', function(){
			selecionei(this.value);
		});
	}*/

	function selecionei(val){
		alert('Selecionei: ' + val);
	}

	function keyPress(e){
		alert('Selecionei: ' + e.which); //e.keyCode
	}

	function myFunction(){
		var x = "Sou uma String";
		try{
			if(x == "") throw "Valor Vazio";
			if(isNaN(x)) throw "NaN";
		}catch(err){
			console.log(err);
		}finally{
			console.log(x);
		}
	}

	//myFunction();

	var dataAtual = new Date();
	console.log(dataAtual.getDate());
	console.log(dataAtual.getFullYear());
	console.log(dataAtual.getMonth());
	console.log(dataAtual.toString());

	var string = 'Javascript e Jquery';
	var arrString = string.split(" ");
	arrString[0]; //Javascript
	arrString[1]; //e
	arrString[2]; //Jquery

	var strReplaced = string.replace(" ", "-"); //Javascript-e Jquery

	var subString = string.substr(13, 6);
	console.log(subString);


	////////////////////////Jquery////////////////////////////////
	$('.veiculos').each(function(){
		$(this).change(function(){
			selecionei($(this).val());
		});
	});

});