//This is the JavaScript file for the Overlay


//Global Variables
/*	Canvas is triaged for the meantime
var cnvas;
var context;


window.onload = function(){
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.fillStyle = '#404E4D';
	context.fillRect(0,0, canvas.width, canvas.height);
}
*/

//Function that is called when a menu selection is made
function openTab(evt){
	//All tabs are stored in an array
	var overlayTabs;
	overlayTabs = document.getElementsByClassName("overlayTab");
	
	//This function loops through each tab and ensures it is not active
	for(i = 0; i < overlayTabs.length; i++){
		overlayTabs[i].className = overlayTabs[i].className.replace(" active", ""); 
	}
	
	//Set the tab that was selected to be active
	evt.currentTarget.className += " active";
}


//When the page is changed from one of the home elements the highlighted tab won't change.
//This function addresses that issue.
/*
function changePage(name){
	
	switch(name){
		case 'games':
			console.log('games');
			var doc = document.getElementById('gamesTab');
			if(doc == null){console.log('null');}
			break;
		case 'devlog':
			break;
		case 'tuts':
			break;
	}
	
}
*/