// 获取url参数
function getQueryString(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}


//addd  载入路线页面
function loadRoutePage(){    
	var routeId = getQueryString("id");
	if(routeId == null) routeId = "NO_ID";
	//alert(routeId);
	$.ajax({
	  type:"POST",
	  data:{"routeId": routeId},
	  url: "http://"+CQHOST+"index.php/Home/Route/itinerary",
	  dataType: "html",
	  cache: false,
	  async: false,  
	  success: function(html){
		flushInferenceBox(html);
	  }
	});
}



function flushInferenceBox(html){
	//alert(html);
	//alert($("#inference-box").attr("class"));
	$("#inference-box").html(html);
	$("#main_button").css("display", "block");
	
	// $(".back-info").css({"display":"none"});
	$(".trans-logo-type-lisa").css({"display":"none"});
	// $(".day-num-box-left-information-path").css({"height":"18px","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis"});
	
	//设置交通feature
	$(".day-num-information-transportation-section-bottom-feature").each(function(){
		if($(this).text() != ""){
			$(this).css({"background-color":"#61ad34"});
		}else{
			$(this).css({"background-color":"none"});
		}
		$(this).css({"background-color":"none"});
	});
	
	// 移除多余图标
	// $(".day-num-information-spot-button").eq(0).remove();
	// $(".day-num-information-spot-button").last().remove();
	//更改路线标题
	$(".day-num-information-spot-section-register-note-text").css({"float":"none","height":"24px", "white-space":"nowrap", "overflow":"hidden","text-overflow":"ellipsis"});
	$(".day-num-information-spot-section-detail-topview-photo-img").css({"filter":"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')", "-moz-background-size": "100% 100%", "background-size": "100% 100%"});
	// background:url(http://wyz.67ge.com/wp-content/uploads/qzlogo.jpg);  
	// filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";  
	// -moz-background-size:100% 100%;  
	// background-size:100% 100%;
	// 绿框
	$(".day-num-information-transportation-section-bottom-feature").each(function(){
		// console.log($(this).text());
		if($(this).text() == "") $(this).css({"opacity":"0"});
	});
	changeTitName();
}

function saveRoute(){
	$.ajax({
	  type:"POST",
	  data:{"config_route":"yes"},
	  url: "http://"+CQHOST+"index.php/Home/Route/saveRoute",
	  cache: false,
	  async:false,
	  success: function(result){
		// alert(result);
		if(result == "SAVE_SUCCESS"){
			alert("保存成功");
			window.location.href = "http://"+CQHOST+"index.php/Home/user/schedule";
		}else{
			alert("保存失败");
		}
	  }
	});
}


//addd
function changeTitleOfMap(n){
	//addd 更改地图标题
	var num=$(".day-num-box-left-information-path").size();
	if(num==0) return;
	var cityName=$(".day-num-box-left-information-path").eq(n-1).text().replace(/-/gi," -> ").replace(/[a-z]+/gi,"");
	$(".title-right-path").text("地图 > 第"+n+"天 > "+cityName);
}
//addd 载入增加一天列表
function loadDayList(){
	var num=$(".day-num-box").size(); //alert(num);
	if(num==0) return;
	var dayList='<div class="title-option-button"><div class="title-option-text" id="day-list-0">加到第1天前</div></div>';
	for(var i=1;i<=num;i++){
		dayList+='<div class="title-option-button"><div class="title-option-text" id="day-list-'+i+'">加到第'+i+'天后</div></div>';
	}
	$(".title-options-scroll-box").html(dayList);
}

//addd
function getSightsOfCity(cityId){
	if(cityId=="undefined") return;
	$.ajax({
        url: "http://"+CQHOST+"index.php/Home/Route/getSightsOfCity",
        type:"POST",
		data:{"city":cityId},
		cache: false,
		async:false,
        dataType: "json",
        success: function(jsn) {
			jn = jsn;
        }
    });
}
//查询景点备注信息
function getSigNoteFdb(id){
	if(id=="undefined") return;
	$.ajax({
		type:"POST",
		data:{"sid":id},
		dataType:"text",
		url: "http://"+CQHOST+"index.php/Home/Route/getSigNote",
		cache: false,
		async:false,
		success: function(note){
			if(note!=4) $("#sight-input-"+id).val(note);
		}
	});
}
//更新景点备注信息
function sightNote2db(id){
	if(id=="undefined") return;
	var sightNote="";
	sightNote=$("#sight-input-"+id).val();
	$.post("http://"+CQHOST+"index.php/Home/Route/updSigNote",{"sid":id,"note":sightNote});
}

//addd
function changeTitName(){
	var title = $("#route-title").text();
	$(".title-name").text(title);
	$(".title-name").css({"font-weight":"bold","font-size":"120%"});
}


//change2
function oneMoreDay() {
    var height=$(".title-options-box").height();
    if (height==36) {
		var boxLength = $(".title-options-scroll-box").children().length*36;
        $(".title-options-scroll-box").css({"max-height":+boxLength+"px"});
        $(".title-options-scroll-box").children().css({"background-color":"rgba(0, 0, 0, 0.6)"});
        if ($(".title-options-scroll-box").children().length>10) {
            var boxLength = 10.5*36;
            $(".title-options-scroll-box").css({"max-height":+boxLength+"px","overflow":"scroll"});
        }
        else {
            var boxLength = $(".title-options-scroll-box").children().length*36;
            $(".title-options-scroll-box").css({"max-height":+boxLength+"px"});
        }
    }
    else {
        $(".title-options-scroll-box").children().css({"background-color":"rgba(255, 255, 255, 0.2)"});
		$(".title-options-scroll-box").css({"max-height":"0"});
    }
}

function changeTransLogo2(Obj){
	if(Obj.size()==0) return;
	if(Obj.find(".day-num-information-transportation-section-title-logo").size()==0) return;
	Obj.find(".day-num-information-transportation-section-title-logo").each(function(){
		var transWays=logo="";
		transWays=$(this).parent().next().children().eq(1).text().substr(0,2);
		switch(transWays){
			case "飞机":
				logo="plane";
				break;
			case "火车":
				logo="train";
				break;
			case "夜间":
				logo="train";
				break;
			case "渡轮":
				logo="ship";
				break;
			case "轮渡":
				logo="ship";
				break;
			default :
				logo="car";
		}
		//alert($(this).attr("class"));
		$(this).css("background-image","url(http://"+CQHOST+"Public/img/inference/inf_"+logo+".png)");
	});
}

function changeTransLogo(Obj){
	if(Obj.size()==0) return;
	if(Obj.find(".day-num-information-transportation-section-top-logo").size()==0) return;
	Obj.find(".day-num-information-transportation-section-top-logo").each(function(){
		var transWays=logo="";
		transWays=$(this).next().text().substr(0,2);
		switch(transWays){
			case "飞机":
				logo="plane";
				break;
			case "火车":
				logo="train";
				break;
			case "夜间":
				logo="train";
				break;
			case "渡轮":
				logo="ship";
				break;
			case "轮渡":
				logo="ship";
				break;
			default :
				logo="car";
		}
		//alert($(this).attr("class"));
		//$(this).css("background-image","url(http://"+CQHOST+"Public/img/inference/inf_"+logo+".png)");
	});
}


//标记最佳交通方式
function markBestTran(day){
	var markTime="";
	var markCost="";
	var obj=$("#day-"+day+"-information-1").find(".day-num-information-transportation-section-note-text");
	markTime=obj.eq(1).text();
	markCost=obj.eq(2).text();
	var markTime=$("#transportation-appendLoc").find(".inference-transportation-section-information-table-bottom-spend").text();
	var markCost=$("#transportation-appendLoc").find(".inference-transportation-section-information-table-top-much").text().substr(2);
	
	
}

//设置第几天的背景图片
function setDayBgImg(){
	 for (var iconNum=0; iconNum<$(".day-num-box-left-icon").length; iconNum++) {
		var pathID=iconNum+1;
		$(".day-num-box-left-icon").eq(iconNum).css({"background-image":"url(http://"+CQHOST+"Public/img/inference/day"+pathID+".png)"});
	}
}



/* ************************************************************************************* */
/* *******************************************Map Section******************************* */
function createMap(){
	if(typeof map != 'undefined') return;
	var initLocal = new google.maps.LatLng(50.121212,8.6365638);
	map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 4,
		center: initLocal
	});
	$(".title-right-path").text("地图 >");
}
//城市
function createCityMarkers(){
	createMap();
	var num=$(".day-num-information-transportation-theme").size();
	if(num == 0) return;
	var cityInfoFromId = [];
	var cityMarkerCNtitle = [];//marker对应的中文名称
	
	var cityLatLng,cityMarker,centerCityLat,centerCityLng;
	$(".day-num-information-transportation-theme").each(function(index){
		if(index > 0){
			cityInfoFromId = $(this).attr("id").split("|");
			cityLatLng = new google.maps.LatLng(cityInfoFromId[3],cityInfoFromId[2]);
			cityCNname = $(this).next().find(".day-num-information-transportation-section-title-text").eq(0).text();
			
			cityMarker = new google.maps.Marker({
				//icon:image,
				//shape:shape,
				position: cityLatLng,
				title: cityCNname
			});
			
			cityMarkerArr.push(cityMarker);
			cityLatLngArr.push(cityLatLng);//生成城市的折线路径用
			
			if(num > 2){
				if(index <= num-2){
					centerCityLat += cityInfoFromId[2]/(num - 2);
					centerCityLng += cityInfoFromId[3]/(num - 2);
				}
			}else if(num == 2){
				centerCityLat += cityInfoFromId[3];
				centerCityLng += cityInfoFromId[2];
			}
		}
	});
	
	centerCityLatLng = new google.maps.LatLng(centerCityLat, centerCityLng);
	
}
function showCityMarkers(ifShow){//ifShow true:显示 false：隐藏
	if(!cityMarkerArr.length) return;
	if(ifShow){
		for(var i in cityMarkerArr){
			cityMarkerArr[i].setMap(map);
		}
	}else{
		for(var i in cityMarkerArr){
			cityMarkerArr[i].setMap(null);
		}
	}
}
function showCityPolyLine(ifShow){//ifShow true:显示 false：隐藏
	if(!ifShow){
		cityPolyLinePath.setMap(null);
		return;
	}
	var num=$(".day-num-information-transportation-theme").size();
	if(num==0) return;
	cityPolyLinePath = new google.maps.Polyline({
		path: cityLatLngArr,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	
	//显示城市的marker
	//设置地图,使所有marker都能显示
	//if(typeof centerCityLatLng != 'undefined') map.setCenter(centerCityLatLng);
	if(cityLatLngArr.length > 0) adjustMap(cityLatLngArr);
	cityPolyLinePath.setMap(map);
}


//-----------------------------------------景点-----------------------------------------//

/*
动态创建与删除
*/
function createMarker(sid,fx,fy,title){
	var sightLatLng = new google.maps.LatLng(fy, fx);
	var sightMarkerTitle = title;
	var img="http://"+CQHOST+"Public/img/map/mp2.png";
	var sightMarker = new google.maps.Marker({
		icon:img,
		position: sightLatLng,
		title: sightMarkerTitle
	});
	sightMarkerTitle = '<div style="color:black;text-align:center;">' + sightMarkerTitle + '</div>';
	var infowindow = new google.maps.InfoWindow({
		content: sightMarkerTitle
	});
	sightMarkerAndId.push({"sid":sid,"marker":sightMarker,"infowindow":infowindow});
}

function createSightMarkers(){
	createMap();
	var sightInfoFromId = [];
	var sightLatLng;
	var sightMarkerTitle = "";
	var img="http://"+CQHOST+"Public/img/map/mp2.png";
	var sightMarker;

	if($(".day-num-information-spot-section-register-note-text").size()==0) return;
	$(".day-num-information-spot-section-register-note-text").each(function (){
		sightInfoFromId=$(this).attr("id").substr(8).split("|");
		if(sightInfoFromId.length < 3) return;
		createMarker(sightInfoFromId[2],sightInfoFromId[0],sightInfoFromId[1],$(this).text());
	});
}

function showSightMarkers(day,ifShow){
	var len=$(".day-num-information").eq(day-1).find(".day-num-information-spot-section-register-note-text").size();
	//alert(len);
	if(len==0) return;
	var centerSightLat =0;
	var centerSightLng =0;
	var sightLatLngArr = [];
	$(".day-num-information").eq(day-1).find(".day-num-information-spot-section-register-note-text").each(function (){
		var n=$(this).attr("id").lastIndexOf("|")+1;
		var sid=$(this).attr("id").slice(n);
		if(ifShow){
			for(var i in sightMarkerAndId){
				if(sightMarkerAndId[i].sid==sid){
					sightMarkerAndId[i].marker.setMap(map);
					sightMarkerAndId[i].infowindow.open(map, sightMarkerAndId[i].marker);
					sightMarkerAndId[i].marker.addListener('click', function() {
						sightMarkerAndId[i].infowindow.open(map, sightMarkerAndId[i].marker);
					});
					//$(".infowindow").css("background-color","#5CBB44");
					sightLatLngArr.push(sightMarkerAndId[i].marker.getPosition());//显示折线
					centerSightLat +=sightMarkerAndId[i].marker.getPosition().lat()/len;
					centerSightLng +=sightMarkerAndId[i].marker.getPosition().lng()/len;
					break;
				}
			}
		}else{
			for(var i in sightMarkerAndId){
				if(sightMarkerAndId[i].sid==sid){
					sightMarkerAndId[i].marker.setMap(null);
					sightMarkerAndId[i].infowindow.close();
					break;
				}
			}
			var n =parseInt(day,10);
			if(sightPolyLinByDay.length >= n) sightPolyLinByDay[n].setMap(null);
			return;
		}
		
	});
	if(sightLatLngArr.length > 0){
		var n =parseInt(day,10);
		sightPolyLinByDay[n] = new google.maps.Polyline({
			path: sightLatLngArr,
			strokeColor: "#43abf4",
			strokeOpacity: 1.0,
			strokeWeight: 2
		});
		sightPolyLinByDay[n].setMap(map);
	}
	//设置地图中心点和zoom
	//if(centerSightLat*centerSightLng>0) map.setCenter(new google.maps.LatLng(centerSightLat,centerSightLng));
	//map.setZoom(36);
	if(cityLatLngArr.length > 0) adjustMap(sightLatLngArr);
}

function adjustMap(latLngArr){
	var bounds = new google.maps.LatLngBounds();
	for(var i in latLngArr){
		bounds.extend(latLngArr[i]);
	}
	map.fitBounds(bounds);
}

function removeSightMarker(sid){
	for(var i in sightMarkerAndId){
		if(sightMarkerAndId[i].sid==sid){
			sightMarkerAndId[i].marker.setMap(null);
			sightMarkerAndId[i].infowindow.close();
			//$(".infowindow").css("background-color","#5CBB44");
			break;
		}
	}
}
function addSightMarker(sid,fx,fy,title){
	//var haveMarker = 0;
	if(typeof(sid)=='undefined') return;
	for(var i in sightMarkerAndId){
		if(sightMarkerAndId[i].sid==sid){
			//haveMarker = 1;
			sightMarkerAndId[i].marker.setMap(map);
			sightMarkerAndId[i].infowindow.open(map, sightMarkerAndId[i].marker);
			sightMarkerAndId[i].marker.addListener('click', function() {
				sightMarkerAndId[i].infowindow.open(map, sightMarkerAndId[i].marker);
			});
			//$(".infowindow").css("background-color","#5CBB44");//addEventListener
			//break;
			return ;
		}
	}
	//createMarker
	if(typeof(fx)=='undefined'||typeof(fy)=='undefined') return;
	createMarker(sid,fx,fy,title);
	addSightMarker(sid,fx,fy,title);
}





/* *******************************************Map Section******************************* */
/* **************************************************new section*************************************/
function changeBoxTit(){
	var $obj = $(".day-num-box-left-information-path");
	$obj.css({"height": "18px", "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis","font-size": "100%"});
	var num = $obj.size();
	if(num == 0) return;
	
	$obj.each(function(i, e){
		var $tranCnameTitObj = $(e).parent().parent().parent().next().find(".day-num-information-transportation-section-top-title");
		
		var pathCities = [];
		if($tranCnameTitObj.size() > 0){
			$tranCnameTitObj.each(function(ii, ee){
				var fCity = $(ee).children(".day-num-information-transportation-section-top-title-text").eq(0).text();
				var tCity = $(ee).children(".day-num-information-transportation-section-top-title-text").eq(1).text();
				if(ii > 0){
					pathCities.pop();
				}
				pathCities.push(fCity);
				pathCities.push(tCity);
			});
		}
		
		
		if(pathCities.length > 0){
			$(e).text(pathCities.join("-"));
		}
		
		
	});

}

//更改景点的序列号图标
function changeIndexBgImgOfSight(){
	//alert(123);
	if($(".day-num-information-spot-section").size()==0) return;
	$(".day-num-information-spot-section").each(function(){
		$(this).find(".day-num-information-spot-section-register-note-logo").each(function(i,e){
			var n=i+1;
			if(n<10){
				$(e).css("background-image","url(http://"+CQHOST+"Public/img/inference/p0"+n+".png)");
			}else{
				$(e).css("background-image","url(http://"+CQHOST+"Public/img/inference/p"+n+".png)");
			}
			
		});
	});
}

//添加box上景点列表
function addSightListToDayBox(){
	var obj=$(".day-num-box-left-information-note");
	if(obj.size()==0) return;
	obj.css({"height":"18px","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis"});
	obj.each(function(i,e){
		var sightList="";
		var obj2=$(e).parent().parent().parent().next().find(".day-num-information-spot-section-register-note-text");
		if(obj2.size()>0){
			obj2.each(function(ii,ee){
				if(ii==0){
					sightList+=$(ee).text();
				}else{
					sightList+="/"+$(ee).text();
				}
			});
		}
		
		$(e).text(sightList);
	});
}

//添加展示详细交通信息的绑定事件
function addClickListenerOfShowTransDetail(){
	$(".day-num-information-transportation-section").each(function(i,e) {
		$(e).click(function() {//添加交通详细展示的点击事件
			if($(e).parent().next().height()) {//展开
				$(e).parent().next().css({"max-height":"0"});
				$(e).prev().css({"border-radius":"4px 0 0 4px"});
				$(e).next().css({"border-radius":"0 4px 4px 0"});
			}
			else {//关闭
				var hei = $(e).parent().next().children().eq(1).height();
				$(e).parent().next().css({"max-height":hei+"px"});
				var hisud = $(e).parent().parent().height() + hei;
				$(e).parent().parent().css({"max-height":hisud+"px"});
				$(e).prev().css({"border-radius":"4px 0 0 0"});
				$(e).next().css({"border-radius":"0 4px 0 0"});
				$(".day-num-information-transportation-detail-theme").eq(i).height(hisud);
			}
		})
	});
}


//添加展示详细景点信息的绑定事件
function addClickListenerOfShowSpotDetail(){
	$(".day-num-information-spot-section-register").each(function(i,e) {
		$(e).click(function() {
			if($(e).next().height()) {$(e).next().css({"max-height":"0"});}
			else {//景点详细信息的展示
				var hei = 0;
				hei = 20+$(e).next().children().eq(0).height()+$(e).next().children().eq(1).height();
				$(e).next().css({"max-height":hei+"px"});
				var hisud = $(e).parent().parent().parent().height() + hei;
				$(e).parent().parent().parent().css({"max-height":hisud+"px"});
			}
		})
	});
}









