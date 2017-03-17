var app = angular.module("ezlApp", ["ngRoute"]);

// Delayed Foundation Reinitialization
app.run(function($rootScope, $timeout) {
     $rootScope.$on('$viewContentLoaded', function () {
            $timeout(function(){
              $(document).foundation();
            },300)
        });
});

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: './pages/home.html',
      controller: 'mainController'
    })

    .when('/news', {
      templateUrl: './pages/news.html',
      controller: 'newsController'
    })

    .when('/stats', {
      templateUrl: './pages/stats/stats.html',
      controller: 'statsController'
    })

    .when('/scoreboard', {
      templateUrl: './pages/stats/scoreboard.html',
      controller: 'scoreboardController'
    })

    .when('/schedule', {
      templateUrl: './pages/stats/schedule.html',
      controller: 'scheduleController'
    })

    .when('/standings', {
      templateUrl: './pages/stats/standings.html',
      controller: 'standingsController'
    })

    .when('/roster', {
      templateUrl: './pages/roster.html',
      controller: 'rosterController'
    })

    .when('/sponsors', {
      templateUrl: './pages/sponsors.html',
      controller: 'sponsorsController'
    })

    .when('/user_profile', {
      templateUrl: './pages/profile/user_profile.html',
      controller: 'user_profileController'
    })

    .when('/player_stats', {
      templateUrl: './pages/profile/player_stats.html',
      controller: 'player_statsController'
    })

    .when('/apply', {
      templateUrl: './pages/profile/apply.html',
      controller: 'applyController'
    })

    .when('/settings', {
      templateUrl: './pages/profile/settings.html',
      controller: 'settingsController'
    })

    .when('/register', {
      templateUrl: './pages/register.html',
      controller: 'registerController'
    })

    .when('/login', {
      templateUrl: './pages/login.html',
      controller: 'loginController'
    });
}]);

app.controller('mainController', function ($scope) {
  $scope.message = 'Main Controller is working!';
  $scope.bShow = false;
});

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

app.directive("mainNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/header.html",
      link: link
   };

   function link($scope, $element, $attr){
      (function ($) {
        // If link has dropdown, add submenu toggle
        $('nav ul li a:not(:only-child)').hover(function (i) {
          $(this).siblings('.nav-dropdown').show();
          // Close one dropdown when selecting another
          $('.nav-dropdown').not($(this).siblings()).hide();
          i.stopPropagation();
        });
        // Clicking html will remove the dropdown class
        $('html').click(function () {
          $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
          $('nav ul').slideToggle();
        });
        // Hamburger toggle
        $('#nav-toggle').on('click', function () {
          this.classList.toggle('active');
        });
      }(jQuery));
  };
});

app.directive("mainFooter", function () {
  return {
    restrict: "AECM",
    templateUrl: "./include/footer.html"
  };
});
