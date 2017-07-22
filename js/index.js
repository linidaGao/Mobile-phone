/*轮播动画*/
var swiper=new Swiper(".swiper-container",{

	});
/*第四部分的一个倒计时*/
function time(){
	var may=new Date('2017-05-01 00:00:00');
	var today=new Date();
	//计算出5.1到今儿的毫秒数
	var Now=may.getTime()-today.getTime();//getTime() 返回从GMT1970-1-1 0:0:0.0至今的毫秒数
	//天，时，分，秒
		var day=Math.floor(Now/1000/60/60/24);
		var hours=Math.floor(Now/1000/60/60%24);
		var min=Math.floor(Now/1000/60%60);
		var sec=Math.floor(Now/1000%60);
			if(day<=9){
				day="0"+day;
			}
			if(hours<=9){
				hours="0"+hours;
			}
			if(min<=9){
				min="0"+min;
			}
			if(sec<=9){
				sec="0"+sec;
			}
		document.getElementById('dateTimer').innerHTML=day+'天'+'   '+hours+':'+min+':'+sec;
}
var timer=setInterval(time,1000);

/*查看所有的点击事件*/
$(function(){

	$("#clickAll").bind("click",function(){
		if($("#doDispaly").is(":hidden")){
			$('#doDispaly').show();
			$("#clickAll-word").html("已经到底部");
		}else{
			$('#doDispaly').hide();
			$("#clickAll-word").html("查看全部团购");
		}
	});
});

/*
第一部分的下拉选项*/
$(function(){
	$('#select').click(function(){
		$('#select').css("transform","rotate(180deg)");
		$("#myli").css("display","block");
		$("li").click(function(){
			$("#city").html($(this).html());
			$("#myli").css("display","none");
			$('#select').css("transform","rotate(0deg)");
		});
		
	});
})