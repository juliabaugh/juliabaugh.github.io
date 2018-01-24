
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


// this doesn't work yet.. 

// also I want to set up right and left buttons that you click on to select the next or previous photo

  var stickyNavTop = $('.subpages').offset().top;

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
      $('.subpages').addClass('sticky');
    } else {
      $('.subpages').removeClass('sticky'); 
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });










