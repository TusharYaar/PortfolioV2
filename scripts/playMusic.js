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

  // { note: "C8", delay: 1000 },
];

let temp = anime.timeline({ autoplay: false });

seq.forEach(({ note, delay }) => {
  temp.add(
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

const playMusic = () => {
  temp.res;
};
