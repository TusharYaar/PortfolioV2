initial_timeline.add({
  targets: ".name_section_letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 500 + 30 * i,
});

initial_timeline.add({
  targets: "#sidebar",
  width: 90,
  easing: "easeOutExpo",
  duration: 1000,
});
initial_timeline.add({
  targets: ".social_icon",
  translateY: [-300, 0],
  duration: 500,
  delay: (el, i) => 300 * i,
  easing: "easeOutExpo",
  direction: "normal",
  loop: 0,
});
