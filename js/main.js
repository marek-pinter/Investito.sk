

$ (function () {   // = $(document).ready(function(){

	var sipka = $(".sipka")

		$(window).on("scroll", function()  {
		if ($(window).scrollTop() > 300) sipka.fadeIn();
 			else sipka.fadeOut();
	});


	
	sipka.click(function() {
		$("html, body").animate({scrollTop:0});
	});


     /* hamburger menu */

	var menu2 = $(".menu2")
		main = $("main")

	$(".hamburger").click(function() {
		menu2.fadeIn();
		main.hide();
	});
	
	$(".exit").click(function() {
		menu2.fadeOut();
		main.show();
	});	

		/* jazyk */

	var jazyk = $(".jazyk")
		navli = $("nav ul li:last-child")	

	jazyk.hide();
	navli.mouseenter(function() {
		jazyk.stop().fadeIn();
	});

	navli.mouseleave(function() {
		jazyk.stop().fadeOut();
	});

});	


