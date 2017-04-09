var app = angular.module("ezlApp", ["ngRoute"])
    .controller('mainController', ['$scope', function mainApp($scope) {
      $scope.message = 'Main Controller is working!';
      $scope.bShow = false;
}]);

app.controller('newsController', function ($scope) {
  $scope.message = 'news controller is working';
});

app.controller('statsController', function ($scope) {
  $scope.message = 'Stats controller is working';
});

app.controller('scoreboardController', function ($scope) {
  $scope.message = 'Scoreboard controller is working';
});

app.controller('scheduleController', function ($scope) {
  $scope.message = 'Schedule controller is working';
});

app.controller('standingsController', function ($scope) {
  $scope.message = 'Standings controller is working';
});

app.controller('rosterController', function ($scope, $http) {
  $scope.message = 'roster controller is working';

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

app.controller('sponsorsController', function ($scope) {
  $scope.message = 'Sponsors controller is working';
});

app.controller('user_profileController', function ($scope) {
  $scope.message = 'user_profile controller is working';
});

app.controller('player_statsController', function ($scope) {
  $scope.message = 'player_stats controller is working';
});

app.controller('applyController', function ($scope) {
  $scope.message = 'apply controller is working';
});

app.controller('settingsController', function ($scope) {
  $scope.message = 'settings controller is working';
});

// Delayed Foundation Reinitialization
app.run(function ($rootScope, $timeout) {
  $rootScope.$on('$viewContentLoaded', function () {
    $timeout(function () {
      $(document).foundation();
    }, 300)
  });
});
