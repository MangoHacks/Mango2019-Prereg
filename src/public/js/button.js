import $ from "jquery";

$(document).ready(function() {
  var $button = $("#button");
  var $form = $("#the-form");
  var $emailinput = $("#email");
  var $emaillabel = $("#email-label");
  var $submit = $("#submit-btn");

  $button.on("click", function(event) {
    $button.addClass("fadeOut");
  });

  $button.one(
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
    function() {
      $button.addClass("hide");
      $form.removeClass("hide");
      $form.addClass("fadeIn");
    }
  );
  $emailinput.on("focus", function(event) {
    $emaillabel.addClass("active");
  });
  $emailinput.on("blur", function(event) {
    if ($emailinput.val().trim() == "") {
      $emaillabel.removeClass("active");
    }
  });
  $emailinput.on("keyup", function(event) {
    if (event.target.value.length > 0) {
      $submit.removeClass("hide");
    } else {
      $submit.addClass("hide");
    }
  });
});
