/*
* @Author: lenovo
* @Date:   2018-09-13 16:35:58
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-15 18:07:58
*/
$(function(){

	// 购物车落下
	let car=$(".shopcar");
	let cardown=$(".shopcar-bottom");
		car.mouseenter(function(){
			cardown.clearQueue().slideDown("slow");
	});
	car.mouseleave(function() {
		cardown.slideUp("slow");
	});

	// 侧面选项卡
	let page=$(".list .page");
	page.mouseenter(function(){
		$(".page-right").css("display","none");
		$(this).children(".page-right").css("display","block");
	})
	page.mouseleave(function(){
		$(this).children(".page-right").css("display","none");
	})

	// 家电选项卡
	let spa=$(".household .top .housea");
	let bottom=$(".adv2-right");
	spa.mouseenter(function(){
		let i=$(this).index();
		spa.removeClass("acolor");
		spa.eq(i).addClass("acolor");

		let bottomm=bottom.css("display","none");
		bottomm.eq(i).css("display","block");	

		// bottom.css("display","none").eq(i).css("display","block");
	});
	spa.triggerHandler("mouseenter");


	// 轮播图
	
	let images=$(".beijin");
	let left=$(".leftbtn");
	let right=$(".rightbtn");
	let dots=$(".dots");
	let banner=$(".banner");
	let now=0;
	// 初始化
	let i=images.index();
	images.first().css("opacity","1");
	dots.eq(i).addClass("color");

	let t=setInterval(move,2000);
	dots.click(function(){
		let index=$(this).index();
		images.css("opacity","0").eq(index).css("opacity","1");
		dots.removeClass("color").eq(index).addClass("color");
		now=index;
	});
	function move(){
		now++;
		if (now==images.length) {
			now=0;
		}
		images.css("opacity","0").eq(now).css("opacity","1");
		dots.removeClass("color").eq(now).addClass("color");
	}

	function move1(){
		now--;
		if (now<0) {
			now=images.length-1;
		}
		images.css("opacity","0").eq(now).css("opacity","1");
		dots.removeClass("color").eq(now).addClass("color");
	}
	right.click(function(){
		move();
	});
	left.click(function(){
		move1();
	});


	banner.mouseenter(function(){
		clearInterval(t);
	});
	banner.mouseleave(function(){
		t=setInterval(move,2000);
	});









	// 整体平移
	let button=$(".bu1");
	let leftb=button.first();
	let rightb=button.last();
	let both=$(".zhengti");
	let w=both.width()/2;
	let num=0;
	
	// 右键
	rightb.click(function(){
		num++;
		if (num==2) {
			num=1;
		}
		rightb.removeClass("bu1-1");
		leftb.addClass("bu1-1");
		both.css("transform",`translate(${(-w*num)}px)`);
	});
	leftb.click(function(){
		num--;
		if (num==-1) {
			num=0;
		}
		leftb.removeClass("bu1-1");
		rightb.addClass("bu1-1");
		both.css("transform",`translate(${(-w*num)}px)`);
	});


	// 为你推荐
	// 整体平移
	let buttonn=$(".bu");
	let leftbb=buttonn.first();
	let rightbb=buttonn.last();
	let bothh=$(".rec");
	let ww=bothh.width()/3;
	let numm=0;
	
	// 右键
	rightbb.click(function(){
		numm++;
		if (numm==3) {
			numm=2;
		}
		rightbb.removeClass("bu-2");
		leftbb.addClass("bu-2");
		bothh.css("transform",`translate(${(-ww*numm)}px)`);
	});
	leftbb.click(function(){
		numm--;
		if (numm==-1) {
			numm=0;
		}
		leftbb.removeClass("bu-2");
		rightbb.addClass("bu-2");
		bothh.css("transform",`translate(${(-ww*numm)}px)`);
	});




	// 内容处轮播

	let son=$(".sonbot");
	let sonleft=$(".conleft");
	let sonright=$(".conright");
	let dian=$(".one");
	let wid=son.width();
	let now0=0;
    let next0=0;
	let flag=true;
	son.eq(0).css("left","0");
	dian.eq(0).addClass("se");


	// let t1=setInterval(fn,2000);
 	function fn(){
 		next0++;
 		if (next0==son.length) {
 			next0=0;
 		}
 		son.eq(next0).css({left:wid});
 		son.eq(now0).animate({left:-wid});
 		son.eq(next0).animate({left:0},function(){
 			flag=true; 	
 		});
 		dian.eq(now0).removeClass("se");
        dian.eq(next0).addClass("se");
        now0=next0;
 	}

	function fn1(){
 		next0--;
 		if (next0<0) {
 			next0=son.length-1;
 		}
 		son.eq(next0).css({left:-wid});
 		son.eq(now0).animate({left:wid});
 		son.eq(next0).animate({left:0},function(){
 			flag=true; 	
 		});
 		dian.eq(now0).removeClass("se");
        dian.eq(next0).addClass("se");
        now0=next0;
 	}

	sonright.click(function(){
		if (now0==dian.length-1) {
			return;
		}
		if (!flag) {
			return;
		}
		flag = false;
        fn();
	});
	sonleft.click(function(){
		if (now0==0) {
			return;
		}
		if (!flag) {
			return;
		}
		flag = false;
        fn1();
	});

	dian.click(function(){
		let i=$(this).index();
		console.log(i)
		if (now0==i) {
			return;
		}
		else if(now0<i){
			son.eq(i).css({left:wid});
			son.eq(now0).animate({left:-wid});
			son.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian.eq(now0).removeClass("se");
			dian.eq(i).addClass("se");
			now0=next0=i;
		}else if(now0>i) {
			son.eq(i).css({left:-wid});
			son.eq(now0).animate({left:wid});
			son.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian.eq(now0).removeClass("se");
			dian.eq(i).addClass("se");
			now0=next0=i;
		}
	});


	// 内容处轮播2

	let son2=$(".sonbot2");
	let sonleft2=$(".conleft2");
	let sonright2=$(".conright2");
	let dian2=$(".one2");
	let wid2=son2.width();
	let now2=0;
    let next2=0;
	let flag2=true;
	son2.eq(0).css("left","0");
	dian2.eq(0).addClass("se2");


	// let t1=setInterval(fn,2000);
 	function fn2(){
 		next2++;
 		if (next2==son2.length) {
 			next2=0;
 		}
 		son2.eq(next2).css({left:wid});
 		son2.eq(now2).animate({left:-wid});
 		son2.eq(next2).animate({left:0},function(){
 			flag2=true; 	
 		});
 		dian2.eq(now2).removeClass("se2");
        dian2.eq(next2).addClass("se2");
        now2=next2;
 	}

	function fn22(){
 		next2--;
 		if (next2<0) {
 			next2=son2.length-1;
 		}
 		son2.eq(next2).css({left:-wid});
 		son2.eq(now2).animate({left:wid});
 		son2.eq(next2).animate({left:0},function(){
 			flag2=true; 	
 		});
 		dian2.eq(now2).removeClass("se2");
        dian2.eq(next2).addClass("se2");
        now2=next2;
 	}

	sonright2.click(function(){
		if (now2==dian2.length-1) {
			return;
		}
		if (!flag2) {
			return;
		}
		flag2 = false;
        fn2();
	});
	sonleft2.click(function(){
		if (now2==0) {
			return;
		} 
		if (!flag2) {
			return;
		}
		flag2 = false;
        fn22();
	});

	dian2.click(function(){
		let i=$(this).index();
		console.log(i)
		if (now2==i) {
			return;
		}
		else if(now2<i){
			son2.eq(i).css({left:wid});
			son2.eq(now2).animate({left:-wid});
			son2.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian2.eq(now2).removeClass("se2");
			dian2.eq(i).addClass("se2");
			now2=next2=i;
		}else if(now2>i) {
			son2.eq(i).css({left:-wid});
			son2.eq(now2).animate({left:wid});
			son2.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian2.eq(now2).removeClass("se2");
			dian2.eq(i).addClass("se2");
			now2=next2=i;
		}
	});



// 内容处轮播3
	let son3=$(".sonbot3");
	let sonleft3=$(".conleft3");
	let sonright3=$(".conright3");
	let dian3=$(".one3");
	let wid3=son3.width();
	let now3=0;
    let next3=0;
	let flag3=true;
	son3.eq(0).css("left","0");
	dian3.eq(0).addClass("se3");


	// let t1=setInterval(fn,3000);
 	function fn3(){
 		next3++;
 		if (next3==son3.length) {
 			next3=0;
 		}
 		son3.eq(next3).css({left:wid});
 		son3.eq(now3).animate({left:-wid});
 		son3.eq(next3).animate({left:0},function(){
 			flag3=true; 	
 		});
 		dian3.eq(now3).removeClass("se3");
        dian3.eq(next3).addClass("se3");
        now3=next3;
 	}

	function fn33(){
 		next3--;
 		if (next3<0) {
 			next3=son3.length-1;
 		}
 		son3.eq(next3).css({left:-wid});
 		son3.eq(now3).animate({left:wid});
 		son3.eq(next3).animate({left:0},function(){
 			flag3=true; 	
 		});
 		dian3.eq(now3).removeClass("se3");
        dian3.eq(next3).addClass("se3");
        now3=next3;
 	}

	sonright3.click(function(){
		if (now3==dian3.length-1) {
			return;
		}
		if (!flag3) {
			return;
		}
		flag3 = false;
        fn3();
	});
	sonleft3.click(function(){
		if (now3==0) {
			return;
		} 
		if (!flag3) {
			return;
		}
		flag3 = false;
        fn33();
	});

	dian3.click(function(){
		let i=$(this).index();
		console.log(i)
		if (now3==i) {
			return;
		}
		else if(now3<i){
			son3.eq(i).css({left:wid});
			son3.eq(now3).animate({left:-wid});
			son3.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian3.eq(now3).removeClass("se3");
			dian3.eq(i).addClass("se3");
			now3=next3=i;
		}else if(now3>i) {
			son3.eq(i).css({left:-wid});
			son3.eq(now3).animate({left:wid});
			son3.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian3.eq(now3).removeClass("se3");
			dian3.eq(i).addClass("se3");
			now3=next3=i;
		}
	});

// 内容处轮播4
let son4=$(".sonbot4");
	let sonleft4=$(".conleft4");
	let sonright4=$(".conright4");
	let dian4=$(".one4");
	let wid4=son4.width();
	let now4=0;
    let next4=0;
	let flag4=true;
	son4.eq(0).css("left","0");
	dian4.eq(0).addClass("se4");


	// let t1=setInterval(fn,4000);
 	function fn4(){
 		next4++;
 		if (next4==son4.length) {
 			next4=0;
 		}
 		son4.eq(next4).css({left:wid});
 		son4.eq(now4).animate({left:-wid});
 		son4.eq(next4).animate({"left":"0"},function(){
 			flag4=true; 	
 		});
 		dian4.eq(now4).removeClass("se4");
        dian4.eq(next4).addClass("se4");
        now4=next4;
 	}

	function fn44(){
 		next4--;
 		if (next4<0) {
 			next4=son4.length-1;
 		}
 		son4.eq(next4).css({left:-wid});
 		son4.eq(now4).animate({left:wid});
 		son4.eq(next4).animate({left:0},function(){
 			flag4=true; 	
 		});
 		dian4.eq(now4).removeClass("se4");
        dian4.eq(next4).addClass("se4");
        now4=next4;
 	}

	sonright4.click(function(){
		if (now4==dian4.length-1) {
			return;
		}
		if (!flag4) {
			return;
		}
		flag4 = false;
        fn4();
	});
	sonleft4.click(function(){
		if (now4==0) {
			return;
		} 
		if (!flag4) {
			return;
		}
		flag4 = false;
        fn44();
	});

	dian4.click(function(){
		let i=$(this).index();
		console.log(i)
		if (now4==i) {
			return;
		}
		else if(now4<i){
			son4.eq(i).css({left:wid});
			son4.eq(now4).animate({left:-wid});
			son4.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian4.eq(now4).removeClass("se4");
			dian4.eq(i).addClass("se4");
			now4=next4=i;
		}else if(now4>i) {
			son4.eq(i).css({left:-wid});
			son4.eq(now4).animate({left:wid});
			son4.eq(i).animate({left:0},function(){
				flag=true;
			})
			dian4.eq(now4).removeClass("se4");
			dian4.eq(i).addClass("se4");
			now4=next4=i;
		}
	});




	// 倒计时
	
	let time=document.querySelectorAll(".dao");

    setInterval(creatData,1000);
    creatData();
    function creatData() {
        let arr=fn();
        time.forEach((ele,index)=>{
            ele.innerHTML=arr[index];
        })
    }



    function fn() {
    let now=new Date();
    let future=new Date(2030,9,1);
    let cha=Math.floor((future.getTime()-now.getTime())/1000);


    let arr=[];
    let hours=Math.floor(cha%(30*24*60*60)%(24*60*60)/(60*60));
    if (Math.floor(hours/10)==0) {
      arr.push("0"+hours);
    }else{
      arr.push(hours);
    }
    

    let min=Math.floor(cha%(30*24*60*60)%(24*60*60)%(60*60)/60);  
    if (Math.floor(min/10)==0) {
      arr.push("0"+min);
    }else{
      arr.push(min);
    }

    let s=Math.floor(cha%(30*24*60*60)%(24*60*60)%(60*60)%60);
    if (Math.floor(s/10)==0) {
      arr.push("0"+s);
    }else{
      arr.push(s);
    }

    return arr;
    }

    // 返回顶部
    //  window.onscroll=function(){
    //     let bh=document.body.scrollTop||document.documentElement.scrollTop;
    //     let goTop=document.querySelector(".dath2-1");
    //     if (bh>1000){
    //         goTop.style.display="block";
    //     }
    //     else{
    //         goTop.style.display="none";
    //     }
    //     goTop.onclick=function () {
    //         animate(document.body,{scrollTop:0});
    //         animate(document.documentElement,{scrollTop:0});
    //     }
    // }
	let gTop=$(".dath2-1");
    $(window).scroll(function(){
    	let bh=document.body.scrollTop||document.documentElement.scrollTop;
    	
    	if (bh>1000) {
    		gTop.css("display","block");
    	}else{
    		gTop.css("display","none");
    	}
    });


    	gTop.click(function(){
    		$(document.body).animate({"scrollTop":"0"});
    		$(document.documentElement).animate({scrollTop:0});

    	});










})