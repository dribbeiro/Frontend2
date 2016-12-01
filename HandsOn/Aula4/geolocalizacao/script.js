if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(
		function(pos){
			console.log("A sua longitude atual é: " +pos.coords.longitude+ "\n A sua latitude atual é: " +pos.coords.latitude);
			document.getElementById('lat').value = pos.coords.latitude;
			document.getElementById('long').value = pos.coords.longitude;
			console.log(pos);
		},
		function(err){
			console.log(err);
		},
		{
			enableHighAcurracy: true,
			timeout: 5000	
		}
		);
}else{
	alert("Seu navegador não suporta Geolocalizacao");
}