
$('.hide').hide();

function show (){
	$('.hide').toggle("fast", changeText);
}

function changeText (){
	$('.about').html("hide");

	/*var aboutText = $('.about').html();

	if (aboutText === "hide"){
	$('.about').html("about");
	} else $('.about').html("hide");*/
}



$('.about').click(show);










