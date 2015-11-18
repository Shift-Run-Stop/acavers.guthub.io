$(document).ready(function(){

$("h1").click(function(){
	$( "#sandwich" ).animate({
	    opacity: 0.25,
	    left: "+=50",
	    height: "toggle"
	  }, 5000, function() {
	    // Animation complete.
	  });
});


});