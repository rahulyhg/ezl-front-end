//$(document).foundation()

var app = angular.module("ezlApp", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider

      .when('/', {
         templateUrl : './pages/home.html',
         controller : 'mainController'
      })

      .when('/news', {
         templateUrl : './pages/news.html',
         controller : 'newsController'
      })

      .when('/fantasy', {
         templateUrl : './pages/fantasy.html',
         controller : 'fantasyController'
      });
}]);

app.controller('mainController', function($scope) {
   $scope.message = 'main controller is working';
   $scope.bShow = false;
});

app.controller('newsController', function($scope) {
   $scope.message = 'news controller is working';
});

app.controller('fantasyController', function($scope) {
   $scope.message = 'fantasy controller is working';
});

app.directive("mainNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/header.html" 
   };
});

app.directive("mainFooter", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/footer.html"
   };
});