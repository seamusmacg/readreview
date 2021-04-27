(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$("form[name=register_account]").submit(function(e){

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/register",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      window.location.href = "/profile/";
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error-hidden");
    }

  })

  e.preventDefault();
});

$("form[name=login]").submit(function(e){

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/login/",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      window.location.href = "/profile/";
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error-hidden");
    }

  })

  e.preventDefault();
});

$("form[name=add_review]").submit(function(e){

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/catalogue",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      console.log(resp)
      window.location.href = "/catalogue";
    },
    error: function(resp) {
      // $error.text(resp.responseJSON.error).removeClass("error-hidden");
      console.log(resp)
    }

  })

  e.preventDefault();
});


function togglePassword() {
  var password_input = document.getElementById("password");

  if (password_input.type == "password") {
    password_input.type = "text";
  } else {
    password_input.type = "password";
  }
}