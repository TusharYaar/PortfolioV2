about_section_timeline.add({
  targets: "#about_text_container > div",
  width: ["0%", "100%"],
  easing: "easeInOutQuad",
  delay: function (el, i, l) {
    return i * 100;
  },
});
about_section_timeline.add({
  targets: "#about_text_container > p",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 10,
});

about_section_timeline.add({
  targets: "#about_text_container > div",
  width: ["100%", "0%"],
  left: "100%",
  easing: "easeInOutQuad",
  delay: function (el, i, l) {
    return i * 100;
  },
});

const scrollObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true && !about_section_timeline_play) {
      about_section_timeline_play = true;
      about_section_timeline.play();
    }
  },
  { threshold: [0.4] }
);

scrollObserver.observe(document.getElementById("about_text_container"));
