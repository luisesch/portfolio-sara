import { projects } from "./DATA.js";

let row;

projects.forEach(function (selProject, index) {
  if (index % 2 === 0) {
    row = document.createElement("div");
    row.setAttribute("class", "projects-row");
  }
  let link = document.createElement("a");
  link.setAttribute("href", `project.html?id=${selProject.id}`);
  link.setAttribute("class", "project-container");
  link.innerHTML = createProject(selProject);
  row.appendChild(link);
  if (index % 2 === 0) {
    let projectsSection = document.getElementById("projects");
    projectsSection.appendChild(row);
  }
});

function createProject(project) {
  return `<div class="project-background"></div>
          <div class="project-content">
            <h3 class="h3">${project.name}</h3>
            <div class="project-img">
              <img src="./images/${project.folder}/${project.mainImg.url}" alt="${project.mainImg.alt}"/>
            </div>
            <div class="project-info">
              <p>${project.location}</p>
              <p>${project.dates}</p>
            </div>
          </div>`;
}
