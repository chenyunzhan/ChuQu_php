String.prototype.visualLength = function() 
{ 
var ruler = $("#ruler"); 
ruler.text(this); 
return ruler[0].offsetWidth; 
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   loading;
//  >   FUNCTION        :   GET INFORMATION OF BROWSER,
//                          AND SET THE LOADING PAGE.
//  >   CALL            :   material
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=

function loading(w) {
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
var dashIMG = [],
    dashIMG_e = [],
    dimg1 = new Image(),
    dimg2 = new Image(),
    dimg3 = new Image(),
    dimg1e = new Image(),
    dimg2e = new Image(),
    dimg3e = new Image();
dimg1.src = 'http://www.chuqv.com/Public/img/schedule/dashboard/dash1.png';
dimg1.width = 40;
dimg1.height = 37;
dimg2.src = 'http://www.chuqv.com/Public/img/schedule/dashboard/dash2.png';
dimg2.width = 35;
dimg2.height = 37;
dimg3.src = 'http://www.chuqv.com/Public/img/schedule/dashboard/dash3.png';
dimg3.width = 37;
dimg3.height = 37;
dashIMG.push(dimg1);
dashIMG.push(dimg2);
dashIMG.push(dimg3);

dimg1e.src = 'http://www.chuqv.com/Public/img/schedule/dashboard/dash1_enable.png';
dimg1e.width = 40;
dimg1e.height = 37;
dimg2e.src = 'http://www.chuqv.com/Public/img/schedule/dashboard/dash2_enable.png';
dimg2e.width = 35;
dimg2e.height = 37;
dimg3e.src = 'http://www.chuqv.com/Public/img/schedule/dashboard/dash3_enable.png';
dimg3e.width = 37;
dimg3e.height = 37;
dashIMG_e.push(dimg1e);
dashIMG_e.push(dimg2e);
dashIMG_e.push(dimg3e);



;(function($){
    var location = $(".main-right-detail"),//定义细节条插入的区域
        default_options = {//默认设置
            imgName: 'default',//默认图片名称
            imgType: '.png',//默认图片格式
            title: "标题",//默认标题                
            like: '0',//默认喜欢人数
            answer: '0',//默认评论人数
            userName: "",
            cost: '0',//默认花费价格
            pNum: '0',//默认人数
            date: '2000-01-01－2000-01-02',//默认日期
//            tType: '0',//默认旅游类型选项
            tType: [0,0,0],
        };
    $.fn.userDetailBar = function(opt) {
        var item = this.index();
        var options = ($.isPlainObject(opt) || !opt) ? $.extend(default_options, opt) : $.extend(default_options),//定义对象参数
            bar = new UserDetail_path_obj(options.imgName, options.imgType, options.title, options.like, options.answer, options.userName, options.cost, options.pNum, options.date, options.tType, this, item, options.routeId);
        support_Detail_global[item].push(bar);
        
    };
})(jQuery);//                         闭包

var support_Detail_global = [[],[],[],[],[]],
    support_Navigation_Label = ["新增的订单 ", "已完成订单 ", "待确认订单 ", "未完成订单 "]
//var userDetail_path = [];//对象数组
//Detail Bar 对象构造函数
function UserDetail_path_obj(imgName, imgType, title, like, answer, userName, cost, pNum, initDate, tType, dom, ind, routeId) {
    this.imgName = imgName;         //图片名称
    this.imgType = imgType;         //后缀
    this.title = title;             //标题
    this.like = like;               //被喜欢的次数
    this.answer = answer;           //被评论的次数
    this.userName = userName;
    this.cost = cost;               //花费的价格
    this.pNum = pNum;               //人数
    this.initDate = initDate;       //日期
//    this.tType = tType;             //旅游类型
    this.include = tType;
    this.dom = dom;
    this.ind = ind;
    this.routeId = routeId;
    var Path = $(".main-right-detail-list-item").eq(this.ind);
    this.Gethtmlcode = function() {

        return '<div class="main-right-detail-bar"><div class="main-right-detail-bar-image" id="bar-img-rid-'+this.routeId+'"><div class="main-right-detail-bar-image-title">'+this.title+'</div><div class="main-right-detail-bar-image-lable">'+this.answer+'</div><div class="main-right-detail-bar-image-icon-answer"></div><div class="main-right-detail-bar-image-lable">'+this.like+'</div><div class="main-right-detail-bar-image-icon-like"></div></div><div class="main-right-detail-bar-costBar"><div class="main-right-detail-bar-costBar-lableNum">'+this.userName+'</div><div class="main-right-detail-bar-costBar-lable"></div><div class="main-right-detail-bar-costBar-button"><div class="main-right-detail-bar-costBar-button-icon"></div><div class="main-right-detail-bar-costBar-button-lable">查看报价</div></div></div><div class="main-right-detail-bar-line"></div><div class="main-right-detail-bar-detailBar"><div class="main-right-detail-bar-detailBar-icon-PNum"></div><div class="main-right-detail-bar-detailBar-option">人数</div><div class="main-right-detail-bar-detailBar-lable">'+this.pNum+'人</div><div class="main-right-detail-bar-detailBar-icon-Date"></div><div class="main-right-detail-bar-detailBar-option">日期</div><div class="main-right-detail-bar-detailBar-lable">'+this.initDate+'</div></div><div class="main-right-detail-bar-detailBar"><div class="main-right-detail-bar-detailBar-supportIcon-include"></div><div class="main-right-detail-bar-detailBar-option">包含</div><div class="main-right-detail-bar-detailBar-lable-includeBar">交通 '+this.include[0]+'</div><div class="main-right-detail-bar-detailBar-lable-includeBar">酒店 '+this.include[1]+'</div><div class="main-right-detail-bar-detailBar-lable-includeBar">景点 '+this.include[2]+'</div></div><div class="main-right-detail-bar-detailBar"><div class="main-right-detail-bar-detailBar-supportIcon-cost"></div><div class="main-right-detail-bar-detailBar-option">报价</div><div class="main-right-detail-bar-detailBar-label-rmb">￥</div><div class="main-right-detail-bar-detailBar-label-configLable">'+this.cost+'</div></div></div>';
                                    
    };
    this.Init = function(i) {
        var bar = Path.find(".main-right-detail-bar").eq(i);//获取当前操作的DOM
        bar.find(".main-right-detail-bar-image").css({"background-image":"url(http://www.chuqv.com/Public/img/schedule/detail/"+this.imgName+this.imgType+")", "cursor" : "pointer"});//初始化图像 
		// bar.find(".main-right-detail-bar-costBar-button").css("float", "right");
		// addd 跳转到供应商竞价页面
		bar.find(".main-right-detail-bar-image").each(function(i, e){
			$(e).click(function(){
				$(".main-left-bar").eq(1).click();
				globalRouteId = $(e).attr("id").slice(12);
				//alert(globalRouteId);
				// 更改竞价页面的标题
				$(".right-bar-post-title").text($(e).children(".main-right-detail-bar-image-title").text());
				//$
			});
		});
    }
    this.Display = function(i) {
        this.dom.append(this.Gethtmlcode());//显示当前对象
//        $(".main-right-detail").append(this.Gethtmlcode());//显示当前对象
        this.Init(i);//调用当前对象的初始化函数
        if ((i+1)%2 == 0) {
            this.dom.append("<div class='stackLine'></div>")//每行末尾加一个占位块，防止细节展开时产生行间布局错乱
        }
    }
    this.Refresh = function() {
        this.dom.empty();//清空
        $.each(support_Detail_global[this.ind], function(i,e) {e.Display(i)});//加载所有对象
        this.Event();//调用对象的事件函数绑定事件
        $.each(support_Navigation_Label, function(i,e) {
            $(".main-right-detail-navigation-bar").eq(i).text(e+support_Detail_global[i].length)
        });
    }
    this.Event = function() {
//        展开关闭
        Path.find(".main-right-detail-bar-costBar-button").each(function(i,e) {
            $(e).click(function() {
                var bar = $(e).parent().parent();
                if (bar.height() == 115) {
                    bar.css({"max-height":"235px"});//展开细节
                    $(e).children().eq(1).text("收起报价");
                }
                else {bar.css({"max-height":"115px"});$(e).children().eq(1).text("查看报价")}//关闭细节
            })
        });
		
        
		
		
    }
}




var cxtA = [];
var pageFlag;
var dashFlag;
var list_itemFlag;
var costData = {
    a: 0,
    b: 7300,
    c: 4502,
};

function listItem_obj(opt) {
    this.isLeft = opt.isLeft;
    this.zh = opt.zh;
    this.en = opt.en;
    this.money = opt.money?opt.money:0;
	
	this.typeId = opt.en;
	var index = this.typeId.indexOf(" ");
	if(index != -1) this.typeId = this.typeId.slice(0, index);
		
    this.button = this.isLeft?'<div class="right-bar-post-list-item-button button_subtract"></div><div class="right-bar-post-list-item-box">￥<input class="right-bar-post-list-item-box-input" id = "'+this.typeId+'" type="text" value="'+this.money+'"></div>':'<div class="right-bar-post-list-item-button button_add">';
'<div class="right-bar-post-list-item-button button_subtract"></div><div class="right-bar-post-list-item-box">￥<input class="right-bar-post-list-item-box-input" type="text" value="'+this.money+'"></div>';
    
    this.getHtmlCode = function() {
        return '<div class="right-bar-post-list-item"><div class="right-bar-post-list-item-label label_zh">'+this.zh+'</div><div class="right-bar-post-list-item-label label_en">'+this.en+'</div>'+this.button+'</div>';
    };
    this.Display = function() {
        var dom = this.isLeft?$(".right-bar-post-list-left"):$(".right-bar-post-list-right");
        dom.append(this.getHtmlCode());
        this.event();
        refreshCost();
        var line = $(".right-bar-post-list-line");
        prevHei = line.prev().height();
        nextHei = line.next().height();
        hei = prevHei>nextHei?prevHei:nextHei;
        line.height(hei>320?hei:320);
    };
    this.event = function() {
        $(".right-bar-post-list-item-box-input").each(function(i,e) {
            $(e).unbind();
            $(e).val()? $(e).width($(e).val().visualLength()):$(e).width("填写新增项目".visualLength());
            $(e).bind('input propertychange', function() {
                var text = $(e).val();
                var len = text.visualLength();
                $(e).width(len);
                refreshCost();
            })
        });
        $(".button_subtract").each(function(i,e) {
            $(e).unbind();
            $(e).click(function() {
                var Newitem = new listItem_obj({en: $(e).prev().text(), zh: $(e).prev().prev().text()})
                $(e).parent().remove().call(refreshCost());
            });            
        });
        
        $(".button_add").each(function(i,e) {
            $(e).unbind();
            $(e).click(function() {
                var Newitem = new listItem_obj({isLeft: 1, en: $(e).prev().text(), zh: $(e).prev().prev().text()})
                $(e).parent().remove();
            });
        });
        
    }
    this.Display();
}

// addd
var globalRouteId = 0;
// 供应商编号
var pid = $("#main-right-userInfor-right-pid").text();
// 总价 gggg
var globalTotalCost = 0;

$(function() {
//    fright();
	$.post("http://www.chuqv.com/index.php/Home/Provider/getOrdersData", {"pid": pid}, function(data){
		// console.log(data);
		var routeId = 0;
		for(var i in data){
			
			if(i == "NEW"){
				//alert("New");
				// 新订单
				for(var id in data[i]){
					var rid = data[i][id].id;
					var sightNum = data[i][id].sightNum;
					var transNum = data[i][id].transNum;
					var routeTitle = data[i][id].routeTitle;
					var pNum = data[i][id].pNum;
					var date = data[i][id].date;
					
					$(".main-right-detail-list-item").eq(0).userDetailBar({tType: [transNum, transNum, sightNum], imgName: '1', title: routeTitle, like: '0', answer: '0', cost: '0', pNum: pNum, date: date, routeId: rid});
				}
				
				support_Detail_global[0][0].Refresh();
			}else if(i == "DONE"){
				// 已完成
				for(var id in data[i]){
					var sightNum = data[i][id].sightNum;
					var transNum = data[i][id].transNum;
					var routeTitle = data[i][id].routeTitle;
					var pNum = data[i][id].pNum;
					var date = data[i][id].date;
					//var userName = data[i][id].userName;
					
					$(".main-right-detail-list-item").eq(1).userDetailBar({tType: [transNum, transNum, sightNum], imgName: '1', title: routeTitle, like: '0', answer: '0', cost: '0', pNum: pNum, date: date, routeId: id});
				}
				
				support_Detail_global[1][0].Refresh();
			}else if(i == "TBC"){
				// 待确认
				for(var id in data[i]){
					var sightNum = data[i][id].sightNum;
					var transNum = data[i][id].transNum;
					var routeTitle = data[i][id].routeTitle;
					var pNum = data[i][id].pNum;
					var date = data[i][id].date;
					
					$(".main-right-detail-list-item").eq(2).userDetailBar({tType: [transNum, transNum, sightNum], imgName: '1', title: routeTitle, like: '0', answer: '0', cost: '0', pNum: pNum, date: date, routeId: id});
				}
				
				support_Detail_global[2][0].Refresh();
			}else if(i == "UNFIN"){
				// 未完成
				for(var id in data[i]){
					var sightNum = data[i][id].sightNum;
					var transNum = data[i][id].transNum;
					var routeTitle = data[i][id].routeTitle;
					var pNum = data[i][id].pNum;
					var date = data[i][id].date;
					
					$(".main-right-detail-list-item").eq(3).userDetailBar({tType: [transNum, transNum, sightNum], imgName: '1', title: routeTitle, like: '0', answer: '0', cost: '0', pNum: pNum, date: date, routeId: id});
				}
				
				support_Detail_global[3][0].Refresh();
			}
		}
	});
	
    
    
	
	
    var itemtest = new listItem_obj({isLeft: 1,zh: '交通', en: 'Traffic', money: 0});
    var itemtest = new listItem_obj({isLeft: 1,zh: '车导', en: 'Guide', money: 0});
    var itemtest = new listItem_obj({isLeft: 1,zh: '景点门票', en: 'Attractions tickets', money: 0});
    var itemtest = new listItem_obj({isLeft: 1,zh: '旅馆酒店', en: 'Hotel', money: 0});
    var itemtest = new listItem_obj({isLeft: 1,zh: '热门赛事', en: 'Match', money: 0});
    var itemtest = new listItem_obj({zh: '保险', en: 'Insurance'});
    var itemtest = new listItem_obj({zh: '商品增值税', en: 'Value-added tax'});
    // Traffic Guide AttractionsTickets Hotel Match Insurance Value-added tax

    
    
    
    
    $(".right-bar-post-list-item-title-add").each(function(i,e) {
        $(e).unbind();
        $(e).click(function() {
            var label = $(e).next().children().eq(1).val();
            if(label) var newitem = new listItem_obj({isLeft: 1, zh: label});
            else alert("请输入项目名");
        });
    });
    
    
    
    
    $(".main-left-bar").each(function(i,e) {
        $(e).click(function() {
            $(".main-left-bar").css({"background-color":""})
            $(e).css({"background-color":"rgba(255, 255, 255, 0.1)"});
            SelectPage(i);
            pageFlag = i;
        });
    });
    $(".main-right-detail-navigation-bar").each(function(i,e) {
        $(e).click(function() {
            $(".main-right-detail-navigation-bar").css({"background-color":""})
            $(e).css({"background-color":"rgba(255, 255, 255, 0.2)"});
            SelectItem(i);
            list_itemFlag = i;
        });
    });
    $(".main-left-bar").eq(0).click();//初始化页面路由 左侧
    $(".main-right-detail-navigation-bar").eq(0).click();
    $(".right-bar").eq(0).css({"background-color":"rgba(225, 225, 225, 0.1)"});//我的行程分页背景
    
	
	// addd 供应商发布报价 right-bar-post-costBar-postButton
	$(".right-bar-post-costBar-postButton").click(function(){
		var trafficCost = 0;
		var	trafficState = 0;
			
		var	ticketsCost = 0;
		var	ticketsState = 0;
			
		var	guideCost = 0;
		var	guideState = 0;
			
		var	hotelCost = 0;
		var	hotelState = 0;
			
		var	matchCost = 0;
		var	matchState = 0;
			
		var	insuranceCost = 0;
		var	insuranceState = 0;
			
		var	taxCost = 0;
		var	taxState = 0;
		//Traffic Guide Attractions tickets Hotel Match Insurance Value-added tax
		if($("#Traffic").length){
			trafficCost = $("#Traffic").val();
			trafficState = 1;
		}
		if($("#Guide").length){
			ticketsCost = $("#Guide").val();
			ticketsState = 1;
		}
		if($("#Attractions").length){
			guideCost = $("#Attractions").val();
			guideState = 1;
		}
		if($("#Hotel").length){
			hotelCost = $("#Hotel").val();
			hotelState = 1;
		}
		if($("#Match").length){
			matchCost = $("#Match").val();
			matchState = 1;
		}
		if($("#Insurance").length){
			insuranceCost = $("#Insurance").val();
			insuranceState = 1;
		}
		if($("#Value-added").length){
			taxCost = $("#Value-added").val();
			taxState = 1;
		}
		//alert(trafficCost);
		var data = {
			"pid": pid, 
			"routeId": globalRouteId,
			
			"trafficCost": trafficCost,
			"trafficState": trafficState,
			
			"ticketsCost": ticketsCost,
			"ticketsState": ticketsState,
			
			"guideCost": guideCost,
			"guideState": guideState,
			
			"hotelCost": hotelCost,
			"hotelState": hotelState,
			
			"matchCost": matchCost,
			"matchState": matchState,
			
			"insuranceCost": insuranceCost,
			"insuranceState": insuranceState,
			
			"taxCost": taxCost,
			"taxState": taxState,
			
			"totalCost": globalTotalCost
		};
		
		//alert(data.ticketsState);
		$.post("http://www.chuqv.com/index.php/Home/Provider/setOrdersData", data, function(msg){
			//alert(msg);
			if(msg == "SUCCESS"){
				alert("发布成功");
				window.location.reload();
			}else if(msg == "ISSUED"){
				alert("已发布");
			}
		});
	});
});


function SelectPage(i) {
    var fl = pageFlag;
    if (pageFlag < i) {
        $(".right-bar").eq(fl).css({"animation":"fadeOutUp .3s both"});
        $(".right-bar").eq(i).css({"animation":"fadeInUp .3s both"});
    }
    else if (pageFlag > i) {
        $(".right-bar").eq(fl).css({"animation":"fadeOutDown .3s both"});
        $(".right-bar").eq(i).css({"animation":"fadeInDown .3s both"});
    }
    $(".right-bar").eq(i).css({"display":"block"});
}
function SelectItem(i) {
    var il = list_itemFlag;
    if (list_itemFlag < i) {
        $(".main-right-detail-list-item").eq(il).css({"animation":"fadeOutLeft .3s both"});
        $(".main-right-detail-list-item").eq(i).css({"animation":"fadeInRight .3s both"});
    }
    else if (list_itemFlag > i) {
        $(".main-right-detail-list-item").eq(il).css({"animation":"fadeOutRight .3s both"});
        $(".main-right-detail-list-item").eq(i).css({"animation":"fadeInLeft .3s both"});
    }
    $(".main-right-detail-list-item").eq(i).css({"display":"block"});
}

function fmoney(s, n) {
    if(!n) return parseFloat(s.replace(/[^\d\.-]/g, "")); 
    n = n > 0 && n <= 20 ? n : 2; 
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""; 
    var l = s.split(".")[0].split("").reverse(), 
    r = s.split(".")[1]; 
    t = ""; 
    for(i = 0; i < l.length; i ++ ) { 
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : ""); 
    } 
    return t.split("").reverse().join("") + "." + r; 
}
function rmoney(s) { 
    alert(s.replace(/[^\d\.-]/g, "")); 
//    return parseFloat(s.replace(/[^\d\.-]/g, "")); 
} 
function refreshCost() {
        var cos = 0;
        $(".button_subtract").each(function(i,e) {
            cos += parseInt($(e).next().children().val())?parseInt($(e).next().children().val()):0;
        });
		
		globalTotalCost = cos;
        $(".right-bar-post-costBar-cost").text("￥"+cos);
}

//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   material,
//  >   FUNCTION        :   MATERIAL STYLE
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function material() {
//    $(".loading-logo,.spinner-container").fadeOut(300);
//    setTimeout(function() {$("#loading").css({"bottom":"100%"});},200);
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