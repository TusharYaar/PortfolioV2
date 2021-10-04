anime({
  targets: "#photo_blob > path",
  fill: "#FAA307",
  d: blob,
  easing: "easeInOutQuad",
  duration: 8000,
  loop: true,
  direction: "alternate",
});

anime({
  targets: "#skills_transition_wave > path",
  d: wave,
  easing: "easeInOutQuad",
  duration: 24000,
  loop: true,
  direction: "alternate",
});

anime({
  targets: "#contact_transition_wave > path",
  d: topWave,
  easing: "easeInOutQuad",
  duration: 24000,
  loop: true,
  direction: "alternate",
});
