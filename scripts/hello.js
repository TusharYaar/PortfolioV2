var updates = 0;
initial_timeline.add({
  targets: "#hello_svg >  path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3000, // chage back to 3000
  direction: "alternate",
  loop: 0,
  begin: function () {
    document.querySelector("#hello_svg").visiblity = "visible";
  },
});
initial_timeline.add({
  targets: "#hello_container",
  opacity: "0",
  easing: "easeInOutSine",
  duration: 500,
  direction: "normal",
  loop: 0,
  complete: function (anim) {
    document.getElementById("hello_container").remove();
    document.getElementById("body").style.overflow = "auto";
    appendProjects();
  },
});
