var db_app = angular.module("dashboard", ["ngRoute"]);

// Delayed Foundation Reinitialization
db_app.run(function($rootScope, $timeout) {
     $rootScope.$on('$viewContentLoaded', function () {
            $timeout(function(){
              $(document).foundation();
            },300)
        });
});

db_app.config(['$routeProvider', function($routeProvider) {
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

db_app.controller('db_homeController', function($scope) {
   $scope.message = 'db_home controller is working';
   $scope.bShow = false;
});

db_app.controller('db_new_postController', function($scope) {
   $scope.message = 'db_new_post controller is working';
});

db_app.directive("dbNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/db_header.html",
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

db_app.directive("dbFooter", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/db_footer.html"
   };
});
