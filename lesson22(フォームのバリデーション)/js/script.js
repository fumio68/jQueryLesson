$(function() {
  $(".alert").hide();

  $("#submitBtn").click(function(){

    let sendFlag = true;

    if(!$("#text").val()){
      $("#textSection .alert").show();
      sendFlag = false;
    }else{
      $("#textSection .alert").hide();
    }

    if(!$("#textarea").val()){
      $("#textareaSection .alert").show();
      sendFlag = false;
    }else{
      $("#textareaSection .alert").hide();
    }

    if($("select").val() == "none"){
      $("#selectSection .alert").show();
      sendFlag = false;
    }else{
      $("#selectSection .alert").hide();
    }

    let radioChk = $('input[name="radio"]:checked').length;
    if(radioChk == 0){
      $("#radioSection .alert").show();
      sendFlag = false;
    }else{
      $("#radioSection .alert").hide();
    }

    let chkboxChk = $('input[name="checkbox"]:checked').length;
    if(chkboxChk < 3){
      $("#checkboxSection .alert").show();
      sendFlag = false;
    }else{
      $("#checkboxSection .alert").hide();
    }

    if(sendFlag == false){
      return false;
    }
  });
});
