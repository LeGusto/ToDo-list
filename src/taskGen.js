import {makeElement as create, storageAvailable} from './helpers.js';
import {compareAsc, parseISO} from 'date-fns';
import { remove_task, update_display, addTask } from './projects.js';
import { deduct_task, plus_task, show } from './layoutBuilder.js';
import { el } from 'date-fns/locale';

let tasks = [];

if (storageAvailable('localStorage')) {
    let prs = JSON.parse(localStorage.getItem("tasks"));
    if (prs !== null) {
    let waiter = setInterval(function() {
        if (document.querySelector('.taskList') !== null) {
            clearInterval(waiter);
            prs.forEach((p) => {

                let card = generateCard(p.title, p.description, p.priority, p.dueDate, p.project);
                document.querySelector('.taskList').appendChild(card);
                plus_task();
                if (p.project !== undefined) {
                    let proj = addTask({title: p.title, description: p.description, priority: p.priority, dueDate: p.dueDate, html_ele: card, project: p.project});
                    let chosen_task = tasks.find((a) => a.html_ele === card);
                    chosen_task.project = proj;
                }
                show("Home");

                
            })
            
        }
        
    }, 100);
}
}


const makeTask = function(title, description, priority, dueDate, project, html_ele) {
    return {title, description, priority, dueDate, project, html_ele};
}

function reorder() {
    const tasks = document.querySelector('.taskList');
    const DOM_el = Array.from(tasks.children);
    const dates = [];
    DOM_el.forEach((ch) => {
        dates.push(parseISO(ch.querySelector(("input[type = 'datetime-local']")).value));
    })

    dates.sort((a, b) => {
        if (a.getTime() > b.getTime()) {return 1;}
        else return -1;
    });
    const newOrder = [];

    dates.forEach((dt) => {
        let chosenInd = DOM_el.findIndex((a) => {
            let el_d = parseISO(a.querySelector("input[type = 'datetime-local']").value);
            return el_d.getTime() === dt.getTime();
        })
        let chosen = DOM_el[chosenInd];
        DOM_el.splice(chosenInd, 1);
 

        newOrder.push(chosen);
    })

    var child = tasks.lastElementChild;
    while (child) {tasks.removeChild(child);
    child = tasks.lastElementChild;}

    newOrder.forEach((e) => {tasks.appendChild(e)});

}

function generateCard(...info) {
    const card = create('div', 'task');
    const task = makeTask(info[0], info[1], info[2], info[3], info[4], card);
    const title = create('h2', 'task_title');
    title.textContent = task.title;

    const desc = create('div', 'desc');
    desc.textContent = task.description;
    const date = document.createElement('input');
    date.type = 'datetime-local';
    date.value = task.dueDate;

    const left = create('div', 'left');
    left.appendChild(title);
    left.appendChild(desc)

    card.classList.add(task.priority);

    const destroy = create('div', 'destruction');
    destroy.addEventListener('click', (e) => {
        if (task.project !== undefined) {
            remove_task(task, task.project);
        }
        card.parentElement.removeChild(card);
        deduct_task();

        tasks.splice(tasks.findIndex((a) => a.html_ele === task.html_ele), 1)
        let false_t = tasks;
            false_t.forEach((a) => {
                if (a.project !== undefined && typeof(a.project) !== 'number'){
                    console.log(typeof(a.project));
                    a.project = a.project.num;
                }
            })

        localStorage.setItem("tasks", JSON.stringify(false_t));
    });
   tasks.push(task);
   let false_t = tasks;
    false_t.forEach((a) => {
        if (a.project !== undefined && typeof(a.project) !== 'number'){

            a.project = a.project.num;
        }
    })

   localStorage.setItem("tasks", JSON.stringify(false_t));


    card.appendChild(destroy);
    card.appendChild(left);
    card.appendChild(date);
    return card;
}

export {generateCard, reorder, makeTask};


