const addNoteListener = () => {
  document.querySelectorAll(".name_section_letter").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      if (!currently_playing) {
        let note = element.id.split("_")[1];
        all_howls[note].play();
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
    var musicNote = document.createElement("i");
    musicNote.classList.add("feather-music");
    musicNote.style.color = randomColor();
    document.body.appendChild(musicNote);
    anime({
      targets: musicNote,
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
        musicNote.remove();
      },
    });
  };
};
