let r = document.getElementById('r'),
	g = document.getElementById('g'),
	b = document.getElementById('b'),
	rHex = document.getElementById('rHex'),
	gHex = document.getElementById('gHex'),
	bHex = document.getElementById('bHex'),
	bodyBackgound = document.body,
	output = document.getElementById('output');
	
function componentToHex(x) {
  var hex = x.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

function rgbToHex() {
	red = parseInt(r.value, 10);
	green = parseInt(g.value, 10);
	blue = parseInt(b.value, 10);
	myHex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
	output.innerHTML = myHex;
	bodyBackgound.style.background = myHex;
	return myHex;
};
	
r.addEventListener("input", function(){
	rHex.innerHTML = r.value;
	rgbToHex();
}, false);

g.addEventListener("input", function(){
	gHex.innerHTML = g.value;
	rgbToHex();
}, false);


b.addEventListener("input", function(){
	bHex.innerHTML = b.value;
	rgbToHex();
}, false);