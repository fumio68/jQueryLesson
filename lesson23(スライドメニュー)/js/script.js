$(function(){

  let dis = 250;

  $("button").click(function(){
    $("body").children().animate({"margin-left":"+=" + dis + "px"}, 200);
    dis *= -1;
  });
});
