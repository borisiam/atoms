var electron = document.querySelector("#electron");
var core = document.querySelector("#core");
var ang = 0;
var ang2 = 0;
var i =0;
var c =0;

setInterval(function(){

	var k = Math.sin(i)*40;
	electron.style.left = String(Math.sin(ang)*20 + 100 + k)+"px";
	core.style.left = String(k+92.5)+"px";

	ang2 +=0.05;
	i += 0.008;

	var j = Math.cos(c)*40;
	electron.style.top = String(Math.cos(ang)*20 + 100 + j)+"px";
	core.style.top = String(j+95)+"px";

	ang +=0.05;
    c += 0.008;

},5);

// second atom

var electron1 = document.querySelector("#electron1");
var electron1k = document.querySelector("#electron1k");
var core1 = document.querySelector("#core1");
var ang1 = 0;
var ang21 = 0;
var i1 =0;
var c1 =0;

setInterval(function(){

	var k = Math.cos(i1)*100;
	electron1.style.left = String(Math.sin(ang1)*20 + 100 + k)+"px";
	electron1k.style.left = String(Math.cos(ang1)*30 + 100 + k)+"px";
	core1.style.left = String(k+92.5)+"px";

	ang21 +=0.05;
	i1 += 0.008;

	var j = Math.sin(c1)*100;
	electron1.style.top = String(Math.cos(ang1)*20 + k + 100 + j)+"px";
	electron1k.style.top = String(Math.sin(ang1)*30 + k + 100 + j)+"px";
	core1.style.top = String(j+95+k)+"px";

	ang1 +=0.05;
    c1 += 0.008;

},5);


