
function blueBackground () {
	$('#out').css('background-color', 'blue')
}
$('#blue').click(blueBackground);


function redBackground () {
	$('#out').css('background-color', 'red')
}
$('#red').click(redBackground);


function clear () {
	$('#out').html(0)
}
$('#out').click(clear);

function whiteBackground () {
	$('#out').css('background-color', 'white')
}
$('#out').click(whiteBackground);



function addA10 (){
	var currentValue = $('#out').html();
	currentValue = parseInt(currentValue);
	currentValue = currentValue + 10;
	$('#out').html(currentValue);
}
$('#a10').click(addA10);

function addA20 (){
	var currentValue = $('#out').html();
	currentValue = parseInt(currentValue);
	currentValue = currentValue + 20;
	$('#out').html(currentValue);
}
$('#a20').click(addA20);

function addA30 (){
	var currentValue = $('#out').html();
	currentValue = parseInt(currentValue);
	currentValue = currentValue + 30;
	$('#out').html(currentValue);
}
$('#a30').click(addA30);

function subtract10 (){
	var currentValue = $('#out').html();
	currentValue = parseInt(currentValue);
	currentValue = currentValue - 10;
	$('#out').html(currentValue);
}
$('#n10').click(subtract10);

function subtract20 (){
	var currentValue = $('#out').html();
	currentValue = parseInt(currentValue);
	currentValue = currentValue - 20;
	$('#out').html(currentValue);
}
$('#n20').click(subtract20);

function subtract30 (){
	var currentValue = $('#out').html();
	currentValue = parseInt(currentValue);
	currentValue = currentValue - 30;
	$('#out').html(currentValue);
}
$('#n30').click(subtract30);


/*I'm sure there is a more simple way of writing this! I was trying out another option below but didn't get it to work..

function addValue (){
	var currentValue = $('#out').html();
	currentValue = parseInt(currentValue);
	var x, y = $('#a10, #a20').html();
	x = parseInt(x);
	currentValue = currentValue + x;
	$('#out').html(currentValue);
}
$('#a10, #a20').click(addValue);*/


