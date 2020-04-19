$(function() {
  let countNum;
  let cardArray;
  let time;
  let timer;

  init();

  function init(){
    countNum = 1;
    cardArray = [];
    time = 0;
    for(var i = 0; i <= 24; i++){
      cardArray.push(i);
    }


    for(var i =0; i <cardArray.length; i++){
      let tmpNum =cardArray[i];
      let r = Math.floor(Math.random()*cardArray.length);

      cardArray[i] = cardArray[r];
      cardArray[r] = tmpNum;
    }

    $("#numbers").html("");

    for(let i = 0; i <= 24; i++){
      let cardNum = cardArray[i] + 1;
      $("#numbers").prepend("<div>" + cardNum +"</div>");
    }
  }

  $("button").click(function(){
    $("#startScene").hide();

    $("#numbers div").click(function(){
      let num = $(this).html();
      if(num == countNum){
        $(this).addClass("hit");
        countNum++;

        if(countNum == 26){
          clearInterval(timer);

          $("#startScene p").html("Your Record : " + $("#timer span").html());
          $("button").html("PLAY AGAIN");
          $("#startScene").show();

          if($("#record span").html() - $("#timer span").html() > 0 || $("#record span").html() == 0){
            $("#record span").html($("#timer span").html());
          }
          init();
        }
      }
    });

    timerFunc();
    timer = setInterval(timerFunc, 10);
  });

  function timerFunc(){
    time++;
    $("#timer span").html(time);
  }

});