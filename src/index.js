import './style.css';
import { navigation, genButton } from './layoutBuilder';
import { makeElement as create } from './helpers';
import { generateCard } from './taskGen';

const doc = document;

const container = create('div', 'container');
doc.body.appendChild(container);

const base = create('div', 'base');
container.appendChild(base);

const title = create('h1', 'title');
title.textContent = "To-Do list";
base.appendChild(title);

const middle = create('div', 'middle');
base.appendChild(middle)

middle.appendChild(navigation());
middle.appendChild(create('div', 'bar2'));
const taskList = create('div', 'taskList');
middle.appendChild(taskList);

/*taskList.appendChild(generateCard("Homework","Math and chemistry","high"));
taskList.appendChild(generateCard("Homework","Math and chemistry","medium"));
taskList.appendChild(generateCard("Homework","Math and chemistry","low"));*/

const bottom = create('div', 'bottom');
base.appendChild(bottom);

bottom.appendChild(genButton());



