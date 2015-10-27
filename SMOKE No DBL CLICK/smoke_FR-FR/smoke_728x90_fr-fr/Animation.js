home_animation = (function() {
	
	

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


		
		//TweenLite.to(threeX, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(product_text, 0, {scaleX:1.1, scaleY:1.1});
		frame1();
	}
	function frame1()
	{	
		TweenLite.to(white_BG, .5, {opacity: 1, delay:2});
		// slide left white bg
		TweenLite.to(white_BG, 1.6, {left:235, delay:2.3});
		TweenLite.to(first_text, 1.8, {left:-500, opacity:0,delay: 2.3});
		TweenLite.to(product_text, 1.6, {left:-380, delay:2.3});		
		TweenLite.to(bg, 1.6, {left:-250, delay:2.3});
		TweenLite.delayedCall(4, frame2);
	}
	
	function frame2()
	{	
		TweenLite.to(second_text, 2, {opacity:1, delay:0});		
		TweenLite.to(third_text, 2, {opacity:1, delay:1.5});	
		TweenLite.delayedCall(3, frame3);
	}
	
	function frame3()
	{
		endFrame = 1;
		TweenLite.to(logo, 2, {opacity:1, delay:0});
		TweenLite.to(buy_now, 1, {opacity:1, delay:1.2});		
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

