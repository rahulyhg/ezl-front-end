var fantasy_app = angular.module("fantasyApp", ["ngRoute"]);

// Delayed Foundation Reinitialization
fantasy_app.run(function($rootScope, $timeout) {
     $rootScope.$on('$viewContentLoaded', function () {
            $timeout(function(){
              $(document).foundation();
            },300)
        });
});

fantasy_app.config(['$routeProvider', function($routeProvider) {
   $routeProvider

      .when('/', {
         templateUrl : './fantasy/fantasy_join.html',
         controller : 'fantasy_joinController'
      })

      .when('/fantasy_how_to_play', {
         templateUrl : './fantasy/fantasy_how_to_play.html',
         controller : 'fantasy_how_to_playController'
      })
      
      // .when('/fantasy_join', {
      //    templateUrl : './fantasy/fantasy_join.html',
      //    controller : 'fantasy_joinController'
      // })

      .when('/fantasy_join', {
         templateUrl : './fantasy/fantasy_join.html',
         controller : 'fantasy_joinController'
      })

      .when('/fantasy_create', {
         templateUrl : './fantasy/fantasy_create.html',
         controller : 'fantasy_createController'
      });
}]);

fantasy_app.controller('fantasy_homeController', function($scope) {
   $scope.message = 'fantasy_home controller is working';
   $scope.bShow = false;
});

fantasy_app.controller('fantasy_how_to_playController', function($scope) {
   $scope.message = 'fantasy_how_to_play controller is working';
});

fantasy_app.controller('fantasy_joinController', function($scope) {
   $scope.message = 'fantasy_join controller is working';
});

fantasy_app.controller('fantasy_createController', function($scope) {
   $scope.message = 'fantasy_create controller is working';
});

fantasy_app.directive("fantasyNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_header.html",
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

fantasy_app.directive("fantasyFooter", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_footer.html"
   };
});
