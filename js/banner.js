$(document).ready(function(){
	// 任意数量图片动态添加轮播序列号
	var size=$(".img>li").size();
	for(var j=1; j<=size; j++){
		$(".num").append("<li>"+j+"</li>");
	};

	$(".num li").first().addClass("active");
	$(".img>li").first().show();
	// 手动轮播
	$(".num li").mouseover(function(){
		var index=$(this).index();
		i=index;  //自动轮播与手动轮播同步
		$(".num li").eq(index).addClass("active").siblings().removeClass("active");
		$(".img>li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	});

	// 自动轮播
	var i=0;
	var t=setInterval(move,1500);

	// 触发/禁止自动轮播
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,1500);
	});

	// 核心向左运动函数
	function moveL(){
		i--;
		if(i==-1){
			i=size-1;
		}
		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img>li").eq(i).fadeIn(300).siblings().fadeOut(300);
	};

	// 核心向右运动函数
	function move(){
		i++;
		if(i==size){
			i=0;
		}
		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img>li").eq(i).fadeIn(300).siblings().fadeOut(300);
	};

	// 左边按钮轮播
	$(".left").click(function(){
		moveL();
	})

	// 右边按钮轮播
	$(".right").click(function(){
		move();
	});
    
	

});