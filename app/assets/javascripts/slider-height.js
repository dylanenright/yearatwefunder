skrollr.init({
    smoothScrolling: true,
    forceHeight: false

});

var maxWidth = $(window).width();
var maxHeight = $(window).height();

$(document).ready(function(){
    $('.welcome, .intro, .sign-up').css({
        width: maxWidth,
        height: maxHeight
    });
});

 $( window ).resize(function() {
 var maxWidth = $(window).width();
 var maxHeight = $(window).height();
 $('.welcome, .intro, .sign-up').css({
        width: maxWidth,
        height: maxHeight
});   

});




// $(document).ready(function() {
//	var windowHeight = $(window).height();
//	$('.outer-container').css({"height" : windowHeight + "px"});
// });

// $(window).resize(function() {
//	var windowHeight = $(window).height();
//	$('.outer-container').css({"height" : windowHeight + "px"});



//	$(window).scroll(function()


//);
// });