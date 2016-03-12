$(document).ready(function(){

	// text cycle animation
	$(".textFade").textrotator({
	  animation: "dissolve",
	  separator: ",",
	  speed: 5000
	});


  var menuLink = $('.menu__link');
  var header = $('header');
  var body = $('html');

  menuLink.click(function(){

    var f = !$(this).data("toggleFlag");

    if (f){
      header.animate({height: "100vh"}, 350, function(){
      body.bind('touchmove scroll mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    });

    } else {
      header.unbind();
      body.unbind('touchmove scroll mousewheel');
    }

    $(this).data("toggleFlag", f);

  });
});


// Disable arrow key scrolling
$(document).keydown(function(e){
  
  if (e.keyCode == 37){ 
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.keyCode == 38){ 
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.keyCode == 39){ 
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  if (e.keyCode == 40){ 
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  
});







$(window).scroll(function(){

  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  var desiredWindowHeight = windowHeight * .6;  //since we use a height of 60vh, we take 60% of windowHeight for proper "push" animation
  var slideProgress = desiredWindowHeight - scrollTop;

  // negative zero
  if (scrollTop < 0){ 
    scrollTop = 0;
  }

  if (scrollTop <= 0){
    $('header').css('height', '60vh');
  }

  if(scrollTop >= 1){
    $('header').css('height', slideProgress);
  }

  // freeze header height at 100px 
  if(slideProgress < 100){
    $('header').css('height', '100px');
  }


  // social link manipulation
  var moveProgress = 1 - (windowHeight * (scrollTop / windowHeight));
  var fadeProgress = 1 - (scrollTop / (0.5 * windowHeight));

  //connect fade and slide
  $('.connect').css('opacity', fadeProgress);

  $('.connect').css('transform', 'translateY(' +  0.1 * moveProgress + 'px)');

  console.log('slideProgress');

});










