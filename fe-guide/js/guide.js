$(function(){
	$(".menu li").bind("click", function(){
		$(this).addClass("current").siblings().removeClass("current");
		var liindex = $(this).index();
		$(".main").eq(liindex).show().siblings(".main").hide();
	})
})