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
    isTittle1 = w;
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
    isTittle1 ? $("#flash").css({"transform":"translateX(0)"}):$("#flash").css({"transform":"translateX(155%)"});
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
            cost: '0',//默认花费价格
            pNum: '0',//默认人数
            date: '2000-01-01',//默认日期
            tType: '0',//默认旅游类型选项
        };
    $.fn.userDetailBar = function(opt) {
        //ccc1
		var options = ($.isPlainObject(opt) || !opt) ? $.extend(default_options, opt) : $.extend(default_options);//定义对象参数
		bar = new UserDetail_path_obj(options.imgName, options.imgType, options.title, options.like, options.answer, options.cost, options.pNum, options.date, options.tType, this, options.routeId, options.bidState);
        userDetail_path.push(bar);
    };
})(jQuery);//                         闭包
;(function($){
    function Dashboard(dom, value) {
        var $screen = dom;
        var screen = $screen.get(0);
        this.cxt = screen.getContext("2d");
        cxtA.push(this.cxt);
        this.value = value;
        this.start = Math.PI * 0.5;
        this.over = Math.PI * 1.75;
        this.len = this.over - this.start;
        this.valueOver = this.start + this.len * this.value;
        this.re = function() {
            this.cxt.clearRect(0, 0, 100, 150);
            this.cxt.shadowBlur = 1;
            this.cxt.shadowColor = "rgba(0, 0, 0, 0.1)";
            this.cxt.fillStyle = "rgba(255, 255, 255, 0.2)";
            this.cxt.beginPath();
            this.cxt.arc(50, 75, 50, this.start, this.over, false);
            this.cxt.arc(50, 75, 45, this.over, this.start, true);
            this.cxt.closePath();
            this.cxt.fill();

            this.cxt.fillStyle = "rgba(255, 255, 255, 1)";
            this.cxt.beginPath();
            this.cxt.arc(50, 75, 50, this.start, this.valueOver, false);
            this.cxt.arc(50, 75, 45, this.valueOver, this.start, true);
            this.cxt.closePath();
            this.cxt.fill();
        }
    }
    $.fn.dashboardInit = function(opt) {
        cxtA.length = 0;    //清空数组
        var sum = opt.a + opt.b + opt.c,    //总价
            v = [], //开辟一块内存来保存百分比
            va = opt.a,
            vb = opt.b,
            vc = opt.c;

        if(opt.a) var va = opt.a/sum;   //计算百分比，如果价格不为零
        if(opt.b) var vb = opt.b/sum;   //~
        if(opt.c) var vc = opt.c/sum;   //~
        v.push(va); //备份
        v.push(vb);
        v.push(vc);
        $(".bottom-lable-cost").text(sum);
        for (var coun = 0; coun < 3; coun++) {
            var dash = new Dashboard(this.eq(coun), v[coun]);
            dash.re();  //绘制进度条
            this.eq(coun).next().children().eq(0).text(Math.round(v[coun]*100)+"%");    //显示百分比
            this.eq(coun).next().children().eq(2).text(Math.round(sum*v[coun]*100)/100);    //显示价格
        }
        $.each(dashIMG, function(i,e) {e.onload = function() {cxtA[i].drawImage(e, (100 - e.width)/2, (150 - e.height)/2)}});    //当且仅当图片加载完成时在画布上绘制
        $(".right-bar-COST-titleBar-dashboard").unbind('click');
        $(".right-bar-COST-titleBar-dashboard").each(function(i,e) {
            $(e).click(function() {
                SelectDash(i);
                
                $.each(dashIMG, function(ii,e) {
                    cxtA[ii].clearRect((100 - e.width)/2, (150 - e.height)/2, e.width, e.height);   //清空
                    cxtA[ii].drawImage(e, (100 - e.width)/2, (150 - e.height)/2);   //复位
                });
                cxtA[i].drawImage(dashIMG_e[i], (100 - dashIMG_e[i].width)/2, (150 - dashIMG_e[i].height)/2);
            });
        });
        dashIMG_e[0].onload = function() {$(".right-bar-COST-titleBar-dashboard").eq(0).click()};
        $(".right-bar-COST-bottom-navigationBar-left-button").unbind('click');
        $(".right-bar-COST-bottom-navigationBar-left-button").each(function(i,e) {
            $(e).click(function() {
				// alert(dashFlag);
				
                if(i) {
                    if(dashFlag < 2) $(".right-bar-COST-titleBar-dashboard").eq(dashFlag + i).click();
                    else $(".right-bar-COST-titleBar-dashboard").eq(0).click();
                }
                else {
                    if(dashFlag > 0) $(".right-bar-COST-titleBar-dashboard").eq(dashFlag - 1).click();
                    else $(".right-bar-COST-titleBar-dashboard").eq(2).click();
                }
            });
        });
    }
})(jQuery);
var userDetail_path = [];//对象数组
//Detail Bar 对象构造函数
//ccc2
function UserDetail_path_obj(imgName, imgType, title, like, answer, cost, pNum, initDate, tType, dom, routeId, bidState) {
    this.imgName = imgName;         //图片名称
    this.imgType = imgType;         //后缀
    this.title = title;             //标题
    this.like = like;               //被喜欢的次数
    this.answer = answer;           //被评论的次数
    this.cost = cost;               //花费的价格
    this.pNum = pNum;               //人数
    this.initDate = initDate;       //日期
    this.tType = tType;             //旅游类型
    this.dom = dom;
	this.routeId = routeId;
	this.bidState = bidState;       // 报价状态
	// bs1(发布报价),bs2(报价中),bs3(查看报价，此时可以跳转到签订商家页面)
	this.Gethtmlcode = function() {
		//ccc3
		return '<div class="main-right-detail-bar"><div class="main-right-detail-bar-image" id="routeId-'+this.routeId+'"><div class="main-right-detail-bar-image-title">'+this.title+'</div><div class="main-right-detail-bar-image-lable">'+this.answer+'</div><div class="main-right-detail-bar-image-icon-answer"></div><div class="main-right-detail-bar-image-lable">'+this.like+'</div><div class="main-right-detail-bar-image-icon-like"></div></div><div class="main-right-detail-bar-costBar"><!--<div class="main-right-detail-bar-costBar-lable">预计</div><div class="main-right-detail-bar-costBar-lableNum">'+this.cost+'</div><div class="main-right-detail-bar-costBar-lable">RMB</div>--><div class="main-right-detail-bar-costBar-button-set-lee2"> <div class="main-right-detail-bar-costBar-button-icon-set-lee2"></div><div class="main-right-detail-bar-costBar-button-lable-set-lee2">导出路线</div></div><div class="main-right-detail-bar-costBar-button-set-lee"><div class="main-right-detail-bar-costBar-button-icon-set-lee"></div><div class="main-right-detail-bar-costBar-button-lable-set-lee">发布报价</div></div><div class="main-right-detail-bar-costBar-button"> <div class="main-right-detail-bar-costBar-button-icon"></div><div class="main-right-detail-bar-costBar-button-lable">报价设置</div></div> </div><div class="main-right-detail-bar-line"></div><div class="main-right-detail-bar-detailBar"><div class="main-right-detail-bar-detailBar-icon-PNum"></div><div class="main-right-detail-bar-detailBar-option">人数</div><div class="main-right-detail-bar-detailBar-lable"><div class="main-right-detail-bar-detailBar-lable-PNumtext">0人</div>请输入您的旅行人数<input class="main-right-detail-bar-detailBar-lable-input">人</div></div><div class="main-right-detail-bar-detailBar"><div class="main-right-detail-bar-detailBar-icon-Date"></div><div class="main-right-detail-bar-detailBar-option">日期</div><div class="main-right-detail-bar-detailBar-lable"><input class="main-right-detail-bar-detailBar-lable-dateSelector"></div></div><div class="main-right-detail-bar-detailBar"><div class="main-right-detail-bar-detailBar-icon-Deal"></div><div class="main-right-detail-bar-detailBar-option">体验</div><div class="main-right-detail-bar-detailBar-lable"></div><div class="main-right-detail-bar-detailBar-configLable">经济型</div><div class="main-right-detail-bar-detailBar-configLable">普通型</div><div class="main-right-detail-bar-detailBar-configLable">奢华型</div></div></div>';
	};
    
    this.Init = function(i) {
        var bar = $(".main-right-detail-bar").eq(i);//获取当前操作的DOM
        //ccc4
		bar.find(".main-right-detail-bar-image").css({"background-image":"url(http://www.chuqv.com/Public/img/schedule/detail/"+this.imgName+this.imgType+")"});//初始化图像
        
		bar.find(".main-right-detail-bar-detailBar-lable-PNumtext").text(this.pNum+"人");//初始化人数
        bar.find(".main-right-detail-bar-detailBar-lable-input").attr("value", this.pNum);//初始化人数设置框
        
        var option = bar.find(".main-right-detail-bar-detailBar-configLable");//获取当前操作DOM的选项框
        bar.find(".main-right-detail-bar-detailBar-icon-Deal").next().next().text(option.eq(this.tType).text());//初始化旅游类型
        option.eq(this.tType).css({"box-shadow":"inset 2px 1px 2px rgba(0, 0, 0, 0.2)"});//给被选中的选项框加选中效果
		
		
		// addd 
		if(this.bidState == 2){
			bar.find(".main-right-detail-bar-costBar-button-lable-set-lee").text("正在报价");
		}else if(this.bidState == 3){
			bar.find(".main-right-detail-bar-costBar-button-lable-set-lee").text("选择报价");
		}else if(this.bidState == 4){
			bar.find(".main-right-detail-bar-costBar-button-lable-set-lee").text("查看报价");
		}
    }
    this.Display = function(i) {
        this.dom.append(this.Gethtmlcode());//显示当前对象
//        $(".main-right-detail").append(this.Gethtmlcode());//显示当前对象
        this.Init(i);//调用当前对象的初始化函数
        if ((i+1)%2 == 0) {
            $(".main-right-detail").append("<div class='stackLine'></div>")//每行末尾加一个占位块，防止细节展开时产生行间布局错乱
        }
    }
    this.Refresh = function() {
        $(".main-right-detail").empty();//清空
        $.each(userDetail_path, function(i,e) {e.Display(i)});//加载所有对象
        this.Event();//调用对象的事件函数绑定事件
    }
    this.Event = function() {
//        展开关闭
        $(".main-right-detail-bar-costBar-button").each(function(i,e) {
            $(e).click(function() {
                var bar = $(e).parent().parent();
                if (bar.height() == 115) {
                    bar.css({"max-height":"235px"});//展开细节
                    $(e).children().eq(1).text("完成设置");
                }
                else {bar.css({"max-height":"115px"});$(e).children().eq(1).text("报价设置")}//关闭细节
            })
        });
		
		
		// addd 发布报价的事件绑定  
		$(".main-right-detail-bar-costBar-button-set-lee").each(function(i,e) {
            $(e).click(function() {
				// main-right-detail-bar-costBar-button-lable-set-lee
				var routeId = $(this).parent().prev().attr("id").slice(8);
				globalRouteId = routeId;
				InitData(routeId);
				// 第一次点击,更改 here1
				if($(this).text() == "发布报价"){
					$(".main-left-bar").eq(1).click();
				}else{
					getAgentInfo();
				}
				
				
				
            })
        });
		
		
		// main-right-detail-bar-costBar-button-lable-set-lee2
		// addd 发布报价的事件绑定  
		$(".main-right-detail-bar-costBar-button-set-lee2").each(function(i,e) {
            $(e).click(function() {
				// main-right-detail-bar-costBar-button-lable-set-lee
				var routeId = $(this).parent().prev().attr("id").slice(8);
				if(routeId == 'undefined') return;
				console.log(routeId);
				window.location.href = "http://www.chuqv.com/index.php/Home/User/outputRouteToWord?routeid="+routeId;
				// routeToDoc(routeId);
            })
        });
        
//        人数设置
        $(".main-right-detail-bar-detailBar-lable-input").each(function(i,e) {
            $(e).bind('input propertychange', function() {
                $(e).prev().text($(e).val()+"人");//更新左侧人数
                userDetail_path[i].pNum = $(e).val();//对象的人数数据同步
            });
        });
//        体验选择
        $(".main-right-detail-bar-detailBar-configLable").each(function(i,e) {
            $(e).click(function() {
                $(".main-right-detail-bar-detailBar-configLable").css({"box-shadow":"none"});//所有选项取消边框阴影
                $(e).css({"box-shadow":"inset 2px 1px 2px rgba(0, 0, 0, 0.2)"});//选中效果
                $(e).parent().find(".main-right-detail-bar-detailBar-lable").text($(e).text());//修改左侧显示框文字
                userDetail_path[($(e).parent().parent().index())].tType = i;//获得被操作对象在数组中的偏移值并备份数据
            });
        });
//        日期选择
        $(".main-right-detail-bar-detailBar-lable-dateSelector").each(function(i,e) {
            $(e).datetimepicker({setLocale:"zh", value:userDetail_path[i].initDate, format:"Y-m-d", timepicker:false, minDate: "+1970/01/03"});//配置并初始化日期选择控件
            $(e).blur(function() {
                userDetail_path[i].initDate = $(e).val();//对象的数据同步
            })
        });
		
		
//       具体路线的展示 adddd
		//main-right-detail-bar-image
// ccc5
		$(".main-right-detail-bar-image").each(function(i,e) {
			var id = $(e).attr("id").slice(8);
			$(e).mouseover(function() {
                $(e).css({"cursor":"pointer"});
            });
            $(e).click(function() {
                window.location.href = "http://"+CQHOST+"index.php/Home/Route/inference?id="+id;
            });
        });
    }
}

var agent = [];
function AgentBar(opt) {
    this.Name       = opt.Name;
    this.Num        = opt.Num?opt.Num:'';
    this.City       = opt.City;
    this.Date       = opt.Date;
    this.Trans      = opt.Trans?opt.Trans:'(0/0)';
    this.Hotel      = opt.Hotel?opt.Hotel:'(0/0)';
    this.Spot       = opt.Spot?opt.Spot:'(0/0)';
    this.Cost       = opt.Cost;
    this.Include    = opt.Include;
    this.Exclude    = opt.Exclude;
    this.pid    = opt.pid;
    this.winPid    = opt.winPid;
	this.txt = "确定" ;
	if(this.winPid > 0) this.txt = "已完成" ;
    this.GetHtmlCode = function() {
        return '<div class="right-bar-SUPPORT-list-item"><div class="right-bar-SUPPORT-list-item-titleBar"><div class="right-bar-SUPPORT-list-item-titleBar-labelBar support_loc165"><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name">商家</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert">'+this.Name+'</div></div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar support_loc100"><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name"></div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert">'+this.Num+'</div></div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar support_loc215"><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name"></div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert">'+this.City+'</div></div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar"><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name"></div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert">'+this.Date+'</div></div></div><div class="right-bar-SUPPORT-list-item-detailBar"><div class="right-bar-SUPPORT-list-item-titleBar-labelBar"><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name support_loc75">报价内容</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert support_mar5">交通</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name support_mar20">'+this.Trans+'</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert support_mar5">酒店</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name support_mar20">'+this.Hotel+'</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert support_mar5">景点</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name support_mar20">'+this.Spot+'</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-name">报价</div><div class="right-bar-SUPPORT-list-item-titleBar-labelBar-insert">'+this.Cost+'</div></div><div class="right-bar-SUPPORT-list-item-button" id="pid-'+this.pid+'">'+this.txt+'</div></div><div class="right-bar-SUPPORT-list-item-detail"><div class="right-bar-SUPPORT-list-item-detail-title">包括</div><div class="right-bar-SUPPORT-list-item-detail-list"></div><div class="right-bar-SUPPORT-list-item-detail-button"></div><div class="right-bar-SUPPORT-list-item-detail-title">不包括</div><div class="right-bar-SUPPORT-list-item-detail-list"></div><div class="right-bar-SUPPORT-list-item-detail-button"></div></div></div>';
    }
//    this.GetItemCode = function(name) {
//        return '<div class="right-bar-SUPPORT-list-item-detail-list-item">'+name+'</div>';
//    }
    this.Display = function(count) {
        $(".right-bar-SUPPORT-list").append(this.GetHtmlCode());
        //加载项目名
        var list = $(".right-bar-SUPPORT-list-item-detail").eq(count).find(".right-bar-SUPPORT-list-item-detail-list");
        if(this.Include)
            $.each(this.Include, function(i,e) {
                list.eq(0).append('<div class="right-bar-SUPPORT-list-item-detail-list-item">'+e+'</div>');
            });
        if(this.Exclude)
            $.each(this.Exclude, function(i,e) {
                list.eq(1).append('<div class="right-bar-SUPPORT-list-item-detail-list-item">'+e+'</div>');
            });
    }
    this.Refresh = function() {
        $(".right-bar-SUPPORT-list").empty();
        $.each(agent, function(i,e) {
            e.Display(i);
        });
        this.Event();
    }
    this.Event = function() {
        $(".right-bar-SUPPORT-list-item-titleBar").each(function(i,e) {
            $(e).click(function() {
                var box = $(e).parent(),
                    box_height = 90;
                if(box.height()==90) {
                    var listBar = $(e).next().next().find(".right-bar-SUPPORT-list-item-detail-list"),
                        list_height = getHigher(listBar.eq(0), listBar.eq(1));
                    box_height += list_height + 2;
                    listBar.parent().height(list_height);
                    $(e).next().css({"border-radius":"0"});
                }
                else {
                    $(e).next().css({"border-radius":"0 0 2px 2px"});
                }
                box.height(box_height);
            });
        });
        $(".right-bar-SUPPORT-list-item-detail-button").each(function(i,e) {
            $(e).click(function() {
                $(e).prev().append('<div class="right-bar-SUPPORT-list-item-detail-list-item">项目名</div>');
                var listBar = $(e).parent().find(".right-bar-SUPPORT-list-item-detail-list"),
                    listHei = getHigher(listBar.eq(0), listBar.eq(1));
                $(e).parent().height(listHei);
                $(e).parent().parent().height(2+90+listHei);
            });
        });
		
		
		// addd 用户选定商家
		// right-bar-SUPPORT-list-item-button
		$(".right-bar-SUPPORT-list-item-button").click(function(){
			var pid = $(this).attr("id").slice(4);
			//alert(pid);
			$.post("http://"+CQHOST+"index.php/Home/User/configAgent",{"routeId": globalRouteId, "pid":pid},function(msg){
				if(msg == "SUCCESS"){
					alert("选择商家成功");
					window.location.reload();
				} 
			});
		});
    }
}
// addd 发布报价所需信息
var globalRouteId = 0;
var globalPNum = 0;
var globalSDate = "";// 出发日期


var cxtA = [];
var pageFlag;
var dashFlag;
var costData = {
    a: 0,
    b: 7300,
    c: 4502,
};
$(function() {
    fright();
    
	// addd
	$.post("http://"+CQHOST+"index.php/Home/Route/displayRoutes",{"action":"displayRoutes"},function(jres){
		if(jres != ""){
			var title = "";
			var date = "";
			var bidState = "";
			
			for(var i in jres){
				title = jres[i].routetitle;
				date = jres[i].date;
				routeId = jres[i].id;
				bidState = jres[i].bidstate;
				pNum=jres[i].pnum
				tDate=jres[i].tdate
				
				// bidState = jres[i].bidState;
				$(".main-right-detail").userDetailBar({title: title, imgName: '2', like: '0', answer: '0', cost: '0', pNum: pNum, date: tDate, tType: '1', routeId: routeId, bidState: bidState});
			}
			userDetail_path[0].Refresh();//注意$.post()异步性
		}
	});
	
    $(".main-left-bar").each(function(i,e) {
        $(e).click(function() {
			if(i&&globalRouteId == 0){
				 alert("请选择报价路线");
				 return ;
			}
            $(".main-left-bar").css({"background-color":""})
            $(e).css({"background-color":"rgba(255, 255, 255, 0.1)"});
            SelectPage(i);
            pageFlag = i;
        });
    });
	//ccc6
    $(".main-left-bar").eq(0).click();//默认页面
    $(".right-bar").eq(0).css({"background-color":"rgba(225, 225, 225, 0.1)"});//我的行程分页背景
    
    $(".right-bar-COST-titleBar-dashboard").dashboardInit(costData); //初始化dashboard
//    $(".right-bar-COST-titleBar-dashboard").dashboardInit({
//        a: 9100,
//        b: 7300,
//        c: 7300,
//    });
    InitData(""); //初始化detail列表
    
	// addd 发布按钮的点击事件绑定right-bar-COST-bottom-bottom-post
	$(".right-bar-COST-bottom-bottom-post").click(function(){
		// here
		var myDate = new Date();
		var barObj = $("#routeId-" + globalRouteId).parent();
		// 出发日期
		var sDate = barObj.find(".main-right-detail-bar-detailBar-lable-dateSelector").val();
		// 出发人数
		var pNum = barObj.find(".main-right-detail-bar-detailBar-lable-PNumtext").text().slice(0, -1);
		// 体验
		// alert(sDate);
		// alert(pNum);
		// alert(globalRouteId);
		//return;
		var expType = barObj.find(".main-right-detail-bar-detailBar-lable").text();
		
		var dt1=new Date(Date.parse(sDate));
		var daydiff = parseInt((dt1.getTime() - myDate.getTime()) / (1000 * 60 * 60 * 24));
		if (pNum<=0){alert('请先在报价设置里设置出行人数');exit;}
		if (daydiff<3){alert('报价设置里出发日期应至少在3天后');exit;}
		$.post("http://"+CQHOST+"index.php/Home/Route/release", {"routeId": globalRouteId, "sDate": sDate, "pNum": pNum}, function(msg){
			
			switch(msg){
				case "RELEASE_SUCCESS" :
					alert("发布成功");
					//globalRouteId = 0;
					window.location.reload();
					break;
				case "RELEASE_FAILED" :
					alert("发布失败");
					break;
				case "RELEASED" :
					alert("路线已发布");
					globalRouteId = 0;
					break;
				default :
					alert("网络错误，请重试");
			}
		});
	});
	
	
    //列表导航栏按钮绑定事件
    $(".right-bar-COST-bottom-navigationBar-right-button").click(function() {
        if ($(this).children().css("display") == "none") {
            $(this).children().css({"display":"block"});
            var flag_en = 1;
        }
        else {
            $(this).children().css({"display":"none"});
            var flag_en = 0;
        }
        $(this).parent().parent().next().children().eq(dashFlag).find(".list-bar-title").find(".list-button").each(function(i,e) {
            if(flag_en ? $(e).children().css("display") == "none" : $(e).children().css("display") != "none") $(e).click();
        });
    })
    
	getAgentInfo();
	
	
    
    
    
    
});

// 获取竞价商家的信息
function getAgentInfo(){
	agent.length = 0;
	
	if(globalRouteId == 0) return;
	// addd
	 $.ajax({
		url: "http://www.chuqv.com/index.php/Home/User/getAgentInfo",
		data:{"routeId" : globalRouteId},// addd 此处添加
        cache: false,
		type: "POST",        // addd 此处添加
        dataType: "json",
		ansyc: false,
        success: function(data) {
			if(data == "") return;
			if(data.msg == "NOT_YET"){
				alert("没有竞价商家");
				return ;     
			}
			var name = "";
			var trans = "";
			var cost = "";
			var pid = 0;
			var include = [];
			var exclude = [];
			var winPid = 0; //非选定
			var msg = data.data;
			for(var i in msg){
				//alert(name);
				name = msg[i].name;
				trans = "(" + msg[i].transNum + "/" +  msg[i].transNum + ")";
				cost = "￥" + msg[i].totalCost;
				include = msg[i].include;
				exclude = msg[i].exclude;
				pid = msg[i].pid;
				winPid = msg[i].winPid;
				
				sightNum = "(" + msg[i].sightNum + "/" +  msg[i].sightNum + ")";;
				agentest = new AgentBar({pid: pid, Name: name, Num: '', City: '', Date: '', Trans: trans, Hotel: '(3/3)', Cost: cost, Include: include, Exclude: exclude, "Spot": sightNum, "winPid": winPid});
				agent.push(agentest);
			}
			
			
			agent[0].Refresh();
			
			$(".main-left-bar").eq(2).click();
		}
	 });
        
}





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
function SelectDash(i) {
    var df = dashFlag;
    if (dashFlag < i) {
        $(".right-bar-COST-bottom-detailBar-float").eq(df).css({"animation":"fadeOutLeft .6s both"});
        $(".right-bar-COST-bottom-detailBar-float").eq(i).css({"animation":"fadeInRight .6s both"});
    }
    else if (dashFlag > i) {
        $(".right-bar-COST-bottom-detailBar-float").eq(df).css({"animation":"fadeOutRight .6s both"});
        $(".right-bar-COST-bottom-detailBar-float").eq(i).css({"animation":"fadeInLeft .6s both"});
    }
    $(".right-bar-COST-bottom-detailBar-float").eq(i).css({"display":"block"});
    $(".right-bar-COST-bottom-navigationBar-left-title-bar-icon").css({"background-image":" url(http://www.chuqv.com/Public/img/schedule/navigation/icon"+(i+1)+".png"});
	// alert(i);
	var txt = "";
	switch(i){
		case 0:
			txt = "交通/车导";
		break;
		case 1:
			txt = "住宿/餐饮";
		break;
		case 2:
			txt = "活动/门票";
		break;
	}
	$(".right-bar-COST-bottom-navigationBar-left-title-bar-lable").text(txt);
    dashFlag = i;
}
function InitData(routeId) {
//    $(".right-bar-COST-bottom-detailBar-float-list").eq(0).empty();
	$(".right-bar-COST-bottom-detailBar-float-list").each(function(i, e){
		$(e).empty();
		GetData(i, routeId);
	});
}
function GetData(flag, routeId) {
	//ccc7
	//alert(routeId);
    $(".right-bar-COST-bottom-detailBar-float-list").eq(flag).empty();
    $.ajax({
        url: "http://"+CQHOST+"index.php/Home/Route/travelPrice",
		data:{"flag" : flag, "routeId" : routeId},// addd 此处添加
        cache: false,
		type: "POST",        // addd 此处添加
        dataType: "xml",
        success: function(xml) {
            var labelConf = [];
            var list = [];
            $(xml).find("title_labels").find("label").each(function(i,e) {
                labelConf.push($(e).text());
            });
            $(xml).find("day").each(function(i,e) {
                var day_title = new ListTitle(i, labelConf);
                day_title.Display(flag);
                $(e).find("item").each(function(ii,ee) {
                    var item_label = {
                        A: $(ee).find("A").text(),
                        B: $(ee).find("B").text(),
                        C: $(ee).find("C").text(),
                        D: $(ee).find("D").text(),
                        E: $(ee).find("E").text(),
                        F: $(ee).find("F").text(),
                        G: $(ee).find("G").text(),
                    }
                    var item = new ListItem(item_label);
                    item.Display(flag);
                    list.push(item);
                })
                
            });
            // Event
            $(".right-bar-COST-bottom-detailBar-float-list").eq(flag).find(".list-bar-item").each(function(i,e) {
                var button = $(e).find(".list-button");
                button.click(function() {
                    if (button.children().css("display") == "none") {
                        button.children().css({"display":"block"});
                        !dashFlag ? costData.a += Number(list[i].G) : ((dashFlag - 1) ? costData.c += Number(list[i].G) : costData.b += Number(list[i].G))
                    }
                    else {
                        button.children().css({"display":"none"});
                        !dashFlag ? costData.a -= Number(list[i].G) : ((dashFlag - 1) ? costData.c -= Number(list[i].G) : costData.b -= Number(list[i].G))
                        var LocDom = $(e).prev();
                        while (LocDom.attr("class") == "right-bar-COST-bottom-detailBar-float-list-bar list-bar-item") {
                            LocDom = LocDom.prev();
                        }
                        LocDom.find(".list-button").children().css({"display":"none"});
                        $(".right-bar-COST-bottom-navigationBar-right-button").children().css({"display":"none"});
                    }
                    $(".right-bar-COST-titleBar-dashboard").dashboardInit(costData);
                    $(".right-bar-COST-titleBar-dashboard").eq(dashFlag).click()
                })
            })
            $(".right-bar-COST-bottom-detailBar-float-list").eq(flag).find(".list-bar-title").each(function(i,e) {
                var button = $(e).find(".list-button");
                button.click(function() {
                    var LocDom = $(e).next();
                    var flag_en;
                    if (button.children().css("display") == "none") {
                        button.children().css({"display":"block"});
                        flag_en = 1
                    }
                    else {
                        button.children().css({"display":"none"});
                        flag_en = 0
                    }
                    while (LocDom.attr("class") == "right-bar-COST-bottom-detailBar-float-list-bar list-bar-item") {
                        if (flag_en ? (LocDom.find(".list-button").children().css("display") == "none") : (LocDom.find(".list-button").children().css("display") != "none")) LocDom.find(".list-button").click();
                        LocDom = LocDom.next();
                    }
                    $(".right-bar-COST-titleBar-dashboard").dashboardInit(costData);
                    $(".right-bar-COST-titleBar-dashboard").eq(dashFlag).click();
                })
            })
        }
    });
}

function ListTitle(coun, labelArry) {
    this.num = coun + 1;
    this.htmlCode = function() {
        return '<div class="right-bar-COST-bottom-detailBar-float-list-bar list-bar-title"><div class="list-bar-label list-bar-label_0">Day '+("00"+this.num).substr(-2)+'</div><div class="list-bar-label list-bar-label_1">'+labelArry[0]+'</div><div class="list-bar-label list-bar-label_2">'+labelArry[1]+'</div><div class="list-bar-label list-bar-label_3">'+labelArry[2]+'</div><div class="list-bar-label list-bar-label_4">'+labelArry[3]+'</div><div class="list-bar-label list-bar-label_5">'+labelArry[4]+'</div><div class="list-bar-label list-bar-label_6">'+labelArry[5]+'</div><div class="list-button"><div class="button-mark"></div></div></div>'
    }
	
    this.Display = function(flag) {
        $(".right-bar-COST-bottom-detailBar-float-list").eq(flag).append(this.htmlCode());
    }
}
function ListItem(label) {
    this.A = label.A;
    this.B = label.B;
    this.C = label.C;
    this.D = label.D;
    this.E = label.E;
    this.F = label.F;
    this.G = label.G;
    this.htmlCode = function() {
		//ccc8
        return '<div class="right-bar-COST-bottom-detailBar-float-list-bar list-bar-item"><div class="list-bar-label list-bar-label_0">'+this.A+'</div><div class="list-bar-label list-bar-label_1">'+this.B+'</div><div class="list-bar-label list-bar-label_2">'+this.C+'</div><div class="list-bar-label list-bar-label_3">'+this.D+'</div><div class="list-bar-label list-bar-label_4">'+this.E+'</div><div class="list-bar-label list-bar-label_5">'+this.F+'</div><div class="list-bar-label list-bar-label_6">'+this.G+'</div><div class="list-button"><div class="button-mark"></div></div></div>'
    }
//    this.Display = function(flag) {
//        $(".list-bar-title").eq(flag).after(this.htmlCode());
//    }
    this.Display = function(flag) {
        $(".right-bar-COST-bottom-detailBar-float-list").eq(flag).append(this.htmlCode());
    }
}



function getHigher(a, b) {
    return a.outerHeight()>b.outerHeight()?a.outerHeight():b.outerHeight();
}
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
//  >   FUNCTION NAME   :   material,
//  >   FUNCTION        :   MATERIAL STYLE
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
function material() {
	//ccc9
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