$(document).ready(function(){
	function changeClothes(choices, i) {
		i = 0;
		this.Next = function() {
			choices[i].style.visibility = "hidden";
			i += 1;
			if(choices){
				if(i == (choices.length)) {
					i = 0;
				}
				choices[i].style.visibility = "visible";
			}
		}
		this.Previous = function() {
			choices[i].style.visibility = "hidden";
			i -= 1;
			if(choices){
				if(i < 0) {
					i = (choices.length - 1);
				}
				choices[i].style.visibility = "visible";
			}
		}
	}
	
	var hat = new changeClothes($(".hat"));
	document.getElementById("hat_pre").onclick = function() {hat.Previous();};
	document.getElementById("hat").onclick = function() {hat.Next();};
	
 	var hair = new changeClothes($(".hair"));
	document.getElementById("hair_pre").onclick = function() {hair.Previous();};
	document.getElementById("hair").onclick = function() {hair.Next();};
	
	var eyes = new changeClothes($(".eyes"));
	document.getElementById("eyes_pre").onclick = function() {eyes.Previous();};
	document.getElementById("eyes").onclick = function() {eyes.Next();};
	
	var neck = new changeClothes($(".neck"));
	document.getElementById("neck_pre").onclick = function() {neck.Previous();};
	document.getElementById("neck").onclick = function() {neck.Next();};
	
	var gloves = new changeClothes($(".gloves"));
	document.getElementById("gloves_pre").onclick = function() {gloves.Previous();};
	document.getElementById("gloves").onclick = function() {gloves.Next();};
	
	var top = new changeClothes($(".top"));
	document.getElementById("top_pre").onclick = function() {top.Previous();};
	document.getElementById("top").onclick = function() {top.Next();};
	
	var shoes = new changeClothes($(".shoes"));
	document.getElementById("shoes_pre").onclick = function() {shoes.Previous();};
	document.getElementById("shoes").onclick = function() {shoes.Next();};
	
	var pants = new changeClothes($(".pants"));
	document.getElementById("pants_pre").onclick = function() {pants.Previous();};
	document.getElementById("pants").onclick = function() {pants.Next();};
	
	var socks = new changeClothes($(".socks"));
	document.getElementById("socks_pre").onclick = function() {socks.Previous();};
	document.getElementById("socks").onclick = function() {socks.Next();};
	
});