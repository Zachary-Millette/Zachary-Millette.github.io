//https://javascript.info/cross-window-communication
var domain = 'https://zachary-millette.github.io';

window.onload = function(){
	//console.log(window.parent);
	window.parent.postMessage('home', 'domain');
}