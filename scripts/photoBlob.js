anime({
  targets: "#photo_blob > path",
  fill: "#FAA307",
  d: [blob3, blob2, blob1, blob4],
  easing: "easeInOutQuad",
  duration: 8000,
  loop: true,
  direction: "alternate",
});

anime({
  targets: "#skills_transition_wave > path",
  d: [wave3, wave2, wave1, wave4, wave6, wave5],
  easing: "easeInOutQuad",
  duration: 16000,
  loop: true,
  direction: "alternate",
});
