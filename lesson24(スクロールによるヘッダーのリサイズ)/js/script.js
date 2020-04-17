$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $("header").addClass("small");
    }else{
      $("header").removeClass("small");
    }
  });
});
