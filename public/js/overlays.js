//Simple script to have project box overlays fade in and out on home page
$(".project-box").hover(
  function () {
    $(this).children().fadeIn();
  },
  function () {
    $(this).children().fadeOut();
  }
);
