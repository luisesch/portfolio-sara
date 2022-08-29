import { projects } from "./DATA.js";

let id = getIdFromUrl();
let project = findProjectById(id);
if (project !== undefined) {
  fillInProjectContent(project);
  createImgGrid(project);
}

function getIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  return id;
}

function findProjectById(id) {
  for (const project of projects) {
    if (project.id === id) {
      return project;
    }
  }
}

function fillInProjectContent(project) {
  document.getElementById("projectTitle").innerText = project.name;
  document.getElementById("projectDescription").innerText = project.description;
  document
    .getElementById("projectImg")
    .setAttribute("src", `./images/${project.folder}/${project.mainImg.url}`);
  document
    .getElementById("projectImg")
    .setAttribute("alt", `${project.mainImg.alt}`);
}

function createImgGrid(project) {
  const col1 = document.getElementById("col1");
  const col2 = document.getElementById("col2");
  const col3 = document.getElementById("col3");

  let counter = 1;

  project.images.forEach(function (img) {
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", `./images/${project.folder}/${img.url}`);
    imgEl.setAttribute("alt", `${img.url.alt}`);
    if (counter === 1) {
      col1.appendChild(imgEl);
      counter++;
    } else if (counter === 2) {
      col2.appendChild(imgEl);
      counter++;
    } else {
      col3.appendChild(imgEl);
      counter = 1;
    }
  });
}
