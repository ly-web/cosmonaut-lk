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
	function lang_init(loop){for(var i=1;i<=loop;i++)eval('$(\'N'+(i<10?'0'+i:i)+'\').innerHTML=lang.N'+(i<10?'0'+i:i)+'[language];');}
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
		str+="<div class='title'><div class='r1 color'></div><div class='r2 color'></div><div class='r3 color'></div><div class='r4 color'></div>";
		str+="<div class='content color'><span id='"+tid+"'></span></div>";
		str+="<div class='r4 color'></div><div class='r3 color'></div><div class='r2 color'></div><div class='r1 color'></div></div><div class='blank'></div>";
		document.write(str);
	}
	function show_sT(tid)
	{
		var str='';
		str+="<div class='title'><div class='subtitle'><div class='r1 subcolor'></div><div class='r2 subcolor'></div><div class='r3 subcolor'></div><div class='r4 subcolor'></div>";
		str+="<div class='content subcolor subcontent'><span id='"+tid+"'></span></div>";
		str+="<div class='r4 subcolor'></div><div class='r3 subcolor'></div><div class='r2 subcolor'></div><div class='r1 subcolor'></div></div><div class='line_short'></div></div>";
		document.write(str);
	}
	window.document.onkeydowm=show_nbsp;
	function SelectYear()
	{
		for(i=2000;i<=2099;i++)
		{
			document.write('<option value=\''+i+'\'>'+i+'</option>');
		}
	}
	function SelectMonth()
	{
		for(i=1;i<=12;i++)
		{
			if(i<10)document.write('<option value=\''+i+'\'>0'+i+'</option>');
			else document.write('<option value=\''+i+'\'>'+i+'</option>');
		}
	}
	function CheckDay(Y,M,D)
	{
		var YearNo,MonthNo,DayNo;
		try
		{
			YearNo=$(Y).value;
			MonthNo=$(M).value;
		}
		catch(e)
		{
			var datenow=new Date();
			YearNo=datenow.getFullYear();
			MonthNo=datenow.getMonth()+1;
		}
		var i,DayCount;
		if(MonthNo==1||MonthNo==3||MonthNo==5||MonthNo==7||MonthNo==8||MonthNo==10||MonthNo==12)
		{
			DayCount=31;
		}
		if(MonthNo==4||MonthNo==6||MonthNo==9||MonthNo==11 )
		{
			DayCount=30;
		}
		if(MonthNo==2)
		{
			if(IsRunY(YearNo))
			{
				DayCount=29;
			}
			else
			{
				DayCount=28;
			}
		}
		$(D).length=DayCount;
		var currentDay=new Date().getDate();
		for(i=0;i<DayCount;i++)
		{
			$(D)[i]=new Option(i+1);
			$(D)[i].value=i+1;
			$(D)[i].innerHTML=i<9?'0'+(i+1):(i+1);
			if(currentDay==(i+1))
			$(D)[i].selected=true;
		}
	}
	function IsRunY(YearNo)
	{
		if((YearNo%4==0&&YearNo%100!=0)||YearNo%400==0)return true;
		else return false;
	}
	var PagerView=function(id,AAA,BBB,CCC)
	{
		var self=this;
		this.id=id;
		this._pageCount=0;
		this._start=1;
		this._end=1;
		this.container=null;
		this.index=1;
		this.size=10;
		this.maxButtons=10;
		this.itemCount=0;
		this.onclick=function(index){return true;};
		this._onclick=function(index)
		{
			var old=self.index;
			self.index=index;
			if(self.onclick(index)!==false)self.render();
			else self.index=old;
		};
		this._calculate=function()
		{
			self._pageCount=parseInt(Math.ceil(self.itemCount/self.size));
			self.index=parseInt(self.index);
			if(self.index>self._pageCount)self.index=self._pageCount;
			if(self.index<1)self.index=1;
			self._start=Math.max(1,self.index-parseInt(self.maxButtons/2));
			self._end=Math.min(self._pageCount,self._start+self.maxButtons-1);
			self._start=Math.max(1,self._end-self.maxButtons+1);
		};
		this.page=function(rows)
		{
			self._calculate();
			var s_num=(self.index-1)*self.size ;
			var e_num=self.index*self.size;
			return rows.slice(s_num,e_num);
		};
		this.render=function()
		{
			var div=document.getElementById(self.id);
			div.view=self;
			self.container=div;
			self._calculate();
			var str='';
			str+='<div class="PagerView">\n';
			if(self._pageCount>1)
			{
				if(self.index!=1)
				{
					str+='<a href="javascript://1"><span>|&lt;</span></a>';
					str+='<a href="javascript://'+(self.index-1)+'"><span>&lt;&lt;</span></a>';
				}
				else
				{
					str+='<span>|&lt;</span>';
					str+='<span>&lt;&lt;</span>';
				}
			}
			for(var i=self._start;i<=self._end;i++)
			{
				if(i==this.index)
				{
					if(i<10)str+='<span class="on">'+'0'+i+"</span>";
					else str+='<span class="on">'+i+"</span>";
				}
				else
				{
					if(i<10)str+='<a href="javascript://'+i+'"><span>'+'0'+i+"</span></a>";
					else str+='<a href="javascript://'+i+'"><span>'+i+"</span></a>";
				}
			}
			if(self._pageCount>1)
			{
				if(self.index!=self._pageCount)
				{
					str+='<a href="javascript://'+(self.index+1)+'"><span>&gt;&gt;</span></a>';
					str+='<a href="javascript://'+self._pageCount+'"><span>&gt;|</span></a>';
				}
				else
				{
					str+='<span>&gt;&gt;</span>';
					str+='<span>&gt;|</span>';
				}
			}
			str+=AAA+self._pageCount+BBB+self.itemCount+CCC;
			str+='</div><!--/.pagerView-->\n';
			self.container.innerHTML=str;
			var a_list=self.container.getElementsByTagName('a');
			for(var i=0;i<a_list.length;i++)
			{
				a_list[i].onclick=function()
				{
					var index=this.getAttribute('href');
					if(index!=undefined&&index!='')
					{
						index=parseInt(index.replace('javascript://',''));
						self._onclick(index);
					}
					return false;
				};
			}
		};
	};