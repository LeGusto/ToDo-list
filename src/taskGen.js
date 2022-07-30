import {makeElement as create} from './helpers.js';
import {compareAsc, parseISO} from 'date-fns';

const makeTask = function(title, description, priority, dueDate) {
    return {title, description, priority, dueDate};
}

function reorder() {
    const tasks = document.querySelector('.taskList');
    const DOM_el = Array.from(tasks.children);
    const dates = [];
    DOM_el.forEach((ch) => {
        dates.push(parseISO(ch.querySelector(("input[type = 'datetime-local']")).value));
    })

    dates.sort(compareAsc);
    const newOrder = [];

    dates.forEach((dt) => {
        let chosenInd = DOM_el.findIndex((a) => {
            console.log(DOM_el);
            let el_d = parseISO(a.querySelector("input[type = 'datetime-local']").value);
            return el_d.getTime() === dt.getTime();
        })
        console.log(chosenInd);
        let chosen = DOM_el[chosenInd];
        DOM_el.splice(chosenInd, 1);

        newOrder.push(chosen);
    })

    var child = tasks.lastElementChild;
    while (child) {tasks.removeChild(child);
    child = tasks.lastElementChild;
    console.log("removed")}

    newOrder.forEach((e) => {tasks.appendChild(e)});

}

function generateCard(...info) {
    const task = makeTask(info[0], info[1], info[2], info[3])
    const card = create('div', 'task');
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

    card.appendChild(left);
    card.appendChild(date);
    return card;
}

export {generateCard, reorder};


