	var $=function(o){return document.getElementById(o);};
	var spp10=function(o){return parseInt(parseFloat($(o).value)*10);};
	var spp100=function(o){return parseInt(parseFloat($(o).value)*100);};
	var spp1k=function(o){return parseInt(parseFloat($(o).value)*1000);};
	var check1=true;var check2=true;var check3=true;var check4=true;
	var check5=true;var check6=true;var check7=true;var check8=true;
	var check9=true;var check10=true;var check11=true;var check12=true;
	function ture_or_flase(){if(check1&&check2&&check3&&check4&&check5&&check6&&check7&&check8&&check9&&check10&&check11&&check12)return true;else return false;}
	var rtn=ture_or_flase();
	function show_tip(obj){$('tip').innerHTML=obj;}
	function show_nbsp(){$('tip').innerHTML='&nbsp;';}
	//需要将'\'转换为'\\'
	function lang_init(loop){for(var i=1;i<=loop;i++)eval('$(\'N'+(i<10?'0'+i:i)+'\').innerHTML=lang.N'+(i<10?'0'+i:i)+'[language];');}
	//需要将'\'转换为'\\'
	function lang_init_ex(st,end){for(var i=st;i<=end;i++)eval('$(\'N'+(i<10?'0'+i:i)+'\').innerHTML=lang.N'+(i<10?'0'+i:i)+'[language];');}
	var FromMobileDevice=false;
	function FromWhichDevice()
	{
		var sUserAgent=navigator.userAgent.toLowerCase();
		var Ipad=sUserAgent.match(/ipad/i)=='ipad';
		var IphoneOs=sUserAgent.match(/iphone os/i)=='iphone os';
		var Android=sUserAgent.match(/android/i)=='android';
		var WindowsPhone=sUserAgent.match(/windows phone/i)=='windows phone';
		if(Ipad||IphoneOs||Android||WindowsPhone)FromMobileDevice=true;
		else FromMobileDevice=false;
	}
	function resetTime()
	{
		clearTimeout(myTime);
		myTime=setTimeout('Timeout()',600000);
	}
	function Timeout()
	{
		parent.document.location.href='Login.html';
	}
	var myTime=setTimeout('Timeout()',600000);
	window.document.documentElement.onmousemove=resetTime;
	function show_T(tid)
	{
		var str='';
		str+="<div class='title' style='width:90%;'><div class='r1 color'></div><div class='r2 color'></div><div class='r3 color'></div><div class='r4 color'></div>";
		str+="<div class='content color'><span id='"+tid+"'></span></div>";
		str+="<div class='r4 color'></div><div class='r3 color'></div><div class='r2 color'></div><div class='r1 color'></div></div><div class='blank'></div>";
		document.write(str);
	}
	function show_sT(tid)
	{
		var str='';
		str+="<div class='title' style='width:90%;'><div class='subtitle'><div class='r1 subcolor'></div><div class='r2 subcolor'></div><div class='r3 subcolor'></div><div class='r4 subcolor'></div>";
		str+="<div class='content subcolor subcontent'><span id='"+tid+"'></span></div>";
		str+="<div class='r4 subcolor'></div><div class='r3 subcolor'></div><div class='r2 subcolor'></div><div class='r1 subcolor'></div></div><div class='line_short'></div></div>";
		document.write(str);
	}
	function show_sT_ex(tid, id)
	{
		var str='';
		str+="<div class='title' id='"+id+"' style='display:none;width:90%'><div class='subtitle'><div class='r1 subcolor'></div><div class='r2 subcolor'></div><div class='r3 subcolor'></div><div class='r4 subcolor'></div>";
		str+="<div class='content subcolor subcontent'><span id='"+tid+"'></span></div>";
		str+="<div class='r4 subcolor'></div><div class='r3 subcolor'></div><div class='r2 subcolor'></div><div class='r1 subcolor'></div></div><div class='line_short'></div></div>";
		document.write(str);
	}
	window.document.onkeydowm=show_nbsp;
	function sendHttpReq(url, successFn)
	{
		//alert(url);	
        var xmlhttp;
        if(window.XMLHttpRequest)xmlhttp=new XMLHttpRequest();
        else xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
        xmlhttp.onreadystatechange=function()
        {
            if(xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                if(xmlhttp.responseText=='1'){successFn();}
            }
        };
        xmlhttp.open('GET',url,true);
        xmlhttp.send();
	}

