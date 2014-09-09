$(document).ready(function() {
	var windowHeight = $(window).height();
	$('.outer-container').css({"height" : windowHeight + "px"});
});

$(window).resize(function() {
	var windowHeight = $(window).height();
	$('.outer-container').css({"height" : windowHeight + "px"});
});