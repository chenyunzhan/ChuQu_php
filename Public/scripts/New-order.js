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
    let selectedPage = $(".userinfo").find(".infoPool");
    selectedPage.css({"display":"block"});

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

//	Handle datePicker
$(".order > .datePicker").each((i,e) => {
	$(e).datetimepicker({value: 'default', format:"Y-m-d     星期w", timepicker:false, scrollInput: false});//配置并初始化日期选择控件
	$.datetimepicker.setLocale('zh');
});

//	Handle type selector of order items
$(".typeSelector > .typeOption").each((i,e) => {
	$(e).click(() => {
		// Toggle Status
		let currentDom = $(e).parent().find(".typeOption");
		currentDom.removeClass("selected");
		$(e).addClass("selected");


		var pid = $(e).parent().parent().attr("id");
        var type = $(e).text().substr(0,2);

        $.get("/index.php/home/order/getProductByType?id="+pid+"&type="+type, function(data){

            var ticket = $.parseJSON(data);
            var price = ticket[0].price;
            var num = $(e).parent().parent().children().eq(6).children().eq(1).text();
            var totalSpan = $(e).parent().parent().find(".bottomBar").children().eq(1).children().eq(1);
            totalSpan.text(price * num);
        });

	});
});

//	Handle num-selector and the value of total
$(".num-selector > .button").each((i,e) => {
	$(e).click(() => {
		// let total = $(e).eq(0).parent().parent().find(".bottomBar").children().eq(1).children().eq(1);
		// $(e).parent().find(".number").text((ii,ee) => {
		// 	let untPrice = total.text()/ee;
		// 	ee=ee*1+(i%2?1:-1);
		// 	// Update value of total
		// 	if(ee<1)
		// 		ee = 1;
		// 	total.text(untPrice*ee);
		// 	return ee;
		// });


		var count = $(".num-selector > .button").length;

		var index = 0;

		var totalPrice = 0;

		for (var j=0;j<count;j++) {
			if((i-j)%2 == 0) {
				var button = $(".num-selector > .button").eq(j);
                let total = button.eq(0).parent().parent().find(".bottomBar").children().eq(1).children().eq(1);
                button.parent().find(".number").text((ii,ee) => {
                    let untPrice = total.text()/ee;
                	ee=ee*1+(j%2?1:-1);
                	// Update value of total
                	if(ee<1)
                    	ee = 1;
                	total.text(untPrice*ee);
                	index = ee -1 ;
                	totalPrice += untPrice*ee;
                	return ee;
            	});
			}
		}

        $(".bottom-cost > .totalLabel").children().eq(1).text(totalPrice);


		if (i%2==1) {
            $(".optChildBox > .usrOptCell").append('<div id='+ 10000+index +' class="usrOptItem">用户名</div>');
		} else {
			if($(".optChildBox > .usrOptCell").children().length > 2) {
                $(".optChildBox > .usrOptCell").children().last().remove();
            }
		}

		userSwitch();


	});
});

// Handle User information selector
$(".optSelector > .opt").each((i,e) => {
	$(e).click(() => {
		let currentDom = $(e).parent().find(".opt");
		currentDom.removeClass("ENA");
		$(e).addClass("ENA");

	});
});

// Circle Selector
$(".optModel > .selCircle").each((i,e) => {
	$(e).click(() => {
		$(e).children().eq(0).toggleClass("enable");
	});
});

// Pages Toggle
// let currentOrder = 0;
// $(".order > .titleBar").each((i,e) => {
// 	$(e).click(() => {
// 		pagesSwitch(i);
// 	});
// });
// $(".order > .titleBar").eq(0).click();


function refreshUserArray() {
	//保存旧页面
	$lastUser = $(".usrOptCell > .usrOptItemSELECTED");

	var name1CN = $("input[name='name1CN']");
	var name2CN = $("input[name='name2CN']");
	var name1PY = $("input[name='name1PY']");
	var name2PY = $("input[name='name2PY']");
	var IDNumber = $("input[name='IDNumber']");
	var country = $("input[name='country']");
	var IDType = $(".IDselector");
	var sexDiv = $(".optSelector > .ENA");
	var sex = '男';
	if(sexDiv.text()=='♂') {
		sex = '男';
	} else {
		sex = '女';
	}

    if (!checkNull(name1CN,"中文姓") || !checkNull(name2CN,"中文名") || !checkNull(name1PY,"拼音姓") || !checkNull(name2PY,"拼音名") || !checkNull(IDNumber,"身份证号") || !checkNull(country,"国家")) {
        return false;
    }

    if(!checkID_Card(IDNumber.val())) {
        return false;
    }



	var userMap={
		name1CN:name1CN.val(),
		name2CN:name2CN.val(),
		name1PY:name1PY.val(),
		name2PY:name2PY.val(),
		IDNumber:IDNumber.val(),
		country:country.val(),
		IDType:IDType.val(),
		sex:sex
	};

	userArray[$lastUser.attr("id")%10000] = userMap;

	return true;
}


function pagesSwitch(i) {


    //好像不怎么对
    let selectedPage = $(".userinfo").find(".infoPool");
    selectedPage.css({"display":"block"});


    //保存旧页面
	$lastUser = $(".usrOptCell > .usrOptItemSELECTED");

    var name1CN = $("input[name='name1CN']");
    var name2CN = $("input[name='name2CN']");
    var name1PY = $("input[name='name1PY']");
    var name2PY = $("input[name='name2PY']");
    var IDNumber = $("input[name='IDNumber']");
    var country = $("input[name='country']");
    var IDType = $(".IDselector");
    var sexDiv = $(".optSelector > .ENA");
    var sex = '男';
    if(sexDiv.text()=='♂') {
        sex = '男';
    } else {
        sex = '女';
    }


    if (!checkNull(name1CN,"中文姓") || !checkNull(name2CN,"中文名") || !checkNull(name1PY,"拼音姓") || !checkNull(name2PY,"拼音名") || !checkNull(IDNumber,"身份证号") || !checkNull(country,"国家")) {
    	return false;
	}

	if(!checkID_Card(IDNumber.val())) {
		return false;
	}




	var userMap={
        name1CN:name1CN.val(),
        name2CN:name2CN.val(),
        name1PY:name1PY.val(),
        name2PY:name2PY.val(),
        IDNumber:IDNumber.val(),
        country:country.val(),
        IDType:IDType.val(),
        sex:sex
	};

	userArray[$lastUser.attr("id")%10000] = userMap;




	//给新页面赋值
	var selectedUserMap = userArray[i];


	if (selectedUserMap == undefined) {
		selectedUserMap = {
            name1CN:"",
            name2CN:"",
            name1PY:"",
            name2PY:"",
            IDNumber:"",
            country:"",
            IDType:"身份证",
            sex:"男"
		};
	}
	name1CN.val(selectedUserMap.name1CN);
	name2CN.val(selectedUserMap.name2CN);
    name1PY.val(selectedUserMap.name1PY);
    name2PY.val(selectedUserMap.name2PY);
    IDType.val(selectedUserMap.IDType);
    IDNumber.val(selectedUserMap.IDNumber);
    country.val(selectedUserMap.country);


    $(".optSelector > .opt").each((i,e) => {
    	$(e).removeClass("ENA");
		if(selectedUserMap.sex == "男") {
			if(i==0) {
				$(e).addClass("ENA");
			}
		} else {
			if(i==1) {
				$(e).addClass("ENA");
			}
		}
    });

    if(userMap.name2CN.length>0 && userMap.name1CN.length>0) {
        $(".usrOptCell > .usrOptItemSELECTED").text(userMap.name1CN+userMap.name2CN);
    }
    $(".usrOptCell > .usrOptItemSELECTED").removeClass("usrOptItemSELECTED");
    $(".usrOptCell > .usrOptItem").eq(i).addClass("usrOptItemSELECTED");



	// if(i<currentOrder) {
	// 	// Prev order
	// 	oldPage.css({"animation":"fadeOut .3s both"});
	// 	selectedPage.css({"animation":"fadeInDown .3s both"});
	// 	oldPage.css({"display":"none"});
    //
	// } else if(i>currentOrder) {
	// 	// Next order
	// 	oldPage.css({"animation":"fadeOutUp .3s both"});
	// 	selectedPage.css({"animation":"fadeInUp .3s both"});
	// 	oldPage.css({"display":"none"});
	// }
	// currentOrder = i;


}

// $(".usrOptCell > .usrOptItem").each((i,e) => {
// 	$(e).click(() => {
// 		let currentDom = $(e).parent().find(".usrOptItem");
// 		currentDom.removeClass("usrOptItemSELECTED");
// 		$(e).addClass("usrOptItemSELECTED");
// 	});
// });

// User Name selector of userinformation page
// let TotalUsrNum = $(".orders > .order").length;
//
//
// $(".usrOptItem").each((i,e) => {
//
//
//
// 	$(e).click(() => {
// 		pagesSwitch(i%TotalUsrNum);
// 	});
// });


function userSwitch() {
    let TotalUsrNum = $(".usrOptCell > .usrOptItem").length;


    $(".usrOptItem").each((i,e) => {

        $(e).unbind("click");
        $(e).click(() => {
        	pagesSwitch(i%TotalUsrNum);
		});
	});
}

$(".bottom-cost > .postButton").click(() => {

	var isValidata = refreshUserArray();

	if (!isValidata) {
	    return false;
    }

	var productIdArray = new Array();
	var productNameArray = new Array();
	var useDateArray = new Array();
	var numArray = new Array();

	$(".order").each(function(){
		var productName = $(this).children().eq(0).children().eq(0).text();
        var productId = $(this).children().eq(0).attr("id");
        var useDate = $(this).children().eq(4).val();
        var num = $(this).children().eq(6).children().eq(1).text();
		productNameArray.push(productName);
		productIdArray.push(productId);
		useDateArray.push(useDate);
		numArray.push(num);
	});


	var productIds = (productIdArray.join("|"));
	var productNames = (productNameArray.join("|"));
	var useDates = useDateArray.join("|");
	var nums = numArray.join("|");

	var totalPrice = $(".bottom-cost > .totalLabel").children().eq(1).text();

	var users = userArray;


	var contactName = $("input[name='contactName']");
	var contactWebChat = $("input[name='contactWebChat']");
	var contactMobile = $("input[name='contactMobile']");
	var contactMail = $("input[name='contactMail']");
	var guestInfo = $(".optChildBox > .optModel > .userNote");


	if (!checkNull(contactName,"联系人姓名") || !checkNull(contactWebChat,"联系人微信号") || !checkNull(contactMobile,"联系人电话") || !checkNull(contactMail,"联系人邮件")) {
	    return false;
    }

    if (!checkMail(contactMail.val()) || !checkMobile(contactMobile.val())) {
        return false;
    }

	$.post("/home/order/doAddOrder",{
        users:users,
		productIds:productIds,
		productNames:productNames,
		useDates:useDates,
		nums:nums,
		totalPrice:totalPrice,
        contactName:contactName.val(),
        contactWebChat:contactWebChat.val(),
        contactMobile:contactMobile.val(),
        contactMail:contactMail.val(),
        guestInfo:guestInfo.val()
	}, function(data){


			if(data.status=="ok")
			{
				window.location.href = data.url;
			}

			$("#errM").html(data.info);
		}, "json");
});

$(".optModel > .button").click(() => {
	var name1CN = $("input[name='name1CN']");
	var name2CN = $("input[name='name2CN']");
	var name1PY = $("input[name='name1PY']");
	var name2PY = $("input[name='name2PY']");
	var IDNumber = $("input[name='IDNumber']");
	var country = $("input[name='country']");
	var IDType = $(".IDselector");
	var sexDiv = $(".optSelector > .ENA");
	var sex = '男';
	if(sexDiv.text()=='♂') {
		sex = '男';
	} else {
		sex = '女';
	}


	$.post("/home/order/doAddTraveller",{name1CN:name1CN.val(), name2CN:name2CN.val(), name1PY:name1PY.val(), name2PY:name2PY.val(), IDNumber:IDNumber.val(), country:country.val(), IDType:IDType.val(), sex:sex}, function(data){


		alert('aaaaaaaaaaaa');

		if(data.status=="ok")
        {
			window.location.href = data.url;
        }
		$("#errM").html(data.info);
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

















//检查对象是否为空，obj-对象，vMc-提示信息
function checkNull(obj,vline){
    //判断输入框是否为空，为空时弹出提示框

    var v=obj.val();
    v=v.replace(/(^\s*)|(\s*$)/g,"");///去除空格的方法
    // alert(" 输入值为空！"+v.length);
    if (v.length==0){
        alert(vline+" 输入值为空！");
        return false;
    }
    return true;
}
//关闭窗口
function closewin(){
    //关闭窗体无网页提示关闭信息
    window.opener = "";
    window.close();
}
//检查输入字符串是否为数字
//参数说明：数据项，输入的对象
//返回值：1-是数字,0-非数字
function isNum(vid,obj){
    re=new RegExp("[^0-9]");
    var s;
    var i_value=document.getElementById(obj).value;
    if(s=i_value.match(re)){
        alert("'"+vid+"' 中含有非法字符 '"+s+"'！");
        return 0;
    }
    return 1;
}
//强制把大写转换成小写
function toLowCase(){
    //  alert("ss");
    if(event.keyCode>=65 && event.keyCode<=90)
        event.keyCode=event.keyCode+32;
}
//手机号码校验，长度为11位数字。
function checkMobile(str) {
    RegularExp=/^[0-9]{11}$/
    if (RegularExp.test(str)) {
        return true;
    }
    else {
        alert("手机号格式不正确！应该为11位长度的数字！");
        return false;
    }
}
//电子邮件校验
function checkMail(str)
{

    RegularExp = /[a-z0-9]*@[a-z0-9]*\.[a-z0-9]+/gi
    if (RegularExp.test(str))
    {
        return true;
    }else{
        alert("电子信箱格式不对！");
        return false;
    }
}
//电话号码校验
function checkTel(str)
{
    //
    var Str=document.getElementById(str).value;
    RegularExp = /^((([0-9]{4}|[0-9]{3})-)|(([0−9]4|[0−9]3)))*([0-9]{7}|[0-9]{8})$|^[0-9]{11}$/
    if (RegularExp.test(Str))
    {
        //alert("电话号码格式对");
        return true;
    }else{
        alert("电话号码格式不对");
        return false;
    }
}
//身份证号码校验
function checkID_Card(str)
{
    RegularExp = /^[0-9]{17}[0-9A-Za-z]{1}$|^[0-9]{14}[0-9A-Za-z]{1}$/
    if (RegularExp.test(str))
    {
        return true;
    }else{
        alert("身份证号格式不对！");
        return false;
    }
}
//校验必须是数字或者字母
function checkNumStr(str)
{
    var Str=document.getElementById(str).value;
    var str1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var i=0;
    for (i=0; i<Str.length;i++) {
        var onechar=Str.substring(i,i+1);
        //alert(onechar);
        if (!(str1.indexOf(onechar)!= -1)){
            alert("必须是数字[0-9]、字母[a-z、A-Z]或组合!");
            return false;
        }
    }
    return true;
}
//检验数字是否正确（可以为负数）
//参数1：sourceStr 数字
//int_num 整数位数
//point_num 小数位数
//alertStr 弹出的提示信息
function JudgeDicimalFormat(str ,int_num,point_num,alertStr) {
    var sourceStr=document.getElementById(str).value;
    RegularExp_tmp="/^[+,-]{0,1}[0-9]{0,"+int_num+"}[.]{1}[0-9]{0,"+point_num+"}$|^[+,-]{0,1}[0-9]{0,"+int_num+"}$/";
    RegularExp=eval(RegularExp_tmp);
    if (RegularExp.test(sourceStr)) {
        return true;
    }
    else {
        alert(alertStr+"格式不正确！最长为"+int_num+"位整数位，"+point_num+"位小数位的数字！");
        //sourceStr.select();
        return false;
    }
}
//将小数四舍五入
//decimalNum 为：保留小数点后几位
function roundFloat(str, decimalNum) {
    var sourceValue=document.getElementById(str).value;
    if (isNaN(sourceValue)) {
        alert("sourceValue非法字符 ");
        document.getElementById(str).value="";
        return sourceValue;
    }
    var multiplyValue=Math.pow(10,parseInt(decimalNum));
    document.getElementById(str).value=(Math.round(multiplyValue*sourceValue))/multiplyValue;
    //return (Math.round(multiplyValue*sourceValue))/multiplyValue;
}
