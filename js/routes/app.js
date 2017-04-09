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
    })
}]);
