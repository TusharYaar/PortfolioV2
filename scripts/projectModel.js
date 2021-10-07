class Project {
  constructor() {
    this.title = title;
    this.type = type;
    this.completed_in = completed_in;
    this.coffee_required = coffee_required;
    this.description = description;
    this.number_of_images = number_of_images;
    this.web_link = web_link;
    this.github_link = github_link;
    this.playstore_link = playstore_link;
  }

  getProjects() {
    let container = document.createElement("div");
    container.className = "project_container";
  }
}

{
  /* <div class="project_container">
<div class="project"></div>
</div>
<div class="project_container">
<div class="project"></div>
</div>
<div class="project_container">
<div class="project"></div>
</div>
<div class="project_container">
<div class="project"></div>
</div> */
}
