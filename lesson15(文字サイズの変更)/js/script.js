$(function(){
  $("header a").click(function(){

    $("body").removeClass();

    let size = $(this).html();

    if(size == "S"){
      $("body").addClass("fontSmall");
    }else if(size == "M"){
      $("body").addClass("fontMedium");
    }else{
      $("body").addClass("fontLarge");
    }


    return false;
  });
});
