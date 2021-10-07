var current_scroll_position = 0;
const available_scroll_width = document.getElementById(
  "all_projects_container"
).scrollWidth;
document.querySelectorAll(".project_container").forEach((element) => {
  element.addEventListener("click", function () {
    anime({
      targets: ["#project_preview_container", "#project_preview_background"],
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 300,
      begin: function (anim) {
        document.getElementById("project_preview_container").style.display =
          "flex";
        document.getElementById("project_preview_background").style.display =
          "block";
      },
    });
  });
});

document
  .getElementById("project_preview_background")
  .addEventListener("click", closeProjectPreview);

document
  .getElementById("close_preview_btn")
  .addEventListener("click", closeProjectPreview);
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    closeProjectPreview();
  }
});

document
  .getElementById("project_navigation_right")
  .addEventListener("click", () => {
    current_scroll_position += window.innerWidth / 1.5;
    current_scroll_position =
      current_scroll_position >=
      available_scroll_width - window.innerWidth / 1.5
        ? available_scroll_width - window.innerWidth / 1.5
        : current_scroll_position;
    document.getElementById("all_projects_container").scroll({
      left: current_scroll_position,
      behavior: "smooth",
    });
  });
document
  .getElementById("project_navigation_left")
  .addEventListener("click", () => {
    current_scroll_position -= window.innerWidth / 1.5;
    current_scroll_position =
      current_scroll_position <= 0 ? 0 : current_scroll_position;
    document.getElementById("all_projects_container").scroll({
      left: current_scroll_position,
      behavior: "smooth",
    });
  });
function closeProjectPreview() {
  anime({
    targets: ["#project_preview_container", "#project_preview_background"],
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInOutQuad",
    duration: 300,
    complete: function (anim) {
      document.getElementById("project_preview_container").style.display =
        "none";
      document.getElementById("project_preview_background").style.display =
        "none";
    },
  });
}
