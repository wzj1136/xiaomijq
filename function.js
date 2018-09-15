//自己的函数库

// 透明度轮播图的函数
// // 获取所需元素
        //imgs:要轮播的所有图片集合
        //dot:轮播点的集合
        //banner:放banner图的大盒子元素
        //active代表选中轮播点的类名
        //bannerNum表示轮播图的数量
        //second需要轮播的时间
//  let imgs=document.querySelectorAll("img");
//  let dots=document.querySelectorAll("li");
//  let banner=document.querySelectorAll(".banner")[0];
//     Olunbo()

    function Olunbo(imgs,dots,banner,activeClass="active",bannerNum,second=1500) {
        //定义初始值
        imgs[0].style.opacity=1;
        //active代表选中轮播点的类名
        dots[0].classList.add(activeClass);
        //移入移出轮播点
        for(let i=0;i<dots.length;i++){
            dots[i].onmouseover=function () {
                for (let j=0;j<dots.length;j++){
                    imgs[j].style.opacity=0;
                    dots[j].classList.remove(activeClass);
                }
                imgs[i].style.opacity=1;
                dots[i].classList.add(activeClass);
                num=i;
            }
        }

        //自动轮播
        let t;
        let num=0;
        function move() {
            num++;
            //轮播点的个数
            if (num==bannerNum) {
                num = 0;
            }
            for (let j=0;j<dots.length;j++){
                imgs[j].style.opacity=0;
                dots[j].classList.remove(activeClass);
            }
            imgs[num].style.opacity=1;
            dots[num].classList.add(activeClass);
            // num=i;
        }


        banner.onmouseover=function () {
            clearInterval(t);
        }
        banner.onmouseout=function () {
            t=setInterval(move,second);
        }
    }



    // 层级轮播图的函数
    //imgs:要轮播的所有图片集合
    //dot:轮播点的集合
    //banner:放banner图的大盒子元素
    //active代表选中轮播点的类名
    //bannerNum表示轮播图的数量
    //second需要轮播的时间
    function zlunbo(imgs,dots,banner,activeClass="active",bannerNum,second=1500) {
        // 获取所需元素
        // let imgs=document.querySelectorAll("img");
        // let dots=document.querySelectorAll("li");
        // let banner=document.querySelectorAll(".banner")[0];
        // 定义初始值
        imgs[0].style.zIndex=2;
        dots[0].classList.add(activeClass);

        //移入轮播点操作
        for(let i=0;i<dots.length;i++){
            dots[i].onmouseover=function () {
                for(let j=0;j<dots.length;j++){
                    dots[j].classList.remove(activeClass);
                    imgs[j].style.zIndex=1;
                }
                dots[i].classList.add(activeClass);
                imgs[i].style.zIndex=2;
                num=i;
            }

        }

        // 自动轮播
        let t;
        let num=0;
        function move() {
            num++;
            if (num==bannerNum){
                num=0;
            }
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeClass);
                imgs[j].style.zIndex=1;
            }
            imgs[num].style.zIndex=2;
            dots[num].classList.add(activeClass);
        }


        banner.onmouseover=function () {
            clearInterval(t);
        }
        banner.onmouseout=function () {
            t=setInterval(move,second);
        }
    }



    //加左右箭头的层级轮播
    function zlunbo_lr(imgs,dots,banner,activeClass="active",bannerNum,second=1500,left,right) {
    // 获取所需元素
    // let imgs=document.querySelectorAll("img");
    // let dots=document.querySelectorAll("li");
    // let banner=document.querySelectorAll(".banner")[0];
    // let left=document.querySelectorAll(".bto-left")[0];
    // let right=document.querySelectorAll(".bto-right")[0];
    // 定义初始值
    imgs[0].style.zIndex=2;
    dots[0].classList.add(activeClass);

    //移入轮播点操作
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeClass);
                imgs[j].style.zIndex=1;
            }
            dots[i].classList.add(activeClass);
            imgs[i].style.zIndex=2;
            num=i;
        }

    }

    // 自动轮播
    let t;
    let num=0;
    function move() {
        num++;
        if (num==bannerNum){
            num=0;
        }
        for(let j=0;j<dots.length;j++){
            dots[j].classList.remove(activeClass);
            imgs[j].style.zIndex=1;
        }
        imgs[num].style.zIndex=2;
        dots[num].classList.add(activeClass);
    }
        function move1() {
            num--;
            if (num<0){
                num=bannerNum-1;
            }
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeClass);
                imgs[j].style.zIndex=1;
            }
            imgs[num].style.zIndex=2;
            dots[num].classList.add(activeClass);
        }

        left.onclick=function(){
            move1();
        }
        right.onclick=function(){
            move();
        }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,second);
    }
    window.onblur=function () {
        clearInterval(t);
    }
    window.onfocus=function () {
        t=setInterval(move,second);
    }
}



// 选项卡封装函数
    // let lis=document.querySelectorAll("li");
    // let son=document.querySelectorAll(".son");
    // lis表示li类名，son表示弹出块类名
    function xuanxiangka(lis,son) {
        // 1.获取元素

        // console.log(lis);
        // console.log(son);
        // 2.遍历每一个li
        for(let i=0;i<lis.length;i++){
            // 3.当鼠标移入每个li时的操作
            lis[i].onmouseover=function () {
                //4.其余子元素消失
                for (let j=0;j<son.length;j++){
                    son[j].style.display="none";
                }
                // 5.让当前子元素出现
                son[i].style.display="block";
            }
            lis[i].onmouseout=function () {
                son[i].style.display="none";
            }
        }
    }


    //遮罩封装函数
    // 1.获取操作的元素，注意集合问题，可以用[]获取所需元素
    // let box=document.querySelectorAll(".box")[0];
    // let cover=document.querySelectorAll(".cover")[0];
    // box表示大盒子的类名，封装遮罩的类名
    function zhezhao(box,cover) {
        // 遮罩

        //鼠标移入
        box.onmouseover=function () {
            //遮罩出现
            cover.style.display="block";
        }
        box.onmouseout=function () {
            //遮罩消失
            cover.style.display="none";
        }
    }

    //宽度弹性缩放
//         let box = document.querySelector(".box");
//     // console.log(widths);

    // box表示盒子的类名
    // speednum的数值表示变化的长度
    // max表示盒子变化最大值
    // min表示盒子变化最小值,但不能大于html里的值
    function suofang(box,speednum,max=1000,min=200) {
        let t = setInterval(move, 10);
        let speed =speednum;
        function move() {
            let widths = parseInt(getComputedStyle(box, null).width);
            let newwidths=widths+speed;
            if  (newwidths > max){
                speed*=-1;
            } else if(newwidths < min){
                speed*=-1;
            }
            box.style.width = newwidths + "px";
        }
    }





    // 双下标轮播函数/左右轮播函数

    // let imgs = document.querySelectorAll("img");
    // let dots = document.querySelectorAll("li");
    // let banner = document.querySelectorAll(".banner")[0];
    // let leftbtn = document.querySelectorAll(".leftbtn")[0];
    // let rightbtn = document.querySelectorAll(".rightbtn")[0];
    // let widths = parseInt(getComputedStyle(imgs[0], null).width);

    // imgs：需要轮播的图片的集合
    // dots：轮播点的集合
    // banner：轮播图的盒子元素
    // leftbtn：左箭头元素
    // rightbtn：右箭头元素
    // widrhs：banner的宽
    // activeClass:轮播点选中时的类名
    // second：轮播图执行时间
    function banner_lr(imgs,dots,banner,leftbtn,rightbtn,widths,activeClass,second) {
        // 2.初始值
        imgs[0].style.left=0;
        dots[0].classList.add(activeClass);
        let now=0;
        let next=0;
        //开关：控制快速点击时图片会快速轮播的现象
        //默认开关是打开的，flag=true，可以点击左右箭头
        let flag=true;
        //  now              next
        //    0                  0
        //                      ++
        // left:0;              left:1226px;
        // left:-1226px         left:0px;

        let t=setInterval(move,second);
        function move() {
            next++;
            if (next==imgs.length){
                next=0;
            }
            //确保下一张图的位置永远在最右侧
            imgs[next].style.left=widths+"px";

            //无动画效果写法
            // imgs[now].style.left=-widths+"px";
            // imgs[next].style.left=0;

            animate(imgs[now],{left:-widths});
            animate(imgs[next],{left:0},function () {
                flag=true;
            });
            dots[now].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            now=next;
        }

        function movel() {
            next--;
            if (next<0){
                next=imgs.length-1;
            }
            imgs[next].style.left=-widths+"px";
            animate(imgs[now],{left:widths});
            animate(imgs[next],{left:0},function () {
                flag=true;
            });
            dots[now].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            now=next;
        }
        leftbtn.onclick=function () {
            //判断开关是否开启，
            //如果开关开启，则！falg=false，不执行return，执行falg=false和move函数，
            // 执行完move函数后flag=true;
            //
            // 开关关闭时候，不要点击
            // flag=false不成立       !flag=true;成立     执行return，结束函数
            if (!flag){
                return;
            }
            flag=false;
            movel();
        }
        rightbtn.onclick=function () {
            if (!flag){
                return;
            }
            flag=false;
            move();
        }
        banner.onmouseover=function () {
            clearInterval(t);
        }
        banner.onmouseout=function () {
            t=setInterval(move,second);
        }
        //移入轮播点
        for (let i=0;i<dots.length;i++){
            dots[i].onmouseover=function () {
                if (flag){
                    for (let j=0;j<dots.length;j++){
                        dots[j].classList.remove(activeClass);
                        imgs[j].style.left=widths+"px";
                    }
                    dots[i].classList.add(activeClass);
                    imgs[i].style.left=0;
                    now=i;
                    next=i;
                }
            }
        }

        //窗口失去焦点时，停止时间间隔函数
        window.onblur=function () {
            clearInterval(t);
        }

        //窗口失去焦点时，获取时间间隔函数
        window.onfocus=function () {
            t=setInterval(move,second);
        }

    }


    // 无自动播放点击轮播点具有动画效果的双下标轮播函数
    // let son=document.querySelectorAll(".sonbot");
    // let sonleft=document.querySelector(".conleft");
    // let sonright=document.querySelector(".conright");
    // let dian=document.querySelectorAll(".one");
    // let dist=parseInt(getComputedStyle(son[0],null).width);
    function lrdot(son,sonleft,sonright,dian,dist,activeClass){
    // console.log();
    son[0].style.left=0;
    dian[0].classList.add(activeClass);
    let now=0;
    let next=0;
    let flag=true;
    //轮播点控制
    // for (let i = 0; i < dian.length; i++) {
    //     dian[i].onmouseover = function () {
    //         if (flag) {
    //             for (let j = 0; j < dian.length; j++) {
    //                 dian[j].classList.remove(activeClass);
    //                 son[j].style.left = dist + "px";
    //             }
    //             dian[i].classList.add(activeClass);
    //             son[i].style.left = 0;
    //             now = i;
    //             next = i;
    //         }
    //     }
    // }
    //     点击轮播点具有动画效果的轮播图
        for (let i=0;i<dian.length;i++){
            dian[i].onclick=function () {
                // 到了第一张，不在继续
                if (now==i){
                    return;
                }else if(now<i){
                    son[i].style.left = dist + "px";
                    animate(son[now], {left: -dist});
                    animate(son[i], {left: 0}, function () {
                        flag = true;
                    });
                    dian[now].classList.remove(activeClass);
                    dian[i].classList.add(activeClass);
                    now=i;
                }else {
                    son[i].style.left = -dist + "px";
                    animate(son[now], {left: dist});
                    animate(son[i], {left: 0}, function () {
                        flag = true;
                    });
                    dian[now].classList.remove(activeClass);
                    dian[i].classList.add(activeClass);
                    now=i;
                }
            }
        }
    //右箭头控制
    sonright.onclick=function () {
            // 判断到了最后一张，不在继续
            if (now==dian.length-1) {
                return;
            }
        if (!flag) {
            return;
        }
        flag = false;
        next++;
        if (next == son.length) {
            next = 0;
        }
        son[next].style.left = dist + "px";
        animate(son[now], {left: -dist});
        animate(son[next], {left: 0}, function () {
            flag = true;
        });
        dian[now].classList.remove(activeClass);
        dian[next].classList.add(activeClass);
        // next始终比now大一
        now = next;
    }

    sonleft.onclick=function () {
        if (now==0){
         return;
         }
        if (!flag) {
            return;
        }
        flag = false;
        next--;
        if (next < 0) {
            next =son.length-1;
        }
        son[next].style.left = -dist + "px";
        animate(son[now], {left: dist});
        animate(son[next], {left: 0}, function () {
            flag = true;
        });
        dian[now].classList.remove(activeClass);
        dian[next].classList.add(activeClass);
        now = next;
    }

}

//     第一个为右键，第二个为左键
//     let button=document.querySelectorAll("button");
//     let miList=document.querySelector(".miList");
    // miList:最大盒子
    // button：左右按钮
    // btnNum：平移次数或者是右键最大点击次数
    function pingmove(miList,button,btnNum){
        let w=parseInt(getComputedStyle(miList,null).width)/btnNum;


        // 点击次数
        let times=0;
        // button[0]是右键
        button[0].onclick=function(){
            times++;
            if(times==btnNum){
                times=btnNum-1;
            }
            miList.style.transform=`translate(-${w*times}px)`;
        }
        // button[1]是左键
        button[1].onclick=function () {
            times--;
            if(times==-1){
                times=0;
            }
            miList.style.transform=`translate(-${w*times}px)`;
        }
    }

// 第一个为左键，第二个为右键
//     let button=document.querySelectorAll("button");
//     let miList=document.querySelector(".miList");
    // miList:最大盒子
    // button：左右按钮
    // btnNum：平移次数或者是右键最大点击次数
    function pingmove1(miList,button,btnNum,className){
        let w=parseInt(getComputedStyle(miList,null).width)/btnNum;


        // 点击次数
        let times=0;
        // button[1]是右键
        button[1].onclick=function(){
            times++;
            if(times==btnNum){
                times=btnNum-1;
            }
            miList.style.transform=`translate(-${w*times}px)`;
            button[0].classList.add(className);
            button[1].classList.add(className);
        }
        // button[0]是左键
        button[0].onclick=function () {
            times--;
            if(times==-1){
                times=0;
            }
            miList.style.transform=`translate(-${w*times}px)`;
            button[0].classList.add(className);
            button[1].classList.add(className);
        }
    }



    // 随机色rgb(r,g,b);
    // function randomColor() {
    //     let r=Math.round(Math.random()*255);
    //     let g=Math.round(Math.random()*255);
    //     let b=Math.round(Math.random()*255);
    //
    // // 进行字符串拼接
    //     // let str="rgb"+"("+r+","+b+","+b+")";
    //     let str=`rgb(${r},${g},${b})`;
    //     return str;
    // }
    //
    // randomColor();


    function randomColor() {
        let str="rgb(";
        for (let i=0;i<3;i++){
            str=str+Math.round(Math.random()*255)+",";
        }
        // 将最后一位，修改为）
        str=str.slice(0,-1)+")";
        return str;
    }
     randomColor();


