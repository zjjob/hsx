$(function(){
	var str=$(".banner .publc h3").text();
	$(".banner .publc h3").text("");
	var stop=setInterval(dazi,1000);
	var i=0;
	var arr=['red','yellow','black','blue'];
	function dazi(){
		if(i==str.length){
			clearInterval(stop);
			$(".banner .publc h3").text(str.substr(0,i));
		}else{
			var a=Math.round(Math.random()*3);
		$(".banner .publc h3").text(str.substr(0,i)+"|");
		$(".banner .publc h3").css("color",arr[a]);
			i++;
		}
	}
})
$(function(){
	$(".banner .publc .banner-img img").css('left','300px');
	$(".banner .publc .banner-img img").eq(0).animate({'left':'0px',"z-index":0,height:371},1000);
	$(".banner .publc .banner-img img").eq(1).css({"z-index":1,height:'412px'});
	$(".banner .publc .banner-img img").eq(2).animate({'left':'600px',"z-index":0,height:371},1000);
	$(".banner .publc .banner-img img").on('click',leftmove);
	function leftmove(){
		var index = $(this).index();
		//点击左边
		if(index == 0){ // 左
			$(this).animate({left:600,height:371,zIndex:0},function(){
				$(this).parent().append($(this))
			});
			$(".banner .publc .banner-img img").eq(1).animate({left:0,height:371,zIndex:2});
			$(".banner .publc .banner-img img").eq(2).animate({left:300,height:412,zIndex:0});
			
		}else if(index == 2){// 右
			$(this).animate({left:0,height:371,zIndex:0},function(){
				$(this).parent().prepend($(this));
			});
			$(".banner .publc .banner-img img").eq(0).animate({left:300,height:412,zIndex:1});
			$(".banner .publc .banner-img img").eq(1).animate({left:600,height:371,zIndex:0});
		}
	}
	//setInterval(start,1000);
	function start(){
		$(".banner .publc .banner-img img").eq(0).animate({left:0,height:371,zIndex:1},function(){
			$(this).parent().append($(this));
		});
		$(".banner .publc .banner-img img").eq(1).animate({left:600,height:371,zIndex:1});
		$(".banner .publc .banner-img img").eq(2).animate({left:300,height:412,zIndex:2});
	}
})
$(function(){
	$(document).scroll(function(){
		//console.log($(this).scrollTop());
		var aa=true;
		var scronum=$(this).scrollTop();
		if(scronum>=219){
			if(aa){
				aa=false;
				$('.header').css({position:'fixed',zIndex:500,backgroundColor:'rgba(23, 117, 200, 0.38)'});
			//$('.banner').css({paddingTop:67});
			}
		}
		else{
			aa=true;
			$('.header').css({position:'static',zIndex:0,backgroundColor:'#1775c8'});
		}
	})
})

