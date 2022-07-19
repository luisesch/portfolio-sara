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
