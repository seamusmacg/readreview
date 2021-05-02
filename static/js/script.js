(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$("form[name=register_account]").submit(function (e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/register",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (resp) {
      window.location.href = "/profile/";
    },
    error: function (resp) {
      $error.text(resp.responseJSON.error).removeClass("error-hidden");
    }

  })

  e.preventDefault();
});

$("form[name=login]").submit(function (e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/login/",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (resp) {
      window.location.href = "/profile/";
    },
    error: function (resp) {
      $error.text(resp.responseJSON.error).removeClass("error-hidden");
    }

  })

  e.preventDefault();
});

$("form[name=add_review]").submit(function (e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/catalogue",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (resp) {
      $(".modal-content").hide();
      $(".review-success").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);

    },
    error: function (resp) {
      // $error.text(resp.responseJSON.error).removeClass("error-hidden");
      $(".modal-content").hide();
      $(".review-error").text(resp.responseJSON.error);
      $(".review-error").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);
    }

  })

  e.preventDefault();
});

$("form[name=delete_review]").submit(function (e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/catalogue/delete_review",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (resp) {
      $(".modal-content").hide();
      $(".delete-success").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);

    },
    error: function (resp) {
      // $error.text(resp.responseJSON.error).removeClass("error-hidden");
      $(".modal-content").hide();
      $(".delete-error").text(resp.responseJSON.error);
      $(".delete-error").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);
    }

  })

  e.preventDefault();
});


$("form[name=edit_review]").submit(function (e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/catalogue/edit_review/",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (resp) {
      $(".modal-content").hide();
      $(".edit-success").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);

    },
    error: function (resp) {
      // $error.text(resp.responseJSON.error).removeClass("error-hidden");
      $(".modal-content").hide();
      $(".edit-error").text(resp.responseJSON.error);
      $(".edit-error").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);
    }

  })

  e.preventDefault();
});

$("form[name=delete_book]").submit(function (e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/catalogue/delete_book",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (resp) {
      $(".modal-content").hide();
      $(".delete-success").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);

    },
    error: function (resp) {
      // $error.text(resp.responseJSON.error).removeClass("error-hidden");
      $(".modal-content").hide();
      $(".delete-error").text(resp.responseJSON.error);
      $(".delete-error").css("display", "block");
      setTimeout(function () {
        window.location.href = "/catalogue";
      }, 4000);
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


// $(".submit-btn").click(function () {
//   // var textarea = document.getElementsByClassName("review").value;
//   // if (textarea.length < 20 || textarea.length > 150) {
//     $("button").removeClass("modal-trigger");
//     $("p").removeClass("error--hidden");
//     $(".error").html("Reviews must be between 20 and 150 characters long");
//     setTimeout(function () {
//       $("p").addClass("error--hidden");
//       $(".error").empty();
//       $("button").addClass("modal-trigger");
//     }, 4000);
//   // }
// });

$(".submit-review").click(function () {
  $(".modal-content").hide();
});