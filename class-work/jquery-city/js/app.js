// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/*$('#first').click(FirstImage);
$('#second').click(SecondImage);
$('#third').click(ThirdImage);
$('#fourth').click(FourthImage);

function FirstImage (){
	$('#bigimage').attr('src', 'img/1.jpg')
}

function SecondImage (){
	$('#bigimage').attr('src', 'img/2.jpg')
}

function ThirdImage (){
	$('#bigimage').attr('src', 'img/3.jpg')
}

function FourthImage (){
	$('#bigimage').attr('src', 'img/4.jpg')
}

*/


function changeImage (){
	var imgName = $(this).attr('src');
	$('#bigimage').attr('src', imgName);
}

$('.thumb').click(changeImage);

