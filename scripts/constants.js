document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0;

var play_audio = true;
var initial_timeline = anime.timeline();
all_howls = [
  new Howl({
    src: ["./assests/sounds/C3.mp3"],
  }),
  new Howl({
    src: ["./assests/sounds/D3.mp3"],
  }),
  new Howl({
    src: ["./assests/sounds/E3.mp3"],
  }),
  new Howl({
    src: ["./assests/sounds/F3.mp3"],
  }),
  new Howl({
    src: ["./assests/sounds/G3.mp3"],
  }),
  new Howl({
    src: ["./assests/sounds/A3.mp3"],
  }),
  new Howl({
    src: ["./assests/sounds/B3.mp3"],
  }),
  new Howl({
    src: ["./assests/sounds/C4.mp3"],
  }),
];

const randomInt = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const randomFloat = (min = 0, max = 100) => {
  return Math.random() * (max - min) + min;
};
const randomColor = () => {
  return `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomFloat(0.5, 1)})`;
};
