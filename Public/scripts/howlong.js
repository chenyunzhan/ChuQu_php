//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   loading;
//  >   FUNCTION        :   GET INFORMATION OF BROWSER,
//                          AND SET THE LOADING PAGE.
//  >   CALL            :   material
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function loading(w) {
    $("#logo").click(function() {location.href = "/index.html"});
    $("body").css({"display":"block"});
    var MarginTop=window.innerHeight/2-220;
    $("#LoginCanvas").css({"margin-top":MarginTop+"px"});
    isTittle1=w;
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
    isTittle1?$("#flash").css({"transform":"translateX(0)"}):$("#flash").css({"transform":"translateX(155%)"});
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
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
// var city_options = [
  // {
    // name: '柏林Bolin',
    // country: '(德国)'
  // }
// ];
var city_options = [];
// 待添加城市的编号
var addedCityId = "";
$(function() {
    $("#LoginTurnOff").click(function() {Loginturnoff()});
	// cityByCountryAndPoi();
	getCityOptions();
	
	// bind keyword-input event
	bindInputEvent();
	
	
    $(".navigator").each(function(i,e) {
        if (i===0) {
            $(".left-component").eq(0).show();
            $(".left-component").eq(1).hide();
            $(".navigator").eq(0).addClass("statusOn");
        }
        $(e).click(function() {
            if ($(e).attr("class").indexOf("statusOn")<0) {
                $(".left-component").hide();
                $(".left-component").eq(i).show();
                $(".navigator").removeClass("statusOn");
                $(e).addClass("statusOn");
            }
        });
    });
	
    $(".navigator").eq(0).click();
    
    // $("div[id^='country-selected-']").eq(0).click();
    $(".city-selector > .selector-item").each(function(i,e) {
        $(e).click(function() {
            // var enableClass = "item-active";
			$(".selected-item").hide();
			
			// country-selected-8
			var countryId = $(this).attr("id").slice(17);
			
			
			// country-id-8
			$(".country-id-"+countryId).each(function(i, e){
				$(this).parent().show();
			});

            var root = $(e).parent().parent();
            var hei = root.height() - root.children().eq(0).height() - root.children().eq(1).height();
            $(e).parent().next().css({"min-height":hei+"px"});

        });
    });
	$(".city-selector > .selector-item").eq(0).click();
	
    $(".selected-item > .item-right").each(function(i,e) {
        // $(e).click(function() {$(".city-selector > .selector-item").eq(i).click()});
		
		$(e).click(function(){
			// city-id-
			var cid = $(e).next().children().attr("class").slice(8);
			console.log(cid);
			// city-tag-
			$(".city-tag-"+cid).parent().parent().toggle();
			
			var enableClass = "item-active";
            if($(e).parent().attr("class").indexOf(enableClass)<0){
                $(e).parent().addClass(enableClass);
				// $(".city-tag-"+cid).parent().parent().addClass("city-active");
            }else{
                $(e).parent().removeClass(enableClass);
				// $(".city-tag-"+cid).parent().parent().removeClass("city-active");
            }
			
			
			
		});
		
		
    });
    $(".option-title").each(function(i,e) {
        $(e).click(function() {
            if ($(e).attr("class").indexOf("option-bar-on")<0) {
                $(".option-bar").removeClass("option-bar-on");
                $(e).parent().addClass("option-bar-on");
            }
        });
    });
    $('.single-slider').jRange({
        from: 1,
        to: 30,
        step: 1,
        scale: null,
        format: '%s<font size=1>天</font>',
        width: 405,
        showLabels: true,
        isRange : true
    });
	
	$('.single-slider').jRange('setValue', '7, 12');
	
    $(".date-time-picker").datetimepicker({setLocale:"zh", format:"Y-m-d", timepicker:false});//配置并初始化日期选择控件
    $(".bar-line > .set-bar-area").each(function(i,e) {
        $(e).click(function() {
            var enableClass = "area-enable";
            if ($(e).attr("class").indexOf(enableClass)<0) {
                $(e).addClass(enableClass);
                $(e).parent().parent().prev().find(".title-tag").text($(e).next().text());
                $(e).parent().prev().find(".date-time-picker").val(null);
            }
            else
                $(e).removeClass(enableClass);
        });
    });
    $(".bar-line > .set-bar-area").click();
    $(".date-time-picker").each(function(i,e) {
        $(e).change(function() {
            $(e).parent().parent().prev().find(".title-tag").text($(e).val());
            var area = $(e).parent().next().find(".set-bar-area");
            if (area.attr("class").indexOf("area-enable")>=0)
                area.click();
        });
    });
    $(".keyword-input").each(function(i,e) {
        var activeClass = "search-active";
        $(e).click(function() {
            $(".city-search").removeClass(activeClass);
            if ($(e).parent().attr("class").indexOf(activeClass)<0) {
                $(e).parent().addClass(activeClass);
            }
            else
                $(e).parent().removeClass(activeClass);
        });
        var resultDom = $(e).next();
        $(e).bind('input propertychange', function() {
            resultDom.empty();
            var key = $(e).val();
            city_options.map(function(item,index,arry) {
                if (item.name.indexOf(key) >= 0 && key.length>0 && (item.name != key))
                    resultDom.append('<div class="result"><span class="search-city-'+item.cid+'"><span class="cn-name">'+item.cname+'</span><span class="en-name">'+item.ename+'</span></span></div>')
            });
            $(".search-results > .result").unbind();
            $(".search-results > .result").each(function(ii,ee) {
                $(ee).click(function() {
                    // $(ee).parent().prev().val($(ee).text());
					// alert($(ee).find(".cn-name").text());
                    var txt = $(ee).find(".cn-name").text();
					var cid = addedCityId = $(ee).children().attr("class").slice(12);
					$(ee).parent().prev().val(txt);
					$(ee).parent().prev().prev().prev().text(cid);
					
					//$(ee).parent().prev().prev().(txt);
					// console.log(addedCityId);
                    $(ee).parent().parent().removeClass(activeClass);
                });
            });
        });

    });
	
    $(".option-next").each(function(i,e) {
        $(e).click(function() {
            $(e).parent().parent().next().children().eq(0).click();
        });
    });

});



//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   material,
//  >   FUNCTION        :   MATERIAL STYLE
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function material() {
//    $(".loading-logo,.spinner-container").fadeOut(300);
//    setTimeout(function() {$("#loading").css({"bottom":"100%"});},500);
//    setTimeout(function() {$("#loading").css({"display":"none"});},800);
    $("header").css({"animation":"fadeInDown 1s both"});

    $(".how-long-logo").css({"animation":"flipInX 1s both"});
    $(".note-1").css({"animation":"bounceIn 1s .2s both"});
    $(".note-2").css({"animation":"bounceIn 1s .4s both"});


    $(".slider-layout").css({"animation":"zoomIn .3s .6s both"});

    $(".goon").css({"animation":"bounceIn 1s .7s both"});





}

// 输入框处理和信息的保存
function bindInputEvent(){
	// city-search
	$(".city-search").prepend('<span class="config-input-city" style="display:none"></span>');
	
	$(".keyword-input").eq(0).keyup(function(event){
		if(addedCityId && event.keyCode == 13){
			// city-tag city-active
			var $obj = $(".ctag-"+addedCityId).parent();
			console.log($obj.attr("class"));
			if($obj.attr("class") != "city-tag city-active")
				$obj.addClass("city-active");
			$(this).val("");
		}
	});
	
	$(".keyword-input").change(function(){
		if($(this).val() == ""){
			// config-input-city
			$(this).prev().prev().text("");
		}
	});
}

// addd 
// 获取时长
$(".goon").click(function(){
	goNextPage();
});

$(".post-button").click(function(){
	goNextPage();
});


// 

function cityByCountryAndPoi(){
	$.ajax({
		type:"POST",
		// data:{"action":"cityByCountryAndPoi"},
		dataType:"json",
		url: "http://"+CQHOST+"index.php/Home/Route/getCityByPoiAndCountry",
		cache: false,
		async:false,
		success: function(jsn){
			// alert(jsn);
			console.log(jsn);
			makeCityLists(jsn);
		}
	});
}

// <div class="selector-item" >柏林</div>
// <div class="selected-item">
		// <div class="item-left">汉堡</div>
		// <div class="item-right">+</div>
// </div>


// 
function listSelectedCountries(countryInfo){
	if(countryInfo.countryId == 'undefined') return ;
	
	var countryId = countryInfo.countryId;
	var countryName = countryInfo.countryName;
	
	var selector_item = '';
	
	for(var i in countryId){
		selector_item += '<div class="selector-item" id="country-selected-'+countryId[i]+'">'+countryName[i]+'</div>';
	}

	$(".city-selector").prepend(selector_item);
	
	
	$(".selector-item").each(function(i, e){
		var des_id = $(this).attr("id").slice(17);
		
		switch (des_id) {
			case '19':
				des_id = "a1";//奥地利
				break;
			case '41':
				des_id = "a2";//安道尔
				break;
			case '45':
				des_id="a3";//1埃及
				break;
			case '48':
				des_id="a4";//2阿尔及利亚
				break;
			case '54':
				des_id="a5";//3阿尔巴尼亚
				break;
			case '53':
				des_id="a6";//4爱沙尼亚
				break;
			case '52':
				des_id="a7";//5爱尔兰
				break;
			case '13':
				des_id="b1";//比利时
				break;
			case '27':
				des_id="b2";//波兰
				break;
			case '43':
				des_id="b3";//6保加利亚
				break;
			case '62':
				des_id="b4";//7冰岛
				break;
			case '8':
				des_id="d1";//德国
				break;
			case '26':
				des_id="d2";//丹麦
				break;
			case '44':
				des_id="e1";//8俄罗斯
				break;
			case '9':
				des_id="f1";//法国
				break;
			case '17':
				des_id="f2";//芬兰
				break;
			case '30':
				des_id="f3";//梵蒂冈
				break;
			case '11':
				des_id="h1";//荷兰
				break;
			case '21':
				des_id="j1";//捷克
				break;
			case '53':
				des_id="k1";//9克罗地亚
				break;
			case '14':
				des_id="l1";//卢森堡
				break;
			case '28':
				des_id="l2";//罗马尼亚
				break;
			case '35':
				des_id="l3";//列支敦士登
				break;
			case '55':
				des_id="l4";//10拉脱维亚
				break;
			case '40':
				des_id="m1";//摩纳哥
				break;
			case '47':
				des_id="m2";//11摩洛哥
				break;
			case '56':
				des_id="m3";//12马其顿
				break;
			case '60':
				des_id="m4";//13马尔他
				break;
			case '16':
				des_id="n1";//挪威
				break;
			case '18':
				des_id="p1";//葡萄牙
				break;
			case '20':
				des_id="r1";//瑞典
				break;
			case '22':
				des_id="r2";//瑞士
				break;
			case '49':
				des_id="s1";//14塞尔维亚
				break;
			case '51':
				des_id="s2";//15斯洛伐克
				break;
			case '57':
				des_id="s3";//16斯洛文尼亚
				break;
			case '59':
				des_id="s4";//17塞普洛斯
				break;
			case '61':
				des_id="s5";//18圣马力诺
				break;
			case '29':
				des_id="t1";//土耳其
				break;
			case '50':
				des_id="t2";//19突尼斯
				break;
			case '46':
				des_id="w1";//20乌克兰
				break;
			case '15':
				des_id="x1";//西班牙
				break;
			case '23':
				des_id="x2";//希腊
				break;
			case '24':
				des_id="x3";//匈牙利
				break;
			case '10':
				des_id="y1";//英国
				break;
			case '12':
				des_id="y2";//意大利
				break;
		}
		
		
		
		$(e).css({"background-image":"url(http://"+CQHOST+"Public/img/"+des_id+".png)"});
	});
	
	
}



function makeCityLists(jn){
	if(jn == "undefined" || jn == "") return ;
	
	var selected_item = '';
	// <div class="city-tag">柏林</div>
	var ctag_item = '';
	for(var i in jn){
		var cid = jn[i].cid;
		var cname = jn[i].cname;
		var countryid = jn[i].countryid;
		var appendedInfo = '<div class="country-id-'+countryid+'"><div class="city-id-'+cid+'"></div></div>';
		var appendTagInfo = '<div class="country-tag-'+countryid+'"><div class="city-tag-'+cid+'"></div></div>';
		
		selected_item += '<div class="selected-item"><div class="item-left">'+cname+'</div><div class="item-right">+</div>'+appendedInfo+'</div>';
		
		ctag_item += '<div class="city-tag">'+cname+appendTagInfo+'</div>';
	}
	selected_item += '<div style="height:30px;display:block;clear:both"></div>';
	// console.log(selector_item);
	// console.log(selected_item);
	// city-selected-box
	
	
	$(".selected-list").prepend(selected_item);
	$(".city-selected-box").prepend(ctag_item);
	
	// .option-bar > .selected-list
	// $(".selected-list").css({"height":"148px","over-flow":"auto"});
}



function goNextPage(){
	var duration= $(".single-slider").attr("value");
	var maxTime=[];
	maxTime=duration.split(",");
	if(maxTime[1]<3){
		alert("最长游览时间不应少于3天");
		return false;
	}
	
	// 出发时间
	var leaveTime = $(".option-title").eq(0).children(".title-tag").text();
	if(leaveTime == "还未决定") leaveTime = "NOT_YET";
	
	
	// 必去城市
	var mustCities = [];
	$(".city-tag").each(function(){
		var cid = 0;
		if($(this).css("display") != "none"){
			cid = parseInt($(this).children().children().attr("class").slice(9));
			if(cid > 0) mustCities.push(parseInt(cid));
		}
	});
	
	
	// 第一和最后一个城市
	var firstCid = $(".config-input-city").eq(1).text();
	var lastCid = $(".config-input-city").eq(2).text();
	
	var data = {"duration":duration, "leaveTime": leaveTime, "mustCities": mustCities, "firstCid": firstCid, "lastCid": lastCid};
	console.log(data);
	// return ;
	$.ajax({
		type:"POST",
		data:{"duration":duration, "leaveTime": leaveTime, "mustCities": mustCities, "firstCid": firstCid, "lastCid": lastCid},
		dataType:"text",
		url: "http://"+CQHOST+"index.php/Home/Route/howlong",
		cache: false,
		async:false,
		success: function(text){
			console.log(text);
			if(text==1){
				location.href="http://"+CQHOST+"index.php/home/route/inference";
			}else if(text==2){
				fullscreen();
			}
		}
	});
}



// 获取可供添加的城市(包括进出城市)
function getCityOptions(){
	// getCityOptions
	$.ajax({
		type:"POST",
		// data:{"duration":duration},
		dataType:"json",
		url: "http://"+CQHOST+"index.php/Home/Route/getCityOptions",
		cache: false,
		async:false,
		success: function(jsn){
			console.log(jsn);
			// countryInfo{}
			// cityInfo{}
			city_options = jsn.cityInfo;
			makeCityLists(jsn.cityInfo);
			listSelectedCountries(jsn.countryInfo);
			
		}
	});
}







//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//
//********************************LIBRARY!*****************************
//
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
/*jshint multistr:true, curly: false */
/*global jQuery:false, define: false */
/**
 * jRange - Awesome range control
 *
 * Written by
 * ----------
 * Nitin Hayaran (nitinhayaran@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Nitin Hayaran
 * @version 0.1-RELEASE
 *
 * Dependencies
 * ------------
 * jQuery (http://jquery.com)
 *
 **/
;(function($, window, document, undefined) {
	'use strict';

	var jRange = function() {
		return this.init.apply(this, arguments);
	};
	jRange.prototype = {
		defaults: {
			onstatechange: function() {},
			isRange: false,
			showLabels: true,
			showScale: true,
			step: 1,
			format: '%s',
			theme: 'theme-green',
			width: 300,
			disable: false
		},
		template: '<div class="slider-container">\
			<div class="back-bar">\
                <div class="selected-bar"></div>\
                <div class="pointer low"></div><div class="pointer-label" id="pointer-label-left">123456</div>\
                <div class="pointer high"></div><div class="pointer-label" id="pointer-label-right">456789</div>\
                <div class="clickable-dummy"></div>\
            </div>\
            <div class="scale"></div>\
		</div>',
		init: function(node, options) {
			this.options       = $.extend({}, this.defaults, options);
			this.inputNode     = $(node);
			this.options.value = this.inputNode.val() || (this.options.isRange ? this.options.from + ',' + this.options.from : this.options.from);
			this.domNode       = $(this.template);
			this.domNode.addClass(this.options.theme);
			this.inputNode.after(this.domNode);
			this.domNode.on('change', this.onChange);
			this.pointers      = $('.pointer', this.domNode);
			this.lowPointer    = this.pointers.first();
			this.highPointer   = this.pointers.last();
			this.labels        = $('.pointer-label', this.domNode);
			this.lowLabel      = this.labels.first();
			this.highLabel     = this.labels.last();
			this.scale         = $('.scale', this.domNode);
			this.bar           = $('.selected-bar', this.domNode);
			this.clickableBar  = this.domNode.find('.clickable-dummy');
			this.interval      = this.options.to - this.options.from;
			this.render();
		},
		render: function() {
			// Check if inputNode is visible, and have some width, so that we can set slider width accordingly.
			if (this.inputNode.width() === 0 && !this.options.width) {
				console.log('jRange : no width found, returning');
				return;
			} else {
				this.domNode.width(this.options.width || this.inputNode.width());
				this.inputNode.hide();
			}

			if (this.isSingle()) {
				this.lowPointer.hide();
				this.lowLabel.hide();
			}
			if (!this.options.showLabels) {
				this.labels.hide();
			}
			this.attachEvents();
			if (this.options.showScale) {
				this.renderScale();
			}
			this.setValue(this.options.value);
		},
		isSingle: function() {
			if (typeof(this.options.value) === 'number') {
				return true;
			}
			return (this.options.value.indexOf(',') !== -1 || this.options.isRange) ?
				false : true;
		},
		attachEvents: function() {
			this.clickableBar.click($.proxy(this.barClicked, this));
			this.pointers.on('mousedown touchstart', $.proxy(this.onDragStart, this));
			this.pointers.bind('dragstart', function(event) {
				event.preventDefault();
			});
		},
		onDragStart: function(e) {
			if ( this.options.disable || (e.type === 'mousedown' && e.which !== 1)) {
				return;
			}
			e.stopPropagation();
			e.preventDefault();
			var pointer = $(e.target);
			this.pointers.removeClass('last-active');
			pointer.addClass('focused last-active');
			this[(pointer.hasClass('low') ? 'low' : 'high') + 'Label'].addClass('focused');
			$(document).on('mousemove.slider touchmove.slider', $.proxy(this.onDrag, this, pointer));
			$(document).on('mouseup.slider touchend.slider touchcancel.slider', $.proxy(this.onDragEnd, this));
		},
		onDrag: function(pointer, e) {
			e.stopPropagation();
			e.preventDefault();

			if (e.originalEvent.touches && e.originalEvent.touches.length) {
				e = e.originalEvent.touches[0];
			} else if (e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
				e = e.originalEvent.changedTouches[0];
			}

			var position = e.clientX - this.domNode.offset().left;
			this.domNode.trigger('change', [this, pointer, position]);
		},
		onDragEnd: function(e) {
			this.pointers.removeClass('focused');
			this.labels.removeClass('focused');
			$(document).off('.slider');
		},
		barClicked: function(e) {
			if(this.options.disable) return;
			var x = e.pageX - this.clickableBar.offset().left;
			if (this.isSingle())
				this.setPosition(this.pointers.last(), x, true, true);
			else {
				var pointer = Math.abs(parseInt(this.pointers.first().css('left'), 10) - x + this.pointers.first().width() / 2) < Math.abs(parseInt(this.pointers.last().css('left'), 10) - x + this.pointers.first().width() / 2) ?
					this.pointers.first() : this.pointers.last();
				this.setPosition(pointer, x, true, true);
			}
		},
		onChange: function(e, self, pointer, position) {
			var min, max;
			if (self.isSingle()) {
				min = 0;
				max = self.domNode.width();
			} else {
				min = pointer.hasClass('high') ? self.lowPointer.position().left + self.lowPointer.width() / 2 : 0;
				max = pointer.hasClass('low') ? self.highPointer.position().left + self.highPointer.width() / 2 : self.domNode.width();
			}
			var value = Math.min(Math.max(position, min), max);
			self.setPosition(pointer, value, true);
		},
		setPosition: function(pointer, position, isPx, animate) {
			var leftPos,
				lowPos = this.lowPointer.position().left,
				highPos = this.highPointer.position().left,
				circleWidth = this.highPointer.width() / 2;
			if (!isPx) {
				position = this.prcToPx(position);
			}
			if (pointer[0] === this.highPointer[0]) {
				highPos = Math.round(position - circleWidth);
			} else {
				lowPos = Math.round(position - circleWidth);
			}
			pointer[animate ? 'animate' : 'css']({
				'left': Math.round(position - circleWidth)
			});
			if (this.isSingle()) {
				leftPos = 0;
			} else {
				leftPos = lowPos + circleWidth;
			}
			this.bar[animate ? 'animate' : 'css']({
				'width': Math.round(highPos + circleWidth - leftPos),
				'left': leftPos
			});
			this.showPointerValue(pointer, position, animate);
			this.isReadonly();
		},
		// will be called from outside
		setValue: function(value) {
			var values = value.toString().split(',');
			this.options.value = value;
			var prc = this.valuesToPrc(values.length === 2 ? values : [0, values[0]]);
			if (this.isSingle()) {
				this.setPosition(this.highPointer, prc[1]);
			} else {
				this.setPosition(this.lowPointer, prc[0]);
				this.setPosition(this.highPointer, prc[1]);
			}
		},
		renderScale: function() {
			var s = this.options.scale || [this.options.from, this.options.to];
			var prc = Math.round((100 / (s.length - 1)) * 10) / 10;
			var str = '';
			for (var i = 0; i < s.length; i++) {
				str += '<span style="left: ' + i * prc + '%">' + (s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '') + '</span>';
			}
			this.scale.html(str);

			$('ins', this.scale).each(function() {
				$(this).css({
					marginLeft: -$(this).outerWidth() / 2
				});
			});
		},
		getBarWidth: function() {
			var values = this.options.value.split(',');
			if (values.length > 1) {
				return parseInt(values[1], 10) - parseInt(values[0], 10);
			} else {
				return parseInt(values[0], 10);
			}
		},
		showPointerValue: function(pointer, position, animate) {
			var label = $('.pointer-label', this.domNode)[pointer.hasClass('low') ? 'first' : 'last']();
			var text;
			var value = this.positionToValue(position);
			if ($.isFunction(this.options.format)) {
				var type = this.isSingle() ? undefined : (pointer.hasClass('low') ? 'low' : 'high');
				text = this.options.format(value, type);
			} else {
				text = this.options.format.replace('%s', value);
			}

			var width = label.html(text).width(),
				left = position - width / 2;
			left = Math.min(Math.max(left, 0), this.options.width - width);
			label[animate ? 'animate' : 'css']({
				left: left
			});
			this.setInputValue(pointer, value);
		},
		valuesToPrc: function(values) {
			var lowPrc = ((values[0] - this.options.from) * 100 / this.interval),
				highPrc = ((values[1] - this.options.from) * 100 / this.interval);
			return [lowPrc, highPrc];
		},
		prcToPx: function(prc) {
			return (this.domNode.width() * prc) / 100;
		},
		positionToValue: function(pos) {
			var value = (pos / this.domNode.width()) * this.interval;
			value = value + this.options.from;
			return Math.round(value / this.options.step) * this.options.step;
		},
		setInputValue: function(pointer, v) {
			// if(!isChanged) return;
			if (this.isSingle()) {
				this.options.value = v.toString();
			} else {
				var values = this.options.value.split(',');
				if (pointer.hasClass('low')) {
					this.options.value = v + ',' + values[1];
				} else {
					this.options.value = values[0] + ',' + v;
				}
			}
			if (this.inputNode.val() !== this.options.value) {
				this.inputNode.val(this.options.value);
				this.options.onstatechange.call(this, this.options.value);
			}
		},
		getValue: function() {
			return this.options.value;
		},
		isReadonly: function(){
			this.domNode.toggleClass('slider-readonly', this.options.disable);
		},
		disable: function(){
			this.options.disable = true;
			this.isReadonly();
		},
		enable: function(){
			this.options.disable = false;
			this.isReadonly();
		},
		toggleDisable: function(){
			this.options.disable = !this.options.disable;
			this.isReadonly();
		}
	};

	/*$.jRange = function (node, options) {
		var jNode = $(node);
		if(!jNode.data('jrange')){
			jNode.data('jrange', new jRange(node, options));
		}
		return jNode.data('jrange');
	};

	$.fn.jRange = function (options) {
		return this.each(function(){
			$.jRange(this, options);
		});
	};*/

	var pluginName = 'jRange';
	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function(option) {
		var args = arguments,
			result;

		this.each(function() {
			var $this = $(this),
				data = $.data(this, 'plugin_' + pluginName),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('plugin_' + pluginName, (data = new jRange(this, options)));
				$(window).resize(function() {
					data.setValue(data.getValue());
				}); // Update slider position when window is resized to keep it in sync with scale
			}
			// if first argument is a string, call silimarly named function
			// this gives flexibility to call functions of the plugin e.g.
			//   - $('.dial').plugin('destroy');
			//   - $('.dial').plugin('render', $('.new-child'));
			if (typeof option === 'string') {
				result = data[option].apply(data, Array.prototype.slice.call(args, 1));
			}
		});

		// To enable plugin returns values
		return result || this;
	};

})(jQuery, window, document);
