var map;
var labels = '1234'

function init(){
    map = document.getElementById('canvas');
	var location1 = new google.maps.LatLng(42.497938, -87.956880);
	var location2 = new google.maps.LatLng(-50.607311, 165.971229);
	var location3 = new google.maps.LatLng(12.370367, 23.322272);
	var location4 = new google.maps.LatLng(42.658056, -87.043121);
	
	var opt1 = {
		center: location1,
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
	};
	var opt2 = {
		center: location2,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	var opt3 = {
		center: location3,
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
	};
	var opt4 = {
		center: location4,
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	
	var content1 = '<h1>Bristol</h1><p>This is the Bristol Renaissance Faire grounds.</p>'
	var content2 = '<h1>Dissapointment Island</h1><p>This is the location of dissapointment island.</p>'
	var content3 = '<h1>Kiss Island</h1><p>This is an island that looks like lips.</p>'
	var content4 = '<h1>State Boader</h1><p>This is the border in lake michigan </p>'

	
	function makewindow(contentstr) {
		return new google.maps.InfoWindow({
			content: contentstr
		});
	}
	
	function makeMarker(loc, num){
		var marker = new google.maps.Marker({
			position: loc,
			map: myMap,
			label: labels[num],
		});
		
		return marker;
	};
	
	var myMap = new google.maps.Map(map, opt1);
	var mark = makeMarker(location1,0);
	var win = makewindow(content1);
	google.maps.event.addListener(mark, 'mouseover', function() {
    	win.open(myMap, mark);
  	});
	
	google.maps.event.addDomListener(document.getElementById('button1'), 'click', function () {
		myMap = new google.maps.Map(map, opt1);
		mark1 = makeMarker(location1, 0);
		win1 = makewindow(content1);
		google.maps.event.addListener(mark, 'mouseover', function() {
    	win1.open(myMap, mark1);
		});
	});
	google.maps.event.addDomListener(document.getElementById('button2'), 'click', function () {
		myMap = new google.maps.Map(map, opt2);
		mark2 = makeMarker(location2, 1);
		win2 = makewindow(content2);
		google.maps.event.addListener(mark2, 'mouseover', function() {
			win2.open(myMap, mark2);
		});
	});
	google.maps.event.addDomListener(document.getElementById('button3'), 'click', function () {
		myMap = new google.maps.Map(map, opt3);
		mark = makeMarker(location3, 2);
		win = makewindow(content3);
		google.maps.event.addListener(mark, 'mouseover', function() {
    	win.open(myMap, mark);
		});
	});
	google.maps.event.addDomListener(document.getElementById('button4'), 'click', function () {
		myMap = new google.maps.Map(map, opt4);
		mark = makeMarker(location4, 3);
		win = makewindow(content4);
		google.maps.event.addListener(mark, 'mouseover', function() {
    	win.open(myMap, mark);
		});
	});
	
}

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName('setimg');
	
	
	
	for(i=0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	slideIndex++;
	
	if(slideIndex > slides.length) {
		slideIndex = 1;
	}
	
	slides[slideIndex - 1].style.display = "block";
	
	setTimeout(showSlides, 5000);
}

window.addEventListener('load', init);

//Bristol Renicance Faire 42.497938, -87.956880
//Disapointment Island -50.607311, 165.971229
// sudan 12.370367, 23.322272
// state boarder 42.658056, -87.043121
