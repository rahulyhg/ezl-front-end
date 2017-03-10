var app = angular.module("fantasy", ["ngRoute"]);

app.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 100);
});

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider

      .when('/', {
         templateUrl : './fantasy/fantasy_home.html',
         controller : 'fantasy_homeController'
      })

      .when('/join', {
         templateUrl : './fantasy/fantasy_join.html',
         controller : 'fantasy_joinController'
      });
}]);

app.controller('fantasy_homeController', function($scope) {
   $scope.message = 'fantasy_home controller is working';
   $scope.bShow = false;
});

app.controller('fantasy_joinController', function($scope) {
   $scope.message = 'fantasy_join controller is working';
});

app.directive("fantasyNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_header.html" 
   };
});

app.directive("fantasyFooter", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_footer.html"
   };
});