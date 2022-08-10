import { add, parseJSON } from 'date-fns';
import {makeElement as create, storageAvailable} from './helpers.js';
import {show, form_prompt, deduct_task} from './layoutBuilder';
let projects = [];
let counter = 0;

if (storageAvailable('localStorage')) {
    let prs = JSON.parse(localStorage.getItem("projects"));
    if (prs !== null) {


    let waiter = setInterval(function() {
        if (document.querySelector('.project_container') !== null) {
            clearInterval(waiter);
            prs.forEach((p) => {                
                    makeProject(p.name, p.num);
                
            })
            show("Home");
            
        }
        
    }, 100);

    if (JSON.parse(localStorage.getItem("counter")) !== null) {
        counter = JSON.parse(localStorage.getItem("counter"));
    }
}
}

const p_form = genForm();
let cur_project = undefined;
let total_projects = 0;


function watch_changes(obj) {
    const parent = obj.html_ele.parentNode;

    function callback(mutationList, observer) {
        console.log("changed");
        mutationList.forEach((mutation) => {
          if (mutation.type === "childList") {
            if (mutation.removedNodes.length > 0 && mutation.removedNodes[0] === obj.html_ele) {
                obj.html_ele = "gone";
                observer.disconnect();
                console.log("removed");
            }
          }
        });
      }

    const observer = new MutationObserver(callback);
    observer.observe(parent, {childList: true});
}




function genForm() {
    const form = create('form', 'project_data');
    const label = create('label', 'project_name');
    label.textContent = "Title";
    const inp = create('input', 'project_name_inp');
    label.for = "p_name";
    inp.id = "p_name";
    inp.name = 'project_title';
    inp.required = true;
    inp.maxLength = 20;

    const submitter = create('button', 'project_name_submit');
    submitter.type = "button";

    submitter.addEventListener('click', (e) => {
        if (!inp.checkValidity()) { inp.reportValidity(); return; }

        document.querySelector(".base").classList.remove("hidden");
        document.querySelector(".container").removeChild(p_form);
        makeProject(inp.value);
        document.querySelector(".project_container").appendChild(document.querySelector(".add_project"));
        form.reset();
    })

    form.appendChild(label);
    form.appendChild(inp);
    form.append(submitter);
    return form;



}

function remove_task(task, project) {
    project.tasks.forEach((e) => {
        if (task.title === e.title && task.desc === e.desc &&
             task.priority === e.priority && task.dueDate === e.dueDate
             )
              {
                console.log(project.tasks.findIndex(o => e === o));
                project.tasks.splice(project.tasks.findIndex(o => e === o), 1);
                update_display();
        }
    })
}

const genProject = function(name, desc, ele, numb) {
    const html_ele = ele;
    total_projects += 1;
    let num;
    if (numb !== undefined) {
        num = numb;
    }
    else
    {
        num = counter;
        counter += 1;
    }

    localStorage.setItem("counter", JSON.stringify(counter));
    const tasks = [];
    return {tasks, name, desc, html_ele, num};
}

function update_display()
{
    cur_project = undefined;
    const taskList = document.querySelector('.taskList');
    projects.forEach((p) => {
        let max = 3;

        let descs = p.html_ele.querySelector(".project_description");
        let child = descs.lastElementChild;
        while (child) {
            descs.removeChild(child);
            child = descs.lastElementChild;
        }
        p.tasks.sort((a, b) => {
            if (a.dueDate > b.dueDate) {return 1;}
            else {return -1;}
        })
        p.tasks.forEach((obj) => {
            if (max === 0) {return;}
            else {max -= 1;}
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

function addTask(task) {
    let search = projects.find(a => {
        return task.project === a.num;
    });
    if (search !== undefined) {
       search.tasks.push(task);
       update_display();
       return search;
    }
}

function makeProject(name, num) {
    const container = document.querySelector('.project_container');
    const project = create('div', 'project');
    const project_obj = genProject(name, "name", project, num);
    const destroy_project = create('button', 'destroy_project');

    const h1 = create('h1', 'project_title');

    h1.textContent = project_obj.name;
    const desc = create('div', 'project_description');

    const add_b = create('button', 'project_add');
    on_click(project_obj, add_b);

    desc.addEventListener('click', (e) => {
        cur_project = project_obj;
        show("project_tasks");
        cur_project = undefined;
    })

    destroy_project.addEventListener('click', (e) => {
        project_obj.tasks.forEach((task) => {
            document.querySelector('.taskList').removeChild(task.html_ele);
            deduct_task();
        })
        container.removeChild(project);
        total_projects -= 1;
        projects.splice(projects.findIndex((a) => {

            return a.html_ele === project;
        }), 1)
        let false_p = projects;
        false_p.forEach((b) => {
            b.tasks = [];
        })
        
        localStorage.setItem("projects", JSON.stringify(false_p));
    })



    project.appendChild(destroy_project);
    project.appendChild(h1);
    project.appendChild(desc);
    project.appendChild(add_b);


    container.appendChild(project);
    projects.push(project_obj);
    let false_p = projects;
    false_p.forEach((b) => {
        b.tasks = [];
    })
    
    localStorage.setItem("projects", JSON.stringify(false_p));

}

export {p_form, makeProject, cur_project as project, update_display, remove_task, total_projects, addTask};