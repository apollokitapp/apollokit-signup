$(document).ready(function() {
  $("#ctaSignup").on('click', function(evt) {
    evt.preventDefault();

    swal({
      title: "Signup",
      text: 'We\'re still building, enter your email to be notifed when we launch.',
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: false,
    }, function(emailAddress){
      if (emailAddress && emailAddress.length > 0) {
        $.ajax({
          url: 'https://formspree.io/apollokitapp_signup@gmail.com',
          method: 'post',
          data: { message: emailAddress },
          dataType: 'json',
          success: function() {
            swal("Thanks! Stay Tuned. :)", "success");
          }
        });
      }
    });
  });
});
