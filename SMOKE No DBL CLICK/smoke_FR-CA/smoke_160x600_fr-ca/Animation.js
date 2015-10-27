home_animation = (function() {
	
	

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


		TweenLite.to(bg, 0, {scaleX:1, scaleY:1});
		frame1();

	}
	

		
	function frame1()
	{
		TweenLite.to(first_text, 1.4, {opacity:0, top:-300, delay: 3});
		TweenLite.to(product_text, .6, {top:-17, scaleX:.72, scaleY:.72, delay:3});
		TweenLite.to(bg, .6, {top:-110, scaleX:.9, scaleY:.9, delay:3});

		TweenLite.delayedCall(3, frame2);
	}
	
	function frame2()
	{
		// slide up white bg
		TweenLite.to(white_BG, .6, {top:420});
		TweenLite.to(logo, 1, {opacity:1, delay:.9});	
		TweenLite.to(second_text, 3, {opacity:1, delay:1.4, ease: Expo.easeOut});		
		TweenLite.to(third_text, 4, {opacity:1, delay:2.6, ease: Expo.easeOut});	
		TweenLite.delayedCall(4.5, frame3);	
	}
	
	function frame3()
	{
		endFrame = 1;
		TweenLite.to(buy_now, 0.5, {opacity:1, delay:0});		
	}


container.onmouseover = function() {
	if(endFrame == 1)
	{
 		TweenLite.to(buy_now_over, 0.2, {opacity:1});
 		TweenLite.to(buy_now, 0.2, {opacity:0});
	}

}

container.onmouseout = function() {
	if(endFrame == 1)
	{	
 		TweenLite.to(buy_now_over, 0.2, {opacity:0});
  		TweenLite.to(buy_now, 0.2, {opacity:1});
	}
}


	init();
});





// If true, start function. If false, listen for INIT.
window.onload = function() {
  home_animation();
}

