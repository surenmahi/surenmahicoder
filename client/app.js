var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl:'/views/home.html',
    controller:'HomeController'
  }).when('/direction',{
    templateUrl:'/views/location.html',
    controller:'HomeController'
  });
});
