$(document).ready(function(){
	$("#add").on('click', function(){

		$('#lista tbody').prepend
		(

			'<tr style="text-align: center;">' +
				'<td>' + $('#item').val() + '</td>' +
				'<td><button class="check">Comprado</button></td>' +
				'<td><button class="remover">Remover</button></td>' +
			'</tr>'

		);

	});


	$('#lista').on('click', '.check', function(){

		$(this).parents('tr').css('background-color','green');

	});

	$('#lista').on('click', '.remover', function(){

		$(this).parents('tr').remove();

	});

});