/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/tailgrids-projects/view.js ***!
  \****************************************/
jQuery(document).ready(function ($) {
  $('.button-tab').click(function () {
    var category = $(this).data('cat');
    var project = $('.project-card');
    $('.button-tab').removeClass('active');
    $(this).addClass('active');
    project.filter(function () {
      return $(this).data('project') === category;
    }).show();
    project.filter(function () {
      return $(this).data('project') !== category;
    }).hide();
    if (category === "all") {
      project.show();
    }
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map