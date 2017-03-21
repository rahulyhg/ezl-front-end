fantasy_app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: './fantasy/fantasy_home.html',
      controller: 'fantasy_homeController'
    })

    .when('/fantasy_how_to_play', {
      templateUrl: './fantasy/fantasy_how_to_play.html',
      controller: 'fantasy_how_to_playController'
    })

    .when('/fantasy_room', {
      templateUrl: './fantasy/fantasy_room.html',
      controller: 'fantasy_roomController'
    })

    .when('/fantasy_join', {
      templateUrl: './fantasy/fantasy_join.html',
      controller: 'fantasy_joinController'
    })

    .when('/fantasy_draft', {
      templateUrl: './fantasy/fantasy_draft.html',
      controller: 'fantasy_draftController'
    })

    .when('/fantasy_team', {
      templateUrl: './fantasy/fantasy_team.html',
      controller: 'fantasy_teamController'
    })

    .when('/fantasy_matchup', {
      templateUrl: './fantasy/fantasy_matchup.html',
      controller: 'fantasy_matchupController'
    })

    .when('/login', {
      templateUrl: './pages/login.html',
      controller: 'loginController'
    })

    .when('/register', {
      templateUrl: './pages/register.html',
      controller: 'registerController'
    });

  // .when('/fantasy_create', {
  //    templateUrl : './fantasy/fantasy_create.html',
  //    controller : 'fantasy_createController'
  // });
}]);