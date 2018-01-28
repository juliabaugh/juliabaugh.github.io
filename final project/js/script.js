
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



var nav = $(".subpages");
    stickyDiv = "sticky";
    yourHeader = $('header').height();
    //yourHeader = yourHeader + 40;

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


$('.project-photos').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      }
    }
]
});


$('#epping-forest').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: true
});




$('.test').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  adaptiveHeight: false

});











