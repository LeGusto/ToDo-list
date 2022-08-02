import { add } from 'date-fns';
import {makeElement as create} from './helpers.js';
import {show, form_prompt} from './layoutBuilder';
const projects = [];
let cur_project = undefined;

const genProject = function(name, desc, ele) {
    const html_ele = ele;
    const tasks = [];
    return {tasks, name, desc, html_ele};
}

function update_display()
{
    cur_project = undefined;
    const taskList = document.querySelector('.taskList');
    projects.forEach((p) => {
        let descs = p.html_ele.querySelector(".project_description");
        let child = descs.lastElementChild;
        while (child) {
            descs.removeChild(child);
            child = descs.lastElementChild;
        }
        p.tasks.forEach((obj) => {
            let info = create('div', 'project_title_desc');
            info.textContent = obj.title;
            info.classList.add(obj.priority);
            p.html_ele.querySelector(".project_description").appendChild(info);
        })
    })
}

function on_click(project_a, b) {
    b.addEventListener('click', (e) => {
        cur_project = project_a;
        form_prompt();
    })
}

function makeProject(name) {
    const container = document.querySelector('.project_container');
    const project = create('div', 'project');
    const project_obj = genProject(name, "name", project);

    const h1 = create('h1', 'project_title');

    h1.textContent = project_obj.name;
    const desc = create('div', 'project_description');

    const add_b = create('button', 'project_add');
    on_click(project_obj, add_b);



    project.appendChild(h1);
    project.appendChild(desc);
    project.appendChild(add_b);


    container.appendChild(project);
    projects.push(project_obj);
}

export {makeProject, cur_project as project, update_display};