
function converttemp () {
	var C = $('.celsius').val();
	var F = $('.fahrenheit').val();
	C = parseInt (C);
	F = parseInt (F);
	F = ((C*1.8) + 32);
	C = ((F - 32)/1.8);
	$('.fahrenheit').val(F);
	$('.celsius').val(C);




	if (C > 50) {
		$('body').css('background-color', 'red');
	} else if (C < 0) {
		$('body').css('background-color', 'blue');
	} else {
		$('body').css('background-color', 'white');
	}


}

$(this).focusout(converttemp);






