
function blueBackground () {
	$('#out').css('background-color', 'blue')
}

$('#blue').click(blueBackground);




function redBackground () {
	$('#out').css('background-color', 'red')
}

$('#red').click(redBackground);


var currentValue = $('#out').html();
var a10 = $('#a10').html();
var a20 = $('#a20').html();
var a30 = $('#a30').html();

currentValue = parseInt(currentValue);

function addValue (){
	(a10 + currentValue)
}

$('#a10').click(addValue);

