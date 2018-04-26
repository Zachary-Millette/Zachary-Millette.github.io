//This is the JavaScript file for the Overlay

//Set the hometab to be active
window.onload = function(){
	document.getElementById("defaultOpen").className.replace(' active', "");
	document.getElementById("defaultOpen").className += ' active';
}

//This is for other html pages to send messages to the index.html
//This will allow the overlay to know when the iframe has loaded a new html
//info from iframe onload is blocked for security purposes
window.addEventListener('message', function(event){frameLoad(event);}, false);

function frameLoad(event){
	
	//All tabs are stored in an array
	var overlayTabs;
	overlayTabs = document.getElementsByClassName("overlayTab");
	
	//This function loops through each tab and ensures it is not active
	for(i = 0; i < overlayTabs.length; i++){
		overlayTabs[i].className = overlayTabs[i].className.replace(" active", ""); 
	}
	
	switch (event.data){
		case 'home':
			//console.log('recieved: ' + event.data);
			//get document by id .className += " active";
			document.getElementById('defaultOpen').className += ' active';
			break;
		case 'games':
			//console.log('recieved: ' + event.data);
			//get document by id .className += " active";
			document.getElementById('gamesTab').className += ' active';
			break;
		case 'devlog':
			//console.log('recieved: ' + event.data);
			//get document by id .className += " active";
			document.getElementById('devLogTab').className += ' active';
			break;
		case 'tuts':
			//console.log('recieved: ' + event.data);
			//get document by id .className += " active";
			document.getElementById('tutsTab').className += ' active';
			break;
		case 'contact':
			//console.log('recieved: ' + event.data);
			//get document by id .className += " active";
			document.getElementById('contactTab').className += ' active';
			break;
	}
	
}

//Detect when iframe is loaded to highlight the correct tab


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