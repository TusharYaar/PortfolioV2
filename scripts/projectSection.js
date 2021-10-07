var current_scroll_position = 0;
let available_scroll_width;
document.getElementById("all_projects_container").scrollWidth -
  window.innerWidth / 1.5;

function addProjectClickListener() {
  document.querySelectorAll(".project_container").forEach((element) => {
    element.addEventListener("click", function () {
      anime({
        targets: ["#project_preview_container", "#project_preview_background"],
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 300,
        begin: function () {
          document.getElementById("project_preview_container").style.display =
            "flex";
          document.getElementById("project_preview_background").style.display =
            "block";
          fillProjectPreview(parseInt(element.dataset.id));
        },
      });
    });
  });
}
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
    current_scroll_position +=
      document.querySelector(".project_container").clientWidth;
    current_scroll_position =
      current_scroll_position >= available_scroll_width
        ? available_scroll_width
        : current_scroll_position;
    document.getElementById("all_projects_container").scroll({
      left: current_scroll_position,
      behavior: "smooth",
    });
    document.getElementById("navigation_progress").style.width = `${
      (current_scroll_position * 100) / available_scroll_width
    }%`;
  });
document
  .getElementById("project_navigation_left")
  .addEventListener("click", () => {
    current_scroll_position -=
      document.querySelector(".project_container").clientWidth;
    current_scroll_position =
      current_scroll_position <= 0 ? 0 : current_scroll_position;
    document.getElementById("all_projects_container").scroll({
      left: current_scroll_position,
      behavior: "smooth",
    });
    document.getElementById("navigation_progress").style.width = `${
      (current_scroll_position * 100) / available_scroll_width
    }%`;
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

function appendProjects() {
  let all_project_container = document.getElementById("all_projects_container");
  projects.forEach((project, index) => {
    let element = project.getProjectThumbnail();
    element.dataset.id = index;
    all_project_container.appendChild(element);
  });
  available_scroll_width =
    document.getElementById("all_projects_container").scrollWidth -
    window.innerWidth / 1.5;
  addProjectClickListener();
}

function fillProjectPreview(index) {
  let project = projects[index];
  console.log(project);
  // document.getElementById("project_preview_title").innerHTML = project.title;
  // document.getElementById("project_preview_description").innerHTML =
  //   project.description;
  // document.getElementById("project_preview_image").src = project.image;
  // document.getElementById("project_preview_link").href = project.link;
}
