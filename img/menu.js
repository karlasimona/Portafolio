$(document).ready(function(){

  $(window).scroll(function(){
    if( $(this).scrollTop() > 650 ){
      $('nav').addClass('navbar2');
    } else{
      $('nav').removeClass('navbar2');
    }
  });
});
