var map;

function init(){
    map = new google.maps.Map(document.getElementById('canvas'), {
    center: new google.maps.LatLng(42.497938, -87.956880),//Setting Initial Position
    zoom: 17,

  });
}

google.maps.event.addDomListener(window, 'load', init);


google.maps.event.addDomListener(document.getElementById('button1'), 'click', function () {
map.setCenter(new google.maps.LatLng(42.497938, -87.956880));
map.setZoom(17);
map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
});

google.maps.event.addDomListener(document.getElementById('button2'), 'click', function () {
    map.setCenter(new google.maps.LatLng(-50.607311, 165.971229));
    map.setZoom(15);
    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

});

google.maps.event.addDomListener(document.getElementById('button3'), 'click', function () {
    map.setCenter(new google.maps.LatLng(12.370367, 23.322272));
    map.setZoom(18);
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
});


google.maps.event.addDomListener(document.getElementById('button4'), 'click', function () {
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    map.setCenter(new google.maps.LatLng(42.658056, -87.043121));
    map.zoom(18);
    
});

//Bristol Renicance Faire 42.497938, -87.956880
//Disapointment Island -50.607311, 165.971229
// sudan 12.370367 23.322272
// state boarder 42.658056 -87.043121
