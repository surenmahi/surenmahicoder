var app = angular.module('mySamples',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode({
  enabled:true,
  requireBase:false
});
  $routeProvider.when('/',{
    templateUrl:'/views/home.html'
  }).otherwise({redirectTo:'/'});
});
