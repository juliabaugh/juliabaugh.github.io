

// hide and unhide "about" text below each project

$('.hidden').hide();

$('.show-text').click(show);

function show(){
	var element = $(this).find('.hidden');
	$(element).toggle('fast');
}


function changeText (){

	var aboutText = $(this).find('.about');
		aboutText = $(this).html();

	if (aboutText === "hide"){
		$(this).html("about");
	} else {
		$(this).html("hide");		
	}
}

$('.about').click(changeText);



//keep nav bar on top as you scroll down

var nav = $(".subpages");
    stickyDiv = "sticky";
    yourHeader = $('header').height();
    yourHeader = yourHeader + 20;

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    nav.addClass(stickyDiv);
    $('#green-consulting').addClass('more-space');
  } else {
    nav.removeClass(stickyDiv);
    $('#green-consulting').removeClass('more-space');

  }
});



//homepage slider

$(document).ready(function(){
  $('.mainPhoto').slick({
    arrows: true,
    accessibility: false,
    dots: true
  });
});


//project sliders

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


// hamburger for mobile nav

/*$(document).ready(function(){
	$('.hamburger').click(function(){
		$('.subpages').toggle(fast);
	});
});

*/

$('.hamburger').click(show);

function show(){
	$(nav).toggle();
	$('.hamburger').toggleClass(green);
}




/* special hamburger that switches into an x

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


*/




