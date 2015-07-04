function viewMobileWebsite() {
  $.cookie("view", 1);
  window.location = "http://pacis2015.org/mobile/index.html";
}

$(document).ready(function() {
  if (screen.width < 600) {
    $(".mobile-site-link").show();
  } else {
    // hiding mobile link
    $(".mobile-site-link").hide();
  }

  console.log(screen.width );
  if (screen.width < 600) {
    if ($.cookie('view') == undefined) {
      $.cookie("view", 1)
    }

    // if cookie is 1, direct to mobile website
    if ($.cookie('view') == 1) {
     window.location = "http://pacis2015.org/mobile/index.html";
   }
  }
});
