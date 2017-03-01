//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   loading;
//  >   FUNCTION        :   GET INFORMATION OF BROWSER,
//                          AND SET THE LOADING PAGE.
//  >   CALL            :   material
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function loading(w) {
    var MarginTop=window.innerHeight/2-220;
    $("#LoginCanvas").css({"margin-top":MarginTop+"px"});
    Location=w;
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
var invaliCountry = new Array("a3","a4","a5","a6","a7","b2","b3","b4","e1","k1","l4","m2","m3","m4","s1","s2","s3","s4","s5","t2","w1");

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
$(function() {
    $("#LoginTurnOff").click(function() {Loginturnoff()});
	//$("#aim-del-a1").css({"border":"1px dotted #AAAAAA"});
	highlightInvalidCountry();
	//获取目的地
	$("#goon").click(function(){sendCountryIds()});
});

function highlightInvalidCountry(){
	$("div[id^='aim-del-']").each(function(){
		var id =$(this).attr("id").substr(8);
		if(in_array(id,invaliCountry)!=-1){
			$("#aim-del-"+id).parent().css({"background-color":"#9E8875"});
			$("#aim-del-"+id).text("-");
			$("#aim-del-"+id).parent().prev().css({"background-color":"#9E8875"});
			//$("#aim-del-"+id).css({"border":"dotted #D8D8D8"});
			//$("#aim-del-"+id).parent().prev().css({"border":"1px dotted #D8D8D8"});
		}
	});
}
function in_array(str,array){
	for(var i in array){
		if(array[i] == str)  return i;
	}
	return -1;
}
h=1;
var mycars=new Array(7);
function slide2last() {
    switch (h) {
        case 1:
            $("#line-box-page-1").css({"display":"none"});
            $("#line-box-page-3").css({"display":"block", "animation":"fadeInLeft .3s both"});
            h=3;
            break;
        case 2:
            $("#line-box-page-2").css({"display":"none"});
            $("#line-box-page-1").css({"display":"block", "animation":"fadeInLeft .3s both"});
            h=1;
            break;
        case 3:
            $("#line-box-page-3").css({"display":"none"});
            $("#line-box-page-2").css({"display":"block", "animation":"fadeInLeft .3s both"});
            h=2;
            break;
    } 
    slidepage(h);
}


function slide2next() {
    switch (h) {
        case 1:
            $("#line-box-page-1").css({"display":"none"});
            $("#line-box-page-2").css({"display":"block", "animation":"fadeInRight .3s both"});
            h=2;
            break;
        case 2:
            $("#line-box-page-2").css({"display":"none"});
            $("#line-box-page-3").css({"display":"block", "animation":"fadeInRight .3s both"});
            h=3;
            break;
        case 3:
            $("#line-box-page-3").css({"display":"none"});
            $("#line-box-page-1").css({"display":"block", "animation":"fadeInRight .3s both"});
            h=1;
            break;
    } 
    slidepage(h);
}
function slidepage(n) {
    switch (n) {
        case 1:
            $("#page-switch-1").css({"background-color":"#FFFFFF"});
            $("#page-switch-2").css({"background-color":"rgba(255, 255, 255, 0.3)"});
            $("#page-switch-3").css({"background-color":"rgba(255, 255, 255, 0.3)"});
            break;
        case 2:
            $("#page-switch-2").css({"background-color":"#FFFFFF"});
            $("#page-switch-1").css({"background-color":"rgba(255, 255, 255, 0.3)"});
            $("#page-switch-3").css({"background-color":"rgba(255, 255, 255, 0.3)"});
            break;
        case 3:
            $("#page-switch-3").css({"background-color":"#FFFFFF"});
            $("#page-switch-1").css({"background-color":"rgba(255, 255, 255, 0.3)"});
            $("#page-switch-2").css({"background-color":"rgba(255, 255, 255, 0.3)"});
            break;            
    }
}
Stack=0;
StackPointer=1;

function push(l) {
    Stack=StackPointer-1;
    for (var coun=0; coun<8;coun++) {
        if (l==mycars[coun]) {
			//alert(l);
            $("#aim-del"+l).click(deleteLo(0,l));
            return 0;
        }
    }
	if(in_array(l,invaliCountry)!=-1){
		return false;
	}
	
    if (StackPointer==9) {return 0;}    
    $("#img-"+StackPointer).css({"display":"block"});
    $("#img-"+StackPointer).css({"background-image":"url(http://"+CQHOST+"Public/img/"+l+".png)"});
    $("#img-"+StackPointer).css({"animation":"bounceIn .6s"});
    
	displayloc(l);

    delrotate(l);
    StackPointer=StackPointer+1;
    
    mycars[Stack]=l;
}

function displayloc(n) {
    var tagbox=document.getElementById("imgtag-"+StackPointer);
    var flag = 0;
	switch (n) {
        case 'a1':
            tagbox.innerHTML="奥地利";
            break;
        case 'a2':
            tagbox.innerHTML="安道尔";
            break;
        case 'a3':
            tagbox.innerHTML="埃及";
            break;
        case 'a4':
            tagbox.innerHTML="阿尔及利亚";
            break;
        case 'a5':
            tagbox.innerHTML="阿尔巴尼亚";
            break;
        case 'a6':
            tagbox.innerHTML="爱沙尼亚";
            break;
        case 'a7':
            tagbox.innerHTML="爱尔兰";
            break;
        case 'b1':
            tagbox.innerHTML="比利时";
            break;
        case 'b2':
            tagbox.innerHTML="波兰";
            break;
        case 'b3':
            tagbox.innerHTML="保加利亚";
            break;
        case 'b4':
            tagbox.innerHTML="冰岛";
            break;
        case 'd1':
            tagbox.innerHTML="德国";
            break;
        case 'd2':
            tagbox.innerHTML="丹麦";
            break;
        case 'e1':
            tagbox.innerHTML="俄罗斯";
            break;
        case 'f1':
            tagbox.innerHTML="法国";
            break;
        case 'f2':
            tagbox.innerHTML="芬兰";
            break;
        case 'f3':
            tagbox.innerHTML="梵蒂冈";
            break;
        case 'h1':
            tagbox.innerHTML="荷兰";
            break;
        case 'j1':
            tagbox.innerHTML="捷克";
            break;
        case 'k1':
            tagbox.innerHTML="克罗地亚";
            break;
        case 'l1':
            tagbox.innerHTML="卢森堡";
            break;
        case 'l2':
            tagbox.innerHTML="罗马尼亚";
            break;
        case 'l3':
            tagbox.innerHTML="列支敦士登";
            break;
        case 'l4':
            tagbox.innerHTML="拉脱维亚";
            break;
        case 'm1':
            tagbox.innerHTML="摩纳哥";
            break;
        case 'm2':
            tagbox.innerHTML="摩洛哥";
            break;
        case 'm3':
            tagbox.innerHTML="马其顿";
            break;
        case 'm4':
            tagbox.innerHTML="马尔他";
            break;
        case 'n1':
            tagbox.innerHTML="挪威";
            break;
        case 'p1':
            tagbox.innerHTML="葡萄牙";
            break;
        case 'r1':
            tagbox.innerHTML="瑞典";
            break;
        case 'r2':
            tagbox.innerHTML="瑞士";
            break;
        case 's1':
            tagbox.innerHTML="塞尔维亚";
            break;
        case 's2':
            tagbox.innerHTML="斯洛伐克";
            break;
        case 's3':
            tagbox.innerHTML="斯洛文尼亚";
            break;
        case 's4':
            tagbox.innerHTML="塞普洛斯";
            break;
        case 's5':
            tagbox.innerHTML="圣马力诺";
            break;
        case 't1':
            tagbox.innerHTML="土耳其";
            break;
        case 't2':
            tagbox.innerHTML="突尼斯";
            break;
        case 'w1':
            tagbox.innerHTML="乌克兰";
            break;
        case 'x1':
            tagbox.innerHTML="西班牙";
            break;
        case 'x2':
            tagbox.innerHTML="希腊";
            break;
        case 'x3':
            tagbox.innerHTML="匈牙利";
            break;
        case 'y1':
            tagbox.innerHTML="英国";
            break;
        case 'y2':
            tagbox.innerHTML="意大利";
            break;
        default:
            tagbox.innerHTML=null;
    }
    tagbox.style.display="block";
}

function displaydel(n) {
    var c=n-1;
    if (mycars[c]==undefined) {return 0;}    
    $("#del-"+n).css({"display":"block","animation":"fadeIn .5s"});
}
function undisplaydel(n) {
    var c=n-1;
    if (mycars[c]==undefined) {return 0;}
    $("#del-"+n).css({"animation":"fadeOut 1s both"});
}

function delrotate(n) {
    $("#aim-del-"+n).css({"animation":"aimdelrotate .4s ease forwards"});
}
function delunrotate(n) {
    $("#aim-del-"+n).css({"animation":"aimdelunrotate .4s ease forwards"});
}

function deleteLo(leftpath,n) {
    if (leftpath) {pathOfLeft(n)}
    else {pathOfRight(n);}
}
function pathOfLeft(n) {    
    $("#img-"+n).css({"animation":"bouceOut .1s forwards"});
    $("#del-"+n).css({"display":"none"});
    var n=n-1;
    var backupn=n;
    delunrotate(mycars[n]);
    
    for (var times=7-n;times>=0;times--) {
        var lastpic=backupn+1;
        mycars[backupn]=mycars[lastpic];
        var backupn=backupn+1;
        if (times==1) {mycars[lastpic]=undefined;}
    }
    StackPointer=1;
    for (var part=0;part<8;part++) {
        var l=mycars[part];
        repush(l);
    }
//    setTimeout("afterdelay()",100);
    
//document.getElementById("footer").innerHTML=mycars[0]+","+mycars[1]+","+mycars[2]+","+mycars[3]+","+mycars[4]+","+mycars[5]+","+mycars[6]+","+mycars[7];

}
function pathOfRight(c) {
	//alert(c);
    for (var p=1;p<9;p++) {
        var mp=p-1;
        if (c==mycars[mp]) {deleteLo(1,p);}
    }

}

function repush(l) {
    var box=document.getElementById("img-"+StackPointer);
    if (l==undefined) {
        $("#img-"+StackPointer).css({"background-image":""});
        displayloc(null);
        $("#img-"+StackPointer).css({"animation":"bounceOut .6s"});
        return 0;
    }
    else {
        $("#img-"+StackPointer).css({"background-image":"url(http://"+CQHOST+"Public/img/"+l+".png)"});
        $("#img-"+StackPointer).css({"animation":"fadeIn .1s"});
        displayloc(l);
        delrotate(l);
        StackPointer=StackPointer+1;        
    }
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
    
    $("#main").css({"animation":"fadeIn .6s .6s both"});
    $("#table-left-title").css({"animation":"flipInX 1s .7s both"});
    $("#goon").css({"animation":"bounceIn .6s 1.2s both"});
    
}

//发送选取的国家id到服务器
function sendCountryIds(){
	var countryId="";
	for(var i=1;i<9;i++){	
		var des_id =$("#imgtag-"+i).text();
		
		switch (des_id) {
			case '奥地利':
				des_id="19";
				break;
			case '安道尔':
				des_id="41";
				break;
			case '埃及':
				des_id="45";//1
				break;
			case '阿尔及利亚':
				des_id="48";//2
				break;
			case '阿尔巴尼亚':
				des_id="54";//3
				break;
			case '爱沙尼亚':
				des_id="53";//4
				break;
			case '爱尔兰':
				des_id="52";//5
				break;
			case '比利时':
				des_id="13";
				break;
			case '波兰':
				des_id="27";
				break;
			case '保加利亚':
				des_id="43";//6
				break;
			case '冰岛':
				des_id="62";//7
				break;
			case '德国':
				des_id="8";
				break;
			case '丹麦':
				des_id="26";
				break;
			case '俄罗斯':
				des_id="44";//8
				break;
			case '法国':
				des_id="9";
				break;
			case '芬兰':
				des_id="17";
				break;
			case '梵蒂冈':
				des_id="30";
				break;
			case '荷兰':
				des_id="11";
				break;
			case '捷克':
				des_id="21";
				break;
			case '克罗地亚':
				des_id="53";//9
				break;
			case '卢森堡':
				des_id="14";
				break;
			case '罗马尼亚':
				des_id="28";
				break;
			case '列支敦士登':
				des_id="35";
				break;
			case '拉脱维亚':
				des_id="55";//10
				break;
			case '摩纳哥':
				des_id="40";
				break;
			case '摩洛哥':
				des_id="47";//11
				break;
			case '马其顿':
				des_id="56";//12
				break;
			case '马尔他':
				des_id="60";//13
				break;
			case '挪威':
				des_id="16";
				break;
			case '葡萄牙':
				des_id="18";
				break;
			case '瑞典':
				des_id="20";
				break;
			case '瑞士':
				des_id="22";
				break;
			case '塞尔维亚':
				des_id="49";//14
				break;
			case '斯洛伐克':
				des_id="51";//15
				break;
			case '斯洛文尼亚':
				des_id="57";//16
				break;
			case '塞普洛斯':
				des_id="59";//17
				break;
			case '圣马力诺':
				des_id="61";//18
				break;
			case '土耳其':
				des_id="29";
				break;
			case '突尼斯':
				des_id="50";//19
				break;
			case '乌克兰':
				des_id="46";//20
				break;
			case '西班牙':
				des_id="15";
				break;
			case '希腊':
				des_id="23";
				break;
			case '匈牙利':
				des_id="24";
				break;
			case '英国':
				des_id="10";
				break;
			case '意大利':
				des_id="12";
				break;
		}
		
		if(!des_id) break;
		countryId=countryId+","+des_id;

	}
	//alert(countryId);
	$.ajax({
        url: "http://"+CQHOST+"index.php/Home/Route/destination",
        type:"POST",
		data:{"countryId":countryId},
		cache: false,
		async:false,
        //dataType: "json",
        success: function(msg) {
			;
        }
    });
}