var fantasy_app = angular.module("fantasy", ["ngRoute"]);

fantasy_app.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 100);
});

fantasy_app.config(['$routeProvider', function($routeProvider) {
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

fantasy_app.controller('fantasy_homeController', function($scope) {
   $scope.message = 'fantasy_home controller is working';
   $scope.bShow = false;
});

fantasy_app.controller('fantasy_joinController', function($scope) {
   $scope.message = 'fantasy_join controller is working';
});

fantasy_app.directive("fantasyNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_header.html" 
   };
});

fantasy_app.directive("fantasyFooter", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_footer.html"
   };
});