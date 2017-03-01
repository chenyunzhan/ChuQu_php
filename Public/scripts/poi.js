//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   loading;
//  >   FUNCTION        :   GET INFORMATION OF BROWSER,
//                          AND SET THE LOADING PAGE.
//  >   CALL            :   material
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

function loading(w) {
    var MarginTop = window.innerHeight/2-220;
    $("#LoginCanvas").css({"margin-top":MarginTop+"px"});
    Location = w;
    material();
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   fleft, fright, fback;
//  >   FUNCTION        :   SLIDE THE FLASH.
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

function fleft() { 
    $("#flash").css({"transform":"translateX(0)"});
}
function fright() {
    $("#flash").css({"transform":"translateX(155%)"});
}
function fback() {
    if (Location) {
        $("#flash").css({"transform":"translateX(0)"});
    }
    else { 
        $("#flash").css({"transform":"translateX(155%)"});
    }
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   fullscreen, turnoff;
//  >   FUNCTION        :   SET THE LOGIN PAGE DISPLAY OR HIDE.
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

function fullscreen() {
    $("#blurGlass").attr("class", "blurGlassOn");
    $("#loginpage").css({"display":"block"});
    $("#loginpage").css({"animation":"fadeIn .6s both"});
    
    $(".logincanvas-logo").css({"animation":"flipInX .6s .3s both"});
    $(".logincanvas-note").css({"animation":"bounceIn .6s .4s both"});
    $(".logincanvas-loginbox").css({"animation":"flipInX .6s .5s both"});
    $(".logincanvas-button").css({"animation":"bounceIn .6s .9s both"});
}
function Loginturnoff() {
    $("#loginpage").css({"animation":"fadeOut .6s both"});
    setTimeout(function() {$("#loginpage").css({"display":"none"});},600);
    $("#blurGlass").attr("class", null);
}

//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//
//**********************************MAIN!******************************
//
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=\

var leftpath = 1;
var rightpath = 0; // 推荐
var rightTagNum = new Array(6);

// 主要、次要、计划外兴趣点
var mainPoiQueue = new Array();
var secondPoiQueue = new Array();
var outOfPlanPoiQueue = new Array();

rightTagNum[0] = 0;
rightTagNum[1] = 0;
rightTagNum[2] = 0;
rightTagNum[3] = 0;
rightTagNum[4] = 0;
rightTagNum[5] = 0;
rightTagNum[6] = 0;
var Stack=new Array(16);
var StackPointerIMP=0;
var StackPointerMIN=3;
var StackPointerOTH=9;
var divBuff=new Array(2);

divBuff[0]="<div class='poi-aim-left-1'></div><div class='list-poi-aim' id='left-poi-aim-0'><div class='list-poi-aim-left'>欣赏大自然</div><div class='list-poi-aim-right'><div class='aim-right-del' id='left-aim-right-del-0'>+</div></div></div>";
divBuff[1]="<div class='poi-aim-left-1'></div><div class='list-poi-aim' id='left-poi-aim-1'><div class='list-poi-aim-left'>登雪山滑雪</div><div class='list-poi-aim-right'><div class='aim-right-del' id='left-aim-right-del-1'>+</div></div></div>";




// function getPoi(){
	// $.ajax({
	  // type: "POST",
	  // // data: {"dayId":dayId},
	  // dataType: "json",
	  // url: "http://"+CQHOST+"index.php/Home/Route/getPoi",
	  // cache: false,
	  // async: false,
	  // success: function(jn){
		
	  // }
	// });

// }



$(function() {
    $("#LoginTurnOff").click(function() {Loginturnoff()});
    $("#left-title-1").mouseover(function() {
        $("#left-wall-1").css({"height":"320px"});
        $("#left-wall-2").css({"height":"40px"});
        $("#left-wall-3").css({"height":"40px"});
        leftpath = 1;
    });
    $("#left-title-2").mouseover(function() {
        $("#left-wall-2").css({"height":"320px"});
        $("#left-wall-1").css({"height":"40px"});
        $("#left-wall-3").css({"height":"40px"});
        leftpath = 2;
    });
    $("#left-title-3").mouseover(function() {
        $("#left-wall-3").css({"height":"320px"});
        $("#left-wall-1").css({"height":"40px"});
        $("#left-wall-2").css({"height":"40px"});
        leftpath = 3;
    });
	
	// 推荐
	// $("#del-right-s3").click(function() {addpoi(3)});
    // $("#del-right-s10").click(function() {addpoi(10)});
    // $("#del-right-s17").click(function() {addpoi(17)});
	
	
	// 普通
    // $("#del-right-0").click(function() {addpoi(0)});
    // $("#del-right-1").click(function() {addpoi(1)});
    // $("#del-right-2").click(function() {addpoi(2)});
	
	$("div[id ^= 'del-right-']").click(function(){
		var id = $(this).attr("id").slice(10);
		console.log(id);
		if(id.indexOf("s") == 0) id = id.slice(1);
		
		console.log(id);
		
		if($("#left-poi-aim-"+id).size() > 0){
			// alert("del");
			delPoi(id);
		}else{
			var poiName = $(this).parent().prev().text();
			addpoi(id, poiName);
		}
	});
    
    
	// 展示poiClassName
    $("div[id ^= 'right-tag-']").each(function(i, e){
		$(e).click(function(){
			var id = $(e).attr("id").slice(10);
			// console.log(id);
			rightpagespath(id);
		});
	});
    rightpagespath(0); // 推荐的兴趣点
    
    


	// 获取兴趣点
	$(".goon").mousedown(function(){
		var pa=$("#left-wall-1 .list-poi-aim").size();
		var pb=$("#left-wall-2 .list-poi-aim").size();
		var pc=$("#left-wall-3 .list-poi-aim").size();
		var pa_id="";
		var pb_id="";
		var pc_id="";
		var pa_ids="";
		var pb_ids="";
		var pc_ids="";
		
		if(pa>0){
			$("#left-wall-1 .list-poi-aim").each(function(){
				pa_id =this.id;
				pa_id=pa_id.replace("left-poi-aim-","");
				// pa_id=switch_poi(pa_id);
				pa_ids=pa_ids+(","+pa_id);
			});
			pa_ids=pa_ids.substr(1);
		}
		
		if(pb>0){
			$("#left-wall-2 .list-poi-aim").each(function(){
				pb_id =this.id;
				pb_id=pb_id.replace("left-poi-aim-","");
				// pb_id=switch_poi(pb_id);
				pb_ids=pb_ids+(","+pb_id);
			});
			pb_ids=pb_ids.substr(1);
		}
		
		if(pc>0){
			$("#left-wall-3 .list-poi-aim").each(function(){
				pc_id =this.id;
				pc_id=pc_id.replace("left-poi-aim-","");
				// pc_id=switch_poi(pc_id);
				pc_ids=pc_ids+(","+pc_id);
			});
			pc_ids=pc_ids.substr(1);
		}
		// alert(pa_ids);
		// alert(pb_ids);
		// alert(pc_ids);
		var jsonObj={
			"pa":pa_ids,
			"pb":pb_ids,
			"pc":pc_ids
		}
		
	$.post("http://"+CQHOST+"index.php/Home/Route/poi",{"poi":jsonObj});
	})
});



//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_
//
//
//
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_


// 显示对应兴趣点分类下的兴趣点列表
function rightpagespath(n) {
	//alert(n);
    $("#list-page-"+rightpath).hide();
    $("#right-tag-"+rightpath).css({"background-color":"rgba(255, 255, 255, 0)","box-shadow":"3px 0 3px rgba(0, 0, 0, 0.1) inset"});
    rightpath = n;
    $("#list-page-"+rightpath).fadeIn();
    $("#right-tag-"+rightpath).css({"background-color":"rgba(255, 255, 255, 0.1)","box-shadow":"3px 3px 3px rgba(0, 0, 0, 0.1)"});
    
}

function delPoi(poiId){
	// if($.inArray(poiId, mainPoiQueue) > -1 || $.inArray(poiId, secondPoiQueue) > -1 || $.inArray(poiId, outOfPlanPoiQueue) > -1)
	// alert(poiId);
	switch (leftpath) {
		case 1:
			if(mainPoiQueue.length == 0 || $.inArray(poiId, mainPoiQueue) == -1){
				// alert("del1");
				// alert(poiId);
				// alert(mainPoiQueue[0]);
				return 0;
			}else{
				// alert("del2");
				mainPoiQueue = delFurther(poiId, mainPoiQueue);
			}
			break;
		case 2:
			if (secondPoiQueue.length == 0 || $.inArray(poiId, secondPoiQueue) == -1){
				return 0;
			}else{
				secondPoiQueue = delFurther(poiId, secondPoiQueue);
			}
			
			break;
		case 3:
			if (outOfPlanPoiQueue.length == 0 || $.inArray(poiId, outOfPlanPoiQueue) == -1){
				return 0;
			}else{
				outOfPlanPoiQueue = delFurther(poiId, outOfPlanPoiQueue);
			}
			break;
	}
	
	
	// 删除的样式
	$("#del-right-"+poiId+",left-aim-right-del"+poiId).css({"color":"rgba(255, 255, 255, 0.8)","transform":"rotate(0)"}); 
	// left-poi-aim-3
	if($("#del-right-s"+poiId).size() > 0) $("#del-right-s"+poiId).css({"color":"rgba(255, 255, 255, 0.8)","transform":"rotate(0)"}); 
	// pop(coun);
	return 0;
}
function delFurther(poiId, poiQueue){
	var startMove = -1;
	var boxId = $("#left-poi-aim-"+poiId).parent().attr("id").slice(12);
	console.log(poiId);
	console.log(poiQueue);
	$("#left-poi-aim-"+poiId).remove();		
	for(var i = 0; i < poiQueue.length; i ++){
		if(poiQueue[i] == poiId){
			startMove = i;
		}
		// 都前移一位
		if(startMove >= 0 && i <= poiQueue.length - 2){
			poiQueue[i] = poiQueue[i+1];
			var nextBoxId = parseInt(boxId) + 1;
			// alert(nextBoxId);
			// alert($("#poi-box-aim-"+nextBoxId).html());
			$("#poi-box-aim-"+boxId).html($("#poi-box-aim-"+nextBoxId).html());
			
			
			boxId ++;
		}
		
		
	}
	$("div[id^='left-aim-right-del-']").unbind("click");
	$("div[id^='left-aim-right-del-']").bind("click", function(){
		delPoi($(this).attr("id").slice(19));
	});
	
	
	$("#poi-box-aim-"+boxId).html("");// 清空最后一个
	console.log(poiQueue);
	
	poiQueue = poiQueue.slice(0, -1);
	console.log(poiQueue);
	return poiQueue;
}
function addpoi(poiId, poiName) {
	if(poiId == 'undefined' || poiName == 'undefined') return ;
	// 兴趣点已添加
	// alert($.inArray(poiId, mainPoiQueue));
	if($.inArray(poiId, mainPoiQueue) > -1 || $.inArray(poiId, secondPoiQueue) > -1 || $.inArray(poiId, outOfPlanPoiQueue) > -1) return;
	
	var addIndex = 0;
	
	switch (leftpath) {
		case 1:
			if (mainPoiQueue.length >= 3){
				return 0;
			}else{
				addIndex = mainPoiQueue.length;
				 
				mainPoiQueue.push(poiId);
			}
			break;
		case 2:
			if (secondPoiQueue.length >= 6){
				return 0;
			}else{
				addIndex = secondPoiQueue.length + 3;
				secondPoiQueue.push(poiId);
			}
			break;
		case 3:
			if (outOfPlanPoiQueue.length >= 8){ 
				return 0;
			}else{
				addIndex = outOfPlanPoiQueue.length + 9;
				outOfPlanPoiQueue.push(poiId);
			}
			break;
	}
	
	// 添加后的样式
	// addIndex ++; // poi-box-aim-id从0开始
	var htmlCode = "<div class='poi-aim-left-"+leftpath+"'></div><div class='list-poi-aim' id='left-poi-aim-"+poiId+"'><div class='list-poi-aim-left'>"+poiName+"</div><div class='list-poi-aim-right'><div class='aim-right-del' id='left-aim-right-del-"+poiId+"'>+</div></div></div>";
	
    $("#poi-box-aim-"+addIndex).html(htmlCode);
	
    $("#del-right-"+poiId+",#left-aim-right-del-"+poiId).css({"color":"rgb(252, 65, 69)","transform":"rotate(45deg)"});
	
	// 推荐的兴趣点列表
	if($("#del-right-s"+poiId).size()>0){
		$("#del-right-s"+poiId).css({"color":"rgb(252, 65, 69)","transform":"rotate(45deg)"});
	}
	
    $("#left-poi-aim-"+poiId).css({"animation":"fadeIn .68s ease"});
    $("#left-aim-right-del-"+poiId).bind("click", function() {delPoi(poiId)});
	
}

//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   material,
//  >   FUNCTION        :   MATERIAL STYLE
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function material() {
    $(".loading-logo,.spinner-container").fadeOut(300);
    setTimeout(function() {$("#loading").css({"bottom":"100%"});},500);
    setTimeout(function() {$("#loading").css({"display":"none"});},800);
    $("header").css({"animation":"fadeInDown 1s .8s both"});

    // $("#del-right-0").parent().parent().css({"animation":"fadeInDown .68s .2s both"});
    // $("#del-right-1").parent().parent().css({"animation":"fadeInDown .68s .3s both"});
    // $("#del-right-2").parent().parent().css({"animation":"fadeInDown .68s .4s both"});
    
    
    
    $("#left-title-1").css({"animation":"bounceInRight 1.2s .6s both"});
    
    $("#poi-box-aim-0").css({"animation":"rotateInDownLeft 1s .6s both"});
    $("#poi-box-aim-1").css({"animation":"rotateInDownRight 1s .8s both"});
    $("#poi-box-aim-2").css({"animation":"rotateInDownLeft 1s 1s both"});
    
    $(".table-left-wall-note-1").css({"animation":"flipInX 1.3s .9s both"});
    $("#left-title-2").css({"animation":"bounceInRight 1.2s .7s both"});
    $("#left-title-3").css({"animation":"bounceInRight 1.2s .8s both"});
    
    $(".goon").css({"animation":"bounceIn 1s 1.5s both"});
    
    $("div[id ^= 'right-tag-']").each(function(i, e){
		var t = 1.2 + i * 0.1;
		
		$(e).css({"animation":"rotateInUpLeft .6s "+ t +"s both"});
	});
    // $("#right-tag-3").css({"animation":"rotateInUpLeft .6s 1.3s both"});
    // $("#right-tag-4").css({"animation":"rotateInUpLeft .6s 1.4s both"});
    // $("#right-tag-5").css({"animation":"rotateInUpLeft .6s 1.5s both"});
    // $("#right-tag-6").css({"animation":"rotateInUpLeft .6s 1.6s both"});
    
	$("div[id ^= 'del-right-']").each(function(i, e){
		var t = 0.2 + i / 8 * 0.1;
		$(e).parent().parent().css({"animation":"fadeInDown .2s "+ t +"s both"});
	});
	
    // $("#del-right-3").parent().parent().css({"animation":"fadeInDown .2s .2s both"});
    // $("#del-right-4").parent().parent().css({"animation":"fadeInDown .2s .3s both"});
    // $("#del-right-5").parent().parent().css({"animation":"fadeInDown .2s .4s both"});
    // $("#del-right-6").parent().parent().css({"animation":"fadeInDown .2s .3s both"});
    // $("#del-right-7").parent().parent().css({"animation":"fadeInDown .2s .4s both"});
    // $("#del-right-8").parent().parent().css({"animation":"fadeInDown .2s .5s both"});
    // $("#del-right-9").parent().parent().css({"animation":"fadeInDown .2s .4s both"});
    // $("#del-right-10").parent().parent().css({"animation":"fadeInDown .2s .5s both"});
    // $("#del-right-11").parent().parent().css({"animation":"fadeInDown .2s .6s both"});
    // $("#del-right-12").parent().parent().css({"animation":"fadeInDown .2s .5s both"});
    // $("#del-right-13").parent().parent().css({"animation":"fadeInDown .2s .6s both"});
    // $("#del-right-14").parent().parent().css({"animation":"fadeInDown .2s .7s both"});
    // $("#del-right-15").parent().parent().css({"animation":"fadeInDown .2s .6s both"});
    // $("#del-right-16").parent().parent().css({"animation":"fadeInDown .2s .7s both"});
    
    
    // $("#del-right-17").parent().parent().css({"animation":"fadeInDown .4s .2s both"});
    // $("#del-right-18").parent().parent().css({"animation":"fadeInDown .4s .3s both"});
    // $("#del-right-19").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
    // $("#del-right-20").parent().parent().css({"animation":"fadeInDown .4s .3s both"});
    // $("#del-right-21").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
    // $("#del-right-22").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
    // $("#del-right-23").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
    
    // $("#del-right-24").parent().parent().css({"animation":"fadeInDown .68s .2s both"});
    // $("#del-right-25").parent().parent().css({"animation":"fadeInDown .68s .3s both"});
    // $("#del-right-26").parent().parent().css({"animation":"fadeInDown .68s .4s both"});
    
    // $("#del-right-27").parent().parent().css({"animation":"fadeInDown .4s .2s both"});
    // $("#del-right-28").parent().parent().css({"animation":"fadeInDown .4s .3s both"});
    // $("#del-right-29").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
    // $("#del-right-30").parent().parent().css({"animation":"fadeInDown .4s .3s both"});
    // $("#del-right-31").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
    // $("#del-right-32").parent().parent().css({"animation":"fadeInDown .4s .5s both"});
    
    // $("#del-right-33").parent().parent().css({"animation":"fadeInDown .4s .2s both"});
    // $("#del-right-34").parent().parent().css({"animation":"fadeInDown .4s .3s both"});
    // $("#del-right-35").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
    // $("#del-right-36").parent().parent().css({"animation":"fadeInDown .4s .3s both"});
    // $("#del-right-37").parent().parent().css({"animation":"fadeInDown .4s .4s both"});
}

function switch_poi(poid){
	var poi = poid;
	//alert(poi);
	switch(poi){
		case "3":
			poi=6;//人文之旅
			break; 
		case "4":
			poi=7;//奇妙博物馆
			break;
		case "5":
			poi=8;//历史的足迹
			break;
		case "6":
			poi=9;//艺术之旅
			break;
		case "7":
			poi=10;//风俗转呀转
			break;
		case "8":
			poi=41;//小镇之旅
			break;
		case "9":
			poi=11;//名人之印
			break;
		case "10":
			poi=12;//城堡酒庄
			break;
		case "11":
			poi=19;//都市绿洲
			break;
		case "12":
			poi=13;
			break;//电影之旅
		case "13":
			poi=0;//体育之路
			break;
		case "14":
			poi=0;//知名景点
			break;
		case "15":
			poi=14;//学习参观
			break;
		case "16":
			poi=18;//异乡建筑
			break;
		case "17":
			poi=3;//游山玩水
			break;
		case "18":
			poi=15;//生物体验
			break;
		case "19":
			poi=0;//动物世界
			break;
		case "20":
			poi=16;//天体地质
			break;
		case "21":
			poi=17;//面朝大海
			break;
		case "22":
			poi=5;//雪山探险
			break;
		case "23":
			poi=0;//乡村景观
			break;
		case "24":
			poi=0;//吃货之旅
			break;
		case "25":
			poi=0;//特色小吃
			break;
		case "26":
			poi=0;//奢华美食
			break;
		case "27":
			poi=0;//买买买
			break;
		case "28":
			poi=0;//奢华购物
			break;
		case "29":
			poi=0;//名品打折季
			break;
		case "30":
			poi=0;//跳蚤集市
			break;
		case "31":
			poi=0;//奥特莱斯
			break;
		case "32":
			poi=0;//特色购物
			break;
		case "33":
			poi=0;//欲望都市
			break;
		case "34":
			poi=5;//滑雪打猎
			break;
		case "35":
			poi=0;//游玩乐园
			break;
		case "36":
			poi=0;//赛事欣赏
			break;
		case "37":
			poi=0;//悠闲慢生活
			break;
	}
	//alert(poi);
	return poi;
}


function test(){
	var arr = [0, 1, 2, 3, 4, 5, 6];
}
