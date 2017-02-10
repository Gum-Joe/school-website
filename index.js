// ES6
/**
 * Animate sidebar
 * Using jquery
 * Actual animation is done in css
 */
$(".hamburger").click(() => {
  $(".sidebar").appendClass("sidebar-animate");
  $(".main").animate({opacity: 0.5}, 10000);
});
