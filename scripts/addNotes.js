document.querySelectorAll(".name_section_letter").forEach((element, index) => {
  element.addEventListener("mouseenter", () => {
    all_howls[index].play();
    console.log(all_howls[index]);
    appendNoteAnimation();
    appendNoteAnimation();
    if (randomInt(0, 2) == 1) {
      appendNoteAnimation();
    }
  });
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
