jQuery(document).ready(function ($) {
  $("#menutrigger").click(function () {
    $(".menu>ul").slideToggle();
  });

  $(window).on("load resize", function (e) {
    var windowWidth = $(window).width();
    if (windowWidth + 17 > 728) {
      $(".menu>ul").css("display", "block");
    } else {
      $(".menu>ul").css("display", "none");
    }
  });
});

$("#contactSubmit").click(function (e) {
  e.preventDefault();
  var error = false;

  var yourName = $("#your-name").val();
  if (yourName == "") {
    var error = true;
    $("#your-name").addClass("error-box").removeClass("noerror-box");
  } else {
    $("#your-name").addClass("noerror-box").removeClass("error-box");
  }

  var yourEmail = $("#your-email").val();
  if (yourEmail !== "" && validateEmail(yourEmail)) {
    $("#your-email").addClass("noerror-box").removeClass("error-box");
  } else {
    var error = true;
    $("#your-email").addClass("error-box").removeClass("noerror-box");
  }

  var yourSubject = $("#your-subject").val();
  if (yourSubject == "") {
    var error = true;
    $("#your-subject").addClass("error-box").removeClass("noerror-box");
  } else {
    $("#your-subject").addClass("noerror-box").removeClass("error-box");
  }

  var yourMessage = $("#your-message").val();
  if (yourMessage == "") {
    var error = true;
    $("#your-message").addClass("error-box").removeClass("noerror-box");
  } else {
    $("#your-message").addClass("noerror-box").removeClass("error-box");
  }

  if (error == false) {
    $("contactForm").submit();
  }
});

function validateEmail(email) {
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (filter.test(email)) {
    return true;
  } else {
    return false;
  }
}
