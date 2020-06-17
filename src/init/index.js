import {oInput, btn, render, personArr} from '../index.js';
import filterSex from '../filter/filterSex.js';
import filterText from '../filter/filterText.js';
import list from '../filter/index.js';
import store from '../store/index.js';
import {createFilterAction} from '../store/action/index.js'
let prev = 2
function initTextFilter() {
    oInput.oninput = function(e) {
        let text = e.target.value;
        store.dispatch(createFilterAction({
            text
        }))
        const state = store.getState()
        render(list(filterText(personArr, state.text), state));

    }
}

function initSexFilter() {
    const oBtn = Array.from(btn);
    oBtn.forEach((item, index) => {
        item.onclick = function(e) {
            changeClass(index);
            let sex = e.target.getAttribute('sex');
            store.dispatch(createFilterAction({
                sex
            }))
            const state = store.getState();
            render(list(filterSex(personArr, state.sex), state))
        }
    });
}

//变化的class
function changeClass(index) {
    prev !== undefined && (btn[prev].className = 'btn');
    btn[index].className += ' active';
    prev = index 
}

function init(){
    initTextFilter();
    initSexFilter();
}

export default init;