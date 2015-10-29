home_animation = (function() {
	
	

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


		
	
		TweenLite.to(product_text, 0, {scaleX:1.2, scaleY:1.2});
		TweenLite.to(bg, 0, {scaleX:1.1, scaleY:1.1});

		frame1();
	}
	
	function frame1()
	{
		TweenLite.to(first_text, .8, {top:-300, delay: 2});
		TweenLite.to(product_text, 1, {top:-110, delay:2});	
		TweenLite.to(bg, 1, {top:-145, scaleX:1, scaleY:1, delay:2});		
		TweenLite.delayedCall(2, frame2);
	}
	
	function frame2()
	{	
		TweenLite.to(white_BG, 1, {top:425, delay:0});
		TweenLite.to(logo, .9, {opacity:1, delay:1});
		TweenLite.to(second_text, 3, {opacity:1, delay:1.2});
		TweenLite.to(third_text, 3, {opacity:1, delay:2.5});
		TweenLite.delayedCall(4, frame3);
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

