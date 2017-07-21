var electron = document.querySelector("#electron");
var core = document.querySelector("#core");
var ang = 0;
var i =0;

setInterval(function(){

	var k = Math.cos(i)*40;
	electron.style.left = String((Math.sin(ang)*20) + (100 + k))+"px";
	core.style.left = String(k + 100)+"px";

	
	

	var j = Math.sin(i)*40;
	electron.style.top = String((Math.cos(ang)*20) + (100 + j))+"px";
	core.style.top = String(j + 100)+"px";

	ang +=0.05;
	i += 0.008;

 },5);