fantasy_app.directive("fantasyNavBar", function () {
  return {
    restrict: "AECM",
    templateUrl: "./include/fantasy_header.html",
    link: link
  };

  function link($scope, $element, $attr) {
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

fantasy_app.directive("fantasyFooter", function () {
  return {
    restrict: "AECM",
    templateUrl: "./include/fantasy_footer.html"
  };
});
