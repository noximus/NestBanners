home_animation = (function() {
	
	var boundEvents = {};

	function bind (elem, eventName, callback) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, callback, false);
		}

		else if (elem.attachEvent) {
			var eID = elem.attachEvent('on'+ eventName, callback);
			boundEvents[eID] = { name: eventName, callback: callback };
		}
	}

	function unbind (elem, eventName, callback) {
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, callback, false);
		}

		else if (elem.detachEvent) {
			for (var eID in boundEvents) {
				if ((boundEvents[eID].name === eventName) &&
						(boundEvents[eID].callback === callback)) {
					elem.detachEvent(eID);
					delete boundEvents[eID];
				}
			}
		}
	}

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";


		// CTA BTN CLICKTAG //
			bind(document.getElementById('click_screen'), 'click', function(e) 
			{
				e.preventDefault();
				Enabler.exit("clickTag1");
			});
	
		TweenLite.to(product_text, 0, {scaleX:1.1, scaleY:1.1});
		TweenLite.to(bg, 0, {scaleX:1.1, scaleY:1.1});

		frame1();

	}
	

		
	function frame1()
	{
		TweenLite.to(first_text, 1, {top:-300, delay: 2});
		TweenLite.to(bgMask, 1, {opacity:0, top:-179, delay: 2});
		// TweenLite.to(first_text, 1, {opacity:0, delay: 2.3});
		TweenLite.to(product_text, 1.2, {top:-170, scaleX:1, scaleY:1, delay:2});		
		TweenLite.to(bg, 1.2, {top:-179, scaleX:1, scaleY:1, delay:2});		
		// slide up white bg
		TweenLite.to(bgMask2, 1.1, {top:0, opacity:1, delay:2});
		TweenLite.delayedCall(2, frame2);
	}
	
	function frame2()
	{	
		TweenLite.to(white_BG, 1.15, {top:425, delay:0});

		TweenLite.to(logo, 1, {opacity:1, delay:1});
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
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}

function enablerInitHandler() {
  home_animation();
}

