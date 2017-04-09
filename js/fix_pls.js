// prevents loading, needs fixing then add to ./js/fantasy.js

fantasy_app.controller('fantasy_createController', function($scope) {
  this.create = function(product) {
    this.fantasy = {
      $scope.name,
      $scope.amtOfOwners,
      $scope.NA,
      $scope.EU,
      $scope.SEA,
      $scope.EA
    };
  };


  $http({
    method: 'POST',
    url: 'http://173.80.170.125:8000/data/proteams',
    data: this.fantasy
  }).then(function success(res) {
    alert("Created!");
    fantasy = {};
  }, function failure(res) {
    alert("HTTP failed!");
  });
});
