//JavaScript file for the Games page
//https://javascript.info/cross-window-communication
var domain = 'https://zachary-millette.github.io';

//Default slide index for each slide-show
var pbSI = 0;
var prSI = 0;
var ntSI = 0;
var aonSI = 0;
var ffSI = 0;


//When this page loads the following will execute
window.onload = function(){
	//console.log(window.parent);
	window.parent.postMessage('games', domain);
	//Initialize each slide-sshow by calling the respective function
	showPBSlide(pbSI);
	showPRSlide(prSI);
	showNTSlide(ntSI);
	showAONSlide(aonSI);
	showFFSlide(ffSI);
}


//Function for handling next and previous arrows
function plusSlides(n, name){
	if(name == 'pb'){
		pbSI += n;
		showPBSlide(pbSI);
	}
	else if(name == 'pr'){
		prSI += n;
		showPRSlide(prSI);
	}
	else if(name == 'nt'){
		ntSI += n;
		showNTSlide(ntSI);
	}
	else if(name == 'aon'){
		aonSI += n;
		showAONSlide(aonSI);
	}
	else if(name == 'ff'){
		ffSI += n;
		showFFSlide(ffSI);
	}
}


//Project Backfire Sldies
function showPBSlide(n){
	var i, pbSlides, pbThumbs;
	
	//Store all elements with the pbSlide class name
	pbSlides = document.getElementsByClassName("pbSlide");
	//Store all elements with the pbThumb class name
	pbThumbs = document.getElementsByClassName("pbThumb");
	
	//Handle n becoming greater than the number of slides
	if(n >= pbSlides.length){pbSI = 0;}
	//Handle if n goes below 0
	else if(n < 0){pbSI = pbSlides.length - 1;}
	//if neither is the case
	else{pbSI = n;}
	
	//Set all slides to display none
	for(i = 0; i < pbSlides.length; i++){
		pbSlides[i].style.display = "none";
	}
	
	//Set the thumbs to not be the current slide
	for(i = 0; i < pbThumbs.length; i++){
		pbThumbs[i].className = pbThumbs[i].className.replace(" currentSlide", "");
	}
	
	//Show the current images and add on to the thumb className
	pbSlides[pbSI].style.display = "block";
	pbThumbs[pbSI].className += " currentSlide";
}


//Project RedTide Slides
function showPRSlide(n){
	var i, prSlides, prThumbs;
	
	prSlides = document.getElementsByClassName('prSlide');
	prThumbs = document.getElementsByClassName('prThumb');
	
	if(n >= prSlides.length){prSI = 0;}
	else if(n < 0){prSI = prSlides.length - 1;}
	else{prSI = n;}
	
	for (i = 0; i < prSlides.length; i++){
		prSlides[i].style.display = "none";
	}
	
	for(i = 0; i < prThumbs.length; i++){
		prThumbs[i].className = prThumbs[i].className.replace(" currentSlide", "");
	}
	
	prSlides[prSI].style.display = "block";
	prThumbs[prSI].className += " currentSlide";
	
}


//Night Terrors Slides
function showNTSlide(n){
	var i, ntSlides, ntThumbs;
	
	ntSlides = document.getElementsByClassName('ntSlide');
	ntThumbs = document.getElementsByClassName('ntThumb');
	
	if(n >= ntSlides.length){ntSI = 0;}
	else if(n < 0){ntSI = ntSlides.length - 1;}
	else{ntSI = n;}
	
	for (i = 0; i < ntSlides.length; i++){
		ntSlides[i].style.display = "none";
	}
	
	for(i = 0; i < ntThumbs.length; i++){
		ntThumbs[i].className = ntThumbs[i].className.replace(" currentSlide", "");
	}
	
	ntSlides[ntSI].style.display = "block";
	ntThumbs[ntSI].className += " currentSlide";
	
}


//AON Slides
function showAONSlide(n){
	var i, aonSlides, aonThumbs;
	
	aonSlides = document.getElementsByClassName('aonSlide');
	aonThumbs = document.getElementsByClassName('aonThumb');
	
	if(n >= aonSlides.length){aonSI = 0;}
	else if(n < 0){aonSI = aonSlides.length -1;}
	else{aonSI = n;}
	
	for (i = 0; i < aonSlides.length; i++){
		aonSlides[i].style.display = "none";
	}
	
	for(i = 0; i < aonThumbs.length; i++){
		aonThumbs[i].className = aonThumbs[i].className.replace(" currentSlide", "");
	}
	
	aonSlides[aonSI].style.display = "block";
	aonThumbs[aonSI].className += " currentSlide";
	
}


//FF Slides
function showFFSlide(n){
	var i, ffSlides, ffThumbs;
	
	ffSlides = document.getElementsByClassName('ffSlide');
	ffThumbs = document.getElementsByClassName('ffThumb');
	
	if(n >= ffSlides.length){ffSI = 0;}
	else if(n < 0){ffSI = ffSlides.length -1;}
	else{ffSI = n;}
	
	for (i = 0; i < ffSlides.length; i++){
		ffSlides[i].style.display = "none";
	}
	
	for(i = 0; i < ffThumbs.length; i++){
		ffThumbs[i].className = ffThumbs[i].className.replace(" currentSlide", "");
	}
	
	ffSlides[ffSI].style.display = "block";
	ffThumbs[ffSI].className += " currentSlide";
	
}



















