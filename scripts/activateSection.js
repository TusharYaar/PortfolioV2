var offsets = [];
var currentActiveSection = "name_section";
const sectionId_names = {
  name_section: "Home",
  about_section: "About",
  skills_section: "Skills",
  project_section: "Projects",
  contact_section: "Contact",
};

function getOffsets() {
  document.querySelectorAll("section").forEach((section) => {
    var obj = {};
    obj.id = section.id;
    obj.offset = section.offsetTop;
    obj.offsetBottom = section.offsetHeight + section.offsetTop;
    offsets.push(obj);
  });
  console.log(offsets);
}

document.addEventListener("scroll", function (e) {
  scrollValue = window.scrollY;
  for (var i = 0; i < offsets.length - 1; i++) {
    if (
      scrollValue >= offsets[i].offset - 20 &&
      scrollValue < offsets[i].offsetBottom
    ) {
      if (currentActiveSection != offsets[i].id) {
        currentActiveSection = offsets[i].id;
        changeSection();
      }
    }
  }
});

getOffsets();

function changeSection() {
  change_section_timeline.play();
}

change_section_timeline = anime.timeline({ autoplay: false });

change_section_timeline
  .add({
    targets: "#active_section",
    opacity: [1, 0],
    duration: 300,
    easing: "easeInOutQuad",
    translateY: [0, 20],
    complete: function (anim) {
      document.getElementById("active_section").innerHTML =
        sectionId_names[currentActiveSection];
    },
  })
  .add({
    targets: "#active_section",
    opacity: [0, 1],
    duration: 300,
    easing: "easeInOutQuad",
    translateY: [20, 0],
    complete: function (anim) {
      change_section_timeline.seek(0);
    },
  });
