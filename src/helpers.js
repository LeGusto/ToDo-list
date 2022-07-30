function makeElement(type, cl) {
    let el = document.createElement(type);
    el.classList.add(cl);
    return el;
}

export {makeElement};