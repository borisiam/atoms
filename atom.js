// var electron = document.querySelector("#electron");
// var core = document.querySelector("#core");
// var ang = 0;
// var ang2 = 0;
// var i =0;
// var c =0;

// setInterval(function(){

// 	var k = Math.sin(i)*40;
// 	electron.style.left = String(Math.sin(ang)*20 + 100 + k)+"px";
// 	core.style.left = String(k+92.5)+"px";

// 	ang2 +=0.05;
// 	i += 0.008;

// 	var j = Math.cos(c)*40;
// 	electron.style.top = String(Math.cos(ang)*20 + 100 + j)+"px";
// 	core.style.top = String(j+95)+"px";

// 	ang +=0.05;
//     c += 0.008;

// },5);

// // second atom

// var electron1 = document.querySelector("#electron1");
// var electron1k = document.querySelector("#electron1k");
// var core1 = document.querySelector("#core1");
// var ang1 = 0;
// var ang21 = 0;
// var i1 =0;
// var c1 =0;

// setInterval(function(){

// 	var k = Math.cos(i1)*100;
// 	electron1.style.left = String(Math.sin(ang1)*20 + 100 + k)+"px";
// 	electron1k.style.left = String(Math.cos(ang1)*30 + 100 + k)+"px";
// 	core1.style.left = String(k+92.5)+"px";

// 	ang21 +=0.05;
// 	i1 += 0.008;

// 	var j = Math.sin(c1)*100;
// 	electron1.style.top = String(Math.cos(ang1)*20 + k + 100 + j)+"px";
// 	electron1k.style.top = String(Math.sin(ang1)*30 + k + 100 + j)+"px";
// 	core1.style.top = String(j+95+k)+"px";

// 	ang1 +=0.05;
//     c1 += 0.008;

// },5);

// EXPERIMENTS
function createAtom () {
	var electron = document.createElement("div");
	electron.classList.add("atom", "electron");
	document.body.appendChild(electron);

	var electron1k = document.createElement("div");
	electron1k.classList.add("atom", "electron");
	document.body.appendChild(electron1k);

	var core1 = document.createElement("div");
	core1.classList.add("atom", "core1");
	document.body.appendChild(core1);

	var ang1 = 0;
	var ang21 = 0;
	var i1 =0;
	var c1 =0;

	var p = Math.floor(Math.random()*600);
	var o = Math.floor(Math.random()*600);

	var onOff = Math.round(Math.random());
	var onOffright = Math.round(Math.random());
	var onOffleft = Math.round(Math.random());

	setInterval(function(){
	
		var sinBlock = 1;
		var cosBlock = 0;
		if (onOffleft == 1) {
			sinBlock = 0;
		}else{
			cosBlock = 0;
		};
		var k = Math.cos(i1)*p;
		var b = Math.sin(i1)*p;
		electron.style.left = String(Math.sin(ang1)*20 + o + (k*cosBlock) + (b*sinBlock))+"px";
		electron1k.style.left = String(Math.cos(ang1)*30 + o + (k*cosBlock) + (b*sinBlock))+"px";
		core1.style.left = String((k*cosBlock) + (b*sinBlock) + o*0.98)+"px";

		ang21 +=0.05;
		i1 += 0.008;

	
		var sinBlockr = 0;
		var cosBlockr = 1;
		if (onOffright == 1) {
			sinBlockr = 0;
		}else{
			cosBlockr = 0;
		};


		var j = Math.sin(c1)*p;
		var x = Math.cos(i1)*p;
		electron.style.top = String(Math.cos(ang1)*20 + (k*onOff) + o + (j*sinBlockr) + (x*cosBlockr))+"px";
		electron1k.style.top = String(Math.sin(ang1)*30 + (k*onOff) + o + (j*sinBlockr) + (x*cosBlockr))+"px";
		core1.style.top = String((j*sinBlockr) + (x*cosBlockr) + o*0.98+ (k*onOff))+"px";

		ang1 +=0.05;
	    c1 += 0.008;

	},5);
};



for(var i = 0; i < 30; i++){
	createAtom();
}


