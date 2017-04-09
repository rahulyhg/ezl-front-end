var db_app = angular.module("dashboard", ["ngRoute"])
    .controller('db_homeController', ['$scope', function dashboardApp($scope) {
      $scope.message = 'db_home controller is working';
      $scope.bShow = false;
}]);

db_app.controller('db_new_postController', function($scope) {
   $scope.message = 'db_new_post controller is working';
});

// Delayed Foundation Reinitialization
db_app.run(function($rootScope, $timeout) {
     $rootScope.$on('$viewContentLoaded', function () {
            $timeout(function(){
              $(document).foundation();
            },300)
        });
});
