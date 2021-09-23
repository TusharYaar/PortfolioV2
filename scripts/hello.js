var loading_timeline = anime.timeline();
var updates = 0;
loading_timeline.add({
  targets: "#hello_svg >  path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3000, // chage back to 3000
  direction: "alternate",
  loop: 0,
});
loading_timeline.add({
  targets: "#hello_container",
  opacity: "0",
  easing: "easeInOutSine",
  duration: 500,
  direction: "normal",
  loop: 0,
  complete: function (anim) {
    document.getElementById("hello_container").remove();
    document.getElementById("body").style.overflow = "auto";
  },
});
