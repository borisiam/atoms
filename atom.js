
// FUNCTIONS

function generateRandIntBetween(a,b) {
	// function generates randInt in range from a to b
	// a must be strictly less than b
	//body
	if (b > a) {
		var interval = Math.floor(a + Math.random()*(b-a));
		return interval;
	}
	else
	{
		console.log ("a !< b and that is sad");
	}

};

function createAtomOfType(type){
	// This generates and returns an atom object with a custom number of electrons
	//if type = 1 - atom has 1 electron, 2 - 2 electrons, etc.
	if (type === 1){
		var electron = document.createElement("div");
		electron.classList.add("atom", "electron");
		document.body.appendChild(electron);

		var core1 = document.createElement("div");
		core1.classList.add("atom", "core");
		document.body.appendChild(core1);

		var atom = {
			core: core1,
			firstElectron: electron
		};

		return atom;

	} else if (type === 2) {
		var electron = document.createElement("div");
		electron.classList.add("atom", "electron");
		document.body.appendChild(electron);

		var electron1k = document.createElement("div");
		electron1k.classList.add("atom", "electron");
		document.body.appendChild(electron1k);

		var core1 = document.createElement("div");
		core1.classList.add("atom", "core1");
		document.body.appendChild(core1);

		var atom = {
			core: core1,
			firstElectron: electron,
			secondElectron: electron1k
		};

		return atom;

	} else {
		console.log("incorrect atom type, should be: 1 or 2");
	};

};

// MAIN

function insertAtom () {
	var oneTwo = Math.round(Math.random());

	if (oneTwo == 1) {

		var interval = generateRandIntBetween(5,10);

		var atom = createAtomOfType(1);

		var ang1 = 0;
		var ang21 = 0;
		var i1 =0;
		var c1 =0;

		var p = Math.floor(10 + Math.random()*100);
		var o = Math.floor(10 + Math.random()*document.body.offsetWidth -10);
		var randTop = Math.floor(10 + Math.random()*400);

		var onOff = Math.round(Math.random());
		var onOffright = Math.round(Math.random());
		var onOffleft = Math.round(Math.random());

		setInterval(function(){
			// Thsi part randomises direction of circular movement
			//
			var sinBlock = 1;
			var cosBlock = 1;
			if (onOffleft == 1) {
				sinBlock = 0;
			}else{
				cosBlock = 0;
			};
			var k = Math.cos(i1)*p;
			var b = Math.sin(i1)*p;
			atom.firstElectron.style.left = String(Math.sin(ang1)*20 + o + (k*cosBlock) + (b*sinBlock))+"px";
			atom.core.style.left = String((k*cosBlock) + (b*sinBlock) + o)+"px";

			ang21 +=0.05;
			i1 += 0.008;

		
			var sinBlockr = 1;
			var cosBlockr = 1;
			if (onOffright == 1) {
				sinBlockr = 0;
			}else{
				cosBlockr = 0;
			};


			var j = Math.sin(c1)*p;
			var x = Math.cos(c1)*p;
			atom.firstElectron.style.top = String(Math.cos(ang1)*20 + (k*onOff) + randTop + (j*sinBlockr) + (x*cosBlockr))+"px";
			atom.core.style.top = String((j*sinBlockr) + (x*cosBlockr) + randTop+ (k*onOff))+"px";

			ang1 +=0.05;
		    c1 += 0.008;

		},interval);
	}else{

		var interval = generateRandIntBetween(5,10);

		var atom = createAtomOfType(2);

		var ang1 = 0;
		var ang21 = 0;
		var i1 =0;
		var c1 =0;

		var p = Math.floor(10 + Math.random()*150);
		var o = Math.floor(10 + Math.random()*document.body.offsetWidth -10);
		var randTop = Math.floor(10 + Math.random()*400);

		var onOff = Math.round(Math.random());
		var onOffright = Math.round(Math.random());
		var onOffleft = Math.round(Math.random());

		setInterval(function(){
		
			var sinBlock = 1;
			var cosBlock = 1;
			if (onOffleft == 1) {
				sinBlock = 0;
			}else{
				cosBlock = 0;
			};
			var k = Math.cos(i1)*p;
			var b = Math.sin(i1)*p;
			atom.firstElectron.style.left = String(Math.sin(ang1)*20 + o + (k*cosBlock) + (b*sinBlock))+"px";
			atom.secondElectron.style.left = String(Math.cos(ang1)*30 + o + (k*cosBlock) + (b*sinBlock))+"px";
			atom.core.style.left = String((k*cosBlock) + (b*sinBlock) + o)+"px";

			ang21 +=0.05;
			i1 += 0.008;

		
			var sinBlockr = 1;
			var cosBlockr = 1;
			if (onOffright == 1) {
				sinBlockr = 0;
			}else{
				cosBlockr = 0;
			};


			var j = Math.sin(c1)*p;
			var x = Math.cos(c1)*p;
			atom.firstElectron.style.top = String(Math.cos(ang1)*20 + (k*onOff) + randTop + (j*sinBlockr) + (x*cosBlockr))+"px";
			atom.secondElectron.style.top = String(Math.sin(ang1)*30 + (k*onOff) + randTop + (j*sinBlockr) + (x*cosBlockr))+"px";
			atom.core.style.top = String((j*sinBlockr) + (x*cosBlockr) + randTop+ (k*onOff))+"px";

			ang1 +=0.05;
		    c1 += 0.008;

		},interval);
	};
};	




for(var i = 0; i < 20; i++){
	insertAtom();
}


