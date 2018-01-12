
function convertCtemp () {
	var Ctemp = $('.celsius').val();
	Ctemp = parseInt (Ctemp);
	Ctemp = ((Ctemp*1.8) + 32);
	$('.fahrenheit-answer').html(Ctemp);


	if (Ctemp > 50) {
		$('body').css('background-color', 'red');
	} else {
		$('body').css('background-color', 'white');
	}

}

$('.convertCButton').click(convertCtemp);


function convertFTemp () {
	var Ftemp = $('.fahrenheit').val();
	Ftemp = parseInt (Ftemp);
	Ftemp = ((Ftemp - 32)*1.8);
	$('.celsius-answer').html(Ftemp);



}

$('.convertFButton').click(convertFTemp);




