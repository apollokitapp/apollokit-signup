$(document).ready(function() {
  var subtitles = [
    "Looking for a better solution to Facebook Monetization? All you had to do was look to the moon.",
    "Use ApolloKit to easily find, schedule, and post content on your Facebook Pages.",
    "The moon may be 238,900 miles from home, but more Facebook Traffic is just a few clicks away.",
    "That's one small step for man, and one giant leap for your Facebook Page Reach."
  ],
  subtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
  $('.subtitle').html(subtitle);

  $("#ctaSignup").on('click', function(evt) {
    evt.preventDefault();

    swal({
      title: "Signup",
      text: 'We\'re still building, enter your email address to be notifed when we launch.',
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: false,
      inputPlaceholder: 'Email Address',
    }, function(emailAddress){

      if (emailAddress && emailAddress.length > 0) {
        $.ajax({
          // url: 'https://formspree.io/apollokitapp_signup@gmail.com',
          url: '//apollokit.us14.list-manage.com/subscribe/post?u=77d87afdaea36d92f3f6e53dd&amp;id=0e39055f79',
          method: 'post',
          data: {
            'EMAIL': emailAddress,
            'b_77d87afdaea36d92f3f6e53dd_0e39055f79': null
          },
          dataType: 'json',
          success: function() {
            swal("Thanks!", "Stay Tuned. :)", "success");
          }
        });
      }
    });
  });
});
