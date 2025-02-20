//your JS code here. If required.
let btn=document.querySelector("input");
let select=document.querySelector("#colorSelect");

btn.addEventListener("click" ,function(){

	let newsel=select.options[select.selectedIndex];
	  newsel.remove();
})
