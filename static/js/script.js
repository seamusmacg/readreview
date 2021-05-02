// Materialize CSS Jquery
(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Register Form
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


// Login Form
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


//  Add review form
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


// Delete review form
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


// Edit review form
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


// Delete book form
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


// Submit book form
$("form[name=submit_book]").submit(function (e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/book/",
    type: "POST",
    data: data,
    dataType: "json",
    success: function (resp) {
      $('#book-submit').modal('open');
      setTimeout(function () {
        window.location.href = "/book/";
      }, 5000);

    },
    error: function (resp) {
      $('#book-submit').modal('open');
      $(".modal-content").hide();
      $(".book-error").text(resp.responseJSON.error);
      $(".book-error").css("display", "block");
      setTimeout(function () {
        window.location.href = "/book/";
      }, 4000);
    }

  })

  e.preventDefault();
});


// Toggle password login/register forms
function togglePassword() {
  var password_input = document.getElementById("password");

  if (password_input.type == "password") {
    password_input.type = "text";
  } else {
    password_input.type = "password";
  }
}

// Hide modal content submitting review
$(".submit-review").click(function () {
  $(".modal-content").hide();
});