String.prototype.visualLength = function(){
	var ruler = $("#ruler");
	ruler.text(this);
	return ruler[0].offsetWidth;
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
   
}
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
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_
//**********************************MAIN!******************************
//
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
var map;
var sightMarkerAndId = [];
var sightPolyLinByDay = [];
var centerLatLng;
var bounds = new google.maps.LatLngBounds();
var cityPolyLinePath;
var dayPolyLine = [];
var cityLatLngArr = [];
var cityMarkerArr = [];
var sightMarkers = [];
var jn=[];
var markers = [];
var markersTit = [];
var sidMarkerJOBJ = [];
var sightDayMarks = [];
var directionsDisplayArr=[];
var directionsServiceArr=[];
//var pathStack = [];
var TransportationSettingOptionNum;
var TransportationSettingCityId;
var transportationoptionUML;
var spotConfigStack = [];

//var cityEditorButton;
//var city_editor_component;
$(function() {
    fright();
	// addd1 载入路线页面
    loadRoutePage();
	
	reLoadInfo();
	modifyCities();
	
	google.maps.event.addDomListener(window, 'load', createCityMarkers());
	google.maps.event.addDomListener(window, 'load', createSightMarkers());
	google.maps.event.addDomListener(window, 'load', showCityMarkers(true));
	google.maps.event.addDomListener(window, 'load', showCityPolyLine(true));
});



function reInitVar(){
	// var map;
	sightMarkerAndId = [];
	sightPolyLinByDay = [];
	// var centerLatLng;
	bounds = new google.maps.LatLngBounds();
	// var cityPolyLinePath;
	dayPolyLine = [];
	cityLatLngArr = [];
	cityMarkerArr = [];
	sightMarkers = [];
	jn=[];
	markers = [];
	markersTit = [];
	sidMarkerJOBJ = [];
	sightDayMarks = [];
	directionsDisplayArr=[];
	directionsServiceArr=[];
	//var pathStack = [];
	// var TransportationSettingOptionNum;
	// var TransportationSettingCityId;
	// var transportationoptionUML;
	spotConfigStack = [];
}


function reLoadInfo(){
	$("#LoginTurnOff").click(function() {Loginturnoff()});
	
	// reInitVar();
	// 修改城市的页面
	//changeCityPage();
	
	getReturnInfo();
	
	// 隐藏返回的某些信息
	$(".return-info").css("display", "none");
	cityEditorTitleInfoTag();
	listDayCityCol();
	
	loadCityOptionsToModify();
	
	searchCity();
	
	// 修改路线之后直接保存
	$(".main-left-city_editor_button-cancel").click(function(){
		modifyCityAfter();
		saveOrOptimize("SAVE");
	});
	
	// 修改路线之后进行优化
	$(".main-left-city_editor_button-finish").click(function(){
		modifyCityAfter();
		saveOrOptimize("OPTIMIZE");
	});

	//修改交通栏的高度
	$(".day-num-information-transportation").css("height","70px");
	$(".day-num-information-transportation").children().css("height","70px");
	$(".day-num-information-transportation-section").next().children().css({"margin":"28px auto"}); //矫正交通修改按钮的位置
	changeIndexBgImgOfSight();//更改景点的索引图标
	addClickListenerOfShowTransDetail();//添加展示详细交通信息的绑定事件
	addClickListenerOfShowSpotDetail();//添加展示详细交通信息的绑定事件
	//矫正景点修改按钮的位置
    $(".day-num-information-spot-button-icon").each(function(i,e) {$(e).css({"margin":+$(e).parent().height()/2-7+"px auto"});});
	//详细信息中显示景点图片
	$(".day-num-information-spot-section-detail-topview-photo-img").each(function(){
		var spotId = $(this).attr("id").substr(15);
		$(this).css({"background-image":"url(http://"+CQHOST+"Public/img/sight/SightImg"+spotId+".jpg)"})
	});
	//addd2更改主界面上交通方式的图标
	changeTransLogo($(document));
	
	addSightListToDayBox();
	//addd3 修改标题几日游
	changeTitName();
	//addd4 载入增加到第几天列表
	loadDayList();
	//addd5 addoneday
	//增加到某天后列表的展开与收拢
	$(document).on("click","#addoneday",function() {
		oneMoreDay();
		//$(document).reload();
		//动态绑定
		$(".title-option-button").unbind();
		$(".title-option-button").mouseover(function() {$(this).css({"background-color":"rgba(255, 255, 255, 0.3)"})});
		$(".title-option-button").mouseout(function() {$(this).css({"background-color":"rgba(0, 0, 0, 0.6)"})});
		
	});
	//addd6 增加一天到某天后
	$(document).on("click","div[id^='day-list-']",function(){
		var dayId=$(this).attr("id").substr(9);
		var dayNum=$(".day-num-box").size();
		if(dayNum==30){
			alert("游览时间不应超过30天!");
			oneMoreDay();
			return;
		}
		//增加到某天后列表的展开与收拢
		oneMoreDay();
		$.ajax({
		  type:"POST",
		  data:{"dayId":dayId},
		  dataType:"html",
		  url: "http://"+CQHOST+"index.php/Home/Route/plusOneDay",
		  cache: false,
		  async:false,
		  success: function(html){
			$("#inference-box").html(html);
			$("#main_button").css("display", "block");
			window.location.reload();
			
			$(".day-num-information-spot-button-icon").each(function(){
				$(this).css({"margin":+$(this).parent().height()/2-7+"px auto"});
			});
			$(".day-num-information-food-button-icon").each(function(){
				$(this).css({"margin":+$(this).parent().height()/2-7+"px auto"});
			});
			
		  }
		});
	});
	//addd7 展开每天的详细信息
	$(document).on("click",".day-num-box-left",function (){
		var dayId=$(this).next().attr("id").substr(18);
		displayDayInfor(dayId,this);
	}); 
	//addd13 进入修改城市页面
	$(document).on("click",".day-num-box-right",function (){
		cityConfRender();
		$(".main-left-city_editor_button").css({"animation":"fadeInUp .6s both"});
		$(".main-left-city_editor_button").css({"display":"block"});
		//var dayId=$(this).attr("id").substr(18);
		//displayDayInfor(dayId,this);
	}); 
	
	// $(".main-left-city_editor_button").css({"opacity":"0"});
	// $(".main-left-city_editor_button").css({"display":"none"});
	//addd8 交通修改按钮的点击事件
	$(document).on("click","div[id^='transportation-button-']",function (){
		undisplayMainBu();
		var id = $(this).attr("id").slice(22);
		if(id > 0) transportationSetting(this);
	});
	//交通排序的点击事件
	$(document).on("click","#transportation-nav-1",function(){TransportationInformation(1)});
	$(document).on("click","#transportation-nav-2",function(){TransportationInformation(2)});
	$(document).on("click","#transportation-nav-3",function(){TransportationInformation(3)});
	$(document).on("click","#transportation-nav-4",function(){TransportationInformation(4)});
	//addd9 景点修改按钮的点击事件
	$(document).on("click","div[id^='spot-button-']",function (){
		$(".title-main-left-title").text("规划你的自由路线");//更改修改景点栏的标题
		undisplayMainBu();
		spotSetting($(this));
	});
	
	setDayBgImg();//addd10 设置第几天的背景图片
	//addd11 景点的mouseover和mouseout事件
	$(document).on("mouseover",".day-num-information-spot-section-register-note-text",function(){
		for(var i in sidMarkerJOBJ){
			var n=$(this).attr("id").lastIndexOf("|")+1;
			var sid=$(this).attr("id").slice(n);
			if(sidMarkerJOBJ[i].sid==sid){
				sidMarkerJOBJ[i].marker.setAnimation(google.maps.Animation.BOUNCE);
				map.setCenter(sidMarkerJOBJ[i].marker.position);
				break;
			}
		}
	});
    $(document).on("mouseout",".day-num-information-spot-section-register-note-text",function(){
		for(var i in sidMarkerJOBJ){
			var n=$(this).attr("id").lastIndexOf("|")+1;
			var sid=$(this).attr("id").slice(n);
			if(sidMarkerJOBJ[i].sid==sid){
				sidMarkerJOBJ[i].marker.setAnimation(null);
				break;
			}
		}
	});
	//addd12 解决景点和餐厅修改按钮的偏移问题
    $(".day-num-information-spot-button-icon").each(function(i,e) {
        $(e).css({"margin":+$(e).parent().height()/2-7+"px auto"});
    });
    $(".day-num-information-food-button-icon").each(function(i,e) {
        $(e).css({"margin":+$(e).parent().height()/2-7+"px auto"});
    });
	
	
    
    $("#Transportation_Option_1").click(function() {TransportationOption(1)});
    $("#Transportation_Option_2").click(function() {TransportationOption(2)});
    $("#Transportation_Option_3").click(function() {TransportationOption(3)});
    $("#Transportation_Option_4").click(function() {TransportationOption(4)});
    
	//增加到某天列表长度过大时滚动条的添加
    $("#inference-box").scroll(function() {
        if ($("#inference-box").scrollTop()!=0) {
            $("#title-main-left-index").css({"box-shadow":"0 10px 10px -0px rgba(0, 0, 0, 0.5)"});
        }
        else {$("#title-main-left-index").css({"box-shadow":"0 10px 10px -0px rgba(0, 0, 0, 0)"})}
    });
    $("#inference-box-transportation").scroll(function() {
        if ($("#inference-box-transportation").scrollTop()!=0) {
            $("#title-main-left-transportation").css({"box-shadow":"0 10px 10px -0px rgba(0, 0, 0, 0.5)"});
        }
        else {$("#title-main-left-transportation").css({"box-shadow":"0 10px 10px -0px rgba(0, 0, 0, 0)"})}
    });
	
	
	changeBoxTit();
	changeTitleOfMap(1);//更改地图标题
	
	$("#main_button_finish").click(function(){saveRoute()});
	$("#main_button_cancel").click(function(){
		window.location.href = 'http://www.chuqv.com/index.php/home/user/schedule';
	});
	// $(".main-left-city_editor_button").css({"animation":"fadeOutDown .6s both"});
	//addd22
	
	
}

function reLoadMap(){
	// map = 'undefined';
	// console.log(map);
	reInitVar();
	var initLocal = new google.maps.LatLng(50.121212,8.6365638);
	map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 4,
		center: initLocal
	});
	
	createCityMarkers();
	createSightMarkers();
	showCityMarkers(true);
	showCityPolyLine(true);
}

function display_marker(n,num) {
    map.setCenter(markers[num].position);
    if (n) markers[num].setAnimation(google.maps.Animation.BOUNCE);
    else markers[num].setAnimation(null);
}

function displayDayInfor(day,dom) {
    var height=$(dom).parent().next().height();
    if (height==0) {
		changeTitleOfMap(day);//更改地图标题
		showCityMarkers(false);
		showCityPolyLine(false);
		showSightMarkers(day,true);
		//addSightMarker(day);
		//showRoute(day);
        var childrenDOMnum=$(dom).parent().next().children().length;
        var enablePadding=childrenDOMnum*10;
        var enable = 0;
        for (var coun = 0; coun < childrenDOMnum; coun++) {
            enable = enable + $(dom).parent().next().children().eq(coun).height();
        }
        enable = enable + enablePadding;
        $(dom).parent().next().css({"max-height":+enable+"px"});
        //hideCityPolyLine();
    }
    else {
		/*
		var initLocal;
		if(centerLatLng==="undefined"){
			initLocal = new google.maps.LatLng(50.121212,8.6365638);
		}else{
			initLocal = centerLatLng;
		}
		map.setCenter(initLocal);//让地图归于原位
		if($(".day-num-information-transportation-theme").size()>2){
			map.setZoom(8);
			map.fitBounds(bounds);
		}else{
			map.setZoom(12);
		}
		*/
		$(dom).parent().next().css({"max-height":"0"});
		
		
		showSightMarkers(day,false);
		showCityMarkers(true);
		showCityPolyLine(true);
		//delSightMarker(day);
		//showCityPolyLine();
	}
}

//交通方式的修改
function transportationSetting(dom) {
	 $("#title-main-left-index").css({"animation":"flipOutX .5s both"});
    setTimeout(function() {
        $("#title-main-left-index").css({"display":"none"});
        $("#title-main-left-transportation").css({"display":"block"});
    },500);
    $("#title-main-left-transportation").css({"animation":"flipInX .6s both"});

    $("#inference-box").css({"animation":"SettingFade .4s both"});
    $("#inference-box-transportation").css({"animation":"SettingFade .4s both"});


    undisplayMainBu();
    $(".main-left-city_editor_button").css({"display":"none"})

    $("#transportation_button").css({"display":"block"});
    $("#transportation_button_cancel").css({"animation":"fadeInUp .8s .4s both"});
    $("#transportation_button_finish").css({"animation":"fadeInUp .8s .8s both"});
    $("#transportation_button_cancel").unbind('click');
    $("#transportation_button_finish").unbind('click');
    $("#transportation_button_cancel").click(function() {BackToIndexFromTRSP()});
    $("#transportation_button_finish").click(function() {TransportationSettingFinish()});
    // TransportationOption(1);
	
	var cid=$(dom).attr("id").substr(22);
    TransportationSettingCityId = cid;
    // $("#title-main-left-index").css({"animation":"flipOutX .5s both"});
    // setTimeout(function() {
        // $("#title-main-left-index").css({"display":"none"});
        // $("#route_button").css({"display":"none"});
        // $("#title-main-left-transportation").css({"display":"block"});
    // },500);
    // $("#title-main-left-transportation").css({"animation":"flipInX .6s both"});

    // $("#inference-box").css({"animation":"SettingFade .4s both"});
    // $("#inference-box-transportation").css({"animation":"SettingFade .4s both"});
    
    // $("#transportation_button").css({"display":"block"});
    // $("#transportation_button_cancel").css({"animation":"fadeInUp .8s .4s both"});
    // $("#transportation_button_finish").css({"animation":"fadeInUp .8s .8s both"});
    // $("#transportation_button_cancel").unbind('click');
    // $("#transportation_button_finish").unbind('click');
    // $("#transportation_button_cancel").click(function() {BackToIndexFromTRSP()});
    // $("#transportation_button_finish").click(function() {TransportationSettingFinish()});
	
	
	//根据推荐交通方式，选择显示所在的列
	var type = $(dom).prev().find(".trans-logo-type-lisa").text().substr(0,2);
	//alert(type);
	if(type=="undefined") return;
	var num = 4;
	switch(type){
		case "飞机":
			num=1;
			break;
		case "夜间":
			num=2;
			break;
		case "火车":
			num=2;
			break;
		case "轮渡":
			num=3;
			break;
		case "渡轮": 
			num=3;
			break;
		default :
			num=4;
	}
	TransportationOption(num);
}

function BackToIndexFromTRSP() {
    displayMainBu();
	$("#title-main-left-transportation").css({"animation":"flipOutX .5s both"});
	
	
    setTimeout(function() {
        $("#title-main-left-transportation").css({"display":"none"});
        $("#title-main-left-index").css({"display":"block","z-index":"2"});
		$("#route_button").css({"display":"block"});
    },500);
    $("#title-main-left-index").css({"animation":"flipInX .6s both"});

    $("#inference-box-transportation").css({"animation":"IndexFade .4s both"});
	$("#inference-box").css({"animation":"IndexFade .4s both","z-index":"1"});
    
    $("#transportation_button").css({"display":"none"});
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   TransportationOption,
//  >   FUNCTION        :   交通工具设置页面 交通方式选项
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function TransportationOption(x) {
    TransportationOptionInit();
    TransportationSettingOptionNum=x;
    $("#Transportation_Option_"+x).css({"background-color":"rgba(255, 255, 255, 0.2)"});
    switch (x) {
        case 1:
            $("#Transportation_Option_Logo_1").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/planeEnable.png)"});
            break;
        case 2:
            $("#Transportation_Option_Logo_2").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/trainEnable.png)"});
            break;
        case 3:
            $("#Transportation_Option_Logo_3").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/shipEnable.png)"});
            break;
        case 4:
            $("#Transportation_Option_Logo_4").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/subwayEnable.png)"});
            break;
    }
    $("#Transportation_Option_l_"+x).css({"display":"none"});
    var x=x-1;
    $("#Transportation_Option_l_"+x).css({"display":"none"});
    TransportationInformation(1);
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   TransportationInformation,
//  >   FUNCTION        :   交通方式设置页面数据排列顺序选择
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=


function TransportationInformation(y) {
    for (var c=1; c<5; c++) {
        $("#transportation-nav-"+c).css({"background-color":"rgba(255, 255, 255, 0.2)"});
    }
    //alert(y);
    $("#transportation-nav-"+y).css({"background-color":"rgba(255, 255, 255, 0.4)"});
        
    getTransportationData(TransportationSettingCityId,TransportationSettingOptionNum,y);    
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   transportationOptionInit,
//  >   FUNCTION        :   交通工具设置页面的初始化
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function TransportationOptionInit() {
    for (var c=1; c<5; c++) {
        $("#Transportation_Option_"+c).css({"background-color":"rgba(255, 255, 255, 0.1)"});
    }
    for (var c=1; c<4; c++) {
        $("#Transportation_Option_l_"+c).css({"display":"block"});
    }
    $("#Transportation_Option_Logo_1").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/plane.png)"});
    $("#Transportation_Option_Logo_2").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/train.png)"});
    $("#Transportation_Option_Logo_3").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/ship.png)"});
    $("#Transportation_Option_Logo_4").css({"background-image":"url(http://"+CQHOST+"Public/img/inference/subway.png)"});
}

function getTransportationData(cid,x,y) {
	//x 1234 交通方式;y 1234 排序方式
    $("#transportation-appendLoc").empty();
	//alert(cid);
	var fCity=$("#transportation-button-"+cid).prev().find(".day-num-information-transportation-section-top-title-text").eq(0).text();
	var tCity=$("#transportation-button-"+cid).prev().find(".day-num-information-transportation-section-top-title-text").eq(1).text();
	if(fCity=="undefined"||tCity=="undefined"){
		$(".title-main-left-title").text("");//标题
	}else{
		$(".title-main-left-title").text(fCity+"——"+tCity);//标题
	}
	
	// tran-tcid-35
	var fCityId = $("#transportation-button-"+cid).prev().find(".day-num-information-transportation-section-top-title-text").eq(0).children().attr("class").slice(10);
	var tCityId = $("#transportation-button-"+cid).prev().find(".day-num-information-transportation-section-top-title-text").eq(1).children().attr("class").slice(10);
	// day-num-information-transportation-section-top-title-text
	var tranCidArr = [];
	tranCidArr.push(fCityId);
	tranCidArr.push(tCityId);
	
	var sortField = "";
	switch(y){
		case 1:
			sortField = "";//推荐
			break;
		case 2:
			sortField = "time";//时间
			break;
		case 3:
			sortField = "cost";//花费
			break;
		case 4:
			sortField = "";
			break;
	}
	//标记最佳交通(上)
	var markType="";
	var markTime="";
	var markCost="";
	var obj=$("#transportation-button-"+cid).prev().find(".day-num-information-transportation-section-note-text");
	markType=obj.eq(0).text();
	markTime=obj.eq(1).text().slice(2,-1);
	markCost=obj.eq(2).text();
	
    $.ajax({
        url: "http://"+CQHOST+"index.php/Home/Route/showTrans",
		type:"POST",
        cache: false,
		data:{"city": tranCidArr, "sortField":sortField},
        dataType: "json",
        success: function(transData) {
			var transformType;
			var timeCost;
			var routes = [];
			var distance;
			var theTransform=[];
			var oriRoute;
			for (var i in transData){
				//var transformTypeId=y;//0.飞机 1.火车 2.渡轮 3.巴士
				var index;
				if(x==1){
					index=transData[i].citype.substr(1,2).indexOf("飞机");
				}else if(x==2){
					index=transData[i].citype.substr(1,2).indexOf("火车");
					if(index==-1) index=transData[i].citype.substr(1,2).indexOf("夜间");
				}else if(x==3){
					index=transData[i].citype.substr(1,2).indexOf("渡轮");
					if(index==-1) index=transData[i].citype.substr(1,2).indexOf("轮渡");
				}else if(x==4){
					var t=transData[i].citype.substr(1,2);
					index=t.indexOf("巴士");
					if(index==-1&&t!="飞机"&&t!="火车"&&t!="夜间"&&t!="轮渡"&&t!="渡轮"){
						index=0;//出租（车）被截断
					}
				}
				
				if(index!=-1){
					theTransform.push(transData[i]);
				}
			}
			var tranList;
			TransSet.length = 0;
			for (var i in theTransform){
				//timeCost=theTransform[i].h2/60+0.01;//五舍六入变为四舍五入
				//timeCost=timeCost.toFixed(1);
				
				avgCost=theTransform[i].avgcost;
				if(avgCost==null) {avgCost="";}
				distance=theTransform[i].km;
				transformType=theTransform[i].citype.substr(1).replace(/\|/g,"->");
				//route=theTransform[i].route.substr(1).replace(/=/g,"->").replace(/\|/g,";");
				//route=theTransform[i].route;
				//alert(theTransform[i].newroute);
				routes.push(theTransform[i].newroute);
				oriRoute = theTransform[i].route;
				//此处要更改inferenc.css：交通方式的小图标
				var feature = "";
				if(theTransform[i].ischeap == 1){
					feature = "经济";
				}
				if(theTransform[i].istime == 1){
					feature = "省时";
				}
				if(theTransform[i].isbest == 1){
					feature = "推荐";
				}
				tranList = new trans_set_obj(transformType, "", "", feature, theTransform[i].h2, "14:00", avgCost, distance, oriRoute, theTransform[i].newcitype);
				TransSet.push(tranList);
				//alert(route);
				//标记最佳交通(下)
				if(markTime==timeCost&&avgCost.slice(1)==markCost&&markType==transformType){
					//$("#transportation_table_"+i).css({"border":"2px solid #61ad34"});
				}
				
				//$("#transportation_table_"+i).css({"display":"block","animation":"flipInX 1s both"});
				//$("#transportation_table_"+i).unbind("click");
				//$("#transportation_table_"+i).click(function() {TransportationOptionChoose($(this).attr("id"))});
				$(".inference-transportation-section-information-table-button").each(function(i,e) { 
					$(e).click(function() {TransportationOptionChoose(i,e);});
				});
			}
			if(TransSet.length>0) TransSet[0].refresh();
			
			//如果不是推荐的交通，就去掉绿色的背景
			$(".inference-transportation-section-information-table-section-bottom-feature").each(function(){
				// 空白绿框透明处理
				if($(this).text() == "") 
					$(this).css({"opacity":"0"});
				//background-color: #61ad34;
			});
			
		//inference-transportation-section-information-table-section-bottom-feature
			//对应显示交通的详细信息
			$(".inference-transportation-detail-section").each(function(i,e){
				$(e).append(routes[i]);
			});
			//更改修改页面的交通图标
			
			$(".inference-transportation-section-information-table-section-top-logo").css("background-image","url(http://"+CQHOST+"Public/img/inference/ctranlogo"+x+".png)");
        }
    });
	
	
	 
	
}


//修改交通页面
var TransSet = [];
function trans_set_obj(airport1, airport2, airport3, feature, time1, time2, cash, km,oriRoute, ciType) {
    this.airport1 = airport1;
    this.airport2 = airport2;
    this.airport3 = airport3;
    this.feature = feature;
    this.time1 = time1;
    this.time2 = time2;
    this.cash = cash;
    this.km = km;
    this.oriRoute = oriRoute;
    this.ciType = ciType;
    this.htmlcode = "<div class='inference-transportation-section-information-table'><div class='inference-transportation-section-information-table-section'><div class='inference-transportation-section-information-table-section-top'><div class='inference-transportation-section-information-table-section-top-logo'></div><div class='inference-transportation-section-information-table-section-top-text'><div class='inference-transportation-section-information-table-section-top-text-aer'>"+this.airport1+"</div></div></div><div class='inference-transportation-section-information-table-section-bottom'><div class='inference-transportation-section-information-table-section-bottom-feature'>"+this.feature+"</div><div class='inference-transportation-section-information-table-section-bottom-logo-1'></div><div class='inference-transportation-section-information-table-section-bottom-text'>历时"+this.time1+"h</div><div class='inference-transportation-section-information-table-section-bottom-logo-2'></div><div class='inference-transportation-section-information-table-section-bottom-text'>"+this.cash+"</div><div class='inference-transportation-section-information-table-section-bottom-logo-3'></div><div class='inference-transportation-section-information-table-section-bottom-text'>"+this.km+" km</div></div></div><div class='inference-transportation-section-information-table-button' id='"+this.oriRoute+"'><div class='inference-transportation-section-information-table-button-icon' id='"+this.ciType+"'></div></div></div>";

    this.nextCode = "<div class='inference-transportation-detail'><div class='inference-transportation-detail-section'></div></div>";
   
    this.display = function() {
        $("#transportation-appendLoc").append(this.htmlcode);
        if(this.airport3 == 5) {
            $(".inference-transportation-section-information-table-section-top-text").children().last().remove();
            $(".inference-transportation-section-information-table-section-top-text").children().last().remove();
			$(".inference-transportation-section-information-table-section-top-text").children().last().remove();
			$(".inference-transportation-section-information-table-section-top-text").children().last().remove();
        }
		
        if($(".inference-transportation-section-information-table-section-top-text").last().height()==25) {
            $(".inference-transportation-section-information-table").last().css({"height":"70px"});
        }
        $("#transportation-appendLoc").append(this.nextCode);
        $(".inference-transportation-section-information-table").css({"display":"block","animation":"flipInX .8s .2s both"});
    }
    this.refresh = function() {
        $("#transportation-appendLoc").empty();
        for(var coun = 0; coun < TransSet.length; coun++) {
            TransSet[coun].display();
        }
        
        $(".inference-transportation-section-information-table-section-top-text").each(function(i,e) {
            if($(e).height() == 25) {
                $(e).parent().parent().parent().height(70);
                $(e).parent().parent().next().children().css({"margin":"28px auto"});
            }
            else {
                $(e).parent().parent().next().children().css({"margin":"40.5px auto"});
            }
        });
        this.event();
		
    }
    this.event = function() {
        $(".inference-transportation-section-information-table-button").each(function(i,e) {
            $(e).click(function() {TransportationOptionChoose(i,e);});
        });
        $(".inference-transportation-section-information-table-section").each(function(i,e) {
            $(e).click(function() {
                if($(e).parent().next().height()) {
                    $(e).parent().next().css({"max-height":"0"});
                    $(e).parent().css({"border-radius":"4px"});
                }
                else {
                    var hei = 143 * $(e).parent().next().find(".inference-transportation-detail-section").children().length/2;
                    $(e).parent().next().css({"max-height":hei+"px"});
                    $(e).parent().css({"border-radius":"4px 4px 0 0"});
                    
                }
            });

        });
    }
    
}

var newTranObj;
function TransportationOptionChoose(i,e) {
    $(".inference-transportation-section-information-table-button").parent().css({"border":"0", "border":"2px solid rgba(97, 173, 52, 0)"});
    $(".inference-transportation-section-information-table-button").css({"background-color":"rgba(255, 255, 255, 0.2)"});
    $(e).css({"background-color":"#61ad34"});
    $(e).parent().css({"border":"2px solid #61ad34"});
    //transportationoptionUML = i;
	
	//传递选定的交通方式的信息
	//var cid;
	//var obj =$(e).prev();
	var type = $(e).prev().find(".inference-transportation-section-information-table-section-top-text-aer").eq(0).text();
	var time = $(e).prev().find(".inference-transportation-section-information-table-section-bottom-text").eq(0).text();
	//alert(time);
	var cost = $(e).prev().find(".inference-transportation-section-information-table-section-bottom-text").eq(1).text();
	var distance = $(e).prev().find(".inference-transportation-section-information-table-section-bottom-text").eq(2).text();
	
	
	distance = distance.substr(0,distance.indexOf(" "));
	//获取交通详细信息的所有html文本
	//var deatailHtml = $(e).parent().next().html();
	var oriRoute = $(e).attr("id");
	
	var ciType = convertTypeToLogoId(type);
	
	var deatailHtml = geneTransDetailHtml(oriRoute, ciType);
	var feature = $(e).prev().find(".inference-transportation-section-information-table-section-bottom-feature").text();
	//alert(feature);
	newTranObj = new NewTranObj(type,cost,time,distance,oriRoute,deatailHtml,feature);
	
}


// 将交通方式转换为对应数字，用来更改修改后的交通详情页的图标
function convertTypeToLogoId(type){
	if(!type)  return [];
	var typeArr = type.split("->");

	var logoId = 4;
	var logoIdArr = [];
	
	for(var i =0; i < typeArr.length; i ++){
		switch(typeArr[i]){
			case "飞机":
				logoId = 1;
				break;
			
			case "火车":
				logoId = 2;
				break;
			
			case "夜间火车":
				logoId = 2;
				break;
			
			case "轮渡":
				logoId = 3;
				break;
			
			case "渡轮":
				logoId = 3;
				break;
			default :
				logoId = 4;
		}
		logoIdArr.push(logoId);
	}
	
	return logoIdArr;
}






function geneTransDetailHtml(route, citype){
	var pathDetail = [];
	pathDetail = route.split("|");
	
	
	if(pathDetail.length == 0) return;
	var html = "";
	
	for(var i = 1;i < pathDetail.length;i++){
		if(pathDetail[i] == "") continue;
		var temp=pathDetail[i].split("="); 
		var n = i - 1;
		var logoId = citype[n];
		var comp = ["","","",""];
		//alert(temp);
		if(temp[5] != "undefined" && temp[5] != ""){
			comp=temp[5].split("%%%");
			if(comp[0] == "") comp[0] = "暂无";
			if(comp[3] == "") comp[3] = "暂无";
		}else{
			comp[0] = "暂无";
			comp[3] = "暂无";
		}
		//alert(comp);
		html += "<div class='day-num-information-transportation-detail-section-company'><div class='day-num-information-transportation-detail-section-company-name'>"+comp[0]+"</div><div class='day-num-information-transportation-detail-section-company-path'>线路:"+comp[3]+"</div></div><div class='day-num-information-transportation-detail-section-pathdetail'><div class='day-num-information-transportation-detail-section-pathdetail-start'><div class='day-num-information-transportation-detail-section-pathdetail-start-icon'></div><div class='day-num-information-transportation-detail-section-pathdetail-start-text'><div class='day-num-information-transportation-detail-section-pathdetail-any-text-country'>"+temp[0]+"</div><div class='day-num-information-transportation-detail-section-pathdetail-any-text-littlename'></div></div></div><div class='day-num-information-transportation-detail-section-pathdetail-departure'><div class='day-num-information-transportation-detail-section-pathdetail-departure-icon' id='day-num-transport-departure-logo-id-"+logoId+"'></div><div class='day-num-information-transportation-detail-section-pathdetail-departure-text'><div class='day-num-information-transportation-detail-section-pathdetail-any-text-littlename'>"+temp[2]+"</div><div class='day-num-information-transportation-detail-section-pathdetail-any-text-time'></div></div></div><div class='day-num-information-transportation-detail-section-pathdetail-landing'><div class='day-num-information-transportation-detail-section-pathdetail-landing-icon' id='day-num-transport-landing-logo-id-"+logoId+"'></div><div class='day-num-information-transportation-detail-section-pathdetail-landing-text'><div class='day-num-information-transportation-detail-section-pathdetail-any-text-littlename'>"+temp[3]+"</div><div class='day-num-information-transportation-detail-section-pathdetail-any-text-time'></div></div></div><div class='day-num-information-transportation-detail-section-pathdetail-over'><div class='day-num-information-transportation-detail-section-pathdetail-over-icon'></div><div class='day-num-information-transportation-detail-section-pathdetail-over-text'><div class='day-num-information-transportation-detail-section-pathdetail-any-text-country'>"+temp[1]+"</div><div class='day-num-information-transportation-detail-section-pathdetail-any-text-littlename'></div></div></div></div>";
	}
	//html ="<div class='day-num-information-transportation-detail-theme'></div>"+html;
	return html;
}

/*
var deatailHtml;
var cid;
var distance;
var cost;
var time;
*/
//存储修改后的交通信息
function NewTranObj(type,cost,time,distance,oriRoute,deatailHtml,feature){
	this.type = type;
	this.cost =cost;
	this.time =time;
	this.distance =distance;
	this.route =oriRoute;
	this.deatailHtml =deatailHtml;
	this.feature =feature;
}













//修改交通完成时
function TransportationSettingFinish() {
    BackToIndexFromTRSP();
    if (newTranObj!=null){
		var cityId=TransportationSettingCityId;
		//alert(cityId);
		var type=newTranObj.type;
		var time=newTranObj.time;
		var cost=newTranObj.cost;
		var distance=newTranObj.distance;
		var route = newTranObj.route;
		var deatailHtml=newTranObj.deatailHtml;
		var feature = newTranObj.feature;
		
		if(feature != ""){
			$("#transportation-button-"+TransportationSettingCityId).prev().find(".day-num-information-transportation-section-bottom-feature").text(feature);
			//$("#transportation-button-"+TransportationSettingCityId).prev().find(".day-num-information-transportation-section-bottom-feature").toggleClass("day-num-information-transportation-section-bottom-feature-nogreen");
		}else{
			feature = "自选";
			$("#transportation-button-"+TransportationSettingCityId).prev().find(".day-num-information-transportation-section-bottom-feature").text("自选");
		}
		
		
		//设置交通feature
		$(".day-num-information-transportation-section-bottom-feature").each(function(){
			if($(this).text() != "")  $(this).css({"background-color":"#61ad34"});
		});
		//alert(route);
		/*
		alert(transportationoptionUML.type);
		alert(timespend);
		alert(cost);
		alert(cityId);
		*/
		
		
		//alert(TransportationSettingCityId);
		//$("#transportation-button-"+TransportationSettingCityId).prev().find(".trans-logo-type-lisa").text(type);
		var obj=$("#transportation-button-"+TransportationSettingCityId).prev().find(".day-num-information-transportation-section-bottom-text");
		
		obj.eq(0).text(time);
		obj.eq(1).text(cost);
		obj.eq(2).text(distance+" km");
		//deatailHtml
		time = time.slice(2,-1);
		
		//保存的交通信息:feature type  time  cost  km  route
		$.post("http://"+CQHOST+"index.php/Home/Route/updTrans",{"city":cityId,"feature":feature,"type":type,"time":time,"cost":cost,"distance":distance,"route":route});
		//alert($("#transportation-button-"+TransportationSettingCityId).parent().next().size());
		$("#transportation-button-"+TransportationSettingCityId).parent().next().find(".day-num-information-transportation-detail-section").html(deatailHtml);
		//$("#transportation-button-"+TransportationSettingCityId).parent().next().html(deatailHtml);
		//alert(deatailHtml);  
		//添加点击事件
		$("#transportation-button-"+TransportationSettingCityId).prev().click(function() {//添加交通详细展示的点击事件
			if($(this).parent().next().height()) {//展开
				$(this).parent().next().css({"max-height":"0"});
				$(this).prev().css({"border-radius":"4px 0 0 4px"});
				$(this).next().css({"border-radius":"0 4px 4px 0"});
			}
			else {//关闭list
				var hei = $(this).parent().next().children().eq(1).height();
				//alert(hei);
				$(this).parent().next().css({"max-height":hei+"px"});
				var hisud = $(this).parent().parent().height() + hei;
				$(this).parent().parent().css({"max-height":hisud+"px"});
				$(this).prev().css({"border-radius":"4px 0 0 0"});
				$(this).next().css({"border-radius":"0 4px 0 0"});
				//alert(hisud);
				//alert($(this).parent().next().find(".day-num-information-transportation-detail-theme").size());
				//alert($(this).parent().attr("class"));
				$(this).parent().next().find(".day-num-information-transportation-detail-theme").height(hisud);
			}
		});
		
		
		// addClickListenerOfShowTransDetail();
		// 更改inf交通图标
		var logoId = type.indexOf("->");
		if(logoId != -1){
			type = type.substring(0, logoId);
		}
		
		switch(type){
			case "飞机":
				logoId=1;
				break;
			case "火车":
				logoId=2;
				break;
			case "夜间火车":
				logoId=2;
				break;
			case "轮渡":
				logoId=3;
				break;
			case "渡轮":
				logoId=3;
				break;
			default :
				logoId=4;
		}
		
		$("#transportation-button-"+TransportationSettingCityId).prev().find(".day-num-information-transportation-section-top-logo").attr("id","dnitst-logo-"+logoId);
	}
	
	// 绿框
	$(".day-num-information-transportation-section-bottom-feature").each(function(){
		// console.log($(this).text());
		if($(this).text() != "") $(this).css({"opacity":"1"});
	});
}

//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   spotSetting;
//  >   FUNCTION        :   SPOT;
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function spotSetting(dom) {
	$("#title-main-left-index").css({"animation":"flipOutX .5s both"});
    setTimeout(function() {
        $("#title-main-left-index").css({"display":"none"});
        $("#title-main-left-spot").css({"display":"block"});
    },500);
    $("#title-main-left-spot").css({"animation":"flipInX .6s both"});

    $("#inference-box").css({"animation":"SettingFade .4s both"});
    $("#inference-box-spot").css({"animation":"SettingFade .4s both"});
    undisplayMainBu();
    $(".main-left-city_editor_button").css({"display":"none"})

    $("#transportation_button").css({"display":"block"});
    $("#transportation_button_cancel").css({"animation":"fadeInUp .8s .4s both"});
    $("#transportation_button_finish").css({"animation":"fadeInUp .8s .8s both"});
    $("#transportation_button_cancel").unbind('click');
    $("#transportation_button_cancel").click(function() {BackToIndexFromSPOT()});
    $("#transportation_button_finish").unbind('click');
    // $("#transportation_button_finish").click(function() {SpotSettingFinish(num)});
// //    spotSettingInit(num);
    // spotSettingLeftLIST(num);
    // spotSettingRightLIST(dom, num);
	
	
	
	
	
	
    // $("#title-main-left-index").css({"animation":"flipOutX .5s both"});
	// // $("#route_button").css({"display":"none"});
    // setTimeout(function() {
        // $("#title-main-left-index").css({"display":"none"});
		
        // $("#title-main-left-spot").css({"display":"block"});
    // },500);
    // $("#title-main-left-spot").css({"animation":"flipInX .6s both"});

    // $("#inference-box").css({"animation":"SettingFade .4s both"});
    // $("#inference-box-spot").css({"animation":"SettingFade .4s both"});
    
    // $("#transportation_button").css({"display":"block"});
    // $("#transportation_button_cancel").css({"animation":"fadeInUp .8s .4s both"});
    // $("#transportation_button_finish").css({"animation":"fadeInUp .8s .8s both"});
    // $("#transportation_button_cancel").unbind('click');
    // $("#transportation_button_cancel").click(function() {BackToIndexFromSPOT()});
    // $("#transportation_button_finish").unbind('click');
    $("#transportation_button_finish").click(function() {SpotSettingFinish(dom)});
    spotSettingInit(dom);
	//addd
	getSightsOfCity(dom.attr("id").substr(12));
    spotSettingLeftLIST();
	spotSettingRightLIST();
}





function spotSettingInit(dom) {
    spotConfigStack.length=0;
    dom.prev().find(".day-num-information-spot-section-register-note-text").each(function() {spotConfigStack.push($(this).text())});
}


function spotSettingLeftLIST() {
    $("#spot-list-left").empty();
	var sightId;
    for (var coun=0; coun<spotConfigStack.length; coun++) {
		for(var i in jn){
			if(spotConfigStack[coun]==jn[i].title) {
				sightId=jn[i].id;
				break;
			}
		}
        var configVAl = "<div class='inference-spot-list-left-box' draggable='true'><div class='inference-spot-list-left-box-top'><div class='inference-spot-list-left-box-icon-move'></div><div class='inference-spot-list-left-box-title' id='sight-id-"+sightId+"'>"+spotConfigStack[coun]+"</div><div class='inference-spot-list-left-box-icon-remove'></div><div class='inference-spot-list-left-box-icon-note' id='sight-note-"+sightId+"'></div></div><input class='inference-spot-list-left-box-middle' placeholder='输入景点备注' id='sight-input-"+sightId+"'><div class='inference-spot-list-left-box-bottom'><div class='inference-spot-list-left-box-button' id='sight-conf-"+sightId+"'>确定</div></div></div>";
        $("#spot-list-left").append(configVAl);
    }
    $(".inference-spot-list-left-box-icon-note").unbind('click');
    $(".inference-spot-list-left-box-icon-note").click(function() {spotSettingListLeft_CONFIG($(this))});
    $(".inference-spot-list-left-box-icon-remove").unbind('click');
    $(".inference-spot-list-left-box-icon-remove").click(function() {spotCONFIGremove(this)});
	
	//addd 防止景点名称过长
	$(".inference-spot-list-left-box-title").css({"width":"126px","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis"});
	//addd 景点备注的确定按钮
    $(".inference-spot-list-left-box-button").unbind('click');
    $(".inference-spot-list-left-box-button").click(function() {
		//addd
		var c=$(this).parent().prev().prev().children(".inference-spot-list-left-box-icon-note");
		spotSettingListLeft_CONFIG(c);
		//将景点备注信息存入数据库
		var sid=$(this).attr("id").substr(11);
		sightNote2db(sid);
		});
	spotMapConfig();
	
    //google.maps.event.addDomListener(window, 'load', spotMapConfig);
}


function spotSettingListLeft_CONFIG(dom) {
    if (dom.parent().parent().height()==40) {
        dom.parent().parent().css({"max-height":"150px"});
		//addd 查询景点备注
		var sid=dom.attr("id").substr(11);
		getSigNoteFdb(sid);
    }
    else dom.parent().parent().css({"max-height":"40px"});
        
}

function BackToIndexFromSPOT() {
	displayMainBu();
    $(".main-left-city_editor_button").css({"display":"block"})

    $("#title-main-left-spot").css({"animation":"flipOutX .5s both"});
    setTimeout(function() {
        $("#title-main-left-spot").css({"display":"none"});
        $("#title-main-left-index").css({"display":"block","z-index":"2"});
    },500);
    $("#title-main-left-index").css({"animation":"flipInX .6s both"});

    $("#inference-box-spot").css({"animation":"IndexFade .4s both"});
    $("#inference-box").css({"animation":"IndexFade .4s both","z-index":"1"});

    $("#transportation_button").css({"display":"none"});
	
	
	
	
	
	
    // $("#title-main-left-spot").css({"animation":"flipOutX .5s both"});
	// //modify-
	// // $("#inference-box-spot").css({"display":"none"});
	// displayMainBu();
    // setTimeout(function() {
        // $("#title-main-left-spot").css({"display":"none"});
		// // $("#route_button").css({"display":"block"});
        // $("#title-main-left-index").css({"display":"block","z-index":"2"});
    // },500);
    // $("#title-main-left-index").css({"animation":"flipInX .6s both"});

    // $("#inference-box-spot").css({"animation":"IndexFade .4s both"});
    // $("#inference-box").css({"animation":"IndexFade .4s both","z-index":"1"});
    
    // $("#transportation_button").css({"display":"none"});
    //indexMapConfig();
    //google.maps.event.addDomListener(window, 'load', indexMapConfig);
}

var spotSet = [];
function SpotSet_obj(spotName, spotFeature, spotLoc, spotTime, spotTicket, spotNameEn,spotId,fx,fy,content) {
    this.spotName = spotName;
    this.spotFeature = spotFeature;
    this.spotLoc = spotLoc;
    this.spotTime = spotTime;
    this.spotTicket = spotTicket;
    
    this.spotNameEn = spotNameEn;
	this.spotId = spotId;
	this.fx = fx;
	this.fy = fy;
	this.content = content;
	
    this.htmlCode = "<div class='inference-spot-list-right-config-list-val'><div class='inference-spot-list-right-config-list-val-img'></div><div class='inference-spot-list-right-config-list-val-right'><div class='inference-spot-list-right-config-list-val-name' id='spot-list-right-config-sid-"+this.spotId+"|"+this.fx+"|"+this.fy+"'>"+this.spotName+"</div><!--<div class='inference-spot-list-right-config-list-val-note'>"+this.spotFeature+"</div>--></div><div class='inference-spot-list-right-config-list-val-button'><div class='inference-spot-list-right-config-list-val-button-icon'></div></div></div><div class='inference-spot-list-right-config-list-detail'><div class='inference-spot-list-right-config-list-detail-title'><div class='inference-spot-list-right-config-list-detail-title-iconLoc'></div><div class='inference-spot-list-right-config-list-detail-title-note'>景点地址</div></div><div class='inference-spot-list-right-config-list-detail-note'>"+this.spotLoc+"</div><div class='inference-spot-list-right-config-list-detail-title'><div class='inference-spot-list-right-config-list-detail-title-iconTime'></div><div class='inference-spot-list-right-config-list-detail-title-note'>开放时间</div></div><div class='inference-spot-list-right-config-list-detail-title'><div class='inference-spot-list-right-config-list-detail-title-iconTicket'></div><div class='inference-spot-list-right-config-list-detail-title-note'>景点门票</div></div><div class='inference-spot-list-right-config-list-detail-title'><div class='inference-spot-list-right-config-list-detail-title-iconDetailInfo'></div><div class='inference-spot-list-right-config-list-detail-title-note'>景点详情</div></div></div>";
    this.GetNoteCode = function(str) {if (str) return "<div class='inference-spot-list-right-config-list-detail-note'>"+str+"</div>"}
    this.Display = function(i) {
        $(".inference-spot-list-right-config-list").append(this.htmlCode);
		//景点图片
		//var imgPath="http://"+CQHOST+"Public/img/sight/SightImg"+jn[i].id+".jpg";
		//$("#spot-list-right-config-list-val-img-"+jn[i].id).css({"background-image":"url(http://"+CQHOST+"Public/img/sight/SightImg"+jn[i].id+".jpg)"});
		//$("img").on
		$(".inference-spot-list-right-config-list-val-img").error(function(){return true;});
		$(".inference-spot-list-right-config-list-val-img").eq(i).css({"background-image":"url(http://"+CQHOST+"Public/img/sight/SightImg"+this.spotId+".jpg)"});
		
		
        
        for (var coun = 0; coun < this.spotTime.length; coun++) {
            $(".inference-spot-list-right-config-list-detail").eq(i).find(".inference-spot-list-right-config-list-detail-title").eq(1).after(this.GetNoteCode(this.spotTime[coun]));
        }
        for (var coun = 0; coun < this.spotTicket.length; coun++) {
            $(".inference-spot-list-right-config-list-detail").eq(i).find(".inference-spot-list-right-config-list-detail-title").eq(2).after(this.GetNoteCode(this.spotTicket[coun]));
        }

		$(".inference-spot-list-right-config-list-detail").eq(i).find(".inference-spot-list-right-config-list-detail-title").eq(3).after(this.GetNoteCode(this.content));
    }
    this.Refresh = function() {
        $(".inference-spot-list-right-config-list").empty();
        for (var coun = 0; coun < spotSet.length; coun++) {
            spotSet[coun].Display(coun);
        
            $("#spot-list-left").find(".inference-spot-list-left-box-title").each(function(i,e) {
                if ($(e).text() == spotSet[coun].spotName) {$(".inference-spot-list-right-config-list-val").eq(coun).addClass("spot-config-enable");
				$(".inference-spot-list-right-config-list-val").eq(coun).find(".inference-spot-list-right-config-list-val-button").css({"background-color":"rgb(97, 173, 52)"});
				}
            });
            
        }
        spotSet[0].Event();
    }
    this.Event = function() {
        $(".inference-spot-list-right-config-list-val-button").each(function(i,e) {
            $(e).click(function() {spotCONFIGchosseXML($(e).parent())})
        })
        $(".inference-spot-list-right-config-list-val-right").each(function(i,e) {
            $(e).click(function() {
                var enableHeight = 0;
                if ($(e).parent().next().height()) {
                    $(e).parent().next().css({"max-height":"0", "padding":"0 10px"});
                }
                else {
                    for (var coun = 0; coun < $(e).parent().next().children().length; coun++) {
                        enableHeight = $(e).parent().next().children().eq(coun).height() + enableHeight;
                    }
                    $(e).parent().next().css({"max-height":enableHeight+"px", "padding":"5px 10px"});
                }
            });
        });
        
    } 
}





function spotSettingRightLIST() {
	$("#spot-list-right").empty();
    spotSet.length = 0;
	
	for(var i in jn){
		//alert(jn[i].opentime);
		var spotConfigUml = new SpotSet_obj(jn[i].title, "购物", jn[i].address,jn[i].opentime , jn[i].fee, jn[i].etitle,jn[i].id,jn[i].fx,jn[i].fy,jn[i].content);
        spotSet.push(spotConfigUml);
	}
	spotSet[0].Refresh();
	$(".inference-spot-list-right-config-list-val").each(function(i,e) {
		i += 2;
		$(e).css({"animation":"flipInX .6s 0."+i+"s both"});
	});
    
	//显示景点图片
}

function spotCONFIGchosseXML(dom) {
    if ($(dom).attr("class")=="inference-spot-list-right-config-list-val spot-config-enable") {
        
		if (spotConfigStack.length==1) {
            //alert("景点数不能为零");
            //return;
        } 
		//移除景点确定按钮的绿色
		//background-color: rgb(97, 173, 52)
		//rgba(255, 255, 255, 0.4)
		$(dom).find(".inference-spot-list-right-config-list-val-button").css({"background-color":"rgba(255, 255, 255, 0.4)"});
        $(dom).removeClass("spot-config-enable");
        var rmFlag=1;
    }
    else {
        $(dom).addClass("spot-config-enable");
		//添加景点确定按钮的绿色
		$(dom).find(".inference-spot-list-right-config-list-val-button").css({"background-color":"rgb(97, 173, 52)"});
        var rmFlag=0;
		
    }
    if (rmFlag) {//remove
		//不显示已经去掉的景点
		var info = [];
		info=$(dom).find(".inference-spot-list-right-config-list-val-name").attr("id").substr(27).split("|");
		//alert(info);
		if(info.length==0) return;
		var sid = info[0];
		removeSightMarker(sid);
		
        for (var coun=0; coun<spotConfigStack.length; coun++) {
            if ($(dom).find(".inference-spot-list-right-config-list-val-name").text()==spotConfigStack[coun]) {
                var times=spotConfigStack.length-coun;
                for (var ct=0; ct<times; ct++) {
                    spotConfigStack[coun]=spotConfigStack[coun+1];
                    coun++;
                }
            }
        }
        spotConfigStack.length=spotConfigStack.length-1;
    }
    else {//add
		//alert(333);
		var info = [];
		info=$(dom).find(".inference-spot-list-right-config-list-val-name").attr("id").substr(27).split("|");
		if(info.length==0) return;
		var sid = info[0];
		var fx = info[1];
		var fy = info[2];
		var title = $(dom).find(".inference-spot-list-right-config-list-val-name").text();
		addSightMarker(sid,fx,fy,title);
        spotConfigStack.push(title);
    }
    spotSettingLeftLIST();
    if (rmFlag) {}
    else {$("#spot-list-left").find(".inference-spot-list-left-box").eq(spotConfigStack.length-1).css({"animation":"bounceIn .6s both"})}
}

function spotCONFIGremove(dom) {
    for (var coun=0; coun<$("#spot-list-right").find(".inference-spot-list-right-config-list-val-name").length; coun++) {
        if ($("#spot-list-right").find(".inference-spot-list-right-config-list-val-name").eq(coun).text()==$(dom).prev().text()) {
			$("#spot-list-right").find(".inference-spot-list-right-config-list-val-button").eq(coun).click(); 
        }
    }
}

function SpotSettingFinish(dom) {
    BackToIndexFromSPOT();
	//addd 景点数的更改
	var cityId=dom.attr("id").substr(12);
	var dayId=dom.parent().parent().prev().children(".day-num-box-right").attr("id").substr(18);
	//alert(dayId);
    dom.prev().empty();
	//alert(dom.prev().attr("class"));
	//addd 获取用户保留的景点数据，更新数据表routes.routeList
	var sightIdStr="";
	var sightIdTit="";
	if(spotConfigStack.length>0){
		for (var coun=0; coun<spotConfigStack.length; coun++) {
			var fx="";
			var fy="";
			var sid="";
			var title;
			var etitle;
			var address;
			var opentime;
			var fee;
			var content;
			for(var i in jn){
				if(jn[i].title==spotConfigStack[coun]){
					sightIdStr +="-"+jn[i].id;
					fx=jn[i].fx;
					fy=jn[i].fy;
					sid=jn[i].id;
					title=jn[i].title;
					etitle=jn[i].etitle;
					address=jn[i].address;
					opentime=jn[i].opentime;
					fee=jn[i].fee;
					content=jn[i].content;
				}
			}
			
			//alert(title);
			
			var info='<div class="day-num-information-spot-section-register"><div class="day-num-information-spot-section-register-note"><div class="day-num-information-spot-section-register-note-logo"></div><div class="day-num-information-spot-section-register-note-text" id="sg-info-'+fx+'|'+fy+'|'+sid+'">'+spotConfigStack[coun]+'</div></div></div>';
			
			info +='<div class="day-num-information-spot-section-detail"><div class="day-num-information-spot-section-detail-topview"><div class="day-num-information-spot-section-detail-topview-photo"><div class="day-num-information-spot-section-detail-topview-photo-img" id="show-sight-img-'+sid+'"></div></div><div class="day-num-information-spot-section-detail-topview-note"><div class="day-num-information-spot-section-detail-topview-note-spotName">'+title+'</div><div class="day-num-information-spot-section-detail-topview-note-spotNameEn"> '+etitle+'</div><div class="day-num-information-spot-section-detail-topview-note-spotLoc"><div class="day-num-information-spot-section-detail-topview-note-spotLoc-icon"></div><div class="day-num-information-spot-section-detail-topview-note-spotLoc-text"></div></div></div></div><div class="day-num-information-spot-section-detail-bottomview"><div class="day-num-information-spot-section-detail-bottomview-title"><div class="day-num-information-spot-section-detail-bottomview-title-iconTime"></div><div class="day-num-information-spot-section-detail-bottomview-title-text">开放时间</div></div>';
			//for($sgInfo["opentime"][$sid] as $opentime){
			for(var i in opentime){
				info +='<div class="day-num-information-spot-section-detail-bottomview-note">'+opentime[i]+'</div>';
			}
			
            info +='<div class="day-num-information-spot-section-detail-bottomview-title"><div class="day-num-information-spot-section-detail-bottomview-title-iconTicket"></div><div class="day-num-information-spot-section-detail-bottomview-title-text">景点门票</div></div>';
			//for($sgInfo["fee"][$sid] as $fee){
			for(var i in fee){
				info +='<div class="day-num-information-spot-section-detail-bottomview-note">'+fee[i]+'</div>';
			}
			//iconDetailInfo
			info +='<div class="day-num-information-spot-section-detail-bottomview-title"><div class="day-num-information-spot-section-detail-bottomview-title-iconDetailInfo"></div><div class="day-num-information-spot-section-detail-bottomview-title-text">景点详情</div></div><div class="day-num-information-spot-section-detail-bottomview-note">'+content+'</div>';
			info +='</div></div>';			
			info+='<div class="day-num-information-spot-section-stackline"></div>';
			
			//alert(info);
			//alert(detail);
			//document.write(info);
			dom.prev().append(info);
		}
		
		addClickListenerOfShowSpotDetail();//添加展示详细交通信息的绑定事件
		$(".day-num-information-spot-section-detail-topview-photo-img").each(function(){
		var spotId = $(this).attr("id").substr(15);
		$(this).css({"background-image":"url(http://"+CQHOST+"Public/img/sight/SightImg"+spotId+".jpg)"})
	});
		sightIdStr=sightIdStr.substr(1);
		changeIndexBgImgOfSight();//更改景点的索引图标
		//dom.prev().find()
	}else{
		var info="<div class='day-num-information-spot-section-register'><div class='day-num-information-spot-section-register-note'><div class='day-num-information-spot-section-register-note-logo-0'></div><div class='day-num-information-spot-section-register-note-text-1' id='sg-info-0|0|0'>请自由安排景点</div></div></div><div class='day-num-information-spot-section-stackline'></div>";
		dom.prev().append(info);
	}
	
    
	showSightMarkers(dayId,false);
	showSightMarkers(dayId,true);
	
	$.post("http://"+CQHOST+"index.php/Home/Route/updDayCitySig",{"day":dayId,"city":cityId,"sgts":sightIdStr});
	
	//更改景点列表
	var sightList="";
	var obj=dom.parent().parent().find(".day-num-information-spot-section-register-note-text");
	if(obj.size()>0){
		obj.each(function(ii,ee){
			if(ii==0){
				sightList+=$(ee).text();
			}else{
				sightList+="/"+$(ee).text();
			}
		});
	}
	
	dom.parent().parent().prev().find(".day-num-box-left-information-note").text(sightList);
	
    dom.prev().children().last().remove();//移除景点分割线
    dom.children().css({"margin":+dom.height()/2-7+"px auto"});

	//设置.day-num-information的max-height，使food可以充分显示
    var childrenDOMnum=dom.parent().parent().children().length;
    var enablePadding=childrenDOMnum*10;
    var enable = 0;
    for (var coun = 0; coun < childrenDOMnum; coun++) {
        enable = enable + dom.parent().parent().children().eq(coun).height();
    }
	
    enable = enable + enablePadding;
	
    dom.parent().parent().css({"max-height":+enable+"px"});
    
  
    $(".day-num-information-spot-section-register").each(function(i,e) {
        $(e).unbind('mouseover');
        $(e).unbind('mouseout');
    });
	
	
	
}

//addd
function spotMapConfig() {
	/*
	markers.length=0;
    pathStack.length=0;
    for (var coun=0; coun<spotConfigStack.length; coun++) {
        var lableNum=coun+1;
		for(var i in jn){
			if(spotConfigStack[coun]==jn[i].title){
				var latlng = new google.maps.LatLng(jn[i].fy,jn[i].fx);
                var sightMarker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    label: ""+lableNum+"",
                    title: jn[i].title
                });
                markers.push(sightMarker);
			}
		}
        display_marker(0,coun);
    }
	*/
	//loadMarkers();
}






function displayMainBu() {
    $("#main_button").css({"display":"block"});
    $("#main_button_cancel").css({"animation":"fadeInUp .8s .4s both"});
    $("#main_button_finish").css({"animation":"fadeInUp .8s .6s both"});
	
	$(".day-num-information-spot-section-detail-topview-photo-img").css({"filter":"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')", "-moz-background-size": "100% 100%", "background-size": "100% 100%"});
}
function undisplayMainBu() {
    $("#main_button").css({"display":"none"});
}

function cityConfRender() {
    undisplayMainBu();
    $("#title-main-left-index").css({"animation":"flipOutX .5s both"});
    setTimeout(function() {
        $("#title-main-left-index").css({"display":"none"});
        $("#title-main-left-city_edit").css({"display":"block"});
    },500);
    $("#title-main-left-city_edit").css({"animation":"flipInX .6s both"});

    $("#inference-box").css({"animation":"SettingFade .4s both"});
    $(".left-inference-city-editor").css({"animation":"SettingFade .4s both"});
    $(".main-left-city_editor_button").css({"opacity":"1"});

}

// 去掉数组中的重复元素
function uniqueArr(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

// city(poi+country+added)信息
var cityInfoIdJsonArr = [];
var cityInfoCnameJsonArr = [];
var cityInfoEnameJsonArr = [];

// 每天及其游览的城市的详细信息
var dayListJson = [];


function getReturnInfo(){
	// city(poi+country+added)信息
	// console.log("info");
	cityInfoIdJsonArr = json2Arr($("#city-info-id-json"));
	cityInfoCnameJsonArr = json2Arr($("#city-info-cname-json"));
	cityInfoEnameJsonArr = json2Arr($("#city-info-ename-json"));

	// 每天及其游览的城市
	dayListJson = json2Arr($("#day-list-json"));
}


// 二维数组,每天游览的城市(id)
var cidArrOfDay = [];
var prevCidArrOfDay = []; // 此次修改之前的
// 对应每天的城市
var sidArrOfDay = [];
var prevSidArrOfDay = [];

var dateObj = {
	month: "",
	month_en: "",
	day: ""
};

function dayUp(){
	var month = dateObj.month;
	var month_en = dateObj.month_en;
	var day = dateObj.day;
	
	var monthArr = [, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	var nowDate = new Date();
	if(month == '' || day == ''){
		month = nowDate.getMonth() + 1;
		day = nowDate.getDate();
	}
	
	var limit = 31;
	if(month==4 || month == 6  || month==9 || month == 11){
		limit = 30;
	}else if(month == 2){
		limit = 28;
		if(nowDate.getYear()%4 == 0){
			limit = 29;
			if((nowDate.getYear() % 100 == 0) && (nowDate.getYear() % 400 != 0)){
				limit = 28;
			}
		}
	}
	
	
	day ++;
	
	if(day > limit){
		month ++;
		day = 1;
	}
	
	
	dateObj.month = month;
	dateObj.month_en = monthArr[parseInt(month)];
	dateObj.day = day;
		
}
// 按日期罗列每天游览的城市
function listDayCityCol(){
	// 初始化日期
	var startDate = $("#route-leave-time").text();
	var dateArr = [];
	
	var firstDateArr = [];
	firstDateArr[0] = new Date().getMonth() + 1;
	firstDateArr[1] = new Date().getDate();
	
	var lastDateArr = [];
	
	if(startDate != ""){
		dateArr = startDate.split("-");
		dateObj.month = dateArr[1];
		dateObj.day = dateArr[2] - 1;
		
		firstDateArr[0] = dateArr[1];
		firstDateArr[1] = dateArr[2];
	}
	
	dayUp();
	
	// 注意push()之前
	cidArrOfDay = [];
	sidArrOfDay = [];
	
	var htmlCode = '';
	for(var i in dayListJson){
		var cityTag = '';
		
		var cidArr = dayListJson[i].cidArr;
		cidArrOfDay.push(cidArr);
		
		var sidArr = dayListJson[i].sidArr;
		sidArrOfDay.push(sidArr);
		
		if(cidArr.length){
			for(var n in cidArr){
				var cid = cidArr[n];
				var indexOfCid = cityInfoIdJsonArr.indexOf(cid);
				cityTag += '<div class="city-editor-detail-item-tag" tabindex="-1"><div class="label"><span class="city-tag-'+cid+'">'+cityInfoCnameJsonArr[indexOfCid]+'</span></div><div class="options"></div></div>';
			}
			
			// cityTag += '';
		}
		
		// if(i == 0 || i == dayListJson.length  - 1) cityTag = '';
		
		htmlCode += '<div class="city-editor-detail-item"><div class="city-editor-detail-item-icon"><div class="city-editor-detail-item-icon-month">' + dateObj.month_en + '</div><div class="city-editor-detail-item-icon-day">' + dateObj.day + '</div></div><div class="city-editor-detail-item-trans_icon"></div>' +  cityTag + '<div class="city-editor-detail-item-add"><div class="city-editor-detail-item-add-icon"></div><input class="city-editor-detail-item-add-input" placeholder="添加城市" type="text"><div class="city-search-options"></div></div><div class="clearFloat"></div></div>';
		
		if(i < dayListJson.length - 1) dayUp();
		
	}
	

	lastDateArr[0] = dateObj.month;
	lastDateArr[1] = dateObj.day;
	
	
	var timeInfoTitle = firstDateArr[0] + '月' + firstDateArr[1] + '日' + '-' + lastDateArr[0] + '月' + lastDateArr[1] + '日';
	
	// city-editor-title-infor-label-text
	$(".city-editor-title-infor-label-text").eq(1).text(timeInfoTitle);
	
	$(".city-editor-detail").html(htmlCode);

	
	// 数组复制
	$.extend(true, prevCidArrOfDay, cidArrOfDay);
	$.extend(true, prevSidArrOfDay, sidArrOfDay);
	
	// console.log("sidArrOfDay");console.log(sidArrOfDay);
	// console.log("prevCidArrOfDay");console.log(prevCidArrOfDay);
	// console.log("cidArrOfDay");console.log(cidArrOfDay);
}


// 修改城市 
function modifyCities(){
	// 修改城市:点击城市出现下拉选项
	$(document).on("click", ".label", function(){
		// $(this).next().toggle();
		// city-tag-73
		var cid = $(this).children().eq(0).attr("class").slice(9);
		if(cid == 1) return ;
		var $obj = $(this).next();
		if($obj.css("display") == "none"){
			$obj.show();
			// 修改城市:下拉列表中隐去当前城市
			
			$obj.find(".modify-opt-cid-"+cid).parent().hide();
		}else{
			$obj.hide();
		}
	});
	
	// 修改城市:失去焦点隐藏下拉选项(tabindex="-1")
	$(document).on("blur", ".city-editor-detail-item-tag", function(){
		$(this).children(".options").hide();
	});
	
	// 修改城市:点击下拉选项后隐藏下拉选项
	$(document).on("click", ".option", function(){
		// modify-opt-cid-104
		var cid = $(this).children().attr("class").slice(15);
		var cname = $(this).find(".lang-cn").text();
		
		// 修改城市:直接显示新城市(顶部城市列表)
		// city-title-tag-73
		$(".city-title-tag-" + cid).parent().show();
		
		// 记录被修改城市的类名
		var preClsName = $(this).parent().prev().children().attr("class");
		
		
		// 第几天的索引
		var dayIndex = $(".city-editor-detail-item").index($(this).parent().parent().parent());
		
		// 当天的城市索引
		var cityIndexOfDay = $(this).parent().parent().parent().find(".options").index($(this).parent());
		
		// 修改数组
		cidArrOfDay[dayIndex][cityIndexOfDay] = parseInt(cid);
		
		// 修改城市标题
		$(this).parent().prev().html('<span class="city-tag-'+cid+'">'+cname+'</span>');
		
		$(this).parent().hide();
		
		
		// 限制第一天城市添加的数量为1
		
		// 城市[1][0]与[0][1],[dayIndex][0]与[dayIndex-1][cIndex]联动
		var dayNum = cidArrOfDay.length;
		var lastButOneDayCityNum = cidArrOfDay[dayNum-2].length;
		
		if(dayIndex == 0 && cityIndexOfDay == 1){
			// 第一天第二个城市
			$(".city-editor-detail").children().eq(1).find(".label").eq(0).html('<span class="city-tag-'+cid+'">'+cname+'</span>');
			
			cidArrOfDay[1][0] = parseInt(cid);
		}else if(dayIndex == 1 && cityIndexOfDay == 0){
			// 第二天第一个城市
			$(".city-editor-detail").children().eq(0).find(".label").eq(1).html('<span class="city-tag-'+cid+'">'+cname+'</span>');
			
			cidArrOfDay[0][1] = parseInt(cid);
		}else if(dayIndex == dayNum - 2 && cityIndexOfDay == lastButOneDayCityNum - 1){
			// 倒数第二天最后一个城市
			$(".city-editor-detail").children().eq(dayNum - 1).find(".label").eq(0).html('<span class="city-tag-'+cid+'">'+cname+'</span>');
			
			cidArrOfDay[dayNum - 1][0] = parseInt(cid);
		}else if(dayIndex == dayNum - 1 && cityIndexOfDay == 0){
			// 最后一天第一个城市
			$(".city-editor-detail").children().eq(dayNum - 2).find(".label").eq(lastButOneDayCityNum - 1).html('<span class="city-tag-'+cid+'">'+cname+'</span>');
			
			cidArrOfDay[dayNum - 2][lastButOneDayCityNum - 1] = parseInt(cid);
		}
		
		
		// 如果下方各栏中无被修改的城市,隐藏顶部列表中的该城市
		if($("."+preClsName).size() == 0){
			var preCid = preClsName.slice(9);
			$(".city-title-tag-" + preCid).parent().hide();
		}
		
		// console.log($(this).parent().parent().parent().find(".options"));
		// console.log($(this).parent());
	
		// console.log(cityIndexOfDay);
		// console.log(cidArrOfDay[dayIndex][cityIndexOfDay]);
		
		// console.log(cidArrOfDay[dayIndex][cityIndexOfDay]);
		
		// console.log("cidArrOfDay");console.log(cidArrOfDay);
		// console.log("prevCidArrOfDay");console.log(prevCidArrOfDay);
		
		
		
	});
	
	
}



// 修改城市:载入下拉列表
function loadCityOptionsToModify(){
	var htmlCode = "";
	for(var i in cityInfoIdJsonArr){
		var cid = cityInfoIdJsonArr[i];
		if(parseInt(cid) == 1) continue;
			
		var cname = cityInfoCnameJsonArr[i];
		var ename = cityInfoEnameJsonArr[i];
		
		htmlCode += '<div class="option"><span class="modify-opt-cid-'+cid+'"><span class="lang-cn">'+cname+'</span><span class="lang-en">'+ename+'</span></span></div>';
	}
	if(arguments.length == 0){
		$(".city-editor-detail-item-tag").each(function(i, e){
			$(e).children(".options").html(htmlCode);
		});
	}else{
		arguments[0].children(".options").html(htmlCode);
	}
	
	// 修改城市:下拉列表滚动条的添加
	$(".options").css({"height": "200px", "width":"auto", "overflow": "scroll"});	
	$(".option").css({"overflow": "hidden"});	
}


// 删除城市:城市列表
function cityEditorTitleInfoTag(){
	// 初始化
	var cidArr = json2Arr($("#city-id-by-poi-country"));
	var htmlCode = '';
	for(var i in cidArr){
		var cid = cidArr[i];
		var indexOfCid = $.inArray(parseInt(cid), cityInfoIdJsonArr);
		// console.log(String(cid));
		// console.log(cid);
		// console.log(indexOfCid);
		htmlCode += '<div class="city-editor-title-infor-tag"><span class="city-title-tag-'+cid+'">'+cityInfoCnameJsonArr[indexOfCid]+'</span></div>';
	}
	$(".city-editor-title-infor").html(htmlCode);
	$(".city-editor-title-infor-tag").hide();
	
	// 只显示在路线中出现的城市
	var cidInRouteArr = json2Arr($("#route-city-id"));
	for(var i in cidInRouteArr){
		var cid = cidInRouteArr[i];
		$(".city-title-tag-"+cid).parent().show();
	}
	
	// 标题城市列表,点击->隐藏城市
	$(document).on("click", ".city-editor-title-infor-tag", function(){
		// 删除城市:去掉下方的城市
		// city-title-tag-29
		var cid = $(this).children().attr("class").slice(15);
		// span .city-tag-35
		// console.log($(".city-tag-"+cid));
		$(".city-tag-"+cid).each(function(){
			$(this).parent().parent().remove();
		});
		
		// 删除城市数组中被移除的城市id
		// cidArrOfDay[index].push(parseInt(cid));
		var cidInt = parseInt(cid);
		var tempArr = [];
		// console.log(cidArrOfDay);
		for(var i in cidArrOfDay){
			if($.inArray(cidInt, cidArrOfDay[i]) > -1){
				tempArr = [];
				// tempArr.length = 0;
				for(var ii in cidArrOfDay[i]){
					if(cidArrOfDay[i][ii] != cidInt){
						tempArr.push(cidArrOfDay[i][ii]);
					}
				}
				cidArrOfDay[i] = tempArr;
				// console.log(tempArr);
				// tempArr.length = 0;
			}else{
				// console.log("nocid");
			}
		}
		// console.log(cidInt);
		// console.log(cidArrOfDay);
		
		$(this).hide();
	});
}


// 添加城市:构造搜索城市的下拉框
function cityListToSearch(searchString){
	//<div class="search-option">搜索</div>
	var cityListIdJsonArr = cityInfoIdJsonArr;
	var cityListCnameJsonArr = cityInfoCnameJsonArr;
	var cityListEnameJsonArr = cityInfoEnameJsonArr;
	
	
	var htmlCode = '';
	for(var i in cityListIdJsonArr){
		var cid = cityListIdJsonArr[i];
		if(parseInt(cid) == 1) continue ;
		var cname = cityListCnameJsonArr[i];
		var ename = cityListEnameJsonArr[i];
		htmlCode += '<div class="search-option"><span class="city-search-'+cid+'"><span class="city-cname">'+cname+'</span><span class="city-ename">'+ename+'</span></span></div>';
	}
	return htmlCode;
}




function searchCity(){
	// var cityListIdJsonArr = json2Arr($("#search-list-city-id-json"));
	// var cityListCnameJsonArr = json2Arr($("#search-list-city-cname-json"));
	// var cityListEnameJsonArr = json2Arr($("#search-list-city-ename-json"));
	var cityListIdJsonArr = cityInfoIdJsonArr;
	var cityListCnameJsonArr = cityInfoCnameJsonArr;
	var cityListEnameJsonArr = cityInfoEnameJsonArr;
	
	
	var htmlCode = '';
	var data = [];
	// data format:
	// [{title:"巴黎",result:{cid:"qq",etitle:"abcde"}}]
	for(var i in cityListIdJsonArr){
		if(parseInt(cityListIdJsonArr[i]) == 1) continue ;
		var jn = {
			title:cityListCnameJsonArr[i],
			result:{
				cid:cityListIdJsonArr[i],
				etitle:cityListEnameJsonArr[i]
			}
		};
		data.push(jn);
	}
	
	$(".city-editor-detail-item-add-input").each(function(){
		$(this).bigAutocomplete({
			width:"auto",
			data:data,
			callback:function(data){
				var cid = data.info.result.cid;
				var $obj = data.obj;
				
				// var addOrNot = 1;
				
				// 判断城市能否添加
				var dayIndex = $(".city-editor-detail-item").index($obj.parent().parent());
			
				
				// var hasNum = $(".city-tag-"+cid).size();
				
				if($.inArray(parseInt(cid), cidArrOfDay[dayIndex]) > -1){
					// 当天有该城市
					// addOrNot = 0;
					// alert("今天已有该城市");
					// return ;
				}
				
				
				var cityTag = '<div class="city-editor-detail-item-tag" tabindex="-1"><div class="label"><span class="city-tag-'+cid+'">'+data.info.title+'</span></div><div class="options"></div></div>';
				
				// 当天已有城市的数量
				var cNum = cidArrOfDay[dayIndex].length;
				var dayNum = cidArrOfDay.length;
				
				
				if(dayIndex == 0 || dayIndex == dayNum - 1){
					if(cNum >= 2){
						alert("无法添加");
						return ;
					}
					
					// 联动添加
					if(dayIndex == 0){
						cidArrOfDay[1].unshift(parseInt(cid));
			
						var $secondIconObj = $(".city-editor-detail-item").eq(1).find(".city-editor-detail-item-trans_icon");
						
						$secondIconObj.after(cityTag);
						
						loadCityOptionsToModify($secondIconObj.next());
					}else{
						cidArrOfDay[dayNum - 2].push(parseInt(cid));
						
						var $lastButOneDayObj = $(".city-editor-detail-item").eq(dayNum - 2).find(".city-editor-detail-item-add");
						
						$lastButOneDayObj.before(cityTag);
						
						loadCityOptionsToModify($lastButOneDayObj.prev());
					}
						
				}
				
				
				if(dayIndex == dayNum - 1){
					// 更改数组
					cidArrOfDay[dayIndex].unshift(parseInt(cid));
					
					$obj.parent().prev().before(cityTag);
					loadCityOptionsToModify(data.obj.parent().prev().prev());
					
				}else{
					
					if(dayIndex == dayNum - 2){
						// 倒数第二天的添加要联动到最后一天
						var $lastDayObj = $(".city-editor-detail-item").eq(dayNum - 1);
						
						if($lastDayObj.children(".city-editor-detail-item-tag").size() == 1){
							// 添加
							cidArrOfDay[dayNum - 1].unshift(parseInt(cid));
							$lastDayObj.children(".city-editor-detail-item-trans_icon").after(cityTag);
							
						}else{
							// 修改
							cidArrOfDay[dayNum - 1][0] = parseInt(cid);
							$lastDayObj.children(".city-editor-detail-item-tag").eq(0).replaceWith(cityTag);
							
						}
						
						loadCityOptionsToModify($lastDayObj.children(".city-editor-detail-item-tag").eq(0));
					}
					
					// 更改数组
					cidArrOfDay[dayIndex].push(parseInt(cid));
					$obj.parent().before(cityTag);
					loadCityOptionsToModify(data.obj.parent().prev());
				}
				
				// 倒数第二天最后一个城市添加后的联动
				
				
				// if(addOrNot == 0){
					// alert("重复添加");
					// return ;
				// }
				
				
				
				// 顶部城市列表的添加
				if($(".city-title-tag-"+cid).size() == 0){
					var cityTitle = '<div class="city-editor-title-infor-tag"><span class="city-title-tag-'+cid+'">'+data.info.title+'</span></div>';
					$(".city-editor-title-infor").append(cityTitle);
				}
				$(".city-title-tag-"+cid).parent().show();
			
			console.log(cidArrOfDay);
			}
		});
	});
}


// 离开修改城市页面
function modifyCityAfter(){
	$(".main-left-city_editor_button").css({"animation":"fadeOutDown .6s both"});
	//$(".main-left-city_editor_button").css({"animation":"fadeInUp .6s both"});
	displayMainBu();
	
	// $("#title-main-left-city_edit").css({"animation":"flipOutX .5s both"});
	setTimeout(function() {
	  $("#title-main-left-city_edit").css({"display":"none"});
	  $("#title-main-left-index").css({"display":"block","z-index":"2"});
	},500);
	$("#title-main-left-index").css({"animation":"flipInX .6s both"});
	
	$(".left-inference-city-editor").css({"animation":"IndexFade .4s both"});
	$("#inference-box").css({"animation":"IndexFade .4s both","z-index":"1"});
	
	// 设置不透明度
	// $(".main-left-city_editor_button").css({"opacity":"0"});
}

// 修改城市之后点击保存按钮
// 修改城市之后点击优化按钮
function saveOrOptimize(action){
	// 若已中标完成则不允许修改
	var data = {};
	var url = "";
	// 重新分配景点
	if(action == "SAVE"){
		// 直接保存
		for(var i in cidArrOfDay){
			// 可能多次进入修改城市页面
			var len = cidArrOfDay[i].length;
			var preLen = prevCidArrOfDay[i].length;
			
			// 初始化
			sidArrOfDay[i] = [];
			if(len > 0){// 当天有游览城市
				for(var ii in cidArrOfDay[i]){
					// 之前这一块存在城市且未修改,存旧数组
					if(ii < preLen && cidArrOfDay[i][ii] == prevCidArrOfDay[i][ii]){
						sidArrOfDay[i][ii] = prevSidArrOfDay[i][ii];
					}else{
						// 新添加的城市,超出之前范围或已修改为新城市
						// sidArrOfDay[i][ii] = "RECREATE";
						sidArrOfDay[i][ii] = [];
					}
				}	
			}
		}
		// console.log("cidArrOfDay:");console.log(cidArrOfDay);
		// return 0;
		// console.log("sidArrOfDay:");console.log(sidArrOfDay);
		url = "http://"+CQHOST+"index.php/Home/Route/modifyCity";
		data = {"cidArrOfDay": cidArrOfDay, "sidArrOfDay": sidArrOfDay};
	}else if(action == "OPTIMIZE"){
		// 进行优化
		url = "http://"+CQHOST+"index.php/Home/Route/optimizeRoute";
		data = {"cidArrOfDay": cidArrOfDay};
		
	}
	
	
	// console.log("action:");console.log(action);
	// console.log("cidArrOfDay:");console.log(cidArrOfDay);
	// console.log("sidArrOfDay:");console.log(sidArrOfDay);
	
	$.ajax({
		type:"POST",
		data: data,
		dataType: "html",
		url: url,
		cache: false,
		async: false,
		success: function(html){
			flushInferenceBox(html);
			reLoadInfo();
			reLoadMap();
		}
	});
	
	// 重置修改城市之前的城市数组和对应景点数组
	// $.extend(true, prevCidArrOfDay, cidArrOfDay);
	// $.extend(true, prevSidArrOfDay, sidArrOfDay);
	
}

// test();
function test(){
	// console.log(arguments);
	// alert("test");
	var obj = {
		arr1 : [11,12,13,14,15],
		arr2 : [21,22,23,24,25]
	}
	
	// console.log(obj.arr1[0]);
	// 关于数组赋值的传递(数组名才是引用)
	var arr1 =  [[11],[12],[13]],
		arr2 = [[21],[22],[23],[24],[25]];
		arr2[0] = arr1[0];
		arr1[0] = [];
};
// test()
// 设置不透明度
// $(".main-left-city_editor_button").css({"opacity":"1"});
// main-left-city_editor_button-cancel保存
// main-left-city_editor_button-finish优化

// 将返回的json文本转换为数组
function json2Arr(){
	if(arguments[0] == "undefined") return [];
	var $selectorObj = arguments[0];
	if($selectorObj.size() > 0 && $selectorObj.text() != "") return $.parseJSON($selectorObj.text());
	return [];
}




