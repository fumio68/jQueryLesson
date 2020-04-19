$(function() {
	$("a").click(function(){
		var dis = $(this).html() - 1;

		$("#sections").animate({"left" : dis * -700 + "px"}, 300);

		// 背景画像のアニメーション
		$("body").animate({"background-position" : dis * -20 + "px 100%"}, 300);
		$("#bg1").animate({"background-position" : dis * -150 + "px 100%"}, 300);
		$("#bg2").animate({"background-position" : dis * -700 + "px 100%"}, 300);

		if(dis == 0){
			bgColor = "#6CD8FF";
		}else if(dis == 1){
			bgColor = "#FFE254"
		}else if(dis == 2){
			bgColor = "#FB9F8A"
		}else {
			bgColor = "#879DC4"
		}

		$("body").animate({"background-color" : bgColor}, 300);

		$(".current").removeClass("current");
		$(this).addClass("current");

		return false;
	});
});
