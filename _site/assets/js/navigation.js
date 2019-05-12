(function($) {
   $('.item-transition').on('click', function() {
      $(this).toggleClass('active');
   });

   $('.item-animation').on('click', function() {
      if($(this).hasClass('active-in')) {
         $(this).removeClass('active-in');
         $(this).addClass('active-out');
      } else {
         $(this).removeClass('active-out');
         $(this).addClass('active-in');
      }
   });
})(jQuery);

$("#initiate").on("click",function(){

   $(".display").toggleClass("hide");
   $("#world").toggleClass("putInFrontOfView");
   $(".navigationImage").toggleClass("bounce");
   $(".subMenu").toggleClass("hide");
   $(".subMenuElements").toggleClass("bounce");

});
$("#world").on("click",function(){
  $(".display").toggleClass("hide");
  $("#initiate").toggleClass("active");
  $(".navigationImage").toggleClass("bounce");
  $("#world").toggleClass("putInFrontOfView");
  $(".subMenu").toggleClass("hide");
  $(".subMenuElements").toggleClass("bounce");

});

const rippleElements = document.getElementsByClassName("myRipple");

for(let i = 0; i < rippleElements.length; i++) {
  rippleElements[i].onclick = function(e){
    let X = e.pageX - this.offsetLeft;
    let Y = e.pageY - this.offsetTop;
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add('ripple');
    rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
    let customColor = this.getAttribute('ripple-color');
    if (customColor) rippleDiv.style.background = customColor;
    this.appendChild(rippleDiv);
    setTimeout(function(){
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
  }
}
