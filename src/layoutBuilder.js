import {makeElement as create} from './helpers.js';
import {generateCard, reorder} from './taskGen.js';
import {parseISO} from 'date-fns';

function gen(parent, ...args) {
    args.forEach((arg) => {
        let capsule = document.createElement('li');

        let b = create('button', 'menu');
        let text = create('div', 'text');
        text.textContent = arg;
        b.appendChild(text);
        capsule.appendChild(b);
        capsule.appendChild(create('div', 'button-bg'));
        parent.appendChild(capsule);

        b.addEventListener('click', (e) => {
            const taskList = document.querySelector(".taskList");
            const today = new Date();
            if (arg === "Today") {
                for (let i = 0; i<Array.from(taskList.children).length; i++) {
                    let date = parseISO(taskList.children[i].querySelector("input[type = 'datetime-local']").value);
                    if (today.getDate() !== date.getDate()) {taskList.children[i].classList.add('hidden');}
                    else {taskList.children[i].classList.remove('hidden');}
                }
            }
            else if (arg === "This week") {
                for (let i = 0; i<Array.from(taskList.children).length; i++) {
                    let maxW = today.getTime()+((7-today.getDay())*24*60*60*1000);
                    let minW = today.getTime()-((today.getDay())*24*60*60*1000);

                    function check(sDate) {
                        if (sDate.getTime() > minW && sDate.getTime() < maxW) {return false;}
                        return true; 
                    }

                    let date = parseISO(taskList.children[i].querySelector("input[type = 'datetime-local']").value);
                    if ((today.getFullYear() !== date.getFullYear()) || today.getMonth() !== date.getMonth() || check(date)) {taskList.children[i].classList.add('hidden');}
                    else {taskList.children[i].classList.remove('hidden');}
                }
            }
            else if (arg === "This month") {
                for (let i = 0; i<Array.from(taskList.children).length; i++) {
                    let date = parseISO(taskList.children[i].querySelector("input[type = 'datetime-local']").value);
                    if (today.getFullYear() !== date.getFullYear() || today.getMonth() !== date.getMonth()) {taskList.children[i].classList.add('hidden');}
                    else {taskList.children[i].classList.remove('hidden');}
                }
            }
            else {
                for (let i = 0; i<Array.from(taskList.children).length; i++) {
                taskList.children[i].classList.remove('hidden');
            }}

        })
    })
}

function makeB(name) {
    let b1 = create('button', 'menu');
    let text = create('div', 'text');
        text.textContent = name;
    b1.appendChild(text);
    b1.appendChild(create('div', 'button-bg'));
    return b1;
}

function navigation() {
    const nav = create('nav', 'navigator');

    let bar = create('div', 'bar');
    let bar2 = create('div', 'bar');

    let b1 = makeB('Home');

    let desc = create('div', 'tasks');
    desc.textContent = "Tasks";

    let bundler = create('ul', 'date_options');
    gen(bundler, "Today", "This week", "This month", "All");
    desc.appendChild(bundler);

    let b2 = makeB('Projects')

    let buts = [b1, bar, b2, bar2, desc];
    buts.forEach((b) => {nav.appendChild(b)});

    return nav;
}

function genForm() {

    function makeInput(type, text, idd, par) {
        const inp = document.createElement('input');
        inp.type = type;
        inp.id = idd
        const label = document.createElement('label');
        label.for = idd;
        label.textContent = text;

        par.appendChild(label);
        par.appendChild(inp);
        return inp;
    }

    const form = create('form', 'form');
    const field = create('fieldset', 'fieldset');
    const legend = create('legend', 'legend');
    legend.textContent = "Task details";
    form.appendChild(field);
    field.appendChild(legend);
    let title = makeInput("text", "Title", "Title", field);
    title.placeholder = "Cool title";
    title.required = true;
    
    const inp = document.createElement('textarea');
    inp.rows = 8;
    inp.id = 'desc';
    inp.placeholder = "This task is very cool and important";

        const label = document.createElement('label');
        label.for = 'desc';
        label.textContent = "Description";

        field.appendChild(label);
        field.appendChild(inp);

    const radio_field = create('fieldset', 'radio');

    const priorities = ["High", "Medium", "Low"];
    const boxes = [];
    const radio_legend = create('legend', 'radio_legend');
    radio_legend.textContent = "Priority";
    radio_field.appendChild(radio_legend);

    const date = makeInput("datetime-local", "Date", "Date", field);
    date.required = true;

    priorities.forEach((pr) => {
        const divi = create('div', 'form_s');
        const inp = document.createElement('input');
        inp.type = "radio";
        inp.id = pr;
        inp.name = "priorities"
        const label = document.createElement('label');
        label.for = pr;
        label.textContent = pr;
        divi.appendChild(label);
        divi.appendChild(inp);
        radio_field.appendChild(divi);
        boxes.push(inp);

        if (pr === "Medium") {inp.checked = true;}
    })
    field.appendChild(radio_field)


    const button_div = create('div', 'form_buttons');

    const submit = create('button', 'submit');
    submit.type = "button";
    submit.textContent = "✓";

    const destroy = create('button', 'destroy');
    destroy.type = "button";
    destroy.textContent = "X";

    [destroy, submit].forEach((b) => {
        b.addEventListener('click', () => {
            let stop = false;
            [title, date].forEach((inpu) => {
                if (!inpu.checkValidity()) {inpu.reportValidity(); stop = true;}
            })
            if (stop) {return;}

            let prio = "Medium";
            boxes.forEach((ch) => {
                if (ch.checked) {prio = ch.id;}
            })
            const time = date.value;
            document.querySelector('.taskList').appendChild(generateCard(title.value, desc.value, prio.toLowerCase(), time))
            document.querySelector(".base").classList.remove("hidden");
            document.querySelector(".container").removeChild(form);
            reorder();
        })
    })

    button_div.appendChild(submit);
    button_div.appendChild(destroy);
    field.appendChild(button_div);
    return form;

} 

function genButton() {
    const form = genForm();
    const add = create('button', 'add');
    add.textContent = '+';
    add.addEventListener('click', () => {
        
            document.querySelector(".base").classList.add("hidden");
            document.querySelector(".container").appendChild(form);
    })
    return add;
}

export {navigation, genButton};