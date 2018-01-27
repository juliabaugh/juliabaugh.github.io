
$('.hide').hide();

function show (){
	$('.hide').toggle("fast", changeText);

}

function changeText (){

	//$('.about').html("hide");

	var aboutText = $('.about').html();

	if (aboutText === "hide"){
		$('.about').html("about");
	} else {
		$('.about').html("hide");		
	}
}


$('.about').click(show);


// need to add a this somewhere so the action only happens to that element




function NextImage(imgNum) {
	var imgName = $(this).attr('src');
	imgName = "photo" + x + ".jpg";
	imgNum = parseInt(imgNum)
	imgNum = imgNum + 1;

	$(this).attr('src', imgName)
}

$(this).click(NextImage);



// also I want to set up right and left buttons that you click on to select the next or previous photo


var nav = $(".subpages");
    stickyDiv = "sticky";
    yourHeader = $('header').height();
    yourHeader = yourHeader + 20;

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    nav.addClass(stickyDiv);
  } else {
    nav.removeClass(stickyDiv);
  }
});





$(document).ready(function(){
  $('.mainPhoto').slick({
    arrows: true,
    accessibility: false,
    dots: true
  });
});

//$('.mainPhoto').slick();













