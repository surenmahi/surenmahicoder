angular.module('myApp').controller('HomeController' , function($rootScope,$scope,$http,$window){
  this.$window=$window;
    window.myLat;
    window.myLng;
    $scope.myLatitude;
    $scope.myLongitude;
    $scope.initMap=function(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
      window.currentLocation="";
      function showPosition(position) {
        window.origin=position.coords.latitude + "," + position.coords.longitude;
        myLat=position.coords.latitude;
        myLng=position.coords.longitude;
        var mapOptions = {
          center:{lat: 13.087, lng: 80.199},
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
                    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},

                  //   {
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#f5f5f5"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "saturation": -100
                  //       },
                  //       {
                  //         "lightness": 100
                  //       },
                  //       {
                  //         "visibility": "simplified"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "elementType": "geometry.stroke",
                  //     "stylers": [
                  //       {
                  //         "saturation": 100
                  //       },
                  //       {
                  //         "lightness": 100
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "elementType": "labels.icon",
                  //     "stylers": [
                  //       {
                  //         "saturation": -100
                  //       },
                  //       {
                  //         "lightness": 45
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#616161"
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "elementType": "labels.text.stroke",
                  //     "stylers": [
                  //       {
                  //         "color": "#f5f5f5"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "administrative.land_parcel",
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#bdbdbd"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "poi",
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#eeeeee"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "poi",
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#757575"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "poi.park",
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#e5e5e5"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "poi.park",
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#9e9e9e"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road",
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#ffffff"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.arterial",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#d3d3d3"
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.arterial",
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#757575"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.highway",
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#dadada"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.highway",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#b6b6b6"
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.highway",
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#616161"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.highway.controlled_access",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.local",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#ffffff"
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "road.local",
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#9e9e9e"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "transit.line",
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#e5e5e5"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "transit.line",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "transit.station",
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#eeeeee"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "transit.station.airport",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#e5e5e5"
                  //       },
                  //       {
                  //         "saturation": -100
                  //       },
                  //       {
                  //         "lightness": 45
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       },
                  //       {
                  //         "weight": 8
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "transit.station.bus",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#e5e5e5"
                  //       },
                  //       {
                  //         "saturation": -100
                  //       },
                  //       {
                  //         "lightness": 45
                  //       },
                  //       {
                  //         "visibility": "on"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "water",
                  //     "stylers": [
                  //       {
                  //         "saturation": 100
                  //       },
                  //       {
                  //         "lightness": 90
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "water",
                  //     "elementType": "geometry",
                  //     "stylers": [
                  //       {
                  //         "color": "#c9c9c9"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "water",
                  //     "elementType": "geometry.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#c0b7db"
                  //       }
                  //     ]
                  //   },
                  //   {
                  //     "featureType": "water",
                  //     "elementType": "labels.text.fill",
                  //     "stylers": [
                  //       {
                  //         "color": "#9e9e9e"
                  //       }
                  //     ]
                  //   }
                  // ]

//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#f5f5f5"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#f5f5f5"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#bdbdbd"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e5e5e5"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#ffffff"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dadada"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e5e5e5"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#c9c9c9"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   }
// ]

  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
        };
        window.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        window.geocoder = new google.maps.Geocoder;
        window.infowindow = new google.maps.InfoWindow;

        geocodeLatLng1(geocoder, map, infowindow);
        var marker1Options = {
                position:{lat:myLat, lng:myLng},
                animation: google.maps.Animation.DROP
              }
              window.marker1 = new google.maps.Marker(marker1Options);
      // / console.log(myLat,myLng);
       $scope.myLatitude = myLat;
       $scope.myLongitude = myLng;
       $scope.locations = [myLat,myLng];
       console.log($scope.locations);
       // directionsDisplay.setMap(map);
       var directionsService = new google.maps.DirectionsService;
       var directionsDisplay = new google.maps.DirectionsRenderer;
       var ourLocation = new google.maps.LatLng(13.087,80.099);
       directionsDisplay.setMap(map);
         calculateAndDisplayRoute(directionsService, directionsDisplay);
           $scope.redirectFun = function(){
             location.href = 'https://www.google.co.in/maps/dir/'+$scope.myLatitude+','+$scope.myLongitude+'/Pravara+Study+Hall,+254-116,+Jawaharlal+Nehru+Rd,+Saptagiri+Colony,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040/@12.8226304,78.0817167,8z/data=!3m1!4b1!4m16!1m6!3m5!1s0x3a52641b350a3b55:0x98d4557e50ffe41c!2sPravara+Study+Hall!8m2!3d13.0866505!4d80.1988324!4m8!1m1!4e1!1m5!1m1!1s0x3a52641b350a3b55:0x98d4557e50ffe41c!2m2!1d80.1988324!2d13.0866505';
           }
                            }
                          function geocodeLatLng1(geocoder, map, infowindow) {
                            var input =origin;
                            var latlngStr = input.split(',', 2);
                            var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
                            geocoder.geocode({'location': latlng}, function(results, status) {
                              if (status === 'OK') {
                                if (results[1]) {
                                  map.setZoom(18);
                                  infowindow.setContent(results[1].formatted_address);
                                  // document.getElementById("inputLocation").value=results[1].formatted_address.toString();
                                  // infowindow.open(map, marker1);

                                } else {
                                  window.alert('No results found');
                                }
                              } else {
                                window.alert('Geocoder failed due to: ' + status);
                              }
                            });
                          }


              function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                directionsService.route({
                  origin: {lat:myLat, lng:myLng},
                  destination: {lat: 13.087, lng: 80.199},
                  travelMode: 'DRIVING'
                }, function(response, status) {
                  if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                  } else {
                    window.alert('Directions request failed due to ' + status);
                  }
                });
              }


            }

});
