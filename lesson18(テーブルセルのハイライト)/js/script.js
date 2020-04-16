$(function(){
  $("td").hover(function(){
    $(this).parent().addClass("target");

    let myIndex = $(this).index();
    myIndex ++;

    $("td:nth-child("+ myIndex +")").addClass("target");
  }, function(){
    $(".target").removeClass("target");
  });
});
