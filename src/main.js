// import Styles from './mapStyle'
	
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






 // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      window.initMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        // var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        // var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindowContent.children['place-icon'].src = place.icon;
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
          infowindow.open(map, marker);

		// Apply new JSON when the user selects a different style.
		document.getElementById('style-selector').addEventListener('change', function() {
			//grab the value on the event of a selection
			var style = document.getElementById('style-selector').value;
			mapOptions.styles= styles[style];
			mapOptions.center=place.geometry.location;
			// mapOptions.center = place.geometry.viewport;
		  	map.setOptions(mapOptions);
			console.log('map is ready')
			console.log(place.geometry.location)
			// google.maps.event.trigger(map, 'resize');
		});
        });

        // setupClickListener('changetype-all', []);
        // setupClickListener('changetype-address', ['address']);
        // setupClickListener('changetype-establishment', ['establishment']);
        // setupClickListener('changetype-geocode', ['geocode']);
        // Set the map's style to the initial value of the selector.


		 var zoomInput = document.getElementById('zoomInput').addEventListener('change', function() {
		var zoomVal = $("#zoomInput").val();
		// mapOptions.setZoom= zoom[zoomVal]
		var zoomInt = parseInt(zoomVal)
	  	map.setZoom(zoomInt);
		console.log(zoomInt)
	});
// 

      //   document.getElementById('use-strict-bounds')
      //       .addEventListener('click', function() {
      //         console.log('Checkbox clicked! New state=' + this.checked);
      //         autocomplete.setOptions({strictBounds: this.checked});
      //       });
      }









// google maps api callback
// this gets fired how many times?
// window.initMap = function() {
// 	// create new instance of google maps api Map object
// 	// using our mapOptions
// 	map = new google.maps.Map(document.getElementById('map'), mapOptions);

// 	// Set the map's style to the initial value of the selector.

// 	// Apply new JSON when the user selects a different style.
// 	document.getElementById('style-selector').addEventListener('change', function() {
// 		//grab the value on the event of a selection
// 		var style = document.getElementById('style-selector').value;
// 		mapOptions.styles= styles[style]
// 	  	map.setOptions(mapOptions);
// 		console.log('map is ready')
// 		// google.maps.event.trigger(map, 'resize');
// 	});

// var zoomInput = document.getElementById('zoomInput').addEventListener('change', function() {
// 		var zoomVal = $("#zoomInput").val();
// 		// mapOptions.setZoom= zoom[zoomVal]
// 		var zoomInt = parseInt(zoomVal)
// 	  	map.setZoom(zoomInt);
// 		console.log(zoomInt)
// 	});
// }

// $( "#coordBtn" ).click(function(){
// 	var city = $('#textBoxId').val()
// 	$.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyDv0j8FlI2AV25URpSIXR76KBZyW6l56u4', responsHandler)
// 	console.log(city)
// });
// function formSubmit(){
// 	var city = $('#textBoxId').val()
// 	// j
// 	console.log(city)
// }

function responsHandler(res) {
		console.log(res) 
	}





// function GetLatlong()
//     {
//         var geocoder = new google.maps.Geocoder();
//         var address = document.getElementById('textboxid').value;

//         geocoder.geocode({ 'address': address }, function (results, status) {

//             if (status == google.maps.GeocoderStatus.OK) {
//                 var latitude = results[0].geometry.location.lat();
//                 var longitude = results[0].geometry.location.lng();

//             }
//         });
// // 

// var listener = function() {
//   window.requestAnimationFrame(function() {
//     document.querySelector("div").innerHTML = rng.value;
//   });
// };
// zoom.addEventListener("mousedown", function() {
//   listener();
//   zoom.addEventListener("mousemove", listener);
// });
// zoom.addEventListener("mouseup", function() {
//   zoom.removeEventListener("mousemove", listener);
// });
	

// 
// var zoomDiv = document.getElementById('zoom');

// var listener = function() {
//   window.requestAnimationFrame(function() {
//     document.querySelector("div").innerHTML = rng.value;
//   });
// };

// rng.addEventListener("mousedown", function() {
//   listener();
//   rng.addEventListener("mousemove", listener);
// });
// rng.addEventListener("mouseup", function() {
//   rng.removeEventListener("mousemove", listener);
// });

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

const styles = {
	default: null,
 	lightMonocrome:[
		    {
		        "featureType": "administrative.locality",
		        "elementType": "all",
		        "stylers": [
		            {
		                "hue": "#2c2e33"
		            },
		            {
		                "saturation": 7
		            },
		            {
		                "lightness": 19
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "hue": "#ffffff"
		            },
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 100
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "hue": "#ffffff"
		            },
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 100
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "hue": "#bbc0c4"
		            },
		            {
		                "saturation": -93
		            },
		            {
		                "lightness": 31
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "hue": "#bbc0c4"
		            },
		            {
		                "saturation": -93
		            },
		            {
		                "lightness": 31
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "hue": "#bbc0c4"
		            },
		            {
		                "saturation": -93
		            },
		            {
		                "lightness": -2
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "hue": "#e9ebed"
		            },
		            {
		                "saturation": -90
		            },
		            {
		                "lightness": -8
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "hue": "#e9ebed"
		            },
		            {
		                "saturation": 10
		            },
		            {
		                "lightness": 69
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "hue": "#e9ebed"
		            },
		            {
		                "saturation": -78
		            },
		            {
		                "lightness": 67
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    }
		],
 	midnightCommander: [
	    {
	        "featureType": "all",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            }
	        ]
	    },
	    {
	        "featureType": "all",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "color": "#000000"
	            },
	            {
	                "lightness": 13
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "color": "#144b53"
	            },
	            {
	                "lightness": 14
	            },
	            {
	                "weight": 1.4
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#08304b"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#0c4152"
	            },
	            {
	                "lightness": 5
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "color": "#0b434f"
	            },
	            {
	                "lightness": 25
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "color": "#0b3d51"
	            },
	            {
	                "lightness": 16
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#146474"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#021019"
	            }
	        ]
	    }
	],
 	paper: [
	    {
	        "featureType": "administrative",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "hue": "#0066ff"
	            },
	            {
	                "saturation": 74
	            },
	            {
	                "lightness": 100
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            },
	            {
	                "weight": 0.6
	            },
	            {
	                "saturation": -85
	            },
	            {
	                "lightness": 61
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "color": "#5f94ff"
	            },
	            {
	                "lightness": 26
	            },
	            {
	                "gamma": 5.86
	            }
	        ]
	    }
	],
	 	flatMap: [
	    {
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.natural",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#f5f5f2"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.man_made",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.business",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.place_of_worship",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.school",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "color": "#ffffff"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "stylers": [
	            {
	                "color": "#71c8d4"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "stylers": [
	            {
	                "color": "#e5e8e7"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "stylers": [
	            {
	                "color": "#8ba129"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#c7c7c7"
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "stylers": [
	            {
	                "color": "#a0d3d3"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "stylers": [
	            {
	                "color": "#91b65d"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "stylers": [
	            {
	                "gamma": 1.51
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road"
	    },
	    {
	        "featureType": "road"
	    },
	    {},
	    {
	        "featureType": "road.highway"
	    }
	],
		greyscaleFlat:[
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "hue": "#000000"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": -100
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "hue": "#000000"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": -100
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "all",
	        "stylers": [
	            {
	                "hue": "#000000"
	            },
	            {
	                "saturation": 0
	            },
	            {
	                "lightness": -100
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "hue": "#ffffff"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 100
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "hue": "#000000"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": -100
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "all",
	        "stylers": [
	            {
	                "hue": "#ffffff"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 100
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "hue": "#ffffff"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 100
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "hue": "#000000"
	            },
	            {
	                "saturation": 0
	            },
	            {
	                "lightness": -100
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "hue": "#000000"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": -100
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "hue": "#bbbbbb"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 26
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "hue": "#dddddd"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": -3
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    }
	], 
	paleDawn:[
	    {
	        "featureType": "administrative",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": 33
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#f2e5d4"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#c5dac6"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": 20
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "lightness": 20
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#c5c6c6"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#e4d7c6"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#fbfaf7"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#acbcc9"
	            }
	        ]
	    }
	],
	darkFlat: [
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
],
}

