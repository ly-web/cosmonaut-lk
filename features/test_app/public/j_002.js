	var $=function(o){return document.getElementById(o);};
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
