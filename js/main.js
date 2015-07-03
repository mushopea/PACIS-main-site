function viewMobileWebsite() {
  var now = new Date();
  var expiresDate = new Date();
  expiresDate.setDate(now.getDate() + 1);
  $.cookie("view", 1, {
    expires: expiresDate
  });
  window.location = "mobile/index.html";
}

if (screen.width < 600) {
  // if there is no cookie, set it to 1: mobile website
  if ($.cookie('view') == null) {
    var now = new Date();
    var expiresDate = new Date();
    expiresDate.setDate(now.getDate() + 1);
    $.cookie("view", 1, {
      expires: expiresDate
    });
  }

  // if cookie is 1, direct to mobile website
  if ($.cookie('view') == 1) {
    window.location = "mobile/index.html";
  }
}

$(document).ready(function() {
  if (screen.width < 600) {
    $(".mobile-site-link").show();
  } else {
    // hiding mobile link
    $(".mobile-site-link").hide();
  }
});
