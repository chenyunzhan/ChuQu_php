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
	$(".top-navigator > .flash").css({"right":NavItemSelectorDefaultPos+"px"});
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

//	Handle message and notifacation
$("#login > .msg").each((i,e) => {
	$(e).click(() => {
		$(e).removeClass("unread");
		$(e).toggleClass("onclick");
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

// Payments switch
$(".switch > .status").each((i,e) => {
	$(e).click(() => {
		$(".switch > .status").removeClass("SELECTED");
		$(e).addClass("SELECTED");
	});
});
$(".switch > .status").eq(0).click();	// Default Option

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
