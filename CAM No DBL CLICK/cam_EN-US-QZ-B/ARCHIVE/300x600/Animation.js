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
		TweenLite.to(first_text, 1.4, {top:-180, delay: 2});
		TweenLite.to(first_text, 1, {opacity:0, delay: 2.3});
		TweenLite.to(product_text, 1.2, {top:10, delay:2});		
		TweenLite.to(bg, 1, {top:-39, delay:2.2});		
		// slide up white bg
		
		TweenLite.delayedCall(2, frame2);
	}
	
	function frame2()
	{	
		TweenLite.to(white_BG, 1.15, {top:432, delay:0});
		TweenLite.to(logo, 1, {opacity:1, delay:1.5});
		TweenLite.to(second_text, 3, {opacity:1, delay:2.5});
		TweenLite.to(third_text, 3, {opacity:1, delay:3.5});
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

