const seq = [
  { note: "D", delay: 0 },
  { note: "F", delay: 400 },
  { note: "D", delay: 400 },
  { note: "D", delay: 200 },

  { note: "F", delay: 400 },
  { note: "D", delay: 400 },
  { note: "D", delay: 200 },

  { note: "F", delay: 400 },
  { note: "D", delay: 400 },
  { note: "E", delay: 200 },
  { note: "D", delay: 400 },
  { note: "C", delay: 400 },
  { note: "D", delay: 200 },
  { note: "F", delay: 400 },
  { note: "D", delay: 400 },
  { note: "D", delay: 200 },

  { note: "F", delay: 400 },
  { note: "D", delay: 400 },
  { note: "D", delay: 200 },

  { note: "F", delay: 400 },
  { note: "D", delay: 400 },
  { note: "E", delay: 200 },
  { note: "D", delay: 400 },
  { note: "C", delay: 400 },
];
var currently_playing = false;
let music_wave = anime({
  targets: "#music_wave> path",
  d: musicWave,
  easing: "easeInOutQuad",
  duration: 2000,
  loop: true,
  autoplay: false,
  direction: "alternate",
});
let music_timeline = anime.timeline({
  autoplay: false,
  complete: () => {
    anime({
      targets: "#play_music",
      rotate: currently_playing ? 0 : 360,
      duration: 300,
      update: (anim) => {
        if (anim.progress > 70) {
          changePlayingIcon();
          endMusic();
        }
      },
    });
  },
});
let takeover_timeline = anime.timeline({
  autoplay: false,
  complete: () => {
    music_timeline.play();
    music_wave.play();
  },
});

takeover_timeline.add({
  targets: "#takeover_container",
  opacity: 1,
  duration: 500,
  easing: "easeInOutQuad",
  translateY: [-50, 0],
  begin: () => {
    document.getElementById("takeover_container").style.display = "flex";
  },
  complete: () => {
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("music_wave").style.display = "block";
    document.getElementById("music_wave").style.opacity = 1;
  },
});
takeover_timeline.add({
  targets: "#takeover_text",
  opacity: [0, 1],
  duration: 500,
  easing: "easeInOutQuad",
  translateY: [-50, 0],
});
takeover_timeline.add(
  {
    targets: ".takeover_countdown",
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutQuad",
    translateX: [-20, 0],
    delay: function (el, i) {
      return i * 1000;
    },
  },
  "+=1000"
);
takeover_timeline.add({
  targets: "#takeover_container",
  opacity: 0,
  translateY: [0, 50],
  duration: 500,
  easing: "easeInOutQuad",
  complete: () => {
    document.getElementById("takeover_container").style.display = "none";
  },
});

document.getElementById("play_music").addEventListener("click", () => {
  currently_playing ? endMusic() : playMusic();
  anime({
    targets: "#play_music",
    rotate: currently_playing ? 0 : 360,
    duration: 300,
    update: (anim) => {
      if (anim.progress > 70) changePlayingIcon();
    },
  });
});

seq.forEach(({ note, delay }) => {
  music_timeline.add(
    {
      targets: `#note_${note}`,
      translateY: "-20",
      duration: 100,
      begin: () => {
        anime.set(`#note_${note}`, { color: "#FFFFFF" });
        all_howls[note].play();
      },
      complete: () => {
        anime.set(`#note_${note}`, {
          translateY: "0",
          color: "#0077b6",
        });
      },
    },
    `+=${delay}`
  );
});

function playMusic() {
  currently_playing = true;
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  takeover_timeline.play();
}

function endMusic() {
  currently_playing = false;
  music_timeline.pause();
  music_timeline.seek(0);
  takeover_timeline.seek(0);
  anime({
    targets: "#music_wave",
    opacity: 0,
    translateY: -100,
    easing: "easeInOutQuad",
    duration: 500,
    complete: () => {
      document.getElementById("music_wave").removeAttribute("style");
      document.querySelectorAll(".name_section_letter").forEach((el) => {
        el.removeAttribute("style");
      });
      document.getElementById("body").style.overflow = "auto";
    },
  });
}

function changePlayingIcon() {
  if (currently_playing) {
    document.getElementById(
      "play_music"
    ).innerHTML = ` <i class="feather-stop-circle"></i>`;
  } else {
    document.getElementById(
      "play_music"
    ).innerHTML = ` <i class="feather-play-circle"></i>`;
  }
}
