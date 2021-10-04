about_section_timeline.add({
  targets: "#about_text_container > div",
  width: ["0%", "100%"],
  duration: 700,
  easing: "easeInOutQuad",
  delay: function (el, i) {
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
  duration: 700,
  left: "100%",
  easing: "easeInOutQuad",
  delay: function (el, i) {
    return i * 100;
  },
});

const aboutSectionObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true && !about_section_timeline_play) {
      about_section_timeline_play = true;
      about_section_timeline.play();
    }
  },
  { threshold: [0.7] }
);

aboutSectionObserver.observe(document.getElementById("about_text_container"));
