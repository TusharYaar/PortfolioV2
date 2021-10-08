class Project {
  constructor(
    title,
    type,
    completed_in,
    completed_on,
    coffee_required,
    team_size,
    description,
    number_of_images,
    web_link,
    playstore_link,
    github_link
  ) {
    this.title = title;
    this.type = type;
    this.completed_in = completed_in;
    this.completed_on = completed_on;
    this.coffee_required = coffee_required;
    this.description = description;
    this.number_of_images = number_of_images;
    this.web_link = web_link;
    this.playstore_link = playstore_link;
    this.github_link = github_link;
  }

  getProjectThumbnail() {
    let container = document.createElement("div");
    container.className = "project_container";
    let project = document.createElement("div");
    project.className = "project";
    let project_title = document.createElement("h3");
    project_title.innerText = this.title;
    let project_type = document.createElement("h4");
    project_type.innerText = this.type;
    project.appendChild(project_title);
    project.appendChild(project_type);
    container.appendChild(project);
    return container;
  }
}
