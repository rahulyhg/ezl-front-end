var fantasy_app = angular.module("fantasyApp", ["ngRoute"])
    .controller('fantasy_homeController', ['$scope', function fantasyApp($scope) {
      $scope.message = 'fantasy_home controller is working';
      $scope.bShow = false;
}]);

fantasy_app.controller('fantasy_how_to_playController', function($scope) {
  $scope.message = 'fantasy_how_to_play controller is working';
});

fantasy_app.controller('fantasy_roomController', function($scope) {
  $scope.message = 'fantasy_room controller is working';

  //Need to change this to make a call

  $scope.FullRoster = null; //Initialization, important to maintain scope

  $http({
    method: 'GET',
    url: 'http://173.80.170.125:8000/data/proteams'
  }).then(function success(res) {
    $scope.FullRoster = res.data; //Declaration
    //alert(JSON.stringify($scope.FullRoster));
  }, function failure(res) {
    alert("HTTP failed!");
  });
});

fantasy_app.controller('fantasy_joinController', function($scope) {
  $scope.message = 'fantasy_join controller is working';
});

fantasy_app.controller('fantasy_draftController', function($scope) {
  $scope.message = 'fantasy_draft controller is working';
});

fantasy_app.controller('fantasy_teamController', function($scope) {
  $scope.message = 'fantasy_team controller is working';
});

fantasy_app.controller('fantasy_matchupController', function($scope) {
  $scope.message = 'fantasy_matchup controller is working';
});

fantasy_app.controller('loginController', function($scope) {
  $scope.message = 'login controller is working';
});

fantasy_app.controller('registerController', function($scope) {
  $scope.message = 'Register controller is working';
});

// Delayed Foundation Reinitialization
fantasy_app.run(function ($rootScope, $timeout) {
  $rootScope.$on('$viewContentLoaded', function () {
    $timeout(function () {
      $(document).foundation();
    }, 300)
  });
});
