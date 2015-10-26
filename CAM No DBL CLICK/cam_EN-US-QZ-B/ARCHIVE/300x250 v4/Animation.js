home_animation = (function() {
	
	

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


	
	
		//TweenLite.to(threeX, 0, {scaleX:2.5, scaleY:2.5});
		//TweenLite.to(tool, 0, {scaleX:2.5, scaleY:2.5});

		frame2();

	}
	

		
	function frame1()
	{
		///TweenLite.to(first_text, 2.8, {top:-300, delay: 2.2});
		//TweenLite.to(product_text, 2.8, {top:-24, delay:2.2});		
		TweenLite.to(bg, 1, {top:-252, delay:2.2});		

		TweenLite.delayedCall(1, frame2);
	}
	
	function frame2()
	{
		// slide up white bg
		TweenLite.to(bg, 1.2, {top:-283, delay:3});	
		TweenLite.to(white_BG, 1.2, {top:200, delay:3});
	//	TweenLite.to(product_text, 1, {top:-33, delay:3.2});		
		
		TweenLite.to(second_text, 3, {opacity:1, delay:4, ease: Expo.easeOut});		
		TweenLite.to(third_text, 5, {opacity:1, delay:6, ease: Expo.easeOut});	

		TweenLite.delayedCall(8.5, frame3);	

	}
	
	function frame3()
	{	
		TweenLite.to(second_text, 0.5, {opacity:0, delay:0});		
		TweenLite.to(third_text, 0.5, {opacity:0, delay:0});	

		TweenLite.delayedCall(0.8, frame4);

	}
	
	function frame4()
	{
		endFrame = 1;
		TweenLite.to(buy_now, 3, {opacity:1, delay:0.5});		
		TweenLite.to(logo, 1, {opacity:1, delay:0});
		

	}


	
	function frame5()
	{


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

