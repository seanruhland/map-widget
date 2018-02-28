// import Styles from './mapStyle'

console.log('test')
// declare map variable
var map;
// configure lat lng coordinates object
var laCoord = {lat: 34.0522, lng: -118.2437};
// configure options to style map
var mapOptions = {
	zoom: 13,
	center: laCoord,
	styles: null, // this will be dynamic based on user input of chosen style
	scrollwheel: false,
	disableDefaultUI: true
};


// google maps api callback
// this gets fired how many times?
window.initMap = function() {
	// create new instance of google maps api Map object
	// using our mapOptions
	map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Set the map's style to the initial value of the selector.

	// Apply new JSON when the user selects a different style.
	document.getElementById('style-selector').addEventListener('change', function() {
	//grab the value on the event of a selection
	var style = document.getElementById('style-selector').value;
	mapOptions.styles= Styles[style]
  	map.setOptions(mapOptions);
		console.log('map is ready')
		// google.maps.event.trigger(map, 'resize');
	});
}



  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -33.86, lng: 151.209},
  //   zoom: 13,
  //   mapTypeControl: false
  // });

  // // Add a style-selector control to the map.
  // var styleControl = document.getElementById('style-selector-control');
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

  // // Set the map's style to the initial value of the selector.
  // var styleSelector = document.getElementById('style-selector');
  // map.setOptions({styles: styles[styleSelector.value]});

  // // Apply new JSON when the user selects a different style.
  // styleSelector.addEventListener('change', function() {
  //   map.setOptions({styles: styles[styleSelector.value]});
  // });



