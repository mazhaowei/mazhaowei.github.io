// JavaScript Document
     	
	// 输入格式赋值	
		   var reg= /^[A-Za-z]+$/;
	       var reg1= /^[A-Z]+$/;   
		   var reg2=/^[a-z]+$/;	

	   
	// onfocus 获得焦点时 user
	function USCKCL(obj){
		 $("#tsUser").html("请正确输入用户名，应不少于4位");
		 $("#tsUser").removeClass().addClass("onClass1");
	}
						
		 // onfocus 获得焦点时 psd
	function PWCKCL(obj){
		 $("#tsPwd").html("请正确输入密码，应不少于8位");
		 $("#tsPwd").removeClass().addClass("onClass1");
	}				


	   
   	   	// onkeyup 按键松开时 user
   function USCKWd(obj,e){
	   
	    var evt = e || event;
        var currKey = evt.keyCode || evt.which || evt.charCode;
	    if(!$(obj).val()){return;}   
		if ($(obj).val().length > 12) {
								  $("#tsUser").html("用户名长度不会大于12，请重新输入");
								  $("#tsUser").removeClass().addClass("onClass3");
								  return;
         }
		 
		 
		 
	   if(currKey.keyCode==8){
		  if(!$.trim($(obj).val()))
		     $("#tsUser").html("输入你的名字 张三如'ZhSan'"); 
		 	 $("#tsUser").removeClass().addClass("onClass1");
		  return;
		 }
       if(!$.trim($(obj).val())){ 
			 $("#tsUser").html("输入你的名字 张三如'ZhSan'"); 
			 $("#tsUser").removeClass().addClass("onClass1");
	                          }
							  
	   if(!reg.test($(obj).val())){
		         $("#tsUser").html("用户名格式不正确,没有数字");
		  		 $("#tsUser").removeClass().addClass("onClass3");
		                            }
				  else{
							if(!reg1.test($(obj).val().substr(0,1))){
							 $("#tsUser").html("用户名大写字母开头，请重新输入");
							 $("#tsUser").removeClass().addClass("onClass3");
							 }else{
						   $("#tsUser").html("输入你的名字，张三如'ZhSan'");
						   $("#tsUser").removeClass().addClass("onClass1");
							      }
	    }	
		
	                     }
   	
	
	
	   
	 // onkeyup 按键松开时 psd
   function PWCKWd(obj,e){
	     var evt = e || event;
         var currKey = evt.keyCode || evt.which || evt.charCode;
	   if(!$(obj).val()){return;}   
	   if ($(obj).val().length > 19) {
								  $("#tsPwd").html("密码长度不会大于20");
								  $("#tsPwd").removeClass().addClass("onClass3");
								  return;
         }
	 if(currKey.keyCode==8){
		 if(!$.trim($(obj).val()))
		     $("#tsPwd").html("姓名全拼+4位数，如'zhangsan1001'"); 
		 	 $("#tsPwd").removeClass().addClass("onClass1");
		 return;
		 }
		 
       if(!$.trim($(obj).val())){ 
		 $("#tsPwd").html("密码格式不正确，小写字母开头'"); 
		 $("#tsPwd").removeClass().addClass("onClass1");
	                          }
	    if(!reg2.test($(obj).val().substr(0,1))){
		         $("#tsPwd").html("密码小写字母开头,请重新输入");
		  		 $("#tsPwd").removeClass().addClass("onClass3");
		                            }else{
						   $("#tsPwd").html("姓名全拼+4位数，如'zhangsan1001'");
						   $("#tsPwd").removeClass().addClass("onClass1");
							      }
			   }			


	//账户密码数组
var usserPwd=["mazhaowei0526","lichangcun0101","liuyanmei0102","songjiamin0825","sunfulong0103","likaikai0104","zhoujunhan0105","fenglulu0143","mabaoli0109","sunqimei0112","lihan0114","liuzhihai0113","changjun0119","songcheng0134","wangjing0122","wangjichun0115",];	
var usersName=["MZhaowei","LChangcun","LYanmei","SJiamin","SFulong","LKaikai","ZhJunhan","FLulu","MBaoli","SQimei","LHan","LZhihai","ChJun","SCheng","WJing","WJichun",];
var usersPwd=["mazhaowei0526","lichangcun0101","liuyanmei0102","songjiamin0825","sunfulong0103","likaikai0104","zhoujunhan0105","fenglulu0143","mabaoli0109","sunqimei0112","lihan0114","liuzhihai0113","changjun0119","songcheng0134","wangjing0122","wangjichun0115",];
var userName=["MZhaowei","LChangcun","LYanmei","SJiamin","SFulong","LKaikai","ZhJunhan","FLulu","MBaoli","SQimei","LHan","LZhihai","ChJun","SCheng","WJing","WJichun",];
var userPwd=["mazhaowei0526","lichangcun0101","liuyanmei0102","songjiamin0825","sunfulong0103","likaikai0104","zhoujunhan0105","fenglulu0143","mabaoli0109","sunqimei0112","lihan0114","liuzhihai0113","changjun0119","songcheng0134","wangjing0122","wangjichun0115",];


	  //数组遍历验证跳转 
       function checktsUser(){ 
      	for(var i=0;i<usersName.length;i++){
			   if($("#usr").val()==usersName[i] ){
				$("#tsUser").html("用户名输入正确");
				$("#tsUser").removeClass().addClass("onClass2");
				   return;  } 
							}
	       $("#tsUser").html("没有您输入的用户名，请检查");
	 	   $("#tsUser").removeClass().addClass("onClass3");
 
		}

		 function checktsPwd(){ 
	for(var i=0;i<usersName.length;i++){
		   if($("#psd").val()==usersPwd[i]){
			 $("#tsPwd").html("密码输入正确"); 
	         $("#tsPwd").removeClass().addClass("onClass2");
			   return;
			   }
		}
		$("#tsPwd").html("密码不正确，请检查"); 
	    $("#tsPwd").removeClass().addClass("onClass3");
		}
   
   
   
     function checktsUserkong(){ 
	 
			if($("#usr").val()=="") {
					$("#tsUser").html("用户名不能为空"); 
					$("#tsUser").removeClass().addClass("onClass3");
				   return true;
		   }  
		   return false;
	 }
  
      function checktsPwdkong(){ 
	 
		  if($("#psd").val()=="") {
				  $("#tsPwd").html("密码不能为空");   
				  $("#tsPwd").removeClass().addClass("onClass3");
				 return true;
		 }  
		 return false;
	 }
  
  
  
   // onblur 失去焦点时 user
	function USCkLK(obj){
		 if  ( checktsUserkong()) {
		     return;
		 }else{
			 
			    	
		       checktsUser();
			 }
	                   }
						
	// onblur 失去焦点时 psd
	function PWCkLK(obj){
		 if  ( checktsPwdkong()) {
		     return;
		 }else{
		       checktsPwd();
			 }
	                   }
	
	
function checkUserPwd() {
    if (checktsUserkong() && checktsPwdkong()) {
        alert("您可能没有帐密权限,请与管理员联系");
    }
    if (checktsUserkong()) {
        checktsPwdkong();
        return;
    } else if (checktsPwdkong()) {
        return;
    }
    for (var i = 0; i < usersName.length; i++) {

        if ($("#usr").val() == usersName[i] && $("#psd").val() == usersPwd[i]) {
            window.location.href = "OurStory/ImageWall/ImageWall.html";
            return;
        }
    }
    alert("您输入的不正确或没有您输入的的帐密,请与管理员联系");
}


						
				