// navbar
(function ($) {
  $(function () {
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
  });
})(jQuery);

var fantasy_app = angular.module("fantasy", ["ngRoute"]);

fantasy_app.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 100);
});

fantasy_app.config(['$routeProvider', function($routeProvider) {
   $routeProvider

      .when('/', {
         templateUrl : './fantasy/fantasy_home.html',
         controller : 'fantasy_homeController'
      })

      .when('/join', {
         templateUrl : './fantasy/fantasy_join.html',
         controller : 'fantasy_joinController'
      });
}]);

fantasy_app.controller('fantasy_homeController', function($scope) {
   $scope.message = 'fantasy_home controller is working';
   $scope.bShow = false;
});

fantasy_app.controller('fantasy_joinController', function($scope) {
   $scope.message = 'fantasy_join controller is working';
});

fantasy_app.directive("fantasyNavBar", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_header.html"
   };
});

fantasy_app.directive("fantasyFooter", function() {
   return {
      restrict: "AECM",
      templateUrl: "./include/fantasy_footer.html"
   };
});
