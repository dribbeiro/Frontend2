$(document).ready(function(){

	$("#main").on("click", "p", function(){
		alert($(this).text());
	});

	$("#main").append("<p>Texto do paragrafo 5</p>");

	$("#main").on("mouseenter mouseleave", function(){
		$(this).slideToggle("slow");
	});

});