var app = angular.module("ezlApp", ["ngRoute"]);

// Delayed Foundation Reinitialization
app.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 100);
});

// navbar
(function($) {
  $(function() {
    // If link has dropdown, add submenu toggle
    $('nav ul li a:not(:only-child)').hover(function(i) {
      $(this).siblings('.nav-dropdown').show();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      i.stopPropagation();
    });
    // Clicking html will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);

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

      // .when('/fantasy', {
      //    templateUrl : './pages/fantasy.html',
      //    controller : 'fantasyController'
      // })

      .when('/roster', {
         templateUrl : './pages/roster.html',
         controller : 'rosterController'
      });
}]);

app.controller('mainController', function($scope) {
   $scope.message = 'Main Controller is working!';
   $scope.bShow = false;
});

app.controller('newsController', function($scope) {
   $scope.message = 'news controller is working';
});

app.controller('fantasyController', function($scope) {
   $scope.message = 'fantasy controller is working';
});

app.controller('rosterController', function($scope, $http) {
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
