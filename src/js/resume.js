$(document).ready(function() {
  $('.nav-item a').on('click', function() {
    '.navbar-nav'.animate({ top: 0 }, 300);
  });
});
