const addNoteListener = () => {
  document
    .querySelectorAll(".name_section_letter")
    .forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        if (play_audio) {
          all_howls[index].play();
          appendNoteAnimation();
          appendNoteAnimation();
          if (randomInt(0, 2) == 1) {
            appendNoteAnimation();
          }
        }
      });
      element.classList.add("transition", "play_audio");
    });
  const appendNoteAnimation = () => {
    var icon = document.createElement("i");
    icon.classList.add("feather-music");
    icon.style.color = randomColor();
    document.body.appendChild(icon);
    anime({
      targets: icon,
      scale: {
        value: [0, randomFloat(0.8, 4)],
        duration: 300,
      },
      translateX: randomInt(0, 250),
      translateY: randomInt(-300, -650),
      opacity: {
        value: 0,
        duration: 1000,
        easing: "easeInOutQuad",
      },
      easing: "linear",
      duration: randomInt(3000, 6000),
      complete: function (anim) {
        icon.remove();
      },
    });
  };

  document.getElementById("play_pause_notes").addEventListener("click", (e) => {
    play_audio = !play_audio;
    document.querySelectorAll(".name_section_letter").forEach((element) => {
      play_audio
        ? element.classList.add("play_audio")
        : element.classList.remove("play_audio");
    });
    anime({
      targets: document.getElementById("play_pause_notes"),
      rotate: play_audio ? [0, 720] : [720, 0],
      duration: 500,
      easing: "easeInOutQuad",
      update: function (anim) {
        if (anim.progress > 70) {
          document.getElementById("play_pause_notes").innerHTML = `<i class=" ${
            play_audio ? "feather-stop-circle" : "feather-play-circle"
          }"></i>`;
        }
      },
    });
  });
};
