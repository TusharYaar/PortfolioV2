skills_section_timeline.add({
  targets: "#skill_text_heading > h2",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 400,
});
skills_section_timeline.add({
  targets: "#skill_text_heading > span",
  opacity: [0, 1],
  translateY: [-50, 0],
  easing: "easeInOutQuad",
  duration: 400,
});
skills_section_timeline.add({
  targets: ".skill_heading > div",
  width: ["0%", "100%"],
  duration: 700,
  easing: "easeInOutQuad",
  delay: function (el, i) {
    return i * 70;
  },
});
skills_section_timeline.add({
  targets: ".skill_heading > p",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 10,
});

skills_section_timeline.add({
  targets: ".skill_heading > div",
  width: ["100%", "0%"],
  duration: 700,
  left: "100%",
  easing: "easeInOutQuad",
  delay: function (el, i) {
    return i * 70;
  },
});
skills_section_timeline.add({
  targets: ".skill_body > p",
  opacity: [0, 1],
  translateY: [-50, 0],
  easing: "easeInOutQuad",
  duration: 400,
  delay: function (el, i) {
    return i * 50;
  },
});
const skillsSectionObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true && !skills_section_timeline_play) {
      skills_section_timeline_play = true;
      skills_section_timeline.play();
    }
  },
  { threshold: [0.4] }
);

skillsSectionObserver.observe(document.getElementById("all_skills"));
