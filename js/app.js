$(document).foundation()

var app = angular.module('ezlGlobal');

  app.directive('adminNavBar', function(){
  	return {
        restrict: 'E',
        templateUrl: "admin-nav-bar.html"
      };
    
  });