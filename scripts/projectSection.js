var current_scroll_position = 0;
let available_scroll_width;
let preview_timeline = anime.timeline({ autoplay: false });
preview_timeline.add({
  targets: ".project_details_row",
  translateX: [-40, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 300,
  delay: function (el, i) {
    return i * 100;
  },
});
preview_timeline.add({
  targets: ".project_detail_value > div",
  width: ["0%", "100%"],
  duration: 700,
  easing: "easeInOutQuad",
  delay: function (el, i) {
    return i * 70;
  },
});
preview_timeline.add({
  targets: ".project_detail_value > span",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 10,
});

preview_timeline.add({
  targets: ".project_detail_value > div",
  width: ["100%", "0%"],
  duration: 700,
  left: "100%",
  easing: "easeInOutQuad",
  delay: function (el, i) {
    return i * 100;
  },
});
preview_timeline.add({
  targets: "#avalible_on_container > h4",
  translateX: [-40, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 300,
});
preview_timeline.add({
  targets: "#avalible_on > p",
  translateY: [-40, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 300,
  delay: function (el, i) {
    return i * 100;
  },
});
preview_timeline.add({
  targets: "#about_project_container > h4",
  translateX: [-40, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 300,
});
preview_timeline.add({
  targets: "#project_description",
  translateY: [-40, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 300,
});

//
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
        complete: () => {
          preview_timeline.play();
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
      preview_timeline.restart(0);
      preview_timeline.pause();
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
  document.getElementById("project_title_value").innerText = project.title;
  document.getElementById("project_type_value").innerText = project.type;
  document.getElementById("project_completed_on_value").innerText =
    project.completed_on;
  document.getElementById("project_coffee_value").innerText =
    project.coffee_required;

  document.getElementById("web_link").innerHTML = project.web_link
    ? ` <a href="${project.web_link}" target="_blank"> Web <i class="feather-external-link"></i></a>`
    : "";

  document.getElementById("playstore_link").innerHTML = project.playstore_link
    ? `<a href="${project.playstore_link}" target="_blank"> Playstore <i class="feather-external-link"></i></a>`
    : "";

  document.getElementById("github_link").innerHTML = project.github_link
    ? `<a href="${project.github_link}" target="_blank"> Source Code on Github <i class="feather-external-link"></i></a>`
    : "";

  document.getElementById("project_description").innerText =
    project.description;

  // document.getElementById("project_preview_image").src = project.image;
  // document.getElementById("project_preview_link").href = project.link;
}
