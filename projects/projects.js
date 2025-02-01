import { fetchJSON, renderProjects } from '../global.js';

const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');

renderProjects(projects, projectsContainer, 'h3');

const projectTitle = document.querySelector(".projects-title");
projectTitle.innerHTML = `<h1>${projects.length} Projects</h1>`