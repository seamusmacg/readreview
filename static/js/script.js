(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();

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
      console.log(resp);
    },
    error: function(resp) {
      console.log(resp);
      $error.text(resp.responseJSON.error).removeClass("error-hidden");
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