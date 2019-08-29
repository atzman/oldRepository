$(window).on('load', function() {

  $('.after-scroll-top-banner-container').css( "display", "flex" );
  $('.atzman-intro-container').css( "opacity", "1" );
  $('.navigation-bar').css( "opacity", "1" );

  setTimeout(function(){},500);

  $('body').css( "overflow", "auto");
  $('body').css( "overflow-x", "hidden");
  $('html').css( "overflow", "auto");
  $('html').css( "overflow-x", "hidden");

  var scroll_position_banner = 200 - ( $(window).scrollTop()* (5/6) ) ;

  $('.atzman-intro-container').css( "margin-top", scroll_position_banner );

  if( (1000 - $(window).scrollTop()) > 0 ) {
    var scroll_position = 1000 - ( $(window).scrollTop() ) ;
  } else { var scroll_position = 0; }

  $('.navigation-bar').css( "margin-top", scroll_position );

  $(window).scroll(function () {

    var scroll_position_banner = 200 - ( $(window).scrollTop() * (5/6) ) ;

    $('.atzman-intro-container').css( "margin-top", scroll_position_banner );

    if( (1000 - $(window).scrollTop()) > 0 ) {
      var scroll_position = 1000 - ( $(window).scrollTop() ) ;
    } else {
      var scroll_position = 0; }

      $('.navigation-bar').css( "margin-top", scroll_position );

  });
});
