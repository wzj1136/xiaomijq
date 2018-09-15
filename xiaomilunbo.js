/*
* @Author: lenovo
* @Date:   2018-09-01 14:11:47
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-03 17:26:54
*/



    // 选项卡
    

 // 层级轮播图
 // window.onload=function(){
   (function(){
       // let banner=document.querySelectorAll(".banner")[0];
       // let imgs=document.querySelectorAll(".beijin");
       // let dots=document.querySelectorAll(".dots");
       // let left0=document.querySelectorAll(".leftbtn")[0];
       // let right0=document.querySelectorAll(".rightbtn")[0];
       // let widthes=parseInt(getComputedStyle(imgs[0],null).width);
       //
       // imgs[0].style.left=0;
       // dots[0].classList.add("color");
       // let now=0;
       // let next=0;
       // let flag=true;
       // for (let i=0;i<imgs.length;i++){
       //     dots[i].onmouseenter=function () {
       //         if (now==i) {
       //             return;
       //         }else if(now<i){
       //             imgs[i].style.left=widthes+"px";
       //             animate(imgs[now],{left:-widthes});
       //             animate(imgs[i],{left:0},function () {
       //                 flag=true;
       //             });
       //             dots[i].classList.add("color");
       //             dots[now].classList.remove("color");
       //             now=i;
       //         }else{
       //             imgs[i].style.left=-widthes+"px";
       //             animate(imgs[now],{left:widthes});
       //             animate(imgs[i],{left:0},function () {
       //                 flag=true;
       //             });
       //             dots[i].classList.add("color");
       //             dots[now].classList.remove("color");
       //             now=i;
       //         }
       //     }
       // }
       //
       // let t=setInterval(move,2000);
       // function move() {
       //     next++;
       //     if (next==imgs.length){
       //         next=0;
       //     }
       //     imgs[next].style.left=widthes+"px";
       //     animate(imgs[now],{left:-widthes});
       //     animate(imgs[next],{left:0},function () {
       //         flag=true;
       //     });
       //     dots[next].classList.add("color");
       //     dots[now].classList.remove("color");
       //     now=next;
       // }
       //
       // function move1() {
       //     next--;
       //     if (next==0){
       //         next=imgs.length-1;
       //     }
       //     imgs[next].style.left=-widthes+"px";
       //     animate(imgs[now],{left:widthes});
       //     animate(imgs[next],{left:0},function () {
       //         flag=true;
       //     });
       //     dots[next].classList.add("color");
       //     dots[now].classList.remove("color");
       //     now=next;
       // }
       // left0.onclick=function(){
       //     if (flag==false){
       //         return;
       //     }
       //     flag=false;
       //     move1();
       // }
       // right0.onclick=function(){
       //     if (flag==false){
       //         return;
       //     }
       //     flag=false;
       //     move();
       // }
       // banner.onmouseenter=function () {
       //     clearInterval(t);
       // }
       // banner.onmouseleave=function () {
       //    t=setInterval(move,2000);
       // }
       // window.onblur=function () {
       //     clearInterval(t);
       // }
       // window.onfocus=function () {
       //     t=setInterval(move,2000);
       // }












    let banner=document.querySelector(".banner");
    let imgs=document.querySelectorAll(".beijin");
    let dots=document.querySelectorAll(".dots");
    let left0=document.querySelectorAll(".leftbtn")[0];
    let right0=document.querySelectorAll(".rightbtn")[0];

    imgs[0].style.opacity=1;
    dots[0].classList.add("color");
    //
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function(){
            for(let j=0;j<dots.length;j++){
                imgs[j].style.opacity=0;
                dots[j].classList.remove("color");
            }
            imgs[i].style.opacity=1;
            dots[i].classList.add("color");
            num0=i;
        }
    }

    let t2=setInterval(fn,2000);
    let num0=0;
    function fn(){
        num0++;
        if (num0==4) {
            num0=0;
        }
        for(let j=0;j<dots.length;j++){
            imgs[j].style.opacity=0;
            dots[j].classList.remove("color");
        }
        imgs[num0].style.opacity=1;
        dots[num0].classList.add("color");
    }

    function fn1(){
        num0--;
        if (num0<0) {
            num0=3;
        }
        for(let j=0;j<dots.length;j++){
            imgs[j].style.opacity=0;
            dots[j].classList.remove("color");
        }
        imgs[num0].style.opacity=1;
        dots[num0].classList.add("color");
    }
    banner.onmouseover=function(){
        clearInterval(t2);
    }
    banner.onmouseout=function(){
        t2=setInterval(fn,2000);
    }
    left0.onclick=function(){
        fn1();
    }
    right0.onclick=function(){
        fn();
    }
    window.onblur=function () {
        clearInterval(t2);
    }
    window.onfocus=function () {
        t2=setInterval(fn,2000)
    }
})()



    // 选项卡
let page = document.querySelectorAll(".page");
    let right = document.querySelectorAll(".page-right");
    for (let i = 0; i < page.length; i++) {
        page[i].onmouseover = function () {
            for (let j = 0; j < right.length; j++) {
             right[j].style.display = "none";
            }
            right[i].style.display = "block";
        }
        page[i].onmouseout = function () {
            right[i].style.display = "none";
        }
    }




    // 下拉列表
(function(){


    let a = document.querySelectorAll(".up");
    let down = document.querySelectorAll(".up1");
    for (let i = 0; i < a.length; i++) {
        a[i].onmouseover = function () {
            for (let j = 0; j < down.length; j++) {
                down[j].style.height =0;
            }
            down[i].style.height = 200+"px";
        }
        a[i].onmouseout = function () {
            down[i].style.height = 0;
        }
    }
})()



    let son=document.querySelectorAll(".sonbot");
    let sonleft=document.querySelector(".conleft");
    let sonright=document.querySelector(".conright");
    let dian=document.querySelectorAll(".one");
    let dist=parseInt(getComputedStyle(son[0],null).width);
    console.log(son,sonleft,sonright,dian,dist);
    // son[0].style.left=0;
    // dian[0].classList.add("se");
    lrdot(son,sonleft,sonright,dian,dist,"se");
//     let now=0;
//     let next=0;
//     let flag=true;
//     //轮播点控制
//     for (let i = 0; i < dian.length; i++) {
//         dian[i].onmouseover = function () {
//             if (flag) {
//                 for (let j = 0; j < dian.length; j++) {
//                     dian[j].classList.remove("se");
//                     son[j].style.left = dist + "px";
//                 }
//                 dian[i].classList.add("se");
//                 son[i].style.left = 0;
//                 now = i;
//                 next = i;
//             }
//         }
// }
//     //右箭头控制
//     sonright.onclick=function () {
//         if (!flag) {
//             return;
//         }
//         flag = false;
//         next++;
//         if (next == son.length) {
//             next = 0;
//         }
//         son[next].style.left = dist + "px";
//         animate(son[now], {left: -dist});
//         animate(son[next], {left: 0}, function () {
//             flag = true;
//         });
//         dian[now].classList.remove("se");
//         dian[next].classList.add("se");
//         now = next;
//     }
//
//     sonleft.onclick=function () {
//         if (!flag) {
//             return;
//         }
//         flag = false;
//         next--;
//         if (next < 0) {
//             next =son.length-1;
//         }
//         son[next].style.left = -dist + "px";
//         animate(son[now], {left: dist});
//         animate(son[next], {left: 0}, function () {
//             flag = true;
//         });
//         dian[now].classList.remove("se");
//         dian[next].classList.add("se");
//         now = next;
//     }

    let son2=document.querySelectorAll(".sonbot2");
    let sonleft2=document.querySelector(".conleft2");
    let sonright2=document.querySelector(".conright2");
    let dian2=document.querySelectorAll(".one2");
    let dist2=parseInt(getComputedStyle(son[0],null).width);
    lrdot(son2,sonleft2,sonright2,dian2,dist2,"se2");


    let son3=document.querySelectorAll(".sonbot3");
    let sonleft3=document.querySelector(".conleft3");
    let sonright3=document.querySelector(".conright3");
    let dian3=document.querySelectorAll(".one3");
    let dist3=parseInt(getComputedStyle(son[0],null).width);
    lrdot(son3,sonleft3,sonright3,dian3,dist3,"se3");

    let son4=document.querySelectorAll(".sonbot4");
    let sonleft4=document.querySelector(".conleft4");
    let sonright4=document.querySelector(".conright4");
    let dian4=document.querySelectorAll(".one4");
    let dist4=parseInt(getComputedStyle(son[0],null).width);
    lrdot(son4,sonleft4,sonright4,dian4,dist4,"se4");


    // 返回顶部
    window.onscroll=function(){
        let goTop=document.querySelector(".dath2-1");
        let bh=document.body.scrollTop||document.documentElement.scrollTop;
        if (bh>1000){
            goTop.style.display="block";
        }
        else{
            goTop.style.display="none";
        }
        goTop.onclick=function () {
            animate(document.body,{scrollTop:0});
            animate(document.documentElement,{scrollTop:0});
        }
    }


    // 为你推荐
    let button=document.querySelectorAll(".bu");
    let rec=document.querySelector(".rec");
    let wid=parseInt(getComputedStyle(rec,null).width)/3;
    let times=0;
    button[1].classList.add("bu-2");
    button[1].onclick=function () {
        times++;
        if (times==3){
            times=2;
        }
        rec.style.transform=`translate(-${wid*times}px)`;
        button[0].classList.add("bu-2");
        button[1].classList.add("bu-2");
        // button[times].classList.add("bu-2");
    }
    button[0].onclick=function () {
        times--;
        if (times==-1){
            times=0;
        }
        rec.style.transform=`translate(-${wid*times}px)`;
        button[1].classList.add("bu-2");
        button[0].classList.add("bu-2");
        // button[times=0].classList.remove("bu-2");
}

    // 闪购
    let button1=document.querySelectorAll(".bu1");
    let rec1=document.querySelector(".zhengti");
    pingmove1(rec1,button1,2,"bu1-1");


    // let wids=parseInt(getComputedStyle(rec1,null).width)/2;
    // let timess=0;
    // button1[1].onclick=function () {
    //     timess++;
    //     if (timess==2){
    //         timess=1;
    //     }
    //     rec1.style.transform=`translate(-${wids*timess}px)`;
    // }
    // button1[0].onclick=function () {
    //     timess--;
    //     if (timess==-1){
    //         timess=0;
    //     }
    //     rec1.style.transform=`translate(-${wids*timess}px)`;
    // }


    // 购物车选项卡
    let car=document.querySelector(".shopcar");
    let cardown=document.querySelector(".shopcar-bottom");
    // console.log(car,cardown);
    car.onmouseenter=function () {
        cardown.style.height=100+"px";
    }
    car.onmouseleave=function () {
        cardown.style.height=0;
    }


    let housea=document.querySelectorAll(".housea");
    let adv=document.querySelectorAll(".adv2-right");
    adv[0].style.display="block";
    housea[0].classList.add("acolor");
    for(let i=0;i<housea.length;i++){
        housea[i].onmouseenter=function () {
            for (let j=0;j<adv.length;j++){
                adv[j].style.display="none";
                housea[j].classList.remove("acolor");
            }
            adv[i].style.display="block";
            housea[i].classList.add("acolor");
        }
    }

// }
 

