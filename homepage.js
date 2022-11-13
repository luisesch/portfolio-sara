import { projects, dates } from "./DATA.js";

insertProjects();
insertDates();

function insertProjects() {
  let row;
  projects.forEach(function (selProject, index) {
    if (index % 2 === 0) {
      row = createRow();
    }
    let link = createLink(selProject);
    link.innerHTML = createProject(selProject);
    row.appendChild(link);
    if (index % 2 === 0) {
      let projectsSection = document.getElementById("projects");
      projectsSection.appendChild(row);
    }
  });
}

function createRow() {
  let row = document.createElement("div");
  row.setAttribute("class", "projects-row");
  return row;
}

function createLink(project) {
  let link = document.createElement("a");
  link.setAttribute("href", `project.html?id=${project.id}`);
  link.setAttribute("class", "project-container");
  return link;
}

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

function insertDates() {
  dates.forEach(function (selDate) {
    let date = createDate(selDate);
    let dateList = document.getElementById("dateList");
    dateList.appendChild(date);
  });
}

function createDate(date) {
  let dateLi = document.createElement("li");
  dateLi.innerHTML = `<li>
                      <p>${date.date}</p>
                      <p>${date.title}</p>
                      <p>${date.location}</p>
                    </li>`;
  return dateLi;
}
