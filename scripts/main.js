$(document).ready(function(){

	// text cycle animation
	$(".textFade").textrotator({
	  animation: "dissolve",
	  separator: ",",
	  speed: 5000
	});

	// content shitty fade in ------------ prelim "WIP"
	// $('body').fadeIn(1000);

	// need to optimize this - fade in nav overlay / fade out content behind
	$("#burger").click(function(){
		$('#overlay').addClass('nav-on');
		$('#other').addClass('hide');
	});

	// need to optimize this - fade out nav on out click / fade in content behind
	$("#overlay").click(function(){
		$('#overlay').removeClass('nav-on');
		$('#other').removeClass('hide');
	});

});

$(window).scroll(function(){

  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  var desiredWindowHeight = windowHeight * .6;  //since we use a height of 60vh, we take 60% of windowHeight for proper "push" animation
  var slideProgress = desiredWindowHeight - scrollTop;

  var moveProgress = 1 - (windowHeight * (scrollTop / windowHeight));
  var fadeProgress = 1 - (scrollTop / (0.5 * windowHeight));

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

  if(scrollTop > 380){
  	$('#social').hide(); // clear from dom
  }

  if(scrollTop <= 380){
  	$('#social').show(); // re-enter dom
  }

  $('#social').css('opacity', fadeProgress);

  $('#social').css('transform', 'translateY(' +  0.1 * moveProgress + 'px)');

  console.log('slideProgress');

});










