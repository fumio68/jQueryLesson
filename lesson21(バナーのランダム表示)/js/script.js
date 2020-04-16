$(function(){
  let bannerArray = ["red", "yellow", "green", "blue", "brown"];

  let num = Math.random();

  num = num * 5;

  num = Math.floor(num);

  $("aside img").attr("src", "img/" + bannerArray[num] + ".jpg")
});
