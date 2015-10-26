home_animation = (function() {
	
	

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


		
		frame1();

	}
	
	function frame1()
	{
		// slide up white bg
		TweenLite.to(first_text, 1.2, {opacity:0,top:-250, delay: 2});
		TweenLite.to(product_text, .8, {top:14, delay:2.1});	
		TweenLite.to(bg, .9, {top:-231, delay:2});	
		TweenLite.to(white_BG, .9, {top:200, delay:2});
		TweenLite.to(second_text, 3, {opacity:1, delay:3, ease: Expo.easeOut});		
		TweenLite.to(third_text, 5, {opacity:1, delay:4.6, ease: Expo.easeOut});
		TweenLite.delayedCall(10, frame2);	
	}
	
	function frame2()
	{	
		TweenLite.to(second_text, 0.5, {opacity:0, delay:0});		
		TweenLite.to(third_text, 0.5, {opacity:0, delay:0});	
		TweenLite.delayedCall(0.7, frame3);
	}
	
	function frame3()
	{
		endFrame = 1;
		TweenLite.to(buy_now, 3, {opacity:1, delay:0.5});		
		TweenLite.to(logo, 1, {opacity:1, delay:0});
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
window.onload = function() {home_animation();
}

