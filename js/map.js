function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9362532, 30.3221261)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var image = "../img/map-pin.svg";
  var myLatLng = new google.maps.LatLng(59.9362532, 30.3221261);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
