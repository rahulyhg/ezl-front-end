db_app.config(['$routeProvider', function($routeProvider) {
   $routeProvider

      .when('/', {
         templateUrl : './dashboard/db_home.html',
         controller : 'db_homeController'
      })

      .when('/news', {
         templateUrl : './dashboard/db_new_post.html',
         controller : 'db_new_postController'
      })
}]);
