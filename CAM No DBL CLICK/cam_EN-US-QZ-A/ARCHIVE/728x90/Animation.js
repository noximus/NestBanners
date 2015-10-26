home_animation = (function() {
	
	

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


		
	
		//TweenLite.to(threeX, 0, {scaleX:2.5, scaleY:2.5});
		//TweenLite.to(tool, 0, {scaleX:2.5, scaleY:2.5});

		frame1();

	}
	

		
	function frame1()
	{	
		TweenLite.to(white_BG, .6, {opacity: 1, delay:2.1});
		TweenLite.to(first_text, 1.8, {left:-400, opacity:0,delay: 2.3});
		TweenLite.to(product_text, 1.7, {left:0, delay:2.3});		
		TweenLite.to(bg, 1.3, {left:-50, delay:2.2});	
		// slide up white bg
		TweenLite.to(white_BG, 1.5, {left:235, delay:2.3});
		TweenLite.delayedCall(4, frame2);
	}
	
	function frame2()
	{	
		TweenLite.to(second_text, 3, {opacity:1, delay:0});		
		TweenLite.to(third_text, 3, {opacity:1, delay:1});	
		TweenLite.delayedCall(3, frame3);
	}
	
	function frame3()
	{
		endFrame = 1;
		TweenLite.to(buy_now, 3, {opacity:1, delay:1});		
		TweenLite.to(logo, 3, {opacity:1, delay:0});
		

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

