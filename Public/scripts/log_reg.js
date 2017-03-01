var CQHOST = "www.chuqv.com/";
// 图片切换
$(".userLogin").click(function(){
	$(this).css({"background-image":"url(http://"+CQHOST+"Public/img/login_user.png)"});
	$(this).next().css({"background-image":"url(http://"+CQHOST+"Public/img/login_agent.png)"});
	setGoIdByType("user");
});

$(".agentLogin").click(function(){
	$(this).css({"background-image":"url(http://"+CQHOST+"Public/img/login_agent2.png)"});
	$(this).prev().css({"background-image":"url(http://"+CQHOST+"Public/img/login_user2.png)"});
	setGoIdByType("agent");
});

// 将logincanvas-loginbox-go 的id切换到 对应 的agent或user下
function setGoIdByType(type){
	var len = 5;
	if(type == "agent"){
		len = 4;
	}
	var goId = $(".logincanvas-loginbox-go").attr("id");
	goId = goId.slice(len);
	goId = type + goId;
	//alert(goId);
	$(".logincanvas-loginbox-go").attr("id", goId);
}

// 将logincanvas-loginbox-go 的id切换到 对应 的login或register下
function setGoIdByType(type){
	var len = 5;
	if(type == "agent"){
		len = 4;
	}
	var goId = $(".logincanvas-loginbox-go").attr("id");
	goId = goId.slice(len);
	goId = type + goId;
	//alert(goId);
	$(".logincanvas-loginbox-go").attr("id", goId);
}

//登录、注册切换
$(document).on("click","#toLoginPage",function(){
	$(".verify-bar").css({"display":"none"});
	$(".logincanvas-note").html("游客？<span class='login-register-toggle' id='toRegisterPage'><u>立即注册</u></span>");
	
	var goId = $(".logincanvas-loginbox-go").attr("id").replace(/Register/, "Login");
	$(".logincanvas-loginbox-go").attr("id", goId);
});

$(document).on("click","#toRegisterPage",function(){
	$(".verify-bar").css({"display":"block"});
	$(".logincanvas-note").html("已注册？<span class='login-register-toggle' id='toLoginPage'><u>立即登录</u></span>");
	
	var goId = $(".logincanvas-loginbox-go").attr("id").replace(/Login/, "Register");
	$(".logincanvas-loginbox-go").attr("id", goId);
});

//更改鼠标指针
$(document).on("mouseover",".login-register-toggle",function(){
   $(this).css({"cursor":"pointer"});
});
$(document).on("mouseover","#loginout",function(){
   $(this).css({"cursor":"pointer"});
});

//更改登录、注册的样式
$("#login").css({"width":"15%","color":"white"});
$(".verify-bar").css({"display":"none"});




$(document).on("click",".logincanvas-loginbox-go", function (){
	
	var phoneNum = $("#logincanvas-loginbox-input-phonenum").val();
	var pwd = $("#logincanvas-loginbox-input-password").val();
	
	var notice = checkMissingInput(phoneNum, pwd);
	if(notice>0) return;
	
	var goId = $(this).attr("id");
	
	switch(goId){
		case "userLoginGo":
			loginGo(phoneNum, pwd, "user");
			break;
		case "userRegisterGo":
			registerGo(phoneNum, pwd, "user");
			break;
		case "agentLoginGo":
			loginGo(phoneNum, pwd, "agent");
			break;
		case "agentRegisterGo":
			registerGo(phoneNum, pwd, "agent");
			break;
	}
});

$(document).on("click","#loginout",function(){
	$.ajax({
		type:"POST",
		data:{"delUserId":"del"},
		dataType:"text",
		url:"http://"+CQHOST+"index.php/Home/User/loginout",
		cache:false,
		async:false,
		success:function(){
			window.location.href="http://"+CQHOST+"index.php";
			//location.reload();
		}
	});
});



$(document).on("click",".v-get",function(){
	var phoneNum = $("#logincanvas-loginbox-input-phonenum").val();
	var notice = checkMissingInput(phoneNum, "123456");
	if(notice>0) return;
	
	var rst = getSmsCode(phoneNum);
	
	if(!rst || rst == "1010") return ;
        var wait=60;
        time(this);
          
        function time(o) {  
        if (wait == 0) {         
             $(o).css("background-image","-webkit-gradient(linear, left top, left bottom, from(#f8b551), to(#eba843))"); 
            $(o).html("获取验证码"); 
         $(o).prop('disabled',false);
            wait = 60;  
        } else {  
           $(o).css("background-image","-webkit-gradient(linear, left top, left bottom, from(#808080), to(#808080))"); 
           $(o).prop('disabled',true);
           $(o).html("重发(" + wait + ")");
            wait--;  
            setTimeout(function() {  
                time(o)  
            },  
            1000)  
        }  
    }  

	
});
        

// 登录
function loginGo(phoneNum, pwd, person){
	// console.log();
	$.ajax({
		type:"POST",
		data:{"phoneNum":phoneNum, "pwd":pwd, "person":person},
		dataType:"text",
		url: "http://"+CQHOST+"index.php/Home/Login/login",
		cache:false,
		async:false,
		success:function(hm){
			if(hm == "FAIL"){
				alert("登录失败，请重试！");
			}else if(hm == "NOTREG"){
				alert("请先注册");
			}else if(hm == "ERRORPWD"){
				alert("用户名或密码错误");
			}else if(hm == "REGNOTCOMPLETED"){
				// REGNOTCOMPLETED
				alert("请等待注册完成");
			}else{
				alert("登录成功");
				$("#login").html(hm);
				reloadPage( window.location.pathname, person);
				Loginturnoff();
			}
		}
	});
}

// 注册
function registerGo(phoneNum, pwd, person){
	var flag=0;
	flag = checkPhoneNum(phoneNum);
	if(flag == 0)  return ;
	flag = checkRegisterPowerdFormat(pwd);
	if(flag == 0)  return ;
	
	// 短信验证码
	var smsCode = $(":input[class = 'v-input']").val();
	if(smsCode == ""){
		alert("请输入验证码");
		return ;
	}
	
	
	$.ajax({
		type:"POST",  
		data:{"phoneNum":phoneNum, "pwd":pwd, "smsCode":smsCode, "person":person},
		dataType:"text",
		url:"http://"+CQHOST+"index.php/Home/Login/register",
		cache:false,
		async:false,
		success:function(hm){
			if(hm == "FAIL"){
				alert("注册失败，请重试！");
			}else if(hm == "REGISTERED"){
				alert("已注册，请登录！");
			}else if(hm == "OTHER_PHONE"){
				alert("手机号码已更改！");
			}else if(hm == "ERROR_VCODE"){
				alert("验证码错误！");
				
			}else{
				if(person == "agent"){
					alert("工作人员稍后会联系您完成注册");
				}else{
					alert("恭喜您，注册成功！");
					$("#login").html(hm);
					reloadPage( window.location.pathname, person);
				}
				Loginturnoff();
			}
		}
	});
	
}

function getSmsCode(phoneNum){
	if(phoneNum == "undefined") return 1010;
	var msg = 1010;
	$.ajax({
		type:"POST",  
		//data:{"phoneNum":phoneNum, "smsCode":smsCode},
		data:{"phoneNum":phoneNum},
		dataType:"json",
		url:"http://"+CQHOST+"index.php/Home/User/smsCode",
		cache:false,
		async:false,
		success:function(jn){
			if(jn.msg == "SUCCESS"){
				// alert("验证码已发送");
			}else if(jn.msg == "TOO_FREQUENT"){
				alert("操作过于频繁");
			}
			msg = jn.code;
		}
	});
	return msg;
}

// 检查手机号或者密码是否未填写
function checkMissingInput(phoneNum, pwd){
	var notice = 0;
	if(phoneNum.length == 0){
		notice += 1;
	}
	if(pwd.length == 0){
		notice += 2;
	}
	switch(notice){
		case 1:
			alert("请填写手机号！");
			break;
		case 2:
			alert("请填写密码！");
			break;
		case 3:
			alert("请填写手机号和密码！");
			break;
	}
	return notice;
}


//根据当前url判断是否重新载入
function reloadPage(url, person){
	if(person == "user"){
		var lowerCaseUrl = url.toLowerCase();
		var actionCode = 1;
		if(lowerCaseUrl.lastIndexOf("destination") != -1){
			actionCode = 0;
		}else if(lowerCaseUrl.lastIndexOf("poi") != -1){
			actionCode = 0;
		}else if(lowerCaseUrl.lastIndexOf("howlong") != -1){
			actionCode = 0;
		}
		if(actionCode == 1){
			window.location.reload();
		}
	}else{
		window.location.href = "http://"+CQHOST+"index.php/Home/Provider/support";
	}
	
	
	
}

//检查手机号码格式是否正确
function checkPhoneNum(num){
	var reg=/^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
	if(!reg.test(num)){
		alert("手机号码格式不正确!");
		return 0;
	}else{
		return 1;
	}
}
//检查注册密码格式是否正确
function checkRegisterPowerdFormat(pwd){
	var reg=/\w{4,16}/;
	if(!reg.test(pwd)){
		alert("密码应为4-16位字母、数字、下划线组成!");
		return 0;
	}else{
		return 1;
	}
}

// 点击图片返回主页
$(document).on("mouseover","#logo",function(){
   $(this).css({"cursor":"pointer"});
});

$(document).on("click","#logo",function(){
   window.location.href = "http://" + CQHOST;
});
