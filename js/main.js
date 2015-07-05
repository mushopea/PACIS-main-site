function viewMobileWebsite() {
	$.cookie('layoutMode', 1, { expires: 1, path: '/' });
    window.location.href = "http://pacis2015.comp.nus.edu.sg/mobile/index.html";
}

$(document).ready(function() {
    if ((/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)) {
        $(".mobile-site-link").show();
    } else {
        $(".mobile-site-link").hide();
    }

    console.log(screen.width);
    if ((/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)) {
        if ($.cookie('layoutMode') == undefined) {
			$.cookie('layoutMode', 1, { expires: 1, path: '/' });
            console.log($.cookie('layoutMode') + " is initialized cookie");
        }

        console.log($.cookie('layoutMode') + " is the current cookie. Detected mobile in desktop.");

        // if cookie is 1, direct to mobile website
		var val = $.cookie('layoutMode');
        if ($.cookie('layoutMode') == 1) {
            console.log($.cookie('layoutMode') + " is the current cookie, redirecting to mobile. Val is " + val);
            window.location.href = "http://pacis2015.comp.nus.edu.sg/mobile/index.html";
        }
    }
});


/*
function viewMobileWebsite() {
    window.location.href = "http://pacis2015.comp.nus.edu.sg/mobile/index.html";
}

$(document).ready(function() {
	var url = window.location.href;

	if(url == "http://pacis2015.comp.nus.edu.sg/" || url == "http://pacis2015.comp.nus.edu.sg/index.html")
	{
		var isMobileDevice = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
		
		if (isMobileDevice) {
			$(".mobile-site-link").show();
		} else {
			// hiding mobile link
			$(".mobile-site-link").hide();
		}
	
		if (isMobileDevice) {
		   window.location.href = "http://pacis2015.comp.nus.edu.sg/mobile/index.html";
		}
	}
});
*/