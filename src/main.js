var map;
var styleArray = [
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"   
      }
    ]
  },
  {
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  }
];

var laCoord = {lat: 34.0522, lng: -118.2437};
var mapOptions = {zoom: 13, center: laCoord, styles:styleArray, scrollwheel: false, disableDefaultUI: true};
var infoWindow = null;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}


