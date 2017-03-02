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
	NavItemSelectorDefaultPos = (2-w)*96+15;
    material();
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   fleft, fright, fback;
//  >   FUNCTION        :   SLIDE THE FLASH.
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

// function fleft() {
//     $("#flash").css({"transform":"translateX(0)"});
// }
// function fright() {
//     $("#flash").css({"transform":"translateX(155%)"});
// }
// function fmid() {
// 	$("#flash").css({"transform":"translatex(155%)"});
// }
// function fback() {
//     isTittle1?$("#flash").css({"transform":"translateX(0)"}):$("#flash").css({"transform":"translateX(155%)"});
// }

$(".nav-item").each((i,e) => {
	let selector = $(e).parent().find(".flash");
	$(e).mouseover(() => {
		selector.css({"right":((2-i)*96+15)+"px"});
	});
	$(e).mouseout(() => {
		selector.css({"right":NavItemSelectorDefaultPos+"px"});
	});
});
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

//	Handle selector status toggle
$(".optionBox > .button").each((i,e) => {
	$(e).click(()=>{
		let optionKey = $(e).prev().text();	//Get the string of the option which was selected
		let total = $(e).parent().parent().prev().find(".title-num");

		//	handle selector, add or remove
		if($(e).toggleClass("selected").hasClass("selected")) {
			//	Add option
			total.text((i,e) => e*1+1);
		}
		else {
			//	Remove option
			total.text((i,e) => e*1-1);
		}
		//	handle box opacity
		$(e).parent().toggleClass("boxActive");
	});
});

//	Handle menu toggle
$(".menu > .option > .title").each((i,e) => {
	$(e).click(() => {
		//	Handle select order
		let prevOption = $(e).parent().prev();
		if(prevOption.find(".title-num").text()=="0") {
			alert("您还没有"+ prevOption.find(".title-label").text());
		}
		else {
			$(".menu").find(".option").removeClass("active");
			$(e).parent().addClass("active");
			//	Handle list panel
			$(".main > .itemList > .active").removeClass("active");
			$(".main > .itemList").children().eq(i).toggleClass("active");
			// let pathName = $(e).find(".title-label").text().slice(2);
			// if(i==2) {
			// 	$(".main > .itemList").removeClass("emptyList");
			// }
			// else {
			// 	$(".main > .itemList").addClass("emptyList");
			// 	$(".main > .emptyList > .emptyAlert").text("请选择预订门票"+pathName);
			// }
		}
	});
})

//	Handle click event of items, turn to detail page
$(".list-pool > .pool-item").each((i,e) => {
	$(e).click(() => {
		$(".main > .itemList").find(".active").removeClass("active");
		// $(".itemList > .list-pool").fadeOut(1000, ()=>{
		// });
		$(".itemList > .detail").addClass("active");
		// $(".main > .itemList > .active").hide().fadeIn(1000);

		// $(e).parent().addClass("disable");
		// $(e).parent().parent().find(".detail").addClass("show");
	});
});
//	Handle click events of Detail page
$(".itemList > .detail").find(".cancel").each((i,e) => {
	//After click this cancel button, the detail panel will turn off
	$(e).click(() => {
		$(".main > .itemList").find(".active").removeClass("active");
		// $(".itemList > .detail").fadeOut(1000, ()=>{
				//TODO: add animation between two page
		// });
		$(".itemList > .list-pool").addClass("active");
		// $(".main > .itemList > .active").hide().fadeIn(1000);

		// $(".itemList > .detail").css({"animation":"fadeOut 1s both"});
		// $(".main > .itemList").children().removeClass("active");
		// $(".itemList > .list-pool").addClass("active");
	});
});


$(function() {	//	Datepicker
	$( ".datepicker" ).datepicker({
		inline: true,
		showOtherMonths: true
	});
});

//	Handle number selector, plus and minus
$(".content > .num-selector > .button").each((i,e) => {
	$(e).click(() => {
		// alert(i?1:0);
		$(e).parent().find(".number").text((ii,ee) => {
			ee=ee*1+(i?1:-1);
			if(ee<0)
				ee = 0;
			return ee;
		});
	});
});

//	Handle add and remove event of Spot item
// ------------------------------------------------------
	//	- bind Add event
$(".itemList .add").each((i,e) => {
	let spotItemDom = '<div class="spot-item" id="spotKey-'+i+'"><div class="title note">THE VIEW PLACE ONE</div><div class="title">伦敦威斯敏思特大教堂<span class="note">英国伦敦</span></div><div class="note">威斯敏斯特修道院又名威斯敏斯特教堂, 毗邻国会大厦, 既是英国国教的礼拜堂, 又是历代国王加冕及王室成员举行婚礼的地方.</div><div class="cost">￥80<span style="font-size:14px">.00</span></div><div class="button">移除</div></div>'
	$(e).click(() => {
		//	Make sure the add event won't response again
		if($(".menu > .active > .optionPool").find("#spotKey-"+i).length > 0) {
			alert("已添加!");
		}
		else {
			// alert("none");
			$(".menu > .active > .optionPool").append(spotItemDom);
			//	- bind Remove event
			$(".menu > .option > .optionPool > .spot-item > .button").each((ii,ee) => {
				$(ee).unbind('click');
				$(ee).click(() => {
					$(ee).parent().remove();
				});
			});

		}

		return false;	//Stop Propagation
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
    $("#LoginTurnOff").click(function() {Loginturnoff()});
//    setTimeout(function() {$("#mar-line-1").css({"display":"block"});},1000);
//    setTimeout(function() {$("#mar-box-1").css({"display":"block"});},1100);
//    setTimeout(function() {$("#mar-box-2").css({"display":"block"});},1200);
//    setTimeout(function() {$("#mar-line-4").css({"display":"block"});},1300);
//    setTimeout(function() {$("#mar-box-3").css({"display":"block"});},1400);
//    setTimeout(function() {$("#mar-box-4").css({"display":"block"});},1500);
//    $("#mar-line-1").css({"animation":"fadeInRight 1s both"});
//    $("#mar-box-1").css({"animation":"fadeInRight 1s both"});
//    $("#mar-box-2").css({"animation":"fadeInRight 1s both"});
//    $("#mar-line-4").css({"animation":"fadeInRight 1s both"});
//    $("#mar-box-3").css({"animation":"fadeInRight 1s both"});
//    $("#mar-box-4").css({"animation":"fadeInRight 1s both"});
//    $("#mar-1").css({"animation":"flipInX 1s 1s both"});
//    $("#mar-2").css({"animation":"flipInX 1s 1.1s both"});
//    $("#mar-3").css({"animation":"flipInX 1s 1.3s both"});
//    $("#mar-4").css({"animation":"flipInX 1s 1.7s both"});
//    $("#mar-5").css({"animation":"rotateInUpLeft 1s 1.8s both"});
//    $("#mar-6").css({"animation":"rotateInUpLeft 1s 2s both"});
}
