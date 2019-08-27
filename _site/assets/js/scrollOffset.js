$(window).on('load', function() {
  
  $('.atzman-intro-container').css( "opacity", "1" );
  $('.navigation-bar').css( "opacity", "1" );

  var scroll_position_banner = 300 - ( $(window).scrollTop()* (5/6) ) ;

  $('.atzman-intro-container').css( "margin-top", scroll_position_banner );

  if( (800 - $(window).scrollTop()) > 0 ) {
    var scroll_position = 800 - ( $(window).scrollTop() ) ;
  } else { var scroll_position = 0; }

  $('.navigation-bar').css( "margin-top", scroll_position );

  $(window).scroll(function () {

    var scroll_position_banner = 300 - ( $(window).scrollTop() * (5/6) ) ;

    $('.atzman-intro-container').css( "margin-top", scroll_position_banner );

    if( (800 - $(window).scrollTop()) > 0 ) {
      var scroll_position = 800 - ( $(window).scrollTop() ) ;
    } else {
      var scroll_position = 0; }

      $('.navigation-bar').css( "margin-top", scroll_position );

  });
});
