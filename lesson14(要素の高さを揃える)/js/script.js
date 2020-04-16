$(function(){
  let h = 0;

  $("main div").each(function(){
    if($(this).height() > h){
      h = $(this).height();
    }
  });

  $("main div").css("height", h + "px");
});
