document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0;

var play_audio = true;
var initial_timeline = anime.timeline();
var about_section_timeline = anime.timeline({ autoplay: false });
var about_section_timeline_play = false;
var skills_section_timeline = anime.timeline({ autoplay: false });
var skills_section_timeline_play = false;
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

const blob1 =
  "M32.4,-55.7C37.5,-40.8,34.3,-25.4,36.6,-13.1C38.9,-0.9,46.6,8.4,50,21.9C53.3,35.4,52.4,53.1,43.3,56.4C34.3,59.7,17.1,48.5,3.8,43.3C-9.6,38.1,-19.1,38.8,-25.1,34.5C-31.1,30.2,-33.4,20.9,-41.4,10.2C-49.4,-0.6,-63.1,-12.8,-61.4,-20.5C-59.7,-28.3,-42.6,-31.6,-29.7,-44.1C-16.9,-56.6,-8.5,-78.2,2.6,-81.7C13.6,-85.2,27.2,-70.6,32.4,-55.7Z";

const blob2 =
  "M22.5,-35.1C28.7,-26.6,32.8,-19.3,39.6,-10.1C46.5,-0.9,56.2,10.3,57,21.8C57.8,33.4,49.7,45.4,38.8,54.7C27.8,64,13.9,70.5,1.7,68.2C-10.5,65.9,-21,54.7,-33.5,45.9C-46,37.1,-60.4,30.7,-59.6,22C-58.9,13.3,-43,2.2,-34.9,-7.8C-26.7,-17.8,-26.3,-26.7,-21.8,-35.8C-17.3,-44.8,-8.6,-53.9,-0.2,-53.6C8.2,-53.3,16.4,-43.6,22.5,-35.1Z";
const blob3 =
  "M20.4,-25C30.5,-20.9,45.3,-20.2,53.9,-13C62.5,-5.8,64.8,8,64.2,24.3C63.6,40.5,60.1,59.2,48.9,65.6C37.7,72,18.9,66,6.5,57.1C-5.9,48.1,-11.8,36.2,-22.9,29.8C-34.1,23.5,-50.6,22.6,-59.1,14.9C-67.6,7.1,-68.1,-7.6,-64.1,-21.1C-60.1,-34.6,-51.6,-46.9,-40.1,-50.6C-28.7,-54.2,-14.3,-49.2,-4.6,-42.9C5.2,-36.7,10.4,-29.1,20.4,-25Z";
const blob4 =
  "M35.6,-45.7C49.7,-38.7,67.2,-33.1,73.4,-22C79.6,-10.8,74.5,5.9,64.8,16.5C55,27.1,40.6,31.5,29,40.7C17.5,49.8,8.7,63.6,-2.7,67.3C-14.1,71.1,-28.3,64.7,-38,55C-47.7,45.2,-52.9,32.1,-61.2,17.4C-69.4,2.7,-80.6,-13.6,-74.2,-21.2C-67.7,-28.8,-43.5,-27.7,-28.2,-34.3C-12.9,-40.9,-6.5,-55.1,2.1,-58C10.7,-61,21.5,-52.7,35.6,-45.7Z";
