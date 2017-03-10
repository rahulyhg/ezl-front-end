var app = angular.module("dashboard", ["ngRoute"]);

app.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 100);
});

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider

      .when('/', {
         templateUrl : './dashboard/db_home.html',
         controller : 'db_homeController'
      })

      .when('/news', {
         templateUrl : './dashboard/db_new_post.html',
         controller : 'db_new_postController'
      });
}]);

app.controller('db_homeController', function($scope) {
   $scope.message = 'db_home controller is working';
   $scope.bShow = false;
});

app.controller('db_new_postController', function($scope) {
   $scope.message = 'db_new_post controller is working';
});

app.directive("dbNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/db_header.html" 
   };
});

app.directive("dbFooter", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/db_footer.html"
   };
});