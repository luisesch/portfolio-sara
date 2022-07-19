import { projects } from "./DATA.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

let project;

projects.forEach(function (selProject) {
  if (selProject.id === id) {
    project = selProject;
  }
});

document.getElementById("projectTitle").innerText = project.name;
document.getElementById("projectDescription").innerText = project.description;
document
  .getElementById("projectImg")
  .setAttribute("src", `./images/${project.mainImg}`);

const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");

project.images.forEach(function (img, index) {
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", `./images/${img}`);
  if (index % 3 === 0) {
    col3.appendChild(imgEl);
  } else if (index % 2 === 0) {
    col2.appendChild(imgEl);
  } else {
    col1.appendChild(imgEl);
  }
});
